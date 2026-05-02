import { motion } from "framer-motion";

const pursuits = [
  "Ironman 70.3 Goa",
  "HYROX",
  "Marathon running",
  "Ultra-distance running",
  "Ultramarathon running",
  "Swimming",
  "Cycling",
  "Strength and endurance training",
  "Tennis",
  "Travel and outdoor exploration",
];

export default function Endurance() {
  return (
    <section className="relative w-full bg-[#0a0a0a] py-32 px-8 md:px-24 overflow-hidden">
      {/* Background Texture/Gradient */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-rose-900/10 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row gap-16 md:gap-24 items-center">
        
        {/* Left Side: Copy */}
        <div className="w-full md:w-1/2">
          <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-8">
            Endurance
          </h3>
          
          <div className="space-y-6 text-lg md:text-xl text-white/70 font-light leading-relaxed">
            <p>
              Endurance has become one of the clearest mirrors in my life.
            </p>
            <p>
              Marathons, ultra-distance running, HYROX, swimming, cycling, strength training, and Ironman 70.3 Goa have taught me things that work alone never could.
            </p>
            
            <div className="border-l-2 border-rose-500/50 pl-6 py-2 my-8 space-y-2 text-white/80 font-medium">
              <p>They show me where I rush.</p>
              <p>Where I resist.</p>
              <p>Where I negotiate with myself.</p>
              <p>Where I confuse intensity with consistency.</p>
              <p>Where I discover a quieter kind of discipline.</p>
            </div>
            
            <p>
              I’ve completed these challenges not because I see myself only as an athlete, but because physical challenges give me a direct way to study resilience, alignment, and the gap between intention and action.
            </p>
          </div>
        </div>

        {/* Right Side: Image & Tags */}
        <div className="w-full md:w-1/2">
          <div className="relative rounded-3xl overflow-hidden aspect-[4/5] mb-10">
            <img 
              src="/ironman.png" 
              alt="Endurance" 
              className="w-full h-full object-cover opacity-60 mix-blend-luminosity hover:mix-blend-normal transition-all duration-1000 scale-105 hover:scale-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-90" />
            
            {/* Pull Quote Overlay */}
            <div className="absolute bottom-10 left-10 right-10">
              <h4 className="text-3xl md:text-4xl text-white font-bold leading-tight drop-shadow-xl">
                "The body has a way of showing me the truth before the mind can explain it."
              </h4>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {pursuits.map((pursuit, idx) => (
              <span 
                key={idx} 
                className="px-3 py-1.5 text-xs font-medium bg-white/5 border border-white/10 rounded-sm text-white/60 uppercase tracking-widest"
              >
                {pursuit}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
