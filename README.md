# 🎛️ granulizer-web

A browser-based granular synthesis app built with [Next.js](https://nextjs.org/), [Tone.js](https://tonejs.github.io/), and modern UI tools like Tailwind CSS, Radix UI, and React Knob. The goal is to experiment with creative audio manipulation and granular sound design — entirely in the browser.

---

## 🚀 Tech Stack

- **Next.js (App Router)** – Modern React framework for scalable frontend and future backend API routes.
- **Tone.js** – Web Audio-based framework for synthesis and scheduling (GrainPlayer, Synths).
- **Tailwind CSS** – Utility-first styling framework.
- **Radix UI** – Accessible UI primitives for building polished interfaces.
- **React Knob** – Headless rotary knobs for audio parameters.
- **Motion** – Simple and performant animations using Web Animations API.
- **(Optional)** NexusUI – Canvas-based audio controls (XY pads, multislider, etc.).

---

## 🧪 Getting Started

```bash
# Install dependencies
npm install

# Run the development server
npm run dev

# Then open the app in your browser:
http://localhost:3000
```


## 📦 Features (WIP)

- ✅ Basic Tone.js synth with button-triggered playback
- ⏳ Granular sample playback using GrainPlayer
- ⏳ UI controls for grain size, pitch, playback position (knobs, sliders, etc.)
- ⏳ File loader for local audio samples
- ⏳ Waveform viewer (planned: WaveSurfer or similar)
- ⏳ Preset saving (future fullstack extension)

---

## 🛠️ Notes

- Audio playback must begin from user interaction (`await Tone.start()`), per browser autoplay policies.
- Uses the App Router introduced in Next.js 13+.
- UI animation uses `motion.animate()` from [Motion.dev](https://motion.dev/).
- Styling is handled with Tailwind CSS and Radix UI components.





---
---
---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
