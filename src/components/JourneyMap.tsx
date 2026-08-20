"use client";

import { ArrowRight, Dumbbell, Factory, Map, MessageCircle, Mic2, Sparkles, Trophy } from "lucide-react";
import { bookingUrl } from "@/lib/contact-links";
import { Reveal, Stagger, StaggerItem } from "./MotionPrimitives";

const paths = [
  {
    label: "Inquiry Routes",
    href: "#inquiries",
    icon: Sparkles,
    detail: "Consulting, speaking, AI, manufacturing",
  },
  {
    label: "Current Builds",
    href: "#focus",
    icon: Factory,
    detail: "Mirar, Jagruti, Jugaadors, Sociato",
  },
  {
    label: "Speaking",
    href: "#speaking",
    icon: Mic2,
    detail: "Podcasts, workshops, panels, lectures",
  },
  {
    label: "Proof",
    href: "#proof",
    icon: Trophy,
    detail: "Growth, product, creative execution",
  },
  {
    label: "Experience",
    href: "#experience",
    icon: Map,
    detail: "India and US chapters",
  },
  {
    label: "Endurance",
    href: "#endurance",
    icon: Dumbbell,
    detail: "Ironman, HYROX, marathons",
  },
  {
    label: "Connect",
    href: "#connect",
    icon: MessageCircle,
    detail: "Build, collaborate, book a call",
  },
];

export default function JourneyMap() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-[#101010] px-6 py-14 md:px-24 md:py-20">
      <div className="premium-grid pointer-events-none absolute inset-0 opacity-20" />
      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
        <Reveal>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-white/35">
            Choose your path
          </p>
          <h2 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight text-white md:text-5xl">
            A portfolio should guide, not make people hunt.
          </h2>
          <p className="mt-5 max-w-xl text-base font-light leading-relaxed text-white/58 md:text-lg">
            Start with what you need: consulting, speaking, growth systems, manufacturing, Mirar, proof of work, or a direct conversation.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
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
              Build Together
            </a>
          </div>
        </Reveal>

        <Stagger className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {paths.map(({ label, href, icon: Icon, detail }) => (
            <StaggerItem key={label}>
              <a
                href={href}
                className="premium-card group flex min-h-[104px] items-center gap-4 rounded-3xl border border-white/8 bg-white/[0.035] p-4 transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.07] md:p-5"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-white/72 transition-colors group-hover:bg-white group-hover:text-black">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-base font-semibold text-white">{label}</span>
                  <span className="mt-1 block text-sm leading-snug text-white/45">{detail}</span>
                </span>
                <ArrowRight className="h-4 w-4 shrink-0 text-white/28 transition-transform group-hover:translate-x-1 group-hover:text-white/75" />
              </a>
            </StaggerItem>
          ))}
          <StaggerItem>
            <a
              href="#jagruti"
              className="premium-card group flex min-h-[104px] items-center gap-4 rounded-3xl border border-white/8 bg-white/[0.035] p-4 transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.07] md:p-5"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-white/72 transition-colors group-hover:bg-white group-hover:text-black">
                <Factory className="h-5 w-5" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-base font-semibold text-white">Manufacturing</span>
                <span className="mt-1 block text-sm leading-snug text-white/45">OEM steel, B2B growth, legacy systems</span>
              </span>
              <ArrowRight className="h-4 w-4 shrink-0 text-white/28 transition-transform group-hover:translate-x-1 group-hover:text-white/75" />
            </a>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}
