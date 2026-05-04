"use client";

import { MotionValue, useMotionValueEvent } from "framer-motion";
import { bookingUrl, hasBookingUrl } from "@/lib/contact-links";
import type { ReactNode } from "react";
import { useState } from "react";

interface OverlayProps {
  progress: MotionValue<number>;
}

type StoryBeat = {
  id: string;
  align: "left" | "center" | "right";
  title: ReactNode;
  body?: ReactNode;
  cta?: ReactNode;
};

const beats: StoryBeat[] = [
  {
    id: "opening",
    align: "center",
    title: <>Dr. Sahil Haria, PhD</>,
    body: (
      <>
        Building at the intersection of <br className="block md:hidden" />
        <span className="hidden md:inline">{" "}</span>
        AI, growth, inner clarity, <br className="block md:hidden" />
        <span className="hidden md:inline">{" "}</span>
        and legacy business.
      </>
    ),
    cta: (
      <div className="pointer-events-auto mt-10 flex flex-col justify-start gap-3 sm:flex-row md:justify-center">
        <a
          href={bookingUrl}
          target={hasBookingUrl ? "_blank" : undefined}
          rel={hasBookingUrl ? "noreferrer" : undefined}
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 py-3 text-center text-sm font-medium text-black transition-colors hover:bg-white/90 md:text-base"
        >
          Book a Call
        </a>
        <a href="#connect" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/10 bg-white/10 px-6 py-3 text-center text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20 md:text-base">
          Build Together
        </a>
        <a href="#mirar" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/10 bg-white/10 px-6 py-3 text-center text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20 md:text-base">
          Explore Mirar
        </a>
        <a href="#jagruti" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/10 bg-white/10 px-6 py-3 text-center text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20 md:text-base">
          Explore Jagruti
        </a>
        <a href="#focus" className="inline-flex min-h-12 items-center justify-center rounded-full px-3 py-3 text-center text-sm font-medium text-white/75 transition-colors hover:text-white md:text-base">
          View Full Journey &rarr;
        </a>
      </div>
    ),
  },
  {
    id: "systems",
    align: "right",
    title: (
      <>
        Building systems <br className="hidden md:block" />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">for clarity.</span>
      </>
    ),
    body: (
      <>
        For AI-speed markets. <br />
        For founder clarity. <br />
        For businesses that need to evolve.
      </>
    ),
  },
  {
    id: "mirar",
    align: "left",
    title: (
      <>
        Mirar is my deepest <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">current build.</span>
      </>
    ),
    body: (
      <>
        A daily inner operating system <br className="hidden md:block" />
        for people navigating ambition, identity, and alignment.
      </>
    ),
  },
  {
    id: "jagruti",
    align: "right",
    title: (
      <>
        Jagruti connects me <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">to legacy.</span>
      </>
    ),
    body: (
      <>
        Stainless steel. <br />
        Manufacturing. <br />
        Family business. <br />
        Next-generation growth.
      </>
    ),
  },
  {
    id: "endurance",
    align: "left",
    title: (
      <>
        The body keeps <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-400">me honest.</span>
      </>
    ),
    body: (
      <>
        One Ironman 70.3. <br />
        Three HYROX events. <br />
        More than five full marathons. <br />
        More than ten half marathons. <br />
        Two ultra marathons.
      </>
    ),
  },
  {
    id: "map",
    align: "center",
    title: <>This is not a resume.</>,
    body: (
      <>
        It is a map of what I’m building,<br className="hidden md:block" />
        what shaped me,<br className="hidden md:block" />
        and the world I want to build with others.
      </>
    ),
    cta: (
      <div className="pointer-events-auto mt-10 flex flex-col justify-start gap-3 sm:flex-row md:justify-center">
        <a
          href={bookingUrl}
          target={hasBookingUrl ? "_blank" : undefined}
          rel={hasBookingUrl ? "noreferrer" : undefined}
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-7 py-3.5 text-base font-medium text-black transition-colors hover:bg-white/90"
        >
          Book a Call
        </a>
        <a href="#connect" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/10 bg-white/10 px-7 py-3.5 text-base font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20">
          Let’s Build Together
        </a>
      </div>
    ),
  },
];

function getActiveBeat(progress: number) {
  if (progress < 0.16) return 0;
  if (progress < 0.32) return 1;
  if (progress < 0.49) return 2;
  if (progress < 0.66) return 3;
  if (progress < 0.83) return 4;
  return 5;
}

export default function Overlay({ progress }: OverlayProps) {
  const [active, setActive] = useState(0);

  useMotionValueEvent(progress, "change", (latest) => {
    const next = getActiveBeat(latest);
    setActive((current) => (current === next ? current : next));
  });

  return (
    <div className="pointer-events-none absolute inset-0 z-10">
      {beats.map((beat, index) => {
        const isActive = active === index;
        const alignClass = {
          left: "items-center justify-start text-left",
          center: "items-center justify-start text-left md:justify-center md:text-center",
          right: "items-center justify-start text-left md:justify-end md:text-right",
        }[beat.align];

        return (
          <div
            key={beat.id}
            aria-hidden={!isActive}
            className={`absolute inset-y-0 left-8 right-8 flex ${alignClass} transition-all duration-500 ease-out sm:left-12 sm:right-12 md:left-28 md:right-28 xl:left-40 xl:right-40 ${
              isActive ? "visible translate-y-0 opacity-100" : "invisible translate-y-8 opacity-0"
            }`}
          >
            <div className="mt-24 max-w-5xl md:mt-0">
              <h1 className="text-3xl font-bold leading-[1.04] tracking-tight text-white drop-shadow-2xl sm:text-5xl md:text-7xl">
                {beat.title}
              </h1>
              {beat.body ? (
                <p className="mt-5 max-w-3xl text-base font-light leading-relaxed text-white/80 drop-shadow-lg sm:text-xl md:mt-6 md:text-3xl">
                  {beat.body}
                </p>
              ) : null}
              {beat.cta}
            </div>
          </div>
        );
      })}
    </div>
  );
}
