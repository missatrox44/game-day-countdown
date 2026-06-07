# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A single-page donation/support site for Alexa, an adaptive CrossFit athlete who qualified for the 2026 Adaptive CrossFit Games. Started from Lovable's TanStack Start template. The entire page lives in `src/routes/index.tsx`; placeholder link constants (`DONATE_URL`, `CASHAPP_URL`, `VENMO_URL`, `TSHIRT_FORM_URL`) at the top of that file must be replaced before launch.

## Commands

Uses **bun** (not npm/yarn — `bun.lock`, `bunfig.toml`).

```bash
bun install        # install deps
bun run dev        # dev server (vite dev)
bun run build      # production build
bun run lint       # eslint
bun run format     # prettier --write .
```

There are no tests.

### Install guard (common source of install errors)

`bunfig.toml` sets `minimumReleaseAge = 86400` — bun refuses to install package versions published less than 24h ago (supply-chain guard). If an install fails on a too-new version, either pin an older version or add the package to `minimumReleaseAgeExcludes` — but per the comment in `bunfig.toml`, confirm with the user before adding any exclusion.

## Architecture

**TanStack Start** (SSR) + React 19 + TanStack Router (file-based) + Tailwind CSS v4 + shadcn/ui.

- **Routing**: file-based in `src/routes/` — see `src/routes/README.md` for conventions (TanStack, *not* Next.js: no `src/pages/`, no `app/layout.tsx`). `src/routeTree.gen.ts` is auto-generated; never edit it. `src/routes/__root.tsx` is the app shell (head tags, Google Fonts links, error/404 boundaries) and must keep its `<Outlet />`.
- **Vite config**: `vite.config.ts` wraps `@lovable.dev/vite-tanstack-config`, which already bundles tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro, etc. Do NOT add those plugins manually — duplicates break the app. Extra config goes through `defineConfig({ vite: { ... } })`.
- **SSR entry**: `src/server.ts` wraps TanStack's server entry to catch errors h3 would otherwise swallow, rendering `src/lib/error-page.ts` instead. Wired via `tanstackStart.server.entry` in vite.config.
- **Server logic**: use `createServerFn` (example in `src/lib/api/example.functions.ts`), not separate API routes. Server-only code goes in `.server.ts` files (e.g. `src/lib/config.server.ts`). Target is Cloudflare Workers: read `process.env` inside functions/handlers, never at module scope. Public config uses `import.meta.env.VITE_*`.

## Styling

Tailwind v4 — there is **no `tailwind.config`**; all theming lives in `src/styles.css`:

- Design tokens are oklch CSS variables in `:root` (light) and `.dark`, mapped to Tailwind via the `@theme inline` block. Change the color scheme by editing these variables, not by hardcoding colors in components.
- Fonts: Big Shoulders Display/Stencil (display/stencil), Hanken Grotesk (body), Geist Mono (numerals) — loaded via Google Fonts `<link>` in `__root.tsx`, exposed as `font-display`, `font-stencil`, `font-sans`, `font-mono`.
- Custom animation utilities (`animate-word-rise`, `animate-fade-up`, `animate-ken-burns`, `animate-flip-in`, `animate-marquee`) and `link-underline` are defined with `@utility` in `styles.css`. Scroll-triggered reveals use the `Reveal` IntersectionObserver wrapper in `index.tsx`.
- Images live in `src/assets/` and are imported as modules (`import heroImg from "@/assets/hero.jpg"`), which lets Vite hash/optimize them. Don't use `public/` for page images.
- shadcn/ui components are in `src/components/ui/` (most are unused boilerplate); bespoke components (`CountdownScoreboard`, `VideoLightbox`) are in `src/components/`.
