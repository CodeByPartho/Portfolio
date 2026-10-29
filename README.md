<div align="center">

  <h1>🌐 Partho — Interactive 3D Portfolio</h1>

  <p><b>Next-Generation Creative Developer Portfolio featuring Three.js, R3F & GSAP</b></p>

  <p>
    An interactive personal portfolio presenting creative front-end and full-stack engineering work through real-time 3D canvas physics, custom lighting, and smooth scroll transitions.
  </p>

  <p>
    <a href="https://react.dev"><img src="https://img.shields.io/badge/React-18.3-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 18" /></a>
    <a href="https://www.typescriptlang.org"><img src="https://img.shields.io/badge/TypeScript-5.5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" /></a>
    <a href="https://threejs.org"><img src="https://img.shields.io/badge/Three.js-0.168-000000?style=for-the-badge&logo=three.js&logoColor=white" alt="Three.js" /></a>
    <a href="https://r3f.docs.pmnd.rs"><img src="https://img.shields.io/badge/R3F-React%20Three%20Fiber-purple?style=for-the-badge" alt="R3F" /></a>
    <a href="https://gsap.com"><img src="https://img.shields.io/badge/GSAP-3.12-88CE02?style=for-the-badge&logo=greensock&logoColor=white" alt="GSAP" /></a>
    <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License" /></a>
  </p>

</div>

---

## 📖 Overview

This repository contains the production source code for **Partho's 3D Portfolio**. Designed with a performance-first mindset, the application combines React 18 component modularity with Three.js WebGL scenes, interactive character controllers, and physics engines (Rapier/Cannon).

It features dynamic project showreels, custom cursor navigation, responsive layout adaptations, and interactive 3D particle systems.

---

## 🚀 Key Features

- 🎮 **Real-Time WebGL Visuals** — Immersive 3D environments rendered in real time with `@react-three/fiber` and `@react-three/drei`.
- 🕹️ **Interactive Physics Simulation** — Dynamic rigid-body physics and collision detection powered by `@react-three/rapier`.
- 🎬 **Fluid Timeline Choreography** — Complex multi-stage scroll animations and micro-interactions orchestrated via GSAP.
- ⚡ **Optimized Draco Geometry** — Compressed 3D mesh assets and responsive WebP image loading for high-speed hydration.
- 📱 **Fully Responsive Layout** — Dynamic camera calculations ensuring consistent visual fidelity on both mobile devices and wide desktop displays.
- 🎨 **Minimalist Aesthetic** — Modern typography, glassmorphic cards, marquee project banners, and refined color balance.

---

## 🛠️ Tech Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend Framework** | [React 18](https://react.dev) | Component tree & reactive state management |
| **Language** | [TypeScript 5.5](https://www.typescriptlang.org) | End-to-end static typing |
| **3D Rendering** | [Three.js](https://threejs.org) & [R3F](https://r3f.docs.pmnd.rs) | WebGL rendering pipeline & camera controls |
| **Scene Abstractions** | [@react-three/drei](https://github.com/pmndrs/drei) | Shader utilities, loaders & environment setups |
| **Physics** | [@react-three/rapier](https://github.com/pmndrs/react-three-rapier) | Real-time collision physics |
| **Motion & Scroll** | [GSAP 3](https://gsap.com) | Timeline-driven scroll transitions |
| **Bundler** | [Vite 5](https://vite.dev) | Fast HMR development and optimized production builds |

---

## 💻 Getting Started

### Prerequisites
- **Node.js**: `>= 18.x`
- **npm**: `>= 9.x`

### Installation & Run

1. **Clone the repository**:
   ```bash
   git clone https://github.com/CodeByPartho/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start local development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

4. **Build production bundle**:
   ```bash
   npm run build
   ```

---

## 📄 License

This project is licensed under the **[MIT License](LICENSE)**.

---

<p align="center">Made with ❤️ by Partho</p>
