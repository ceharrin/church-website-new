import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./styles/global.css";
import App from "./App.tsx";

/** Matches Vite `base` (see `vite.config.ts`) for GitHub Pages subpaths */
function routerBasename(): string | undefined {
  const base = import.meta.env.BASE_URL;
  if (base === "/") return undefined;
  return base.endsWith("/") ? base.slice(0, -1) : base;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename={routerBasename()}>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
