import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Brain,
  CalendarCheck,
  Factory,
  Mic2,
  Podcast,
  Presentation,
  Radio,
  Route,
  Sparkles,
  Users,
} from "lucide-react";
import { bookingUrl } from "@/lib/contact-links";
import { Reveal, Stagger, StaggerItem } from "./MotionPrimitives";

const talkLanes = [
  {
    title: "AI, growth, and useful systems",
    icon: Brain,
    detail:
      "How founders and operators can move from AI curiosity to practical workflows, lead-routing, reporting, content systems, and sharper decision loops.",
  },
  {
    title: "Founder identity in transition",
    icon: Route,
    detail:
      "The inner shift of rebuilding direction, returning to India after years in the US, and learning how ambition changes when life changes.",
  },
  {
    title: "Legacy businesses, modern growth",
    icon: Factory,
    detail:
      "What Indian manufacturing, B2B trust, and family business modernization can teach founders building for the next decade.",
  },
  {
    title: "Endurance as a mirror",
    icon: Sparkles,
    detail:
      "Ironman 70.3, HYROX, marathons, discipline, resistance, and what the body reveals before the mind can explain it.",
  },
];

const roomTypes = [
  { label: "Founder firesides", icon: Users },
  { label: "Podcast interviews", icon: Podcast },
  { label: "Workshops", icon: Presentation },
  { label: "Guest lectures", icon: BookOpen },
  { label: "Panels", icon: Radio },
  { label: "Community sessions", icon: Mic2 },
];

const inviteChecklist = [
  "Audience and format",
  "Topic or theme",
  "Date range and time zone",
  "Virtual or in-person",
  "What would make the session useful",
];

export default function SpeakingMedia() {
  return (
    <section id="speaking" className="cinematic-section relative overflow-hidden bg-[#101010] px-6 py-24 md:px-24 md:py-32">
      <div className="premium-grid pointer-events-none absolute inset-0 opacity-[0.12]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <div className="pointer-events-none absolute -right-28 top-24 h-96 w-96 rounded-full bg-cyan-300/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-24 h-80 w-80 rounded-full bg-amber-300/10 blur-3xl" />
      <div className="depth-panel right-[-12rem] top-20 h-72 w-[40rem] rounded-[2.5rem]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[1.03fr_0.97fr] lg:items-stretch">
          <Reveal className="glass-band flex flex-col rounded-[2rem] p-6 md:p-10">
            <div>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/55">
                <Mic2 className="h-4 w-4" />
                Speaking / Media / Workshops
              </div>

              <h2 className="max-w-4xl text-4xl font-bold leading-[1.04] tracking-tight text-white md:text-5xl xl:text-6xl">
                Invite Sahil for conversations that connect business, identity, and systems.
              </h2>

              <p className="mt-6 max-w-3xl text-base font-light leading-relaxed text-white/64 md:text-lg">
                Sahil is best suited for rooms where people are not just chasing tactics,
                but asking better questions about how to build, grow, modernize, and stay
                aligned while everything accelerates.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
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
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-6 text-sm font-semibold text-white transition-colors hover:bg-white/[0.12]"
                >
                  Send an Invite
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {[
                  ["15+", "years across India and the US"],
                  ["PhD", "business and strategic management"],
                  ["4", "current venture worlds"],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <p className="text-2xl font-bold text-white">{value}</p>
                    <p className="mt-1 text-xs leading-snug text-white/45">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="flex flex-col gap-4">
            <div className="premium-card kinetic-card overflow-hidden rounded-[2rem] border border-white/10 bg-black/35 p-3 shadow-2xl shadow-black/30">
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

              <div className="p-4 md:p-5">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-base font-semibold text-white">Recent speaking feature</p>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/52">
                      A live sample of Sahil’s tone: reflective, practical, founder-led, and grounded
                      in real building rather than abstract advice.
                    </p>
                  </div>
                  <a
                    href="https://www.youtube.com/watch?v=J4iG1q_CLEk"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-white/78 transition-colors hover:bg-white hover:text-black"
                  >
                    Watch
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-black">
                  <BadgeCheck className="h-5 w-5" />
                </span>
                <p className="text-base font-semibold text-white">Good fit for</p>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-2">
                {roomTypes.map(({ label, icon: Icon }) => (
                  <div
                    key={label}
                    className="flex min-h-12 items-center gap-2 rounded-2xl border border-white/10 bg-black/20 px-3 text-sm text-white/62"
                  >
                    <Icon className="h-4 w-4 text-white/38" />
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <Stagger className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {talkLanes.map(({ title, icon: Icon, detail }) => (
            <StaggerItem key={title}>
              <div className="premium-card kinetic-card flex h-full min-h-[250px] flex-col rounded-3xl border border-white/10 bg-white/[0.035] p-6 transition-colors duration-500 hover:bg-white/[0.06]">
                <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-white/72">
                  <Icon className="h-5 w-5" />
                </span>
                <p className="text-lg font-semibold leading-tight text-white">{title}</p>
                <p className="mt-4 text-sm leading-relaxed text-white/52">{detail}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.1} className="glass-band mt-5 overflow-hidden rounded-[2rem]">
          <div className="grid gap-0 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="border-b border-white/10 p-6 md:p-8 lg:border-b-0 lg:border-r">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/35">
                Invite brief
              </p>
              <h3 className="mt-4 text-2xl font-bold tracking-tight text-white md:text-3xl">
                Make the ask easy to say yes to.
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/55">
                The strongest invites are specific. Send the context, audience, and
                outcome you want from the session, and Sahil can quickly understand
                whether there is a meaningful fit.
              </p>
            </div>

            <div className="grid gap-3 p-6 sm:grid-cols-2 md:p-8">
              {inviteChecklist.map((item) => (
                <div
                  key={item}
                  className="flex min-h-12 items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 text-sm font-medium text-white/68"
                >
                  <CalendarCheck className="h-4 w-4 text-emerald-200/70" />
                  {item}
                </div>
              ))}
              <a
                href="#connect"
                className="flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-white px-4 text-sm font-semibold text-black"
              >
                Use the contact form
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
