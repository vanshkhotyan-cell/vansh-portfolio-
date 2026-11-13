# Vansh Khotyan — Personal Portfolio

A cinematic, high-performance "Scrollytelling" personal portfolio website for **Vansh Khotyan**, Data Analyst Intern and B.Tech (Data Science) student at Teerthanker Mahaveer University.

Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**, powered by a scroll-scrubbed image sequence on an **HTML5 Canvas**.

---

## ⚡ Tech Stack & Architecture

- **Next.js 14 (App Router)**: Fast, modern React server components with static generation.
- **Framer Motion**: Smooth scroll tracking via `useScroll`, `useTransform`, and spring-damped physics via `useSpring`.
- **HTML5 Canvas**: Smooth 60fps image scrubbing on a sticky `500vh` scroll track without `<video>` overhead or jitter.
- **Preloader & Cover Math**: High-efficiency WebP decoding (`img.decode()`), custom aspect ratio cover calculation, and device pixel ratio capping (`dpr <= 2`).
- **Typography & Styling**: `Inter` for body copy, `Space Grotesk` for display headings via `next/font/google`, with a custom dark glassmorphism system and subtle film grain overlay.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser.

### 3. Build for Production
```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
├── app/
│   ├── globals.css         # Design system tokens (--bg, glassmorphism, film grain)
│   ├── layout.tsx          # Font loading, SEO Open Graph metadata, navigation
│   └── page.tsx            # Main page assembly
├── components/
│   ├── ScrollyCanvas.tsx   # 500vh sticky scroll controller & HTML5 Canvas renderer
│   ├── Overlay.tsx         # Parallax narrative typography layered over the canvas
│   ├── Loader.tsx          # Minimal frame preloader with cyan progress bar
│   ├── Navbar.tsx          # Floating glass header with availability pill
│   ├── Projects.tsx        # Bento-grid selected work cards
│   ├── About.tsx           # Bio narrative & certified stat tiles
│   ├── Skills.tsx          # 3-tier capability matrix (no fake percentages)
│   ├── Experience.tsx      # Vertical internship & education timeline
│   ├── BeyondCode.tsx      # Space tech, hardware ideation, NCC, quizzing, chess
│   ├── Contact.tsx         # Fast recruiter conversion (email copy, LinkedIn, GitHub)
│   └── Footer.tsx          # Minimal footer with location and credits
├── data/                   # Decoupled content modules for simple maintenance
│   ├── profile.ts
│   ├── projects.ts
│   ├── skills.ts
│   ├── experience.ts
│   └── beyondCode.ts
├── lib/
│   └── frames.ts           # Programmatically generated frame index list
└── public/
    ├── sequence/           # 25 WebP sequence frames (720x1280)
    ├── assets/             # Abstract artwork thumbnails, OG banner, logos, noise
    ├── favicon.svg & .ico
    └── resume.pdf          # Professional resume document
```

---

## 🚢 Deploying to Vercel

The repository is configured for zero-config Vercel deployment:
1. Push this repository to GitHub (`github.com/vanshkhotyan-cell/portfolio`).
2. Import the repository into your Vercel Dashboard.
3. Framework preset: **Next.js** (detected automatically).
4. Deploy!
