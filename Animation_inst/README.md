# Mainframe(R) — Hero Landing Page

Full-screen hero for the creative agency "Mainframe", built with React + TypeScript + Vite + Tailwind CSS v4.

## Run

```bash
npm install
npm run dev
```

## Structure

| File | Purpose |
| --- | --- |
| `index.html` | Loads the HelveticaNowDisplay heading + body webfonts |
| `src/index.css` | Tailwind import, `--font-heading` / `--font-body` vars, `blink` keyframes |
| `src/components/BackgroundVideo.tsx` | Fixed full-screen video, scrubbed by horizontal mouse movement |
| `src/components/Navbar.tsx` | Fixed navbar, desktop links + CTA, mobile hamburger and overlay |
| `src/components/Hero.tsx` | Blurred intro label, typewriter line, action pills |
| `src/hooks/useTypewriter.ts` | Character-by-character reveal hook |

## Video scrubbing

The video never autoplays. A `mousemove` listener on `window` tracks `prevX`, turns the frame
delta into a time offset — `(delta / window.innerWidth) * 0.8 * video.duration` — clamps the
running target to `[0, duration]` and seeks via `video.currentTime`. The `onSeeked` handler
re-issues the seek only if the target has drifted, which keeps the decoder from being flooded.
