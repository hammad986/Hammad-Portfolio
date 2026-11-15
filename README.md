# Muhammed Hammad | AI/ML Engineer and Full-Stack Developer

[![Live Portfolio](https://img.shields.io/badge/Live%20Portfolio-hammad986.me-00F2FE?style=for-the-badge&logo=googlechrome&logoColor=black)](https://hammad986.me)
[![Cloudflare Pages](https://img.shields.io/badge/Deployed%20On-Cloudflare%20Pages-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)](https://hammad986.me)
[![Next.js 15](https://img.shields.io/badge/Next.js%2015-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React%2019-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript 5](https://img.shields.io/badge/TypeScript%205-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Security RFC 9116](https://img.shields.io/badge/Security.txt-RFC%209116-00F5A0?style=for-the-badge&logo=shield)](https://hammad986.me/.well-known/security.txt)
[![License: MIT](https://img.shields.io/badge/License-MIT-00F5A0.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

---

## Overview

> **Live Website:** [https://hammad986.me](https://hammad986.me)  
> **Role:** AI/ML Engineer and Full-Stack Developer  
> **Education:** B.Tech in Computer Science & Business Systems (CSBS, 2023–2027)  
> **Status:** Open to full-time, contract, and high-impact engineering roles  

This repository contains the production source code for the personal portfolio of **Muhammed Hammad (hammad986)**. It is a high-performance Next.js application built with static export (`output: "export"`), Cloudflare Pages deployment, semantic HTML5, Schema.org JSON-LD structured data, and responsive design tailored for mobile, tablet, and desktop viewports.

---

## Core Features & Interactive Capabilities

- **Interactive AI Pipeline Simulator**: Multi-step cognitive reasoning playground demonstrating document OCR, chunking, embedding generation, vector indexing, and grounded LLM synthesis with real-time simulated latency metrics.
- **Developer Terminal CLI**: In-browser keyboard-driven emulator accessible via `CLI` button supporting commands (`help`, `skills`, `projects`, `certs`, `hire`, `clear`, `contact`).
- **Command Palette (`Cmd+K` / `Ctrl+K`)**: Rapid global navigation and search shortcut system for instant access to any page or tool.
- **Interactive Portfolio FAQ**: Local search assistant answering queries about experience, tech stack, and background without external API calls or latency.
- **Verified Credentials Vault**: Categorized document viewer for industry certifications from Stanford Online, AWS, Google Cloud, and Deloitte with in-browser previews and verification links.
- **Project Case Studies**: Comprehensive deep-dive breakdowns covering architectural diagrams, challenges, implementation, trade-offs, and verified screenshot workflows.
- **3D WebGL Visualization**: Three.js scene optimized with WebGL fallbacks to never block or impede readability on smaller screens.
- **Mobile First & Responsive Layout**: 2x2 metric dashboards, collapsible mobile navigation drawer with quick action docks, touch-optimized button targets, and responsive cyber node timelines.
- **Security Hardening**: Enforced HSTS (`max-age=31536000; includeSubDomains; preload`), `X-Frame-Options: SAMEORIGIN`, `X-Content-Type-Options: nosniff`, and RFC 9116 standard `/.well-known/security.txt`.

---

## Pages & Routing Architecture

```text
/
├── /                     Home page (hero with status beacon, telemetry, top projects, credentials, and timeline)
├── /projects/            Complete project vault with category filters, modal inspect, and live/source action links
├── /projects/[slug]/     Individual static deep-dive case studies with architectural problem-solution breakdowns
├── /certifications/      Verified credentials vault with live keyword search and in-browser modal document viewer
├── /experience/          Chronological engineering trajectory and internship milestone timeline
├── /about/               Engineering philosophy, core production tenets, and interactive AI pipeline simulator
├── /contact/             Direct communication channels, verified social profiles, and client-side contact form
├── /privacy/             Transparent privacy disclosures regarding Cloudflare web analytics and contact telemetry
└── /terms/               Terms and conditions of website use
```

---

## Tech Stack & Architecture

| Layer | Technologies |
|---|---|
| **Framework** | [Next.js 15](https://nextjs.org/) (App Router, Static Export `output: "export"`) |
| **Core UI** | [React 19](https://react.dev/), [TypeScript 5](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS v3](https://tailwindcss.com/), `tailwind-merge`, `clsx` |
| **Motion & Graphics** | [Framer Motion](https://www.framer.com/motion/), [Three.js](https://threejs.org/), [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber), [GSAP](https://greensock.com/gsap/) |
| **Icons & Media** | [Lucide React](https://lucide.dev/), Next.js Image Optimization |
| **Forms** | [EmailJS](https://www.emailjs.com/) (Direct secure browser dispatch) |
| **Deployment** | [Cloudflare Pages](https://pages.cloudflare.com/) with custom headers and route rules |
| **Compliance** | RFC 9116 `security.txt`, Schema.org JSON-LD Person & WebSite entities |

---

## Security & Cloudflare Hardening

The repository enforces production web security best practices:

- **HSTS (HTTP Strict Transport Security)**: `Strict-Transport-Security: max-age=31536000; includeSubDomains; preload` configured via `public/_headers`.
- **Content Protection**: `X-Frame-Options: SAMEORIGIN` and `X-Content-Type-Options: nosniff`.
- **Vulnerability Disclosure Policy**: Located at `/.well-known/security.txt` and `/security.txt` conforming to RFC 9116.
- **Route Isolation**: `public/_routes.json` bypasses worker execution for static assets, sitemaps, web manifests, and security metadata.

---

## Local Development

### Prerequisites

- **Node.js**: v18.18+ or v20+
- **npm**: v9+

### Setup

```bash
# Clone the repository
git clone https://github.com/hammad986/Hammad-Portfolio.git
cd Hammad-Portfolio

# Install dependencies
npm install

# Start local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Optional: Contact Form Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

### Static Production Build

```bash
npm run build
```

The fully static site is compiled to the `out/` directory ready for deployment on Cloudflare Pages, GitHub Pages, Vercel, or any CDN.

---

## Deployment to Cloudflare Pages

This site is pre-configured for continuous deployment with Cloudflare Pages:

1. In the Cloudflare Dashboard, navigate to **Workers & Pages → Create Application → Pages → Connect to Git**.
2. Select `hammad986/Hammad-Portfolio`.
3. Configure the build parameters:
   - **Framework preset**: `Next.js (Static HTML Export)` or `None`
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
   - **Root directory**: `/`
4. In Environment variables, set `NODE_VERSION` to `20`.
5. Deploy.

The repository includes `.node-version`, `.nvmrc`, `public/_headers`, and `public/_routes.json` for seamless zero-configuration Cloudflare Pages deployments.

---

## Contact & Profiles

- **Website**: [hammad986.me](https://hammad986.me)
- **Email**: [mdhammad2906@gmail.com](mailto:mdhammad2906@gmail.com)
- **LinkedIn**: [linkedin.com/in/hammad986](https://www.linkedin.com/in/hammad986/)
- **GitHub**: [@hammad986](https://github.com/hammad986)
- **Hugging Face**: [huggingface.co/hammad986](https://huggingface.co/hammad986)
- **LeetCode**: [leetcode.com/u/hammad986](https://leetcode.com/u/hammad986/)
- **Kaggle**: [kaggle.com/mdhamd](https://www.kaggle.com/mdhamd)
- **Instagram**: [@mud_.hammad](https://www.instagram.com/mud_.hammad)

---

## License

MIT License © 2026 Muhammed Hammad.
