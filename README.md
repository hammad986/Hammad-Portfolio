# Muhammed Hammad | AI/ML Engineer and Full-Stack Developer

[![Live Portfolio](https://img.shields.io/badge/Live%20Portfolio-hammad986.dpdns.org-00F2FE?style=for-the-badge&logo=googlechrome&logoColor=black)](https://hammad986.dpdns.org)
[![Cloudflare Pages](https://img.shields.io/badge/Deployed%20On-Cloudflare%20Pages-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)](https://hammad986.dpdns.org)
[![Next.js 15](https://img.shields.io/badge/Next.js%2015-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React%2019-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript%205-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-00F5A0.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

---

## Overview

> **Live website:** [https://hammad986.dpdns.org](https://hammad986.dpdns.org)
> **Role:** AI/ML Engineer and Full-Stack Developer
> **Status:** Open to full-time and contract roles

This repository contains the production source for the portfolio of Muhammed Hammad (hammad986). It is a statically exported Next.js site built for static hosting, semantic markup, and structured SEO data.

---

## Pages

```
/
├── /              Home overview (hero, highlights, top projects and credentials)
├── /projects      Production builds, case studies, and architecture diagrams
├── /certifications Credential document library with keyword search and document viewer
├── /experience    Career and internship timeline
├── /about         Systems philosophy and interactive AI pipeline simulator
├── /contact       Direct contact channels and enquiry form
├── /privacy       Privacy policy
└── /terms         Terms and conditions
```

---

## Features

- **Portfolio FAQ**: transparent local question search, without an AI model or RAG backend.
- **AI Pipeline Simulator**: an interactive multi-agent reasoning playground with execution steps and latency readouts.
- **Credential document library**: searchable catalog of credentials with an in-browser PDF and image viewer.
- **Production Case Studies**: problem, solution, outcome, and system architecture for each project.
- **3D WebGL scene**: a Three.js scene positioned so it never overlaps the primary content.
- **Command palette**: keyboard-driven navigation via `Cmd+K` / `Ctrl+K`.
- **Developer CLI**: an in-browser terminal emulator supporting `help`, `skills`, `projects`, `certs`, `hire`, and `clear`.
- **Grok Bot demo**: an interactive, dependency-free procedural SVG avatar engine driven by a compact JSON export.
- **Legal pages and favicon**: privacy policy, terms and conditions, and a generated SVG favicon.
- **Responsive layout**: tested from small mobile widths through to large desktop displays.
- **Reduced motion support**: scroll and animation behaviors respect the user's operating system preference.

---

## Tech stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router, static export `output: "export"`)
- **Core library**: [React 19](https://react.dev/)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **3D and WebGL**: [Three.js](https://threejs.org/), [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber), [@react-three/drei](https://github.com/pmndrs/drei)
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/), `tailwind-merge`, `clsx`
- **Animation**: [Framer Motion](https://www.framer.com/motion/), [GSAP](https://greensock.com/gsap/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Forms**: [EmailJS](https://www.emailjs.com/) (client-side dispatch)

---

## Deployment (Cloudflare Pages)

This project uses static export (`output: "export"` with `trailingSlash: true`). In the Cloudflare Pages dashboard:

1. Go to **Workers & Pages → Create application → Pages → Connect to Git**.
2. Select the repository.
3. Configure the build:
   - **Framework preset**: `None` (or `Next.js (Static HTML Export)`)
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
   - **Root directory**: `/`
4. Add an environment variable `NODE_VERSION` set to `20`.
5. Save and deploy.

The repository includes `.node-version`, `.nvmrc`, `public/_headers`, and `public/_routes.json` for Cloudflare Pages compatibility.

---

## Local development

### Prerequisites

- **Node.js**: v18.18+ or v20+
- **npm**

### Setup

```bash
git clone https://github.com/hammad986/Hammad-Portfolio.git
cd Hammad-Portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Contact form environment variables (optional)

Create a `.env.local` file:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

### Production build

```bash
npm run build
```

The static build is written to `out/`.

---

## Repository structure

```text
├── app/
│   ├── layout.tsx              Root layout, metadata, and structured data
│   ├── page.tsx                Home overview page
│   ├── icon.svg                Site favicon
│   ├── globals.css             Global styles and theme variables
│   ├── projects/page.tsx       Projects and case studies
│   ├── certifications/page.tsx Credentials vault
│   ├── experience/page.tsx     Career timeline
│   ├── about/page.tsx          Systems architecture and AI simulator
│   ├── contact/page.tsx        Contact channels
│   ├── privacy/page.tsx        Privacy policy
│   ├── terms/page.tsx          Terms and conditions
│   ├── sitemap.ts              Generated sitemap
│   └── robots.ts               Generated robots rules
├── components/
│   ├── grok-bot/               Grok Bot procedural avatar engine and React wrapper
│   ├── sections/               Modular page sections
│   └── ...                      Modals, header, and interactive widgets
├── lib/
│   └── data.ts                 Single source of truth for projects, credentials, and experience
├── public/
│   ├── assets/                 Images, screenshots, and certificate documents
│   ├── _headers                Cloudflare Pages security and caching headers
│   └── _routes.json            Cloudflare Pages route rules
├── next.config.ts              Static export configuration
└── README.md
```

---

## Contact

- **Website**: [hammad986.dpdns.org](https://hammad986.dpdns.org)
- **Email**: [mdhammad2906@gmail.com](mailto:mdhammad2906@gmail.com)
- **LinkedIn**: [linkedin.com/in/muhammed-hammad-42659726a](https://www.linkedin.com/in/muhammed-hammad-42659726a)
- **GitHub**: [@hammad986](https://github.com/hammad986)
- **Instagram**: [@mud_.hammad](https://www.instagram.com/mud_.hammad)
- **Phone**: `+91 6369740522`

---

## License

MIT License © 2026 Muhammed Hammad.

## Audit improvements and validation

See `docs/CONFIRMATIONS.md` for unresolved personal details and `docs/DEPENDENCY-REVIEW.md` for dependency decisions. Individual project pages use static `generateStaticParams`, so the existing Cloudflare static-export deployment remains supported.

```bash
npm ci
npm run lint
npx tsc --noEmit
npm run build
npm test
npm audit
```

The Portfolio FAQ is local search, not a model or RAG service. The architecture walkthrough is illustrative. Credential PDF previews show only the first page; original documents remain downloadable. Optional animated skills are loaded on demand. Sound is off until enabled, with a local saved preference.

Do not assume `npm run start` serves the exported production site. For local production inspection, serve `out/` with a static HTTP server. No deployment occurs during the validation commands above. Git-connected production and preview rules must be reviewed before pushing changes.
