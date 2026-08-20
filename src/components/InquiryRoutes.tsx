import {
  ArrowRight,
  Bot,
  Brain,
  CalendarCheck,
  Factory,
  Megaphone,
  Mic2,
  Network,
  PenLine,
} from "lucide-react";
import { bookingUrl } from "@/lib/contact-links";
import { Reveal, Stagger, StaggerItem } from "./MotionPrimitives";

const routes = [
  {
    title: "Consulting & Growth Systems",
    icon: Megaphone,
    detail:
      "Growth strategy, funnels, CRM workflows, lead generation, website conversion, and founder-led go-to-market systems.",
    cta: "Discuss growth",
    href: "#connect",
  },
  {
    title: "Speaking, Podcasts & Workshops",
    icon: Mic2,
    detail:
      "Founder journeys, AI-supported systems, emotional and mental hygiene, endurance, returning to India, and modernizing legacy businesses.",
    cta: "Invite Sahil",
    href: "#speaking",
  },
  {
    title: "AI Workflows & Product Builds",
    icon: Bot,
    detail:
      "Chatbots, lightweight MVPs, reporting systems, automation layers, product strategy, and practical AI operating systems.",
    cta: "Build a system",
    href: "#connect",
  },
  {
    title: "Mirar Conversations",
    icon: Brain,
    detail:
      "Beta conversations, founder feedback, reflection tools, emotional hygiene, alignment, and self-reflection product strategy.",
    cta: "Explore Mirar",
    href: "#mirar",
  },
  {
    title: "Jagruti / Manufacturing Inquiries",
    icon: Factory,
    detail:
      "OEM stainless steel, cookware, hospitality products, B2B partnerships, private label, export exploration, and legacy modernization.",
    cta: "Share specs",
    href: "#jagruti",
  },
  {
    title: "Media, Writing & Brand Collaborations",
    icon: PenLine,
    detail:
      "Founder-led storytelling, content systems, essays, interviews, Indian business stories, and thoughtful brand collaborations.",
    cta: "Start a note",
    href: "#connect",
  },
];

const signals = [
  { value: "15+", label: "years across India and the US" },
  { value: "60+", label: "clients through Sociato and growth work" },
  { value: "35", label: "restaurant locations managed digitally" },
];

export default function InquiryRoutes() {
  return (
    <section id="inquiries" className="relative overflow-hidden bg-[#121212] px-6 py-24 md:px-24 md:py-32">
      <div className="premium-grid pointer-events-none absolute inset-0 opacity-15" />
      <div className="pointer-events-none absolute left-1/2 top-12 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-300/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <Reveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-white/35">
              Inquiry routes
            </p>
            <h2 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
              The right people should know exactly where to begin.
            </h2>
            <p className="mt-6 max-w-2xl text-lg font-light leading-relaxed text-white/62">
              This portfolio is built to route serious conversations: consulting, speaking,
              AI systems, manufacturing, Mirar, media, workshops, and thoughtful collaborations.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="premium-cta inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-black"
              >
                Book a Call
              </a>
              <a
                href="#connect"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] px-6 text-sm font-semibold text-white transition-colors hover:bg-white/[0.12]"
              >
                Send an Inquiry
              </a>
            </div>
          </Reveal>

          <Stagger className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {signals.map((signal) => (
              <StaggerItem
                key={signal.label}
                className="rounded-3xl border border-white/10 bg-white/[0.035] p-5"
              >
                <p className="text-3xl font-bold text-white">{signal.value}</p>
                <p className="mt-2 text-sm leading-snug text-white/48">{signal.label}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <Stagger className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {routes.map(({ title, icon: Icon, detail, cta, href }) => (
            <StaggerItem key={title}>
              <a
                href={href}
                className="premium-card group flex min-h-[260px] flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.035] p-6 transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.065]"
              >
                <span>
                  <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-white/75 transition-colors group-hover:bg-white group-hover:text-black">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="block text-xl font-semibold tracking-tight text-white">{title}</span>
                  <span className="mt-4 block text-sm leading-relaxed text-white/55">{detail}</span>
                </span>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white/80">
                  {cta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.12} className="mt-8 rounded-3xl border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.025))] p-6 md:p-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-black">
                <Network className="h-5 w-5" />
              </span>
              <div>
                <p className="text-lg font-semibold text-white">Best fit conversations</p>
                <p className="mt-2 max-w-3xl text-sm leading-relaxed text-white/58">
                  Sahil is most interested in projects where strategy and execution meet:
                  systems that compound, products that need clarity, legacy businesses ready
                  to modernize, and ideas that deserve more than surface-level growth.
                </p>
              </div>
            </div>
            <a
              href="#connect"
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-black"
            >
              Start here
              <CalendarCheck className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
