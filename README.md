# 🎛️ Granulizer Web

A browser-based granular synthesis app built with [Next.js](https://nextjs.org/), [Tone.js](https://tonejs.github.io/), and modern UI tools. Experiment with creative audio manipulation and granular sound design — entirely in the browser.

## 🚀 Features

- **Granular Synthesis** - Manipulate audio samples with grain size, overlap, and playback controls
- **Real-time Controls** - Adjust parameters in real-time with intuitive UI controls
- **Sample Loading** - Load and process your own audio samples
- **Modern UI** - Built with Tailwind CSS and Radix UI components

## 🛠️ Tech Stack

- **Next.js** - React framework with App Router
- **Tone.js** - Web Audio framework for synthesis
- **Tailwind CSS** - Utility-first styling
- **Radix UI** - Accessible UI components
- **React Knob** - Rotary controls for audio parameters

## 🚀 Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Usage

1. Navigate to the grain player page
2. Click "Play" to start playback
3. Adjust the controls to manipulate the sound:
   - Grain Size: Controls the length of each grain
   - Overlap: Determines how much grains overlap
   - Playback Rate: Adjusts the speed of playback
   - Detune: Modifies the pitch in cents
   - Loop Start/End: Sets the loop points in the sample

## 🎵 Audio Samples

Place your audio samples in the `public/samples` directory. The app currently supports:
- WAV files
- MP3 files
- Other browser-supported audio formats

## 📚 Notes

- Audio playback requires user interaction (browser autoplay policy)
- The app uses the Web Audio API through Tone.js
- All processing happens in real-time in the browser

## 📄 License

MIT

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
