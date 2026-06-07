// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  // Deploy target: Vercel. An explicit `nitro` option is required — without it the
  // wrapper skips the nitro deploy plugin entirely outside a Lovable sandbox (so
  // nothing serves and every route 404s). The wrapper also defaults the preset to
  // cloudflare-module and forces output into dist/. We pin the `vercel` preset and
  // restate nitro's own vercel output paths so the wrapper's dist/ defaults don't
  // clobber Vercel's Build Output API layout (.vercel/output).
  nitro: {
    preset: "vercel",
    output: {
      dir: "{{ rootDir }}/.vercel/output",
      serverDir: "{{ output.dir }}/functions/__server.func",
      publicDir: "{{ output.dir }}/static/{{ baseURL }}",
    },
  },
});
