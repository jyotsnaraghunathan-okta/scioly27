# Scioly27

Science Olympiad study app for two Division B events in the 2026-2027 season:

- 🪐 **Solar System** — habitability within and beyond the Solar System
- 🌊 **Dynamic Planet** — Earth's Fresh Waters

Study guides, flashcards (spaced repetition), a glossary, practice questions, generated tests, and progress tracking, all gated behind Okta sign-in.

## Stack

React 19 + Vite 7 + Tailwind v4, React Router v7, Okta (`@okta/okta-auth-js` / `@okta/okta-react`), Recharts for progress charts.

## Setup

```bash
npm install
npm run dev
```

### Okta

This app reuses the same Okta org and OIDC web application as `designer-genes` (`src/okta.js`). Before running against a new origin (a new dev port, or a production deploy), add that origin's `/login/callback` URL to the Okta app's **Sign-in redirect URIs** in the Okta admin console — e.g. `http://localhost:5173/login/callback` for local dev.

## Content depth

Each topic ships with a seed set of definitions, flashcards, questions, explanations, and free-response items (not exhaustive) — the data layer under `src/data/` is organized per-topic so more content can be added the same way at any time.

## Deploy

`render.yaml` deploys this as a static site on Render (`npm run build` → `dist/`).
