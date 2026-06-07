Update the landing page typography to use the requested Google Fonts families.

### Changes

1. **Google Fonts link (`src/routes/__root.tsx`)**
   Replace the existing Fraunces + Inter `<link>` with a Google Fonts URL that loads:
   - Big Shoulders Stencil (600–800 weights)
   - Big Shoulders Display (400–800 weights)
   - Hanken Grotesk (400–600 weights)
   - Geist Mono (400–600 weights, with tabular-nums support)

2. **CSS custom properties (`src/styles.css`)**
   - `--font-display`: `"Big Shoulders Display", ui-sans-serif, system-ui, sans-serif`
   - `--font-sans`: `"Hanken Grotesk", ui-sans-serif, system-ui, sans-serif`
   - Add `--font-mono`: `"Geist Mono", ui-monospace, monospace`

3. **Mono variable wiring**
   Add `--font-mono` to the `@theme inline` block so Tailwind utilities can pick it up.

4. **Countdown / stats mono usage**
   Update `CountdownScoreboard.tsx` (and any stat-line elements) to apply the mono font for numerals and labels.

5. **Cleanup**
   Remove any leftover `font-feature-settings` on `.font-display` that was specific to Fraunces.

No other visual or layout changes.