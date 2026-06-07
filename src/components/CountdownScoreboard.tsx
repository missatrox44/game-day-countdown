import { useEffect, useState } from "react";

// Target date — Adaptive CrossFit Games kickoff
const TARGET = new Date("2026-07-24T09:00:00-04:00").getTime();

function calc(): { d: number; h: number; m: number; s: number; done: boolean } {
  const diff = TARGET - Date.now();
  if (diff <= 0) return { d: 0, h: 0, m: 0, s: 0, done: true };
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff / 3600000) % 24);
  const m = Math.floor((diff / 60000) % 60);
  const s = Math.floor((diff / 1000) % 60);
  return { d, h, m, s, done: false };
}

function Digit({ value, label }: { value: number | null; label: string }) {
  const padded = value === null ? "--" : value.toString().padStart(2, "0");
  return (
    <div className="flex flex-col items-center">
      <div className="relative overflow-hidden font-mono text-3xl sm:text-4xl md:text-5xl font-semibold tabular-nums leading-none tracking-tight text-foreground">
        <span key={padded} className="block animate-flip-in">
          {padded}
        </span>
      </div>
      <span className="mt-1 text-[10px] sm:text-xs uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </span>
    </div>
  );
}

export function CountdownScoreboard({ location }: { location: string }) {
  // Start null so SSR and the first client render emit a stable placeholder
  // ("--"); computing the live time during hydration would mismatch the server
  // HTML (the clock has ticked since the request). The real countdown starts
  // after mount.
  const [t, setT] = useState<ReturnType<typeof calc> | null>(null);
  useEffect(() => {
    setT(calc());
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="w-full max-w-md rounded-2xl border border-border/60 bg-card/85 p-5 sm:p-6 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.45)] backdrop-blur-md">
      <div className="flex items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            Live Countdown
          </span>
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary font-medium">
          July 24, 2026
        </span>
      </div>

      {t?.done ? (
        <p className="font-display text-2xl text-foreground py-4 text-center">
          It's Games Day.
        </p>
      ) : (
        <div className="grid grid-cols-4 gap-2 sm:gap-3">
          <Digit value={t?.d ?? null} label="Days" />
          <Digit value={t?.h ?? null} label="Hrs" />
          <Digit value={t?.m ?? null} label="Min" />
          <Digit value={t?.s ?? null} label="Sec" />
        </div>
      )}

      <div className="mt-5 pt-4 border-t border-border/60 flex items-center justify-between text-xs">
        <span className="uppercase tracking-[0.18em] text-muted-foreground">Location</span>
        <span className="font-medium text-foreground">{location}</span>
      </div>
    </div>
  );
}
