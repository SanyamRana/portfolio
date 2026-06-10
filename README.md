# Sanyam Rana — AI/ML & Electrical Engineering Portfolio

A premium, interactive web portfolio built with **Next.js**, **React**, **TypeScript**, **Framer Motion**, and **Tailwind CSS**, highlighting systems engineering and applied machine learning models.

---

## 🚀 Core Features & Sections

### 1. Model registry & Technical Matrix
An interactive registry detailing production-active neural network pipelines:
* **Spac3D-Object-Detector**: Monocular 3D coordinate regression and spatial topology classification using **YOLOv8** and **PyTorch**.
* **Penny-Finance-LSTM**: Natural language budget context mapping and word embedding fine-tuning with **HuggingFace** and **PyTorch**.
* **ExoGlove-Actuator-Policy**: Kinematic servos reinforcement learning closed-loop actuator policy with **Stable-Baselines3** and **Gymnasium**.

### 2. Interactive Skills Graph
A fully interactive, dynamic physics-based canvas node network representing programming languages, machine learning pipelines, deep learning, software engineering, and analytical mathematical logic.

### 3. Projects Portfolio
Showcases mechanical actuators (Twisted String Actuators exoskeletons), algorithmic route optimizer (Dijkstra graphs), and agents simulation models with dynamic 3D tilt interactions and vector schematics.

### 4. Milestone Timeline
Responsive linear timeline charting transition milestones from Electrical Engineering analytical foundations (IIT Jodhpur B.Tech core) to applied AI development.

---

## 📂 Code Architecture

The codebase has been refactored and modularized to separate concerns:
```
src/
├── app/               # Next.js App Router & global styles
├── types/             # Centralized TypeScript interfaces
├── data/              # Decoupled static details (projects, models, skills)
├── hooks/             # Custom hooks (tilt coordinates, form validations)
├── lib/               # Shared animation presets and libraries
└── components/
    ├── layout/        # Page framework (Navbar, Footer)
    ├── ui/            # UI components (SectionHeaders, GlassCards)
    └── sections/      # Main page viewport sections
```

---

## 🛠️ Getting Started

To run the application locally:

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view it.

3. Run production build check:
   ```bash
   npm run build
   ```
