import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Play } from "lucide-react";
import VideoPlayer from "@/components/VideoPlayer";
import { videos, videoSchema, youtubeChannel } from "@/lib/videos";

export function generateStaticParams() {
  return videos.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const video = videos.find((item) => item.slug === slug);
  if (!video) return {};
  return {
    title: video.title,
    description: video.description,
    alternates: { canonical: `/watch/${slug}` },
    openGraph: { type: "article", title: video.title, description: video.description, url: `/watch/${slug}`, images: [{ url: `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`, width: 480, height: 360, alt: video.title }] },
    twitter: { card: "summary_large_image", title: video.title, description: video.description, images: [`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`] },
  };
}

export default async function WatchPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const video = videos.find((item) => item.slug === slug);
  if (!video) notFound();
  const speaking = video.category === "Speaking";
  return (
    <main className="min-h-screen bg-[#111] px-6 py-8 text-white md:px-12 md:py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema(video)) }} />
      <div className="mx-auto max-w-5xl">
        <nav aria-label="Video navigation" className="mb-12 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
          <Link href={speaking ? "/#speaking" : "/#reflections"} className="inline-flex min-h-11 items-center gap-2 text-sm text-white/70"><ArrowLeft className="h-4 w-4" /> Back to portfolio</Link>
          <Link href="/" className="text-sm font-semibold">Dr. Sahil Haria, PhD</Link>
        </nav>
        <p className="text-sm text-emerald-200">{video.category} · {video.duration}</p>
        <h1 className="mt-4 max-w-4xl text-3xl font-semibold leading-tight md:text-5xl">{video.title}</h1>
        <p className="mb-8 mt-4 text-sm leading-relaxed text-white/50">{video.attribution}</p>
        <VideoPlayer id={video.id} title={video.title} eager />
        <a href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" rel="noreferrer" className="mt-3 inline-flex min-h-11 items-center gap-2 text-sm text-white/70"><Play className="h-4 w-4" /> Watch on YouTube</a>
        <div className="mt-10 grid gap-10 md:grid-cols-[1.5fr_1fr]">
          <div className="space-y-5 text-base leading-relaxed text-white/70">{video.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<p className="border-l-2 border-emerald-200 pl-5 text-lg font-medium text-white">{video.question}</p></div>
          <aside className="space-y-5 border-t border-white/10 pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-0">
            <h2 className="text-xl font-semibold">{speaking ? "Bring the conversation to your community." : "Keep the inquiry going."}</h2>
            <p className="text-sm leading-relaxed text-white/60">{speaking ? "Planning a talk, podcast, or community session? Share the audience, theme, and format you have in mind." : "Mirar is being built as an emotional and mental hygiene system for daily self-reflection. It is not therapy or medical advice."}</p>
            <a href={speaking ? "mailto:sahilaharia@gmail.com?subject=Speaking%20inquiry" : "https://www.mirar.life"} className="inline-flex min-h-12 items-center gap-2 rounded-lg bg-white px-5 text-sm font-semibold text-black">{speaking ? "Invite Sahil" : "Explore Mirar"}<ArrowRight className="h-4 w-4" /></a>
            <a href={youtubeChannel} target="_blank" rel="noreferrer" className="flex min-h-11 items-center gap-2 text-sm text-white/70"><Play className="h-4 w-4" /> Follow on YouTube</a>
          </aside>
        </div>
        <section className="mt-16 border-t border-white/10 pt-8">
          <h2 className="text-xl font-semibold">Keep watching</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">{videos.filter((item) => item.slug !== slug).map((item) => <Link key={item.slug} href={`/watch/${item.slug}`} className="flex min-h-20 items-center justify-between gap-4 rounded-lg border border-white/10 p-5 text-sm font-medium hover:bg-white/5">{item.title}<ArrowRight className="h-4 w-4 shrink-0" /></Link>)}</div>
        </section>
      </div>
    </main>
  );
}
