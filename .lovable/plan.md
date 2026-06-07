## Landing page for Alexa — Adaptive CrossFit Games

A single-page, light & editorial site celebrating Alexa making the Adaptive CrossFit Games. Big serif/sans typography, lots of whitespace, subtle motion, restrained palette with one accent color.

### Sections (top to bottom)

1. **Hero**
   - Large editorial headline ("Alexa is going to the Games.") with a short supporting line.
   - Featured portrait image of Alexa.
   - **Live countdown scoreboard overlay** pinned over the hero image — days / hours / minutes / seconds ticking down to **July 24, 2026**, plus the Games location label underneath. Styled like a scoreboard chip floating on the image.
   - Two primary CTAs: **Donate** and **Get a T-Shirt** (Google Form).

2. **Video feature**
   - Single poster frame, large play button. Click opens a **modal lightbox** (shadow-box) that plays the embedded video. Closes on Esc, backdrop click, or X. Video URL is a swappable placeholder.

3. **Photo collage**
   - Editorial asymmetric collage of past competition / training photos (placeholders for now, easy to swap). Subtle parallax / fade-in on scroll.

4. **Story / bio**
   - Short paragraph about Alexa and the road to the Games. Pull quote treatment.

5. **Support Alexa (CTA section)**
   - **Donate** (primary button — link placeholder)
   - **Cash App** and **Venmo** buttons side-by-side (handle placeholders)
   - **Sign up for a t-shirt** → Google Form (link placeholder)
   - All links left as `#` placeholders with a clear `TODO` comment so you can drop them in later.

6. **Footer** — minimal: name, Games date + location, small thank-you line.

### Motion / "fresh" touches
- Hero headline: staggered word fade-up on load.
- Countdown digits: smooth flip/slide when they change.
- Scroll-triggered fade-up for sections and collage images.
- Buttons: subtle hover lift + underline-grow link style.
- Restrained — no animation on every element.

### Design system
- Light editorial palette: warm off-white background, near-black text, one accent (likely a deep red or competition-orange — final value picked during build).
- Type pairing: editorial serif display + clean sans body.
- All colors as semantic tokens in `src/styles.css` (oklch), no hard-coded hex in components.

### Technical notes
- New route: replace `src/routes/index.tsx` content with the landing page.
- Components: `Hero`, `CountdownScoreboard` (client-side `useEffect` interval to July 24, 2026), `VideoLightbox` (shadcn `Dialog`), `Collage`, `Story`, `SupportCTA`, `SiteFooter`.
- Hero portrait + collage images generated via `imagegen` (editorial sports photography style) and stored under `src/assets/`.
- Video: `<iframe>` placeholder inside the Dialog; single `VIDEO_URL` constant at the top of the component for easy swap.
- SEO: route `head()` with title "Alexa — Adaptive CrossFit Games 2026", matching description, og tags, and og:image set to the hero portrait.
- Countdown target date defined as a single constant; falls back to "It's Games Day!" once the date passes.

### What's left as a placeholder for you
- Video URL (constant at top of `VideoLightbox`)
- Donate URL, Cash App handle/link, Venmo handle/link, Google Form URL (constants at top of `SupportCTA`)
- Real photos of Alexa (swap the generated placeholders in `src/assets/`)
