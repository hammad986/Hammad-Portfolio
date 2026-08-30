# Muhammed Hammad S | AI/ML Engineer Portfolio

[![Cloudflare Pages](https://img.shields.io/badge/Deploy-Cloudflare%20Pages-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)](https://hammad.dpdns.org)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

### 📸 Portfolio Preview

> **Live Website:** [hammad.dpdns.org](https://hammad.dpdns.org)  
> **Role:** AI/ML Engineer & Generative AI Developer  
> **Status:** Open to AI/ML and Full-Stack Engineering Opportunities

This is the source code for my premium, portfolio-grade web presence. Designed and engineered for **maximum performance, accessibility, and modularity**, this platform acts as the command center for my deployed AI products, automation tools, and research.

---

## 🚀 Features

- **Next-Generation UI/UX**: Dark-mode dominant "Aetherion Command Center" aesthetic with complex radial gradients, subtle glassmorphism, and hardware-accelerated Framer Motion animations.
- **Zero Layout Shift (CLS)**: Pre-calculated dimensions and optimized flex layouts for rotating text and dynamic elements.
- **Universal Static Export**: Fully portable `output: 'export'` configuration ensuring perfect compatibility with Cloudflare Pages, Netlify, and any static host.
- **Extreme Image Optimization**: All photographic assets strictly use `.webp` resulting in a ~98% reduction in image payload size.
- **SEO & Metadata**: Complete JSON-LD Website and Person structured data, optimized Open Graph and Twitter Cards, explicit canonical URLs, and `manifest.webmanifest`.
- **Bulletproof Security**: Implements `rel="noopener noreferrer"` across all external links and strictly defined `X-Frame-Options` and `Content-Security-Policy` headers.

---

## 🛠 Tech Stack

- **Core**: Next.js 15 (App Router), React 19, TypeScript
- **Styling**: Tailwind CSS v3, Tailwind Merge, CLSX
- **Animations**: Framer Motion, GSAP, React Three Fiber
- **Icons**: Lucide React
- **Services**: EmailJS (Client-side Form Handling)
- **Deployment**: Cloudflare Pages / Netlify Ready

---

## 📂 Folder Structure

```text
├── app/                  # Next.js App Router root (layout, page, SEO metadata)
├── components/           # React components
│   ├── sections/         # Modular portfolio sections (Hero, About, Projects, etc.)
│   └── ui/               # Reusable UI primitives (Buttons, Inputs)
├── lib/                  # Shared data and utility functions (data.ts)
├── public/               # Static assets, WebP images, and PWA manifest
├── next.config.ts        # Next.js static export configuration
└── netlify.toml          # Netlify-specific headers and build overrides
```

---

## ⚡ Performance & Lighthouse Goals

This project targets a **4x100** Lighthouse score.
To achieve this, the architecture utilizes:
1. **Fully Static Export** (No server round-trips for HTML generation).
2. **Aggressive WebP Compression** (Converting heavy 5MB+ assets into ~15KB payloads).
3. **Local Font Loading** via `next/font/google` (`Inter` font) eliminating render-blocking requests.

---

## 🚢 Deployment Guide

This project is built for universal static deployment and natively avoids Server Side Rendering (SSR) lock-in.

### 🌩 Cloudflare Pages (Recommended)
Cloudflare Pages offers lightning-fast edge delivery for static exports.
1. Connect your GitHub repository to Cloudflare Pages.
2. Set **Framework Preset** to `Next.js`.
3. Set **Build Command** to `npm run build`.
4. Set **Build Output Directory** to `out`.
5. Cloudflare will automatically read the `public/_headers` file for production security.

### 💠 Netlify
The repository includes a `netlify.toml` file that guarantees zero-config deployment.
1. Import the project into Netlify.
2. The `netlify.toml` automatically configures the build command (`npm run build`) and publish directory (`out`).

---

## 💻 Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/hammad986/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Environment Variables**
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` to view the application.

5. **Build for Production**
   ```bash
   npm run build
   # Outputs the optimized static site to the /out directory
   ```

---

## 📫 Contact

For engineering inquiries, collaboration, or to view the live AI systems:

- **Portfolio**: [hammad.dpdns.org](https://hammad.dpdns.org)
- **GitHub**: [@hammad986](https://github.com/hammad986)
- **LinkedIn**: [Muhammed Hammad](https://www.linkedin.com/in/muhammed-hammad-42659726a)

---

## 📄 License

This project is proprietary and intended for personal portfolio use.
