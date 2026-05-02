const achievements = [
  "More than five full marathons",
  "More than ten half marathons",
  "Three HYROX events",
  "Two ultra marathons",
  "One Ironman 70.3",
];

export default function Endurance() {
  return (
    <section id="endurance" className="relative w-full bg-[#0a0a0a] py-32 px-8 md:px-24 overflow-hidden">
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
              Full marathons, half marathons, HYROX, ultra marathons, swimming, cycling, strength training, and Ironman 70.3 have taught me things that work alone never could.
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
          <div className="relative rounded-3xl overflow-hidden aspect-[3/4] mb-10 border border-white/10 bg-white/[0.03]">
            <img 
              src="/ironman-endurance.jpg" 
              alt="Sahil Haria during an Ironman 70.3 race" 
              className="w-full h-full object-cover object-[50%_38%] transition-transform duration-1000 scale-[1.01] hover:scale-100"
            />
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/35 to-transparent" />
            
            {/* Pull Quote Overlay */}
            <div className="absolute bottom-10 left-10 right-10">
              <h4 className="text-3xl md:text-4xl text-white font-bold leading-tight drop-shadow-xl">
                &ldquo;The body has a way of showing me the truth before the mind can explain it.&rdquo;
              </h4>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {achievements.map((achievement, idx) => (
              <span 
                key={idx} 
                className="px-3 py-1.5 text-xs font-medium bg-white/5 border border-white/10 rounded-sm text-white/60 uppercase tracking-widest"
              >
                {achievement}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
