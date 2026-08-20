import {
  ArrowRight,
  Brain,
  Factory,
  Mic2,
  Podcast,
  Presentation,
  Radio,
  Sparkles,
} from "lucide-react";
import { bookingUrl } from "@/lib/contact-links";
import { Reveal, Stagger, StaggerItem } from "./MotionPrimitives";

const topics = [
  {
    title: "AI-supported systems",
    icon: Brain,
    detail: "How founders and teams can use AI to build practical workflows, reporting, content engines, and operating systems.",
  },
  {
    title: "Founder identity shifts",
    icon: Sparkles,
    detail: "Returning home, rebuilding direction, navigating ambition, and learning how to grow without losing yourself.",
  },
  {
    title: "Legacy business modernization",
    icon: Factory,
    detail: "What traditional manufacturing businesses can learn from digital growth, B2B systems, and modern positioning.",
  },
  {
    title: "Endurance and alignment",
    icon: Radio,
    detail: "Ironman 70.3, HYROX, marathons, discipline, resistance, and what the body can reveal about intention.",
  },
];

const formats = [
  "Keynotes",
  "Podcast interviews",
  "Founder firesides",
  "Workshops",
  "Guest lectures",
  "Panel conversations",
];

export default function SpeakingMedia() {
  return (
    <section id="speaking" className="relative overflow-hidden bg-[#101010] px-6 py-24 md:px-24 md:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <div className="pointer-events-none absolute right-0 top-20 h-80 w-80 rounded-full bg-sky-300/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Reveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-white/35">
              Speaking & media
            </p>
            <h2 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
              Invite Sahil into conversations about building in a faster world.
            </h2>
            <p className="mt-6 max-w-2xl text-lg font-light leading-relaxed text-white/62">
              Sahil speaks from the intersection of founder life, AI-era growth,
              emotional and mental hygiene, endurance, Indian manufacturing, and the
              strange work of building clearly when everything is moving faster.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {formats.map((format) => (
                <span
                  key={format}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/58"
                >
                  {format}
                </span>
              ))}
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="premium-cta inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-black"
              >
                Book a Speaking Chat
              </a>
              <a
                href="mailto:sahilaharia@gmail.com?subject=Speaking%20or%20Media%20Inquiry%20%E2%80%94%20"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] px-6 text-sm font-semibold text-white transition-colors hover:bg-white/[0.12]"
              >
                Email an Invite
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="premium-card overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-3 shadow-2xl shadow-black/30">
              <div className="relative aspect-video overflow-hidden rounded-[1.45rem] bg-black">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src="https://www.youtube.com/embed/J4iG1q_CLEk?si=WB3Jm5owNwry1irl"
                  title="Dr. Sahil Haria speaking video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
              <div className="flex flex-col gap-3 p-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm font-semibold text-white">Recent speaking feature</p>
                  <p className="mt-1 text-sm text-white/48">
                    A live example of Sahil’s voice, thinking, and founder-led perspective.
                  </p>
                </div>
                <a
                  href="https://www.youtube.com/watch?v=J4iG1q_CLEk"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white/78 hover:text-white"
                >
                  Watch on YouTube
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        <Stagger className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {topics.map(({ title, icon: Icon, detail }) => (
            <StaggerItem
              key={title}
              className="premium-card rounded-3xl border border-white/10 bg-white/[0.035] p-6"
            >
              <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-white/72">
                <Icon className="h-5 w-5" />
              </span>
              <p className="text-lg font-semibold text-white">{title}</p>
              <p className="mt-3 text-sm leading-relaxed text-white/52">{detail}</p>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.1} className="mt-8 rounded-3xl border border-white/10 bg-black/20 p-6 md:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-black">
                <Mic2 className="h-5 w-5" />
              </span>
              <div>
                <p className="text-lg font-semibold text-white">For event hosts, podcasts, classrooms, and communities</p>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-white/55">
                  Share the audience, format, topic, date range, and what would make the session useful.
                  Sahil is a fit for thoughtful rooms where business, identity, systems, and execution meet.
                </p>
              </div>
            </div>
            <div className="flex shrink-0 gap-2 text-white/45">
              <Podcast className="h-5 w-5" />
              <Presentation className="h-5 w-5" />
              <Radio className="h-5 w-5" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
