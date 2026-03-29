import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/**
 * GitHub Pages project sites are served from `https://<user>.github.io/<repo>/`.
 * In GitHub Actions, `GITHUB_REPOSITORY` is `owner/repo` so we can set `base` automatically.
 * Override locally with `VITE_BASE_PATH=/your-repo/ npm run build`.
 */
export default defineConfig(() => {
  const repo = process.env.GITHUB_REPOSITORY?.split("/")[1];
  const base = process.env.VITE_BASE_PATH || (repo ? `/${repo}/` : "/");

  return {
    base,
    plugins: [react()],
  };
});
