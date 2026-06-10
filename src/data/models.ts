import { ModelRecord } from "@/types";

export const models: ModelRecord[] = [
  {
    id: "spac3d",
    name: "Spac3D-Object-Detector",
    type: "Computer Vision (YOLOv8)",
    framework: "PyTorch",
    status: "active",
    latency: "18.2ms",
    accuracy: "96.4%",
    size: "142 MB",
    description: "Real-time object detector. Regresses 3D bounding box coordinates and topology labels directly from monocular room photos.",
    domain: "Computer Vision & 3D Spatial ML",
    techStack: [
      { name: "PyTorch", category: "Core Framework", desc: "Powering tensor operations, custom 3D loss functions, and backpropagation optimization loops." },
      { name: "YOLOv8", category: "Object Detector", desc: "Customized with modified regression heads to extract 3D coordinates from single-view snapshots." },
      { name: "OpenCV", category: "Pre-processing", desc: "Handles live camera frame preprocessing, matrix transformations, and bounding box drawing routines." },
      { name: "NumPy", category: "Vector Math", desc: "Crucial for coordinate matrix operations, projection transformations, and geometry conversions." },
      { name: "CUDA", category: "Hardware Acceler.", desc: "Accelerates graphics pipeline calculations to ensure inference execution fits well under the 20ms threshold." }
    ],
    skills: [
      { name: "3D Spatial Coordinate Regression", percentage: 95 },
      { name: "Neural Network Customization", percentage: 88 },
      { name: "Camera Matrix Calibration", percentage: 82 },
      { name: "Model Quantization & FP16 Pruning", percentage: 90 }
    ],
    architecture: [
      "Monocular Input (640x640)",
      "YOLOv8 Backbone Extractor",
      "Dynamic 3D Regression Head",
      "Coordinate Projection Map",
      "Topological Space Classifier",
      "3D Bounding Box Coordinates Output"
    ]
  },
  {
    id: "penny",
    name: "Penny-Finance-LSTM",
    type: "NLP (Encoder-LSTM)",
    framework: "HuggingFace",
    status: "active",
    latency: "11.5ms",
    accuracy: "94.2%",
    size: "285 MB",
    description: "Agentic budget compiler. Tokenizes personal financial entries and maps attention sequences to generate customized savings plan recommendations.",
    domain: "NLP & Sequence Intelligence",
    techStack: [
      { name: "HuggingFace", category: "Transformer Hub", desc: "Used to fine-tune word embedding vectors tailored for financial vocabulary patterns." },
      { name: "PyTorch", category: "RNN / Backend", desc: "Drives the core neural network layers, handling the state transitions of the LSTM cell gates." },
      { name: "Tokenizers", category: "Preprocessing", desc: "Fast Byte-Pair Encoding (BPE) tokenizer to transform incoming text queries into token IDs." },
      { name: "pandas", category: "Data Processing", desc: "Aggregates stream transaction arrays, normalizes features, and cleans user-entered transaction inputs." },
      { name: "Transformers", category: "Attention Modeling", desc: "Calculates attention maps to isolate key spending areas from unstructured user queries." }
    ],
    skills: [
      { name: "Sequence-to-Sequence Modeling", percentage: 92 },
      { name: "Attention Map Interpretability", percentage: 90 },
      { name: "Custom BPE Vocab Construction", percentage: 85 },
      { name: "Contextual Optimization Systems", percentage: 88 }
    ],
    architecture: [
      "Natural Language Text Input",
      "Byte-Pair Tokenizer Map",
      "Embedding Vector Projection",
      "Bidirectional LSTM Encoder",
      "Soft Attention Context Matrix",
      "Financial Recommendations Decoded"
    ]
  },
  {
    id: "exoglove",
    name: "ExoGlove-Actuator-Policy",
    type: "Control (Deep Q-Network)",
    framework: "Stable-Baselines3",
    status: "active",
    latency: "4.1ms",
    accuracy: "98.1%",
    size: "18 MB",
    description: "Exoskeletal control policy. Maps flex-sensor array signals onto motor actuator tension controls for physiotherapeutic hand rehabilitation.",
    domain: "Reinforcement Learning & Controls",
    techStack: [
      { name: "Stable-Baselines3", category: "RL Framework", desc: "Implements the core DQN (Deep Q-Network) algorithms with optimized experience replay memory." },
      { name: "Gymnasium", category: "Simulation Env", desc: "Defines the physical boundaries, state vectors, action limits, and reward structures." },
      { name: "SciPy", category: "Signal Processing", desc: "Applies real-time digital filtering to smooth out high-frequency sensor noise from user glove inputs." },
      { name: "PyBullet", category: "Physics Engine", desc: "Simulates hand kinematics and robotic actuators for validation before uploading code to real drivers." },
      { name: "C++ / Arduino", category: "Hardware Deploy", desc: "Deploys trained weights to microcontrollers for low-latency servo control loop execution." }
    ],
    skills: [
      { name: "Deep Q-Network Policy Training", percentage: 94 },
      { name: "Real-time Telemetry Filtering", percentage: 90 },
      { name: "Closed-loop Feedback Control", percentage: 85 },
      { name: "Physics Simulation Mapping", percentage: 88 }
    ],
    architecture: [
      "Flex-Sensor Analog Readings (5 Ch)",
      "Moving-Average Low-Pass Filter",
      "State Vector Normalization",
      "DQN Policy Network Evaluation",
      "Motor Actuator Servo Actions",
      "Active Grip Control Loop Output"
    ]
  }
];
