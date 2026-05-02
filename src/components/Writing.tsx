export default function Writing() {
  const themes = [
    "Alignment",
    "Clarity",
    "Purpose",
    "Identity drift",
    "Discipline",
    "Transitions",
    "Founder life",
    "Emotional and mental hygiene",
    "Returning home after years abroad",
    "Building in public",
    "Rebuilding from within"
  ];

  return (
    <section className="relative w-full bg-[#0a0a0a] py-32 px-8 md:px-24 border-t border-white/5">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24">
        
        <div className="w-full md:w-1/3 shrink-0">
          <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-6">
            Writing & <br/>Reflection
          </h3>
          <p className="text-white/40 text-sm uppercase tracking-widest font-medium">
            Thoughts across <br/>social channels
          </p>
        </div>

        <div className="w-full md:w-2/3">
          <div className="space-y-6 text-lg md:text-xl text-white/70 font-light leading-relaxed mb-12">
            <p>
              I write about clarity, alignment, identity shifts, discipline, transitions, founder life, and the quiet work of becoming more honest with yourself.
            </p>
            <p className="text-white font-medium italic py-4">
              My writing is not advice.
            </p>
            <p>
              It is a record of what I’m learning while rebuilding my own relationship with work, ambition, movement, and purpose.
            </p>
            <p>
              Across LinkedIn, Twitter/X, Threads, Instagram, Facebook, and other platforms, I share reflections for professionals, founders, and people in transition who are questioning old definitions of success and trying to move with more intention.
            </p>
          </div>

          <div>
            <h4 className="text-sm text-white/50 font-medium uppercase tracking-widest mb-6">Recurring Themes</h4>
            <div className="flex flex-wrap gap-2">
              {themes.map((theme, idx) => (
                <span key={idx} className="px-4 py-2 text-xs font-medium bg-white/[0.03] border border-white/10 rounded-sm text-white/60">
                  {theme}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
