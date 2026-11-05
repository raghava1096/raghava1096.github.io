# raghava1096.github.io

My resume as a small website. Live at https://raghava1096.github.io

## Stack

- React 18 + TypeScript, built with Vite
- Plain CSS, no UI library
- Deployed to GitHub Pages by a GitHub Actions workflow on every push to `main`

## How it's put together

```
src/
  data.ts          all the resume content (jobs, skills, stats)
  hooks.ts         small hooks: in-view, count-up, scroll progress, active section
  styles.css       all styles and animations
  components/
    Nav.tsx        sticky nav, active section underline, scroll progress bar, phone menu
    Hero.tsx       intro + rotating headline
    NodeField.tsx  canvas background: drifting nodes, links and packets
    Typer.tsx      types and deletes the rotating words
    Stats.tsx      numbers that count up when they scroll into view
    Highlights.tsx cards with a mouse-follow glow and tilt
    Experience.tsx timeline that fills as you scroll
    Skills.tsx     skill chips that pop in one after another
    Contact.tsx    copy-email button and links
    Reveal.tsx     fade-up wrapper used by most sections
```

To change content, edit `src/data.ts` only.

## Notes

- No animation library. Scroll effects use `IntersectionObserver`, the hero uses a `<canvas>` with `requestAnimationFrame`.
- The canvas stops drawing when the hero is off screen.
- If the visitor has "reduce motion" turned on, everything shows without animation.
- `base: './'` in `vite.config.ts` so the build works on any path.

## Run locally

```
npm install
npm run dev
```
