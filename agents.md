# agents.md

## Project

Hackathon landing page for a project about **gamification of everything**.

Our project is Lovely - gamification platfrom

This repository contains a **single-page marketing website** that presents:

The goal is to make the project easy to understand in under a minute and visually memorable.

---

## Product context


---

## Tech stack

Use the following stack unless there is a very strong reason not to:

* **React**;
* **TypeScript**;
* **Vite**;
* Builiful UI library;
* no backend;
* deployment target: **Heroku**.

### Rules

* Do not introduce Next.js.
* Do not add server-side logic.
* Do not add TanStack Query or API layers, because there is no backend in this repo.
* Prefer Mantine components and theming over custom heavy styling.
* Keep dependencies minimal.

---

## Main objective for agents

When making changes in this repository, optimize for the following priorities:

1. **Clarity of message** — visitors should instantly understand what the product is.
2. **Strong visual impression** — it should feel like a polished hackathon startup landing.
3. **Simplicity** — avoid overengineering.
4. **Responsiveness** — mobile-first, then tablet and desktop.
5. **Extensibility** — the codebase should stay easy to expand.

---

## Design direction

### Visual style

Target style:

* modern startup landing page;
* bright and energetic;
* premium but lightweight;
* large typography;
* generous spacing;
* soft shadows;
* rounded cards and sections;
* subtle gradients / glow / blur backgrounds.

### Preferred palette direction

Use bright tech-oriented tones, especially combinations of:

* purple;
* blue;
* pink;
* indigo.

Do not make the interface look corporate-gray or overly formal.

### UX expectations

* The first screen must communicate the idea immediately.
* CTAs must be visible early.
* Sections should be easy to scan.
* Animations should be subtle and not block performance.
* Decorative effects should never hurt readability.

### Component approach

* Keep sections isolated and reusable.
* Split UI into small presentational components only when reuse is real.
* Avoid premature abstractions.
* Prefer readable code over clever code.

### Styling approach

* Use Mantine layout and typography primitives first.
* Use theme customization where appropriate.
* Add custom CSS only for effects Mantine does not cover cleanly.
* Avoid large global CSS files unless necessary.

### Responsiveness

* Design mobile-first.
* Ensure hero, cards, buttons, and spacing work well on small screens.
* Avoid dense multi-column layouts on mobile.

### Performance

* Keep bundle size reasonable.
* Avoid unnecessary animation libraries unless clearly useful.
* Avoid heavy images and decorative assets unless optimized.

---

## What agents should avoid

Do not:

* add backend code;
* add authentication;
* add CMS integration;
* add complex state management;
* add forms with real submission logic unless explicitly requested;
* introduce unnecessary libraries for routing, data fetching, or animation;
* create a multi-page app unless explicitly requested.

This is a landing page, not a full platform implementation.

---

## Output expectations

When generating code, prefer to provide:

* complete file structure;
* production-like but simple implementation;
* clean naming;
* ready-to-run local setup;
* Heroku-friendly configuration if needed.

If content is missing, make reasonable product-oriented assumptions and move forward without blocking on clarification.

---

## Definition of done

A good result in this repository means:

* the landing page looks polished;
* the project idea is understandable immediately;
* the code is clean and maintainable;
* the app runs locally without extra setup;
* the repo is easy to demo during a hackathon.
