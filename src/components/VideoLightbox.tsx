import { useEffect, useState } from "react";
import { Play, X } from "lucide-react";
import posterImg from "@/assets/video-poster.jpg";

// TODO: replace with Alexa's actual video URL (YouTube embed or direct mp4)
const VIDEO_URL = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0";

export function VideoLightbox() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group relative block w-full overflow-hidden rounded-2xl shadow-[0_40px_120px_-40px_rgba(0,0,0,0.5)] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-4 focus:ring-offset-background"
        aria-label="Play Alexa's video"
      >
        <div className="aspect-video w-full overflow-hidden">
          <img
            src={posterImg}
            alt="Alexa training — video poster"
            className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="relative flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center">
            <span className="absolute inset-0 rounded-full bg-primary/30 animate-ping" />
            <span className="relative flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-2xl transition-transform duration-300 group-hover:scale-110">
              <Play className="h-8 w-8 sm:h-9 sm:w-9 fill-current ml-1" strokeWidth={0} />
            </span>
          </span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7 flex items-end justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.22em] text-white/70">
              Watch
            </p>
            <p className="font-display text-xl sm:text-2xl text-white">
              Alexa's story
            </p>
          </div>
          <span className="hidden sm:inline text-xs uppercase tracking-[0.18em] text-white/80">
            2 min
          </span>
        </div>
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Video player"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 sm:p-8 animate-fade-up"
          onClick={() => setOpen(false)}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Close video"
          >
            <X className="h-5 w-5" />
          </button>
          <div
            className="relative w-full max-w-5xl aspect-video overflow-hidden rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={VIDEO_URL}
              title="Alexa — Adaptive CrossFit Games"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="h-full w-full"
            />
          </div>
        </div>
      )}
    </>
  );
}
