import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, type ReactNode } from "react";
import { ArrowRight, Heart, Shirt, DollarSign } from "lucide-react";
import { CountdownScoreboard } from "@/components/CountdownScoreboard";
import { VideoLightbox } from "@/components/VideoLightbox";
import heroImg from "@/assets/alexa.jpg";
import overhead from "@/assets/overhead.jpg";
import squat from "@/assets/squat.jpg";
import wallBall from "@/assets/wall-ball.jpg";
import collage4 from "@/assets/collage-4.jpg";
import collage5 from "@/assets/collage-5.jpg";

const CASHAPP_URL = "https://cash.app/$alexaserret";
const VENMO_URL = "https://venmo.com/u/ALEXA-SERRET";
const ZELLE_HANDLE = "@ALEXA_SERRET"; // confirm with Alexa
const TSHIRT_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfQ5mayuU_ztpk4w0GBE2b8U-h7mWDeNOy3oU4Ak4M0T03ljw/viewform";
const LOCATION = "San José, CA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alexa — Adaptive CrossFit Games 2026" },
      {
        name: "description",
        content:
          "Alexa is going to the 2026 Adaptive CrossFit Games. Donate, grab a t-shirt, and follow her road to San José.",
      },
      { property: "og:title", content: "Alexa — Adaptive CrossFit Games 2026" },
      {
        property: "og:description",
        content:
          "Alexa is going to the 2026 Adaptive CrossFit Games. Donate, grab a t-shirt, and follow her road to San José.",
      },
      { property: "og:image", content: heroImg },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: Index,
});

function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.style.animationDelay = `${delay}ms`;
            el.classList.add("animate-fade-up");
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);
  return (
    <div ref={ref} className={`opacity-0 ${className}`}>
      {children}
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <SiteHeader />
      <Hero />
      <MarqueeBar />
      {/* <VideoSection /> */}
      <Collage />
      <Story />
      <SupportCTA />
      <SiteFooter />
    </div>
  );
}

function SiteHeader() {
  return (
    <header className="absolute top-0 inset-x-0 z-30">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 py-6 flex items-center justify-between">
        <a href="#top" className="font-display text-lg font-semibold tracking-tight">
          Alexa Serret<span className="text-primary">.</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {/* <a href="#video" className="link-underline hover:link-underline-hover hover:text-foreground transition">Video</a> */}
          <a href="#story" className="link-underline hover:link-underline-hover hover:text-foreground transition">Story</a>
          <a href="#support" className="link-underline hover:link-underline-hover hover:text-foreground transition">Support</a>
        </nav>
        <a
          href="#support"
          className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-4 py-2 text-sm font-medium hover:bg-foreground/90 transition"
        >
          Donate <Heart className="h-3.5 w-3.5" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  const words = ["Alexa", "is", "going", "to", "the", "Games."];
  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-32 pb-16 sm:pb-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-end">
          {/* Text */}
          <div className="lg:col-span-7 lg:pt-8">
            <p
              className="text-xs sm:text-sm uppercase tracking-[0.28em] text-primary font-medium opacity-0 animate-fade-up"
              style={{ animationDelay: "80ms" }}
            >
              Road to the 2026 Adaptive CrossFit Games
            </p>
            <p
              className="mt-2 text-xs sm:text-sm text-muted-foreground opacity-0 animate-fade-up"
              style={{ animationDelay: "120ms" }}
            >
              Moderate Division · Neuromuscular Impairment (Female)
            </p>
            <h1 className="mt-6 font-stencil font-black uppercase tracking-[-0.005em] text-foreground leading-[0.9] text-[3.5rem] sm:text-8xl lg:text-[8.5rem]">
              {words.map((w, i) => (
                <span key={i} className="inline-block overflow-hidden align-baseline mr-[0.14em]">
                  <span
                    className="inline-block animate-word-rise"
                    style={{ animationDelay: `${150 + i * 80}ms` }}
                  >
                    {w === "Games." ? <span className="text-primary font-stencil">Games.</span> : w}
                  </span>
                </span>
              ))}
            </h1>
            <p
              className="mt-7 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed opacity-0 animate-fade-up"
              style={{ animationDelay: "700ms" }}
            >
              After years of grit, setbacks, and PRs nobody saw coming, Alexa earned her
              spot on the floor. Help send her there — and grab the shirt while you're at it.
            </p>

            <div
              className="mt-9 flex flex-wrap items-center gap-3 opacity-0 animate-fade-up"
              style={{ animationDelay: "850ms" }}
            >
              <a
                href="#support"
                className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 text-sm font-medium shadow-[0_10px_30px_-10px_oklch(0.476_0.192_348/.6)] hover:shadow-[0_18px_40px_-12px_oklch(0.476_0.192_348/.7)] hover:-translate-y-0.5 transition-all"
              >
                Donate
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href={TSHIRT_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-card px-6 py-3.5 text-sm font-medium text-foreground hover:border-foreground/40 hover:-translate-y-0.5 transition-all"
              >
                <Shirt className="h-4 w-4" />
                Get a t-shirt
              </a>
            </div>
          </div>

          {/* Image + scoreboard */}
          <div className="lg:col-span-5 relative">
            <div
              className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-[0_60px_120px_-30px_rgba(0,0,0,0.45)] opacity-0 animate-fade-up"
              style={{ animationDelay: "300ms" }}
            >
              <img
                src={heroImg}
                alt="Alexa, adaptive CrossFit athlete"
                className="h-full w-full object-cover animate-ken-burns"
                width={1280}
                height={1600}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
            </div>

            {/* Scoreboard overlay */}
            <div
              className="absolute left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-auto lg:right-[-12%] -bottom-10 lg:-bottom-12 w-[88%] sm:w-[420px] opacity-0 animate-fade-up"
              style={{ animationDelay: "900ms" }}
            >
              <CountdownScoreboard location={LOCATION} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MarqueeBar() {
  const items = [
    "Adaptive CrossFit Games 2026",
    "Moderate — Neuromuscular Impairment",
    "San José, CA",
    "One goal · One team · One mission",
    "#TeamAlexa",
  ];
  const row = [...items, ...items, ...items];
  return (
    <div className="mt-24 sm:mt-28 lg:mt-20 border-y border-border/60 bg-surface overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee py-5">
        {row.map((label, i) => (
          <span key={i} className="flex items-center gap-6 px-6 font-display text-xl sm:text-2xl text-foreground/80">
            {label}
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          </span>
        ))}
      </div>
    </div>
  );
}

function VideoSection() {
  return (
    <section id="video" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <Reveal>
          <div className="flex items-end justify-between mb-8 sm:mb-10 gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-primary font-medium">Watch</p>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl font-semibold tracking-tight">
                A minute with Alexa.
              </h2>
            </div>
            <p className="hidden sm:block max-w-xs text-sm text-muted-foreground">
              Tap to play in full-screen. The best way to understand what this means.
            </p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <VideoLightbox />
        </Reveal>
      </div>
    </section>
  );
}

function Collage() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <Reveal>
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-primary font-medium">Reel</p>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl font-semibold tracking-tight">
                The work behind it.
              </h2>
            </div>
            <p className="hidden md:block max-w-xs text-sm text-muted-foreground">
              Moments from the gym floor, qualifiers, and the days nobody clapped for.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-6 grid-rows-2 gap-3 sm:gap-4 h-[520px] sm:h-[640px] lg:h-[720px]">
          <CollageTile src={overhead} alt="Overhead lift" className="col-span-3 row-span-2" delay={0} />
          <CollageTile src={squat} alt="Squat" className="col-span-3 row-span-1" delay={80} />
          <CollageTile src={wallBall} alt="Wall ball" className="col-span-3 sm:col-span-2 row-span-1" delay={160} />
          <CollageTile src={collage5} alt="Competition floor" className="col-span-1 row-span-1 hidden sm:block" delay={240} />
        </div>

        <div className="mt-3 sm:mt-4 grid grid-cols-6 gap-3 sm:gap-4 h-[200px] sm:h-[280px]">
          <CollageTile src={collage4} alt="Between rounds" className="col-span-2 row-span-1" delay={120} />
          <CollageTile src={collage5} alt="Scoreboard glow" className="col-span-4 row-span-1" delay={200} />
        </div>
      </div>
    </section>
  );
}

function CollageTile({
  src,
  alt,
  className = "",
  delay = 0,
}: {
  src: string;
  alt: string;
  className?: string;
  delay?: number;
}) {
  return (
    <Reveal delay={delay} className={`group relative overflow-hidden rounded-2xl bg-muted ${className}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
      />
    </Reveal>
  );
}

function Story() {
  return (
    <section id="story" className="py-24 sm:py-32 bg-surface border-y border-border/60">
      <div className="mx-auto max-w-3xl px-6 sm:px-10 text-center">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.28em] text-primary font-medium">Her story</p>
        </Reveal>
        <Reveal delay={100}>
          <blockquote className="mt-6 font-display text-3xl sm:text-5xl leading-[1.1] tracking-tight text-foreground">
            “I'm not here because it was easy. I'm here because I refused to put the
            bar down.”
          </blockquote>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-10 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Alexa has been chasing this floor for years — through injury, doubt, and
            the kind of early-morning sessions nobody posts about. In July she steps
            onto the biggest stage in adaptive CrossFit. Whatever you can give —
            money, a shirt order, a share — gets her there.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function SupportCTA() {
  return (
    <section id="support" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <Reveal>
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.28em] text-primary font-medium">Send her there</p>
            <h2 className="mt-4 font-display text-4xl sm:text-6xl font-semibold tracking-tight">
              Back Alexa.
            </h2>
            <p className="mt-5 mx-auto max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
              Help us represent. Help us inspire. Help us compete at the highest level. One goal,
              one team, one mission.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-3 gap-4 sm:gap-5">
          <Reveal delay={0}>
            <SupportCard
              eyebrow="Quick send"
              title="Send it directly"
              body="Use whichever app you already have open — it goes straight to Alexa."
              cta="Cash App"
              href={CASHAPP_URL}
              ctaSecondary={{ label: "Venmo", href: VENMO_URL }}
              note={`Zelle: ${ZELLE_HANDLE}`}
              icon={<DollarSign className="h-5 w-5" />}
              primary
            />
          </Reveal>
          <Reveal delay={100}>
            <SupportCard
              eyebrow="Any support makes an impact"
              title="Where it goes"
              body="Funds go toward:"
              items={["Travel", "Lodging", "Competition fees", "Nutrition & recovery"]}
              icon={<Heart className="h-5 w-5" />}
            />
          </Reveal>
          <Reveal delay={200}>
            <SupportCard
              eyebrow="Wear it"
              title="Grab a t-shirt"
              body="Limited run. Reserve yours through the form and pick a color and size."
              cta="Order"
              href={TSHIRT_FORM_URL}
              icon={<Shirt className="h-5 w-5" />}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function SupportCard({
  eyebrow,
  title,
  body,
  cta,
  ctaSecondary,
  href,
  items,
  note,
  icon,
  primary = false,
}: {
  eyebrow: string;
  title: string;
  body: string;
  cta?: string;
  ctaSecondary?: { label: string; href: string };
  href?: string;
  items?: string[];
  note?: string;
  icon: ReactNode;
  primary?: boolean;
}) {
  return (
    <div
      className={`group relative h-full rounded-3xl p-7 sm:p-8 border transition-all duration-300 hover:-translate-y-1 ${
        primary
          ? "bg-foreground text-background border-foreground shadow-[0_30px_80px_-30px_rgba(0,0,0,0.5)]"
          : "bg-card text-foreground border-border hover:border-foreground/30"
      }`}
    >
      <div
        className={`inline-flex h-10 w-10 items-center justify-center rounded-full ${
          primary ? "bg-background/10 text-background" : "bg-primary/10 text-primary"
        }`}
      >
        {icon}
      </div>
      <p
        className={`mt-6 text-[10px] uppercase tracking-[0.24em] ${
          primary ? "text-background/60" : "text-muted-foreground"
        }`}
      >
        {eyebrow}
      </p>
      <h3 className="mt-2 font-display text-2xl sm:text-3xl font-semibold tracking-tight">
        {title}
      </h3>
      <p className={`mt-3 text-sm leading-relaxed ${primary ? "text-background/75" : "text-muted-foreground"}`}>
        {body}
      </p>

      {items && (
        <ul className={`mt-4 space-y-2 text-sm ${primary ? "text-background/85" : "text-foreground"}`}>
          {items.map((item) => (
            <li key={item} className="flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {item}
            </li>
          ))}
        </ul>
      )}

      {cta && href && (
        <div className="mt-7 flex flex-wrap items-center gap-3">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition ${
              primary
                ? "bg-background text-foreground hover:bg-background/90"
                : "bg-foreground text-background hover:bg-foreground/90"
            }`}
          >
            {cta}
            <ArrowRight className="h-4 w-4" />
          </a>
          {ctaSecondary && (
            <a
              href={ctaSecondary.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition ${
                primary
                  ? "text-background border border-background/30 hover:border-background/60"
                  : "text-foreground border border-border hover:border-foreground/40"
              }`}
            >
              {ctaSecondary.label}
            </a>
          )}
        </div>
      )}

      {note && (
        <p className={`mt-4 text-sm ${primary ? "text-background/70" : "text-muted-foreground"}`}>
          {note}
        </p>
      )}
    </div>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-surface">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 py-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <p className="font-display text-xl font-semibold">Alexa Serret<span className="text-primary">.</span></p>
          <p className="text-sm text-muted-foreground mt-1">
            2026 Adaptive CrossFit Games · {LOCATION} · July 24
          </p>
        </div>
        {/* <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
          Built with love by her people.
        </p> */}
      </div>
    </footer>
  );
}
