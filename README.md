# St. Dionysios Greek Orthodox Church Website

React site for St. Dionysios Greek Orthodox Christian Church (Vite, TypeScript, React Router).

## Project layout

| Path | Purpose |
|------|---------|
| `index.html` | Vite entry HTML |
| `public/` | Static assets served at URL root (e.g. `/images/priest.JPG`) |
| `src/main.tsx` | App bootstrap, router shell |
| `src/App.tsx` | Route definitions |
| `src/styles/` | Global and app-level CSS (`global.css`, `app.css`) |
| `src/components/` | Shared layout UI (header, footer) |
| `src/layouts/` | Route layouts (`SiteLayout`) |
| `src/pages/` | Page components per route |
| `src/config/` | App configuration and external URLs (`constants.ts`) |
| `vite.config.ts` | Vite + React plugin |
| `eslint.config.js` | ESLint (flat config) |
