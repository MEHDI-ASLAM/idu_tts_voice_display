window.__SITE_DATA__ = {
 "title": "Idu Mishmi TTS - Three Model Comparison",
 "description": "Comparison of three Idu Mishmi VITS models using a common held-out test set.",
 "test_samples": 20,
 "models": [
  {
   "id": "A",
   "name": "Model A",
   "label": "Combined-Data VITS Model",
   "description": "Trained using combined data (phone microphone + noise-cancelling headset microphone), around 2 h of data.",
   "short": "Combined data (phone mic + noise-cancelling headset mic), around 2 h of data"
  },
  {
   "id": "B",
   "name": "Model B",
   "label": "Noise-Cancelling Headset VITS Model",
   "description": "Trained specifically on Noise-Cancelling Headset data, around 1 h of data.",
   "short": "Specifically Noise-Cancelling Headset data, around 1 h of data"
  },
  {
   "id": "C",
   "name": "Model C",
   "label": "Smartphone-Microphone VITS Model",
   "description": "Trained specifically on Smartphone-Microphone data, around 1 h of data.",
   "short": "Specifically Smartphone-Microphone data, around 1 h of data"
  }
 ],
 "samples": [
  {
   "test_index": 1,
   "text": "aya ci ekruya mai kalakuh.",
   "reference_audio": "audio/reference/test_001_reference.wav",
   "models": {
    "A": {
     "name": "Model A - Combine PH2 Best",
     "audio": "audio/model_A/test_001_generated.wav",
     "status": "success",
     "duration_seconds": 4.447,
     "sample_rate": 22050,
     "error": ""
    },
    "B": {
     "name": "Model B - New Idu Head 500ep Best",
     "audio": "audio/model_B/test_001_generated.wav",
     "status": "success",
     "duration_seconds": 3.971,
     "sample_rate": 22050,
     "error": ""
    },
    "C": {
     "name": "Model C - Idu Wi_Head phase2_backup",
     "audio": "audio/model_C/test_001_generated.wav",
     "status": "success",
     "duration_seconds": 4.018,
     "sample_rate": 22050,
     "error": ""
    }
   },
   "reference_duration_seconds": 3.44
  },
  {
   "test_index": 2,
   "text": "aya tayi ndoh aloncchi mah latem nah.",
   "reference_audio": "audio/reference/test_002_reference.wav",
   "models": {
    "A": {
     "name": "Model A - Combine PH2 Best",
     "audio": "audio/model_A/test_002_generated.wav",
     "status": "success",
     "duration_seconds": 4.772,
     "sample_rate": 22050,
     "error": ""
    },
    "B": {
     "name": "Model B - New Idu Head 500ep Best",
     "audio": "audio/model_B/test_002_generated.wav",
     "status": "success",
     "duration_seconds": 4.424,
     "sample_rate": 22050,
     "error": ""
    },
    "C": {
     "name": "Model C - Idu Wi_Head phase2_backup",
     "audio": "audio/model_C/test_002_generated.wav",
     "status": "success",
     "duration_seconds": 4.889,
     "sample_rate": 22050,
     "error": ""
    }
   },
   "reference_duration_seconds": 3.76
  },
  {
   "test_index": 3,
   "text": "aya mai inimey aya njowey gebah mah wuhu hibah.",
   "reference_audio": "audio/reference/test_003_reference.wav",
   "models": {
    "A": {
     "name": "Model A - Combine PH2 Best",
     "audio": "audio/model_A/test_003_generated.wav",
     "status": "success",
     "duration_seconds": 4.842,
     "sample_rate": 22050,
     "error": ""
    },
    "B": {
     "name": "Model B - New Idu Head 500ep Best",
     "audio": "audio/model_B/test_003_generated.wav",
     "status": "success",
     "duration_seconds": 4.935,
     "sample_rate": 22050,
     "error": ""
    },
    "C": {
     "name": "Model C - Idu Wi_Head phase2_backup",
     "audio": "audio/model_C/test_003_generated.wav",
     "status": "success",
     "duration_seconds": 5.481,
     "sample_rate": 22050,
     "error": ""
    }
   },
   "reference_duration_seconds": 4.28
  },
  {
   "test_index": 4,
   "text": "aya mai mako khaga prambrada wuyi.",
   "reference_audio": "audio/reference/test_004_reference.wav",
   "models": {
    "A": {
     "name": "Model A - Combine PH2 Best",
     "audio": "audio/model_A/test_004_generated.wav",
     "status": "success",
     "duration_seconds": 4.424,
     "sample_rate": 22050,
     "error": ""
    },
    "B": {
     "name": "Model B - New Idu Head 500ep Best",
     "audio": "audio/model_B/test_004_generated.wav",
     "status": "success",
     "duration_seconds": 4.424,
     "sample_rate": 22050,
     "error": ""
    },
    "C": {
     "name": "Model C - Idu Wi_Head phase2_backup",
     "audio": "audio/model_C/test_004_generated.wav",
     "status": "success",
     "duration_seconds": 4.877,
     "sample_rate": 22050,
     "error": ""
    }
   },
   "reference_duration_seconds": 2.96
  },
  {
   "test_index": 5,
   "text": "aya mai kesah aah career lohibah buni.",
   "reference_audio": "audio/reference/test_005_reference.wav",
   "models": {
    "A": {
     "name": "Model A - Combine PH2 Best",
     "audio": "audio/model_A/test_005_generated.wav",
     "status": "success",
     "duration_seconds": 4.018,
     "sample_rate": 22050,
     "error": ""
    },
    "B": {
     "name": "Model B - New Idu Head 500ep Best",
     "audio": "audio/model_B/test_005_generated.wav",
     "status": "success",
     "duration_seconds": 4.401,
     "sample_rate": 22050,
     "error": ""
    },
    "C": {
     "name": "Model C - Idu Wi_Head phase2_backup",
     "audio": "audio/model_C/test_005_generated.wav",
     "status": "success",
     "duration_seconds": 3.913,
     "sample_rate": 22050,
     "error": ""
    }
   },
   "reference_duration_seconds": 3.92
  },
  {
   "test_index": 6,
   "text": "prapoh mrs jones.",
   "reference_audio": "audio/reference/test_006_reference.wav",
   "models": {
    "A": {
     "name": "Model A - Combine PH2 Best",
     "audio": "audio/model_A/test_006_generated.wav",
     "status": "success",
     "duration_seconds": 2.903,
     "sample_rate": 22050,
     "error": ""
    },
    "B": {
     "name": "Model B - New Idu Head 500ep Best",
     "audio": "audio/model_B/test_006_generated.wav",
     "status": "success",
     "duration_seconds": 3.054,
     "sample_rate": 22050,
     "error": ""
    },
    "C": {
     "name": "Model C - Idu Wi_Head phase2_backup",
     "audio": "audio/model_C/test_006_generated.wav",
     "status": "success",
     "duration_seconds": 3.182,
     "sample_rate": 22050,
     "error": ""
    }
   },
   "reference_duration_seconds": 2.2
  },
  {
   "test_index": 7,
   "text": "aya mai inimey aecha ligah gebah mah wuhu hibah.",
   "reference_audio": "audio/reference/test_007_reference.wav",
   "models": {
    "A": {
     "name": "Model A - Combine PH2 Best",
     "audio": "audio/model_A/test_007_generated.wav",
     "status": "success",
     "duration_seconds": 5.701,
     "sample_rate": 22050,
     "error": ""
    },
    "B": {
     "name": "Model B - New Idu Head 500ep Best",
     "audio": "audio/model_B/test_007_generated.wav",
     "status": "success",
     "duration_seconds": 5.318,
     "sample_rate": 22050,
     "error": ""
    },
    "C": {
     "name": "Model C - Idu Wi_Head phase2_backup",
     "audio": "audio/model_C/test_007_generated.wav",
     "status": "success",
     "duration_seconds": 6.409,
     "sample_rate": 22050,
     "error": ""
    }
   },
   "reference_duration_seconds": 4.44
  },
  {
   "test_index": 8,
   "text": "nga issi njoji.",
   "reference_audio": "audio/reference/test_008_reference.wav",
   "models": {
    "A": {
     "name": "Model A - Combine PH2 Best",
     "audio": "audio/model_A/test_008_generated.wav",
     "status": "success",
     "duration_seconds": 2.822,
     "sample_rate": 22050,
     "error": ""
    },
    "B": {
     "name": "Model B - New Idu Head 500ep Best",
     "audio": "audio/model_B/test_008_generated.wav",
     "status": "success",
     "duration_seconds": 2.648,
     "sample_rate": 22050,
     "error": ""
    },
    "C": {
     "name": "Model C - Idu Wi_Head phase2_backup",
     "audio": "audio/model_C/test_008_generated.wav",
     "status": "success",
     "duration_seconds": 4.482,
     "sample_rate": 22050,
     "error": ""
    }
   },
   "reference_duration_seconds": 2.96
  },
  {
   "test_index": 9,
   "text": "ngamey khomisi mai tandoh wuidah.",
   "reference_audio": "audio/reference/test_009_reference.wav",
   "models": {
    "A": {
     "name": "Model A - Combine PH2 Best",
     "audio": "audio/model_A/test_009_generated.wav",
     "status": "success",
     "duration_seconds": 4.32,
     "sample_rate": 22050,
     "error": ""
    },
    "B": {
     "name": "Model B - New Idu Head 500ep Best",
     "audio": "audio/model_B/test_009_generated.wav",
     "status": "success",
     "duration_seconds": 3.855,
     "sample_rate": 22050,
     "error": ""
    },
    "C": {
     "name": "Model C - Idu Wi_Head phase2_backup",
     "audio": "audio/model_C/test_009_generated.wav",
     "status": "success",
     "duration_seconds": 4.645,
     "sample_rate": 22050,
     "error": ""
    }
   },
   "reference_duration_seconds": 3.2
  },
  {
   "test_index": 10,
   "text": "nga iji enley bah yeoguum dah.",
   "reference_audio": "audio/reference/test_010_reference.wav",
   "models": {
    "A": {
     "name": "Model A - Combine PH2 Best",
     "audio": "audio/model_A/test_010_generated.wav",
     "status": "success",
     "duration_seconds": 3.96,
     "sample_rate": 22050,
     "error": ""
    },
    "B": {
     "name": "Model B - New Idu Head 500ep Best",
     "audio": "audio/model_B/test_010_generated.wav",
     "status": "success",
     "duration_seconds": 3.414,
     "sample_rate": 22050,
     "error": ""
    },
    "C": {
     "name": "Model C - Idu Wi_Head phase2_backup",
     "audio": "audio/model_C/test_010_generated.wav",
     "status": "success",
     "duration_seconds": 3.878,
     "sample_rate": 22050,
     "error": ""
    }
   },
   "reference_duration_seconds": 3.0
  },
  {
   "test_index": 11,
   "text": "aya moh anama nai injata lebah igai nokori mah igah.",
   "reference_audio": "audio/reference/test_011_reference.wav",
   "models": {
    "A": {
     "name": "Model A - Combine PH2 Best",
     "audio": "audio/model_A/test_011_generated.wav",
     "status": "success",
     "duration_seconds": 5.469,
     "sample_rate": 22050,
     "error": ""
    },
    "B": {
     "name": "Model B - New Idu Head 500ep Best",
     "audio": "audio/model_B/test_011_generated.wav",
     "status": "success",
     "duration_seconds": 5.574,
     "sample_rate": 22050,
     "error": ""
    },
    "C": {
     "name": "Model C - Idu Wi_Head phase2_backup",
     "audio": "audio/model_C/test_011_generated.wav",
     "status": "success",
     "duration_seconds": 5.399,
     "sample_rate": 22050,
     "error": ""
    }
   },
   "reference_duration_seconds": 5.12
  },
  {
   "test_index": 12,
   "text": "ayi aechama hai inni mai logey honay prawey.",
   "reference_audio": "audio/reference/test_012_reference.wav",
   "models": {
    "A": {
     "name": "Model A - Combine PH2 Best",
     "audio": "audio/model_A/test_012_generated.wav",
     "status": "success",
     "duration_seconds": 4.761,
     "sample_rate": 22050,
     "error": ""
    },
    "B": {
     "name": "Model B - New Idu Head 500ep Best",
     "audio": "audio/model_B/test_012_generated.wav",
     "status": "success",
     "duration_seconds": 4.61,
     "sample_rate": 22050,
     "error": ""
    },
    "C": {
     "name": "Model C - Idu Wi_Head phase2_backup",
     "audio": "audio/model_C/test_012_generated.wav",
     "status": "success",
     "duration_seconds": 4.447,
     "sample_rate": 22050,
     "error": ""
    }
   },
   "reference_duration_seconds": 4.4
  },
  {
   "test_index": 13,
   "text": "aya mai violin boja gah chi aya orchestra mah.",
   "reference_audio": "audio/reference/test_013_reference.wav",
   "models": {
    "A": {
     "name": "Model A - Combine PH2 Best",
     "audio": "audio/model_A/test_013_generated.wav",
     "status": "success",
     "duration_seconds": 6.084,
     "sample_rate": 22050,
     "error": ""
    },
    "B": {
     "name": "Model B - New Idu Head 500ep Best",
     "audio": "audio/model_B/test_013_generated.wav",
     "status": "success",
     "duration_seconds": 5.771,
     "sample_rate": 22050,
     "error": ""
    },
    "C": {
     "name": "Model C - Idu Wi_Head phase2_backup",
     "audio": "audio/model_C/test_013_generated.wav",
     "status": "success",
     "duration_seconds": 5.991,
     "sample_rate": 22050,
     "error": ""
    }
   },
   "reference_duration_seconds": 4.08
  },
  {
   "test_index": 14,
   "text": "nuh kajiya mah babah bhi nga nugoh ameywey.",
   "reference_audio": "audio/reference/test_014_reference.wav",
   "models": {
    "A": {
     "name": "Model A - Combine PH2 Best",
     "audio": "audio/model_A/test_014_generated.wav",
     "status": "success",
     "duration_seconds": 5.179,
     "sample_rate": 22050,
     "error": ""
    },
    "B": {
     "name": "Model B - New Idu Head 500ep Best",
     "audio": "audio/model_B/test_014_generated.wav",
     "status": "success",
     "duration_seconds": 4.726,
     "sample_rate": 22050,
     "error": ""
    },
    "C": {
     "name": "Model C - Idu Wi_Head phase2_backup",
     "audio": "audio/model_C/test_014_generated.wav",
     "status": "success",
     "duration_seconds": 5.585,
     "sample_rate": 22050,
     "error": ""
    }
   },
   "reference_duration_seconds": 3.76
  },
  {
   "test_index": 15,
   "text": "ameya ci atomic weight mai holoho.",
   "reference_audio": "audio/reference/test_015_reference.wav",
   "models": {
    "A": {
     "name": "Model A - Combine PH2 Best",
     "audio": "audio/model_A/test_015_generated.wav",
     "status": "success",
     "duration_seconds": 4.296,
     "sample_rate": 22050,
     "error": ""
    },
    "B": {
     "name": "Model B - New Idu Head 500ep Best",
     "audio": "audio/model_B/test_015_generated.wav",
     "status": "success",
     "duration_seconds": 4.157,
     "sample_rate": 22050,
     "error": ""
    },
    "C": {
     "name": "Model C - Idu Wi_Head phase2_backup",
     "audio": "audio/model_C/test_015_generated.wav",
     "status": "success",
     "duration_seconds": 5.272,
     "sample_rate": 22050,
     "error": ""
    }
   },
   "reference_duration_seconds": 3.88
  },
  {
   "test_index": 16,
   "text": "aya mai inimey aya yedah naodoa wuhu hibah.",
   "reference_audio": "audio/reference/test_016_reference.wav",
   "models": {
    "A": {
     "name": "Model A - Combine PH2 Best",
     "audio": "audio/model_A/test_016_generated.wav",
     "status": "success",
     "duration_seconds": 5.434,
     "sample_rate": 22050,
     "error": ""
    },
    "B": {
     "name": "Model B - New Idu Head 500ep Best",
     "audio": "audio/model_B/test_016_generated.wav",
     "status": "success",
     "duration_seconds": 5.098,
     "sample_rate": 22050,
     "error": ""
    },
    "C": {
     "name": "Model C - Idu Wi_Head phase2_backup",
     "audio": "audio/model_C/test_016_generated.wav",
     "status": "success",
     "duration_seconds": 5.167,
     "sample_rate": 22050,
     "error": ""
    }
   },
   "reference_duration_seconds": 4.08
  },
  {
   "test_index": 17,
   "text": "aya radio mah yetey bah.",
   "reference_audio": "audio/reference/test_017_reference.wav",
   "models": {
    "A": {
     "name": "Model A - Combine PH2 Best",
     "audio": "audio/model_A/test_017_generated.wav",
     "status": "success",
     "duration_seconds": 4.296,
     "sample_rate": 22050,
     "error": ""
    },
    "B": {
     "name": "Model B - New Idu Head 500ep Best",
     "audio": "audio/model_B/test_017_generated.wav",
     "status": "success",
     "duration_seconds": 3.286,
     "sample_rate": 22050,
     "error": ""
    },
    "C": {
     "name": "Model C - Idu Wi_Head phase2_backup",
     "audio": "audio/model_C/test_017_generated.wav",
     "status": "success",
     "duration_seconds": 4.192,
     "sample_rate": 22050,
     "error": ""
    }
   },
   "reference_duration_seconds": 3.08
  },
  {
   "test_index": 18,
   "text": "nge khege athupra aah hochibi tv mah program athulada.",
   "reference_audio": "audio/reference/test_018_reference.wav",
   "models": {
    "A": {
     "name": "Model A - Combine PH2 Best",
     "audio": "audio/model_A/test_018_generated.wav",
     "status": "success",
     "duration_seconds": 5.991,
     "sample_rate": 22050,
     "error": ""
    },
    "B": {
     "name": "Model B - New Idu Head 500ep Best",
     "audio": "audio/model_B/test_018_generated.wav",
     "status": "success",
     "duration_seconds": 5.399,
     "sample_rate": 22050,
     "error": ""
    },
    "C": {
     "name": "Model C - Idu Wi_Head phase2_backup",
     "audio": "audio/model_C/test_018_generated.wav",
     "status": "success",
     "duration_seconds": 6.363,
     "sample_rate": 22050,
     "error": ""
    }
   },
   "reference_duration_seconds": 5.04
  },
  {
   "test_index": 19,
   "text": "nuh aya hai manji laipoh.",
   "reference_audio": "audio/reference/test_019_reference.wav",
   "models": {
    "A": {
     "name": "Model A - Combine PH2 Best",
     "audio": "audio/model_A/test_019_generated.wav",
     "status": "success",
     "duration_seconds": 4.076,
     "sample_rate": 22050,
     "error": ""
    },
    "B": {
     "name": "Model B - New Idu Head 500ep Best",
     "audio": "audio/model_B/test_019_generated.wav",
     "status": "success",
     "duration_seconds": 3.333,
     "sample_rate": 22050,
     "error": ""
    },
    "C": {
     "name": "Model C - Idu Wi_Head phase2_backup",
     "audio": "audio/model_C/test_019_generated.wav",
     "status": "success",
     "duration_seconds": 4.099,
     "sample_rate": 22050,
     "error": ""
    }
   },
   "reference_duration_seconds": 3.2
  },
  {
   "test_index": 20,
   "text": "aya praah ney inchhi nga haja wah?",
   "reference_audio": "audio/reference/test_020_reference.wav",
   "models": {
    "A": {
     "name": "Model A - Combine PH2 Best",
     "audio": "audio/model_A/test_020_generated.wav",
     "status": "success",
     "duration_seconds": 3.693,
     "sample_rate": 22050,
     "error": ""
    },
    "B": {
     "name": "Model B - New Idu Head 500ep Best",
     "audio": "audio/model_B/test_020_generated.wav",
     "status": "success",
     "duration_seconds": 3.565,
     "sample_rate": 22050,
     "error": ""
    },
    "C": {
     "name": "Model C - Idu Wi_Head phase2_backup",
     "audio": "audio/model_C/test_020_generated.wav",
     "status": "success",
     "duration_seconds": 4.738,
     "sample_rate": 22050,
     "error": ""
    }
   },
   "reference_duration_seconds": 3.92
  }
 ],
 "reference_short": "Human reference recording"
};
