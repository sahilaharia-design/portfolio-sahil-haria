"use client";

import { ArrowUpRight, Lightbulb, MapPin, Share2, Target, TrendingUp, Video } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "./MotionPrimitives";

const proofOfWork = [
  {
    category: "Growth Marketing",
    title: "Digital Growth Systems",
    icon: TrendingUp,
    description: "Campaign strategy, creative direction, setup, execution, and optimization across paid acquisition, email, search, social, app installs, and retention campaigns.",
    items: ["Google Ads", "Meta Ads", "Email marketing", "App install campaigns", "A/B testing", "Retention experiments"]
  },
  {
    category: "Product Marketing",
    title: "Positioning, Messaging & Launches",
    icon: Target,
    description: "Product positioning, messaging, website direction, campaign planning, and go-to-market communication across SaaS, apps, restaurants, and consumer brands.",
    items: ["Flock", "Chefling", "Wildseed", "Delarosa", "Beretta", "Amano", "Super Duper Burgers"]
  },
  {
    category: "Digital Growth",
    title: "15 Brands. 35 Locations.",
    icon: MapPin,
    description: "Owned digital growth across a major San Francisco restaurant group, working across email, ads, search, third-party delivery platforms, and POS-connected systems.",
    items: ["Email", "Paid Ads", "Search", "Delivery platforms", "POS-connected systems"]
  },
  {
    category: "Creative Direction",
    title: "Storytelling Through Video",
    icon: Video,
    description: "Created and managed product and brand video concepts across scripting, storyline, project management, editing, promotion, and creative direction.",
    items: ["Flock Product Spotlight", "Rent Set Go Animation", "How to Say Sociato", "Meet Chefling"]
  },
  {
    category: "Social Media",
    title: "Brand Presence Across Channels",
    icon: Share2,
    description: "Built and managed social media presence across technology, food, fitness, retail, e-commerce, SaaS, and consumer brands.",
    items: ["SoFit", "Super Duper", "Grabr", "Toppr.com", "Little Muffet", "Raas"]
  },
  {
    category: "Founder Work",
    title: "From Idea to Execution",
    icon: Lightbulb,
    description: "Across Mirar, Jagruti, Jugaadors, and Sociato, my work spans product thinking, manufacturing coordination, growth systems, operations, and go-to-market execution.",
    items: ["Product strategy", "Manufacturing coordination", "Operations", "Storytelling", "GTM"]
  }
];

export default function ProofOfWork() {
  return (
    <section className="relative w-full overflow-hidden bg-[#121212] py-24 px-8 md:px-24">
      <div className="premium-grid pointer-events-none absolute inset-x-0 top-0 h-72 opacity-30" />
      <div className="max-w-7xl mx-auto relative z-10">
        <Reveal className="mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            Selected Proof of Work
          </h3>
          <p className="text-lg text-white/60 font-light max-w-2xl">
            A cross-section of growth, product, brand, content, and creative execution across India and the United States.
          </p>
        </Reveal>

        <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {proofOfWork.map((work, idx) => {
            const Icon = work.icon;
            return (
              <StaggerItem
                key={idx}
                className="premium-card group flex min-h-[360px] flex-col rounded-2xl border border-white/5 bg-white/[0.025] p-6 transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.045] hover:shadow-2xl hover:shadow-black/30 md:p-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.055]">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/12 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <Icon className="relative z-10 h-5 w-5 text-white/78 transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <div>
                    <p className="text-[10px] font-medium text-white/40 mb-1 uppercase tracking-widest">
                      {work.category}
                    </p>
                    <h4 className="text-xl font-bold text-white leading-tight">
                      {work.title}
                    </h4>
                  </div>
                  <ArrowUpRight className="ml-auto h-4 w-4 text-white/20 transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white/70" />
                </div>
                
                <p className="text-white/60 font-light text-sm leading-relaxed mb-6 flex-grow">
                  {work.description}
                </p>
                
                <div className="pt-6 border-t border-white/5">
                  <div className="flex flex-wrap gap-2">
                    {work.items.map((item, i) => (
                      <span key={i} className="text-[11px] text-white/50 bg-white/[0.03] px-2 py-1 rounded">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
