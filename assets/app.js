(() => {
  const COLORS = { REF: 'var(--ref)', A: 'var(--A)', B: 'var(--B)', C: 'var(--C)' };
  const $ = s => document.querySelector(s);
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const audio = new Audio(); audio.preload = 'none';
  let setState = null;

  function play(url, onState) {
    if (audio.getAttribute('src') === url && !audio.paused) { audio.pause(); return; }
    if (setState) setState(false);
    setState = onState;
    if (audio.getAttribute('src') !== url) audio.src = url; else if (audio.ended) audio.currentTime = 0;
    audio.play().catch(() => {});
  }
  audio.addEventListener('play', () => setState && setState(true));
  audio.addEventListener('pause', () => setState && setState(false));
  audio.addEventListener('ended', () => setState && setState(false));

  function gap(data, id) {
    const g = data.samples.filter(s => s.models[id] && s.models[id].status === 'success')
      .map(s => Math.abs(s.models[id].duration_seconds - s.reference_duration_seconds));
    return g.reduce((a, b) => a + b, 0) / (g.length || 1);
  }

  function render(data) {
    const rows = data.models.map(m => ({ m, g: gap(data, m.id) }));
    const max = Math.max(...rows.map(r => r.g)) * 1.1 || 1;
    $('#durChart').innerHTML = rows.map(r => `<div class="bar" style="--c:${COLORS[r.m.id]}">
      <div class="name"><b>${esc(r.m.name)}</b> · ${esc(r.m.label)}<p>${esc(r.m.description || '')}</p></div>
      <div class="track"><div class="fill" data-w="${(r.g / max * 100).toFixed(1)}"></div></div>
      <div class="v">${r.g.toFixed(2)}s</div></div>`).join('');
    setTimeout(() => document.querySelectorAll('.fill').forEach(f => f.style.width = f.dataset.w + '%'), 60);

    $('#tbl thead').innerHTML = `<tr><th>#</th><th>Sentence</th><th>Original<span class="hd">${esc(data.reference_short || 'Human reference recording')}</span></th>${data.models.map(m => `<th>${esc(m.name)}<span class="hd">${esc(m.short || '')}</span></th>`).join('')}</tr>`;
    const cell = (url, dur, id) => url
      ? `<td><div class="cellp" style="--c:${COLORS[id]}"><button class="pb" data-url="${esc(url)}" aria-label="Play">▶</button><span class="d">${dur ? dur.toFixed(1) + 's' : ''}</span></div></td>`
      : '<td class="na">—</td>';
    $('#tbl tbody').innerHTML = data.samples.map(s =>
      `<tr><td class="idx">${String(s.test_index).padStart(2, '0')}</td><td class="tx">${esc(s.text)}</td>${cell(s.reference_audio, s.reference_duration_seconds, 'REF')}${data.models.map(m => { const d = s.models[m.id]; return cell(d && d.status === 'success' ? d.audio : null, d && d.duration_seconds, m.id); }).join('')}</tr>`).join('');
    $('#tbl tbody').onclick = e => {
      const b = e.target.closest('.pb'); if (!b) return;
      const tr = b.closest('tr');
      play(b.dataset.url, on => { b.textContent = on ? '❚❚' : '▶'; tr.classList.toggle('playing', on); });
    };
  }

  (location.protocol === 'file:' && window.__SITE_DATA__ ? Promise.resolve(window.__SITE_DATA__)
    : fetch('data/website_data.json').then(r => r.json()).catch(() => window.__SITE_DATA__ || Promise.reject(new Error('no data'))))
    .then(render)
    .catch(err => { $('#durChart').textContent = 'Could not load data.'; console.error(err); });
})();
