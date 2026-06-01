"use client";

import { CalendarDays, Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useState } from "react";
import { bookingUrl } from "@/lib/contact-links";

const navItems = [
  { label: "Focus", href: "#focus" },
  { label: "Proof", href: "#proof" },
  { label: "Experience", href: "#experience" },
  { label: "Endurance", href: "#endurance" },
  { label: "Writing", href: "#writing" },
  { label: "Connect", href: "#connect" },
];

export default function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-[70] px-3 pt-3 md:px-6 md:pt-5">
      <nav
        className={`mx-auto max-w-7xl rounded-full border px-3 py-2 text-white transition-all duration-500 md:px-4 ${
          scrolled
            ? "border-white/12 bg-[#121212]/78 shadow-2xl shadow-black/25 backdrop-blur-2xl"
            : "border-white/8 bg-black/12 backdrop-blur-md"
        }`}
        aria-label="Portfolio navigation"
      >
        <div className="flex items-center justify-between gap-3">
          <a href="#journey" className="flex min-w-0 items-center gap-2.5" aria-label="Back to top">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/12 bg-white text-sm font-bold text-black">
              S
            </span>
            <span className="min-w-0">
              <span className="block truncate text-sm font-semibold leading-tight md:text-base">
                Dr. Sahil Haria, PhD
              </span>
              <span className="hidden text-[10px] uppercase tracking-[0.22em] text-white/42 sm:block">
                Founder · Growth · Endurance
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3.5 py-2 text-sm font-medium text-white/62 transition-colors hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href={bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden h-10 items-center justify-center gap-2 rounded-full bg-white px-4 text-sm font-semibold text-black transition-all hover:-translate-y-0.5 hover:bg-white/90 sm:inline-flex"
            >
              <CalendarDays className="h-4 w-4" />
              Book
            </a>
            <a
              href="#connect"
              className="hidden h-10 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white/[0.12] md:inline-flex"
            >
              <MessageCircle className="h-4 w-4" />
              Let’s Chat
            </a>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white lg:hidden"
              aria-expanded={open}
              aria-label={open ? "Close navigation" : "Open navigation"}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open ? (
          <div className="mt-3 grid gap-1 border-t border-white/10 pt-3 lg:hidden">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex min-h-11 items-center justify-between rounded-2xl px-4 text-sm font-medium text-white/76 transition-colors hover:bg-white/[0.08] hover:text-white"
              >
                {item.label}
                <span className="text-white/25">→</span>
              </a>
            ))}
            <div className="grid grid-cols-2 gap-2 pt-2">
              <a
                href={bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-white px-4 text-sm font-semibold text-black"
              >
                Book a Call
              </a>
              <a
                href="#connect"
                onClick={() => setOpen(false)}
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] px-4 text-sm font-semibold text-white"
              >
                Connect
              </a>
            </div>
          </div>
        ) : null}
      </nav>
    </header>
  );
}
