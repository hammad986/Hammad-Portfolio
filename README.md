# Muhammed Hammad | Full-Stack AI Developer & Systems Specialist

[![Live Portfolio](https://img.shields.io/badge/Live%20Portfolio-hammad.dpdns.org-00F2FE?style=for-the-badge&logo=googlechrome&logoColor=black)](https://hammad.dpdns.org)
[![Cloudflare Pages](https://img.shields.io/badge/Deployed%20On-Cloudflare%20Pages-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)](https://hammad.dpdns.org)
[![Next.js 15](https://img.shields.io/badge/Next.js%2015-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React%2019-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript%205-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Three.js](https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-00F5A0.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

---

## 🌐 Overview & Live Deployment

> **Live Website:** [https://hammad.dpdns.org](https://hammad.dpdns.org)  
> **Role:** Full-Stack AI Developer & Applied Systems Specialist  
> **Status:** 🟢 Available for Hire / Open to Full-Time & Contract Roles

This repository contains the complete production source code for **Muhammed Hammad's** multi-page engineering portfolio. Engineered for zero layout shift, extreme hardware acceleration, deterministic AI reasoning simulations, and client-side RAG search.

---

## 🏗️ Multi-Page Architecture

```
/
├── / (Home Overview)             # Bento Hero, Stats, Top 3 Flagships, 3D Cosmos & Navigation
├── /projects                     # 24+ Production Builds, Case Studies & Architecture SVGs
├── /certifications               # 37+ Verified Credentials Vault with live Search & PDF Viewer
├── /experience                   # Career Timeline (Saiket Systems ML Ongoing, ThirdVizion, InAmbigous, etc.)
├── /about                        # Systems Philosophy & Interactive AI Multi-Agent Simulator
└── /contact                      # Direct Communication Channels & Dispatch Form
```

---

## 🚀 Key Differentiators & Features

- 🤖 **Ask Hammad AI Assistant**: Fully client-side RAG intelligence engine trained on 24+ projects and 37+ verified credentials with instant structured answers, citation chips, and direct links.
- ⚡ **Interactive AI Pipeline Simulator**: Live multi-agent reasoning playground supporting model switching (*Gemini 2.0 Flash, Claude 3.5, Llama 3.3*), OCR/vector retrieval execution steps, and real-time p95 latency inspection.
- 📜 **37+ Verified Credentials Vault**: Full catalog of verified credentials (*Stanford Online / Andrew Ng, AWS, Google Cloud GenAI Studio, Deloitte, Oracle*) with live keyword search and full-screen embedded PDF viewer.
- 🛠 **24+ Production Case Studies**: Real problems, engineering solutions, quantifiable outcome metrics, and interactive SVG system architecture blueprints.
- 🌐 **3D WebGL Cybernetic Cosmos**: Zero-lag Three.js gyro core and starfield particle lattice positioned with 100% clean typography separation.
- ⌨️ **Command Palette (`Cmd+K` / `Ctrl+K`)**: Keyboard-driven navigation for lightning-fast jumping between routes, projects, CLI, and resume downloads.
- 💻 **Developer CLI Terminal**: Interactive browser-based terminal emulator supporting commands like `help`, `skills`, `projects`, `certs`, `hire`, and `clear`.
- 📱 **100% Mobile Responsive**: Fluid typography, responsive modals, compact header dock, and touch-friendly controls across all screen sizes (375px to 4K).

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15.5.9](https://nextjs.org/) (App Router, Static Export `output: 'export'`)
- **Core Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **3D & WebGL**: [Three.js](https://threejs.org/), [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber), [@react-three/drei](https://github.com/pmndrs/drei)
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/), `tailwind-merge`, `clsx`
- **Animations**: [Framer Motion](https://www.framer.com/motion/), [GSAP](https://greensock.com/gsap/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Forms**: [EmailJS](https://www.emailjs.com/) (Client-Side Dispatch)

---

## 🌩️ Cloudflare Pages Deployment Guide

This project is pre-configured with static export (`output: 'export'` with `trailingSlash: true`). Follow these exact settings to deploy on **Cloudflare Pages** with zero errors:

### Step-by-Step Cloudflare Pages Setup:

1. Log into your **[Cloudflare Dashboard](https://dash.cloudflare.com/)** and navigate to **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
2. Select your GitHub repository (`Hammad-Portfolio-main` / `portfolio`).
3. In the **Set up builds and deployments** step, configure:
   - **Framework preset**: `None` (or `Next.js (Static HTML Export)`)
   - **Build command**: `npm run build`
   - **Build output directory**: `out` *(IMPORTANT: Must be `out`, NOT `.next`)*
   - **Root directory**: `/` (Leave blank if root)
4. Under **Environment variables (advanced)**, add:
   - `NODE_VERSION`: `20`
5. Click **Save and Deploy**.

> **Note:** The repository includes `.node-version` (20.18.0), `.nvmrc` (20), `public/_headers`, and `public/_routes.json` ensuring 100% automated compatibility with Cloudflare Pages edge delivery.

---

## 💻 Local Development Setup

### Prerequisites
- **Node.js**: v18.18+ or v20+
- **npm** or **pnpm** / **yarn**

### 1. Clone the repository
```bash
git clone https://github.com/hammad986/portfolio.git
cd portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup environment variables (Optional for Contact Form)
Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

### 4. Run development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build for production (Static Export)
```bash
npm run build
```
The optimized static build will be generated in the `/out` directory.

---

## 📁 Repository Structure

```text
├── app/
│   ├── layout.tsx             # Root layout with dark carbon theme & analytics
│   ├── page.tsx               # Home Overview Page
│   ├── globals.css            # Global CSS variables & carbon surface utilities
│   ├── projects/page.tsx      # Dedicated 24+ Projects & Case Studies Hub
│   ├── certifications/page.tsx# Dedicated 37+ Verified Credentials Vault
│   ├── experience/page.tsx    # Dedicated Career & Internships Timeline
│   ├── about/page.tsx         # Dedicated Systems Architecture & AI Simulator
│   └── contact/page.tsx       # Dedicated Direct Contact Channel
├── components/
│   ├── header.tsx             # Silicon Valley Dock navigation with Ask AI & CLI
│   ├── command-palette.tsx    # Cmd+K global keyboard shortcut menu
│   ├── command-scene.tsx      # Three.js 3D WebGL Cyber Gyro Core
│   ├── ai-assistant-modal.tsx # Ask Hammad AI RAG assistant
│   ├── ai-pipeline-playground.tsx # Interactive AI multi-agent simulator
│   ├── project-modal.tsx      # Deep-dive Case Study & Architecture SVG viewer
│   ├── certificate-modal.tsx  # Full-screen PDF & image credential viewer
│   ├── terminal-modal.tsx     # Developer CLI Terminal Emulator
│   └── sections/              # Modular section components (Hero, Projects, Certs, etc.)
├── lib/
│   └── data.ts                # Single source of truth for projects, certs, experience & metrics
├── public/
│   ├── assets/                # WebP images, screenshots, and 37+ certificates
│   ├── _headers               # Cloudflare Pages security & caching headers
│   └── _routes.json           # Cloudflare Pages static route rules
├── next.config.ts             # Next.js static export & trailingSlash configuration
├── .node-version              # Node 20 runtime declaration for Cloudflare
└── README.md                  # Executive documentation
```

---

## 📬 Contact & Connect

- **Live URL**: [hammad.dpdns.org](https://hammad.dpdns.org)
- **Email**: [mdhammad2906@gmail.com](mailto:mdhammad2906@gmail.com)
- **LinkedIn**: [linkedin.com/in/muhammed-hammad-42659726a](https://www.linkedin.com/in/muhammed-hammad-42659726a)
- **GitHub**: [@hammad986](https://github.com/hammad986)
- **Instagram**: [@mud_.hammad](https://www.instagram.com/mud_.hammad)
- **Phone**: `+91 6369740522`

---

## 📄 License

MIT License © 2026 Muhammed Hammad. Designed & Engineered with precision.
