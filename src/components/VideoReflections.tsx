import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { videos, youtubeChannel } from "@/lib/videos";
import VideoPlayer from "./VideoPlayer";

export default function VideoReflections() {
  return (
    <section id="reflections" className="relative scroll-mt-24 border-y border-white/10 bg-[#111] px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-medium text-emerald-200">Sahil × Mirar / Reflections</p>
            <h2 className="text-3xl font-semibold leading-tight text-white md:text-5xl">A small pause. A better question.</h2>
            <p className="mt-5 text-base leading-relaxed text-white/65">Everyday observations about attention, identity, and the patterns we carry. These are questions I am exploring as I build Mirar.</p>
          </div>
          <a href={youtubeChannel} target="_blank" rel="noreferrer" className="inline-flex min-h-12 shrink-0 items-center gap-3 self-start text-sm font-semibold text-white hover:text-emerald-200">
            <Play className="h-5 w-5" /> Follow the reflections <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="grid gap-10 md:grid-cols-2">
          {videos.filter((video) => video.category === "Reflection").map((video) => (
            <article key={video.id} className="min-w-0">
              <VideoPlayer id={video.id} title={video.title} />
              <p className="mt-5 text-xs text-white/45">Reflection · {video.duration}</p>
              <h3 className="mt-2 text-xl font-semibold leading-snug text-white md:text-2xl"><Link href={`/watch/${video.slug}`} className="hover:text-emerald-200">{video.title}</Link></h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">{video.description}</p>
              <Link href={`/watch/${video.slug}`} className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-emerald-200">Explore this reflection <ArrowRight className="h-4 w-4" /></Link>
            </article>
          ))}
        </div>
        <div className="mt-12 flex flex-col justify-between gap-5 border-t border-white/10 pt-7 sm:flex-row sm:items-center">
          <p className="max-w-xl text-sm leading-relaxed text-white/60">This inquiry continues in Mirar, an emotional and mental hygiene system being built for daily self-reflection.</p>
          <a href="https://www.mirar.life" target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/20 px-5 text-sm font-semibold text-white hover:bg-white/10">Explore Mirar <ArrowRight className="h-4 w-4" /></a>
        </div>
      </div>
    </section>
  );
}
