# Kumud Patkar — Portfolio

A one-page, vintage editorial–style portfolio built with React, Vite, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Before you deploy

1. **Photo** — drop a portrait into `public/photo.jpg` (a 4:5 portrait crop looks best). Until then, the hero shows a "KP" monogram in place of the photo.
2. **Resume** — add your PDF at `public/resume.pdf`. Both "Resume ↓" buttons link there.
3. **Deploy** — this is a standard Vite app, so it deploys as-is to Vercel, Netlify, or GitHub Pages (`npm run build` → publish the `dist/` folder).

## Structure

```
src/
  components/
    Navbar.jsx        sticky nav with section links
    Hero.jsx           name lockup, photo frame, stamp, badge, stats
    ScrollIndicator.jsx
    About.jsx
    Education.jsx      vertical timeline
    Skills.jsx          grouped skill lists
    Projects.jsx        magazine-style hover-reveal cards
    Contact.jsx          terminal-style animated contact block
    Footer.jsx
    CustomCursor.jsx    soft glow cursor (desktop only)
  index.css            paper grain, grid overlay, global type
  App.jsx              page composition + parallax glow
```

## Notes on the design brief

The brief asked for both a "vertical education and project timeline" (item 4) and
"magazine-style project cards with hover-reveal animations" (item 5). Since a single
page can't cleanly be both a timeline and a card grid for the same content, this build
resolves it as: **Education** uses the vertical timeline, and **Projects** uses the
magazine-style hover-reveal cards. Adjust `Education.jsx` if you'd rather timeline the
projects instead.
