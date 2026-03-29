# St. Dionysios Greek Orthodox Church Website

React site for **St. Dionysios Greek Orthodox Christian Church** in Overland Park, Kansas (Vite, TypeScript, React Router). The design follows the parish’s Greek Orthodox Archdiocese (GOARCH) styling and content patterns.

## Features

- **Home** — Welcome and parish context (Metropolis of Denver, GOARCH); hero with **Our services** and **Live stream** (YouTube); welcome card to watch services on YouTube; **divine service schedule**; **upcoming events** with a link to the full calendar; **New to Orthodoxy** with a link to GOARCH resources; **Join us** closing section.
- **Calendar** (`/calendar`) — Embedded **Google Calendar** for liturgical and parish events; **Subscribe** to add the calendar in Google Calendar; **desktop and other apps** with `.ics` download, `webcal` (e.g. Apple Calendar), and **Outlook on the web** subscription links.
- **Clergy** (`/clergy`) — Clergy profiles and photos.
- **Contact** (`/contact`) — Parish contact messaging; **newsletter signup** (external); **Google Maps** embed for the church address.
- **Giving** (`/giving`) — Online giving via **Servant Keeper** (donate link and help video); **Text to give** details at `/giving/texting` (with `/texting` redirecting there).

Shared **header** (navigation with in-page anchors on the home page) and **footer** (address, phone, email) appear on all routes. External URLs (social, maps, calendar feeds, giving) are centralized in `src/config/constants.ts`.

## Development

Requires **Node.js** and npm. From the project root:

| Command | Description |
|---------|-------------|
| `npm install` | Install dependencies |
| `npm run dev` | Start Vite dev server with hot reload (default: `http://localhost:5173`) |
| `npm run build` | Type-check (`tsc -b`) and produce production assets in `dist/` |
| `npm run preview` | Serve the `dist/` build locally to verify production output |
| `npm run lint` | Run ESLint |

## Project layout

| Path | Purpose |
|------|---------|
| `index.html` | Vite entry HTML |
| `public/` | Static assets served at URL root (e.g. `/images/`) |
| `src/main.tsx` | App bootstrap, router shell |
| `src/App.tsx` | Route definitions |
| `src/styles/` | Global and app-level CSS (`global.css`, `app.css`) |
| `src/components/` | Shared layout UI (header, footer) |
| `src/layouts/` | Route layouts (`SiteLayout`) |
| `src/pages/` | Page components per route |
| `src/config/` | App configuration and external URLs (`constants.ts`) |
| `vite.config.ts` | Vite + React plugin |
| `eslint.config.js` | ESLint (flat config) |
