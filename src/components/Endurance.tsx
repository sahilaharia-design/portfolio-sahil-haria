"use client";

import { Bike, Dumbbell, Flag, Waves } from "lucide-react";
import Image from "next/image";
import { Reveal, Stagger, StaggerItem } from "./MotionPrimitives";

const achievements = [
  "More than five full marathons",
  "More than ten half marathons",
  "Three HYROX events",
  "Two ultra marathons",
  "One Ironman 70.3",
];

export default function Endurance() {
  return (
    <section id="endurance" className="cinematic-section relative w-full bg-[#0a0a0a] py-32 px-6 md:px-24 overflow-hidden">
      {/* Background Texture/Gradient */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-rose-900/10 to-transparent pointer-events-none" />
      <div className="pointer-events-none absolute left-8 right-8 top-12 h-px bg-gradient-to-r from-transparent via-rose-200/20 to-transparent" />
      <div className="depth-panel left-[-14rem] bottom-16 h-72 w-[42rem] rounded-[2.5rem]" />
      
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row gap-16 md:gap-24 items-center">
        
        {/* Left Side: Copy */}
        <Reveal className="w-full md:w-1/2">
          <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-8">
            Endurance
          </h3>
          
          <div className="space-y-6 text-lg md:text-xl text-white/70 font-light leading-relaxed">
            <p>
              Endurance has become one of the clearest mirrors in my life.
            </p>
            <p>
              Full marathons, half marathons, HYROX, ultra marathons, swimming, cycling, strength training, and Ironman 70.3 have taught me things that work alone never could.
            </p>
            
            <Stagger className="my-8 space-y-2 border-l-2 border-rose-500/50 py-2 pl-6 text-white/80 font-medium">
              {[
                "They show me where I rush.",
                "Where I resist.",
                "Where I negotiate with myself.",
                "Where I confuse intensity with consistency.",
                "Where I discover a quieter kind of discipline.",
              ].map((line) => (
                <StaggerItem key={line}>
                  <p>{line}</p>
                </StaggerItem>
              ))}
            </Stagger>
            
            <p>
              I’ve completed these challenges not because I see myself only as an athlete, but because physical challenges give me a direct way to study resilience, alignment, and the gap between intention and action.
            </p>
          </div>
        </Reveal>

        {/* Right Side: Image & Tags */}
        <Reveal className="w-full md:w-1/2" delay={0.12}>
          <div className="premium-card kinetic-card group relative rounded-3xl overflow-hidden aspect-[3/4] mb-10 border border-white/10 bg-white/[0.03] shadow-2xl shadow-black/30">
            <Image
              src="/ironman-endurance.jpg" 
              alt="Sahil Haria during an Ironman 70.3 race" 
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover object-[50%_38%] transition-transform duration-1000 scale-[1.02] group-hover:scale-100"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/35 to-transparent" />
            <div className="absolute left-5 top-5 flex gap-2">
              {[Flag, Bike, Waves, Dumbbell].map((Icon, index) => (
                <span key={index} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/25 text-white/75 backdrop-blur-md">
                  <Icon className="h-4 w-4" />
                </span>
              ))}
            </div>
            
            {/* Pull Quote Overlay */}
            <div className="absolute bottom-8 left-6 right-6 md:bottom-10 md:left-10 md:right-10">
              <h4 className="text-2xl md:text-4xl text-white font-bold leading-tight drop-shadow-xl">
                &ldquo;The body has a way of showing me the truth before the mind can explain it.&rdquo;
              </h4>
            </div>
          </div>

          <Stagger className="flex flex-wrap gap-2">
            {achievements.map((achievement, idx) => (
              <StaggerItem 
                key={idx} 
                className="px-3 py-1.5 text-xs font-medium bg-white/5 border border-white/10 rounded-sm text-white/60 uppercase tracking-widest"
              >
                {achievement}
              </StaggerItem>
            ))}
          </Stagger>
        </Reveal>

      </div>
    </section>
  );
}
