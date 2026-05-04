"use client";

import { ArrowUpRight, Brain, Factory, Gamepad2, Sparkles } from "lucide-react";
import Image from "next/image";
import { Reveal, Stagger, StaggerItem } from "./MotionPrimitives";

export default function CurrentFocus() {
  const ventureIcons = {
    Mirar: Brain,
    "Jagruti Group": Factory,
    Jugaadors: Gamepad2,
    Sociato: Sparkles,
  };

  return (
    <section id="focus" className="relative w-full overflow-hidden bg-[#121212] py-28 px-6 md:px-24 md:py-32">
      <div className="premium-grid pointer-events-none absolute inset-x-0 top-16 h-[520px] opacity-25" />
      {/* Intro Text */}
      <Reveal className="relative z-10 max-w-4xl mx-auto mb-20 text-center md:mb-24 md:text-left">
        <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
          Current Focus
        </h3>
        <div className="space-y-6 text-xl text-white/70 font-light leading-relaxed">
          <p>
            My current work sits inside a larger question: as AI changes how fast products, markets, and teams move, how do we build with more clarity instead of just more noise?
          </p>
          <p>
            <strong className="text-white font-medium">Mirar</strong> is where I’m building around emotional and mental hygiene — a daily system for inner clarity, alignment, and self-awareness in an accelerated world.
          </p>
          <p>
            <strong className="text-white font-medium">Jagruti</strong> connects that same systems thinking to Indian manufacturing, family business, stainless steel OEM production, and the modernization of legacy industries.
          </p>
          <p>
            Alongside these, Jugaadors lets me explore culture and storytelling through board games, while Sociato carries forward my foundation in digital growth, creative execution, and brand building.
          </p>
          <p className="pt-6 text-2xl text-white/90 italic border-t border-white/10 mt-12">
            Different worlds on the surface. Underneath, the work returns to one thing: building systems for people, products, and businesses that can grow without losing intention.
          </p>
        </div>
      </Reveal>

      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* PILLAR 1: MIRAR */}
        <Reveal id="mirar" className="premium-card group relative w-full overflow-hidden rounded-3xl bg-white/[0.02] border border-white/10 p-6 md:p-16 transition-all duration-700 hover:bg-white/[0.04] hover:shadow-2xl hover:shadow-purple-950/20">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-2/3">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h4 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-2">Mirar</h4>
                  <p className="text-purple-400 font-medium tracking-widest uppercase text-sm">Founder & CEO • 2025 – Present</p>
                </div>
                <a href="https://www.mirar.life" target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center border border-white/10 transition-all duration-500 group-hover:scale-110 group-hover:bg-white group-hover:text-black">
                  <ArrowUpRight className="w-6 h-6 text-white" />
                </a>
              </div>
              
              <h5 className="text-2xl text-white/90 font-medium mb-6">An emotional and mental hygiene system for daily self-reflection.</h5>
              
              <div className="space-y-4 text-lg text-white/60 font-light leading-relaxed mb-10">
                <p>Mirar is designed to help people check in with themselves daily — the way brushing your teeth supports physical hygiene.</p>
                <p>It is being built as a tech-enabled self-reflection platform for founders, professionals, and people navigating transition, identity shifts, ambition, and internal misalignment.</p>
                <p>The product blends reflective design, behavioral insight, product strategy, and AI-supported reporting to help users notice where their actions, emotions, and inner direction may be drifting apart.</p>
                <p className="text-white/80 font-medium pt-4">
                  Mirar is not therapy.<br/>
                  It is not advice.<br/>
                  It is not a quick fix.<br/><br/>
                  It is a small daily mirror for the inner self.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {["Emotional hygiene", "Mental hygiene", "Self-reflection", "Daily alignment", "Inner clarity", "AI-supported insight", "Product strategy", "Identity drift"].map(tag => (
                  <span key={tag} className="px-4 py-1.5 text-xs font-medium bg-white/5 border border-white/10 rounded-full text-white/70 uppercase tracking-wider">{tag}</span>
                ))}
              </div>
            </div>
            
            <div className="w-full md:w-1/3 h-64 md:h-full min-h-[320px] rounded-2xl overflow-hidden relative border border-white/10 bg-[radial-gradient(circle_at_30%_30%,rgba(196,181,253,0.18),transparent_36%),linear-gradient(145deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] md:min-h-[360px]">
              <div className="absolute inset-x-0 top-0 h-px animate-[soft-scan_4s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
              <div className="absolute inset-0 bg-black/20" />
              <Image
                src="/mirar-logo.png"
                alt="Mirar logo"
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-contain p-4 md:p-6 transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </Reveal>

        {/* PILLAR 2: JAGRUTI */}
        <Reveal id="jagruti" className="premium-card group relative w-full overflow-hidden rounded-3xl bg-[#1a1a1a] border border-[#333] p-6 md:p-16 transition-all duration-700 hover:border-[#555] hover:shadow-2xl hover:shadow-amber-950/15">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row-reverse gap-12 items-center">
            <div className="w-full md:w-2/3">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h4 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-2">Jagruti Group</h4>
                  <p className="text-amber-400/80 font-medium tracking-widest uppercase text-sm">Family Business / Strategic Growth Exploration</p>
                </div>
                <a href="https://www.jagrutisteels.com" target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full bg-black/20 flex items-center justify-center border border-white/10 transition-all duration-500 group-hover:scale-110 group-hover:bg-white group-hover:text-black">
                  <ArrowUpRight className="w-6 h-6 text-white" />
                </a>
              </div>
              
              <h5 className="text-2xl text-white/90 font-medium mb-6">A stainless steel manufacturing business rooted in OEM production, legacy, and operational depth.</h5>
              
              <div className="space-y-4 text-lg text-white/60 font-light leading-relaxed mb-10">
                <p>Jagruti connects me to my family’s stainless steel and metal manufacturing business in Mumbai.</p>
                <p>The business has deep roots in OEM stainless steel manufacturing, with capabilities across roundware and precision-formed products such as bread baskets, measuring bowls, food covers, trays, dhokla and idli plates, lids, and custom stainless steel components.</p>
                <p>This chapter brings me closer to traditional Indian manufacturing, B2B relationships, factory operations, product capability, and the question of how legacy businesses modernize for the next generation.</p>
                <p className="text-white/80 font-medium pt-4">
                  For me, Jagruti is not just about manufacturing.<br/><br/>
                  It is about understanding how trust, process, quality, relationships, and modernization come together inside an old-economy business.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {["Stainless steel manufacturing", "OEM production", "Roundware", "Cookware", "B2B growth", "Legacy modernization", "Factory operations"].map(tag => (
                  <span key={tag} className="px-4 py-1.5 text-xs font-medium bg-black/20 border border-white/10 rounded-full text-white/70 uppercase tracking-wider">{tag}</span>
                ))}
              </div>
            </div>
            
            <div className="w-full md:w-1/3 h-64 md:h-full min-h-[320px] rounded-2xl overflow-hidden relative border border-white/10 bg-[radial-gradient(circle_at_70%_20%,rgba(56,189,248,0.16),transparent_34%),linear-gradient(145deg,rgba(255,255,255,0.08),rgba(255,255,255,0.015))] md:min-h-[360px]">
              <div className="absolute inset-x-0 top-0 h-px animate-[soft-scan_4.5s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-sky-200/40 to-transparent" />
              <div className="absolute inset-0 bg-black/20" />
              <Image
                src="/jagruti-logo.png"
                alt="Jagruti Steels logo"
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-contain p-4 md:p-6 transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </Reveal>

        {/* SUPPORTING VENTURES */}
        <Stagger className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          
          {/* Jugaadors */}
          <StaggerItem>
          <a href="https://www.jugaadors.com" target="_blank" rel="noreferrer" className="premium-card block group relative overflow-hidden rounded-2xl bg-white/[0.02] border border-white/5 p-8 transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.06] hover:border-white/20">
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.045]">
                  <ventureIcons.Jugaadors className="h-5 w-5 text-red-300" />
                </div>
                <h4 className="text-2xl font-bold text-white group-hover:text-red-400 transition-colors">Jugaadors</h4>
                <p className="text-red-400/80 font-medium tracking-widest uppercase text-xs mt-1">Co-Founder & COO • 2023 – Present</p>
              </div>
            </div>
            <p className="text-white/80 font-medium mb-4">A board game company bringing modern Indian storytelling to global audiences.</p>
            <p className="text-white/60 font-light leading-relaxed mb-6 text-sm">
              Jugaadors is built around culture, play, nostalgia, and modern Indian storytelling. It turns the humor, chaos, and rituals of culture into social tabletop experiences. I manage operations across manufacturing, US go-to-market planning, Amazon FBA, and logistics.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Board games", "Indian storytelling", "Culture", "Amazon FBA"].map(tag => (
                <span key={tag} className="px-2 py-1 text-[10px] font-medium bg-white/5 border border-white/10 rounded-full text-white/60 uppercase tracking-wider">{tag}</span>
              ))}
            </div>
          </a>
          </StaggerItem>

          {/* Sociato */}
          <StaggerItem>
          <a href="https://www.sociato.in" target="_blank" rel="noreferrer" className="premium-card block group relative overflow-hidden rounded-2xl bg-white/[0.02] border border-white/5 p-8 transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.06] hover:border-white/20">
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.045]">
                  <ventureIcons.Sociato className="h-5 w-5 text-blue-300" />
                </div>
                <h4 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">Sociato</h4>
                <p className="text-blue-400/80 font-medium tracking-widest uppercase text-xs mt-1">Co-Founder & COO • 2015 – Present</p>
              </div>
            </div>
            <p className="text-white/80 font-medium mb-4">A digital marketing and creative execution company shaped by strategy, content, and campaigns.</p>
            <p className="text-white/60 font-light leading-relaxed mb-6 text-sm">
              Helping more than 60 clients across tech, fitness, food, and retail. It shaped my early foundation in client strategy, digital marketing, campaign execution, web development, and team management. Sociato represents the first entrepreneurial chapter of my career.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Digital marketing", "Creative execution", "Client strategy", "Campaigns"].map(tag => (
                <span key={tag} className="px-2 py-1 text-[10px] font-medium bg-white/5 border border-white/10 rounded-full text-white/60 uppercase tracking-wider">{tag}</span>
              ))}
            </div>
          </a>
          </StaggerItem>

        </Stagger>
      </div>
    </section>
  );
}
