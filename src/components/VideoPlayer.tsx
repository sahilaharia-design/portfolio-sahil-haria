"use client";

import { Play } from "lucide-react";
import { useState } from "react";

export default function VideoPlayer({ id, title, eager = false }: { id: string; title: string; eager?: boolean }) {
  const [playing, setPlaying] = useState(eager);

  function play() {
    setPlaying(true);
    const analytics = window as Window & { gtag?: (...args: unknown[]) => void };
    analytics.gtag?.("event", "video_open", { video_id: id, video_title: title });
  }

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-black">
      {playing ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=${eager ? 0 : 1}&rel=0`}
          title={title}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={play}
          aria-label={`Play ${title}`}
          className="group absolute inset-0 flex items-center justify-center bg-cover bg-center focus-visible:outline-4 focus-visible:-outline-offset-4 focus-visible:outline-white"
          style={{ backgroundImage: `url(https://i.ytimg.com/vi/${id}/hqdefault.jpg)` }}
        >
          <span className="absolute inset-0 bg-black/15 transition-colors group-hover:bg-black/30" />
          <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white text-black shadow-xl transition-transform group-hover:scale-110 motion-reduce:transition-none">
            <Play className="h-6 w-6" fill="currentColor" />
          </span>
        </button>
      )}
    </div>
  );
}
