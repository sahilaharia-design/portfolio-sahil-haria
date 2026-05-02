import LeadForm from "./LeadForm";

export default function Contact() {
  return (
    <section id="connect" className="relative w-full overflow-hidden bg-[#121212] py-32 px-8 md:px-24">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[128px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-20 items-start">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-white/35 mb-5">
            Start here
          </p>
          <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-8">
            Let’s build the next conversation.
          </h3>
          
          <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed mb-10">
            Open to collaborations, speaking opportunities, growth and product advisory, and thoughtful conversations around founder journeys.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
            {["Speaking", "Advisory", "Partnerships", "Founder conversations"].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/70">
                {item}
              </div>
            ))}
          </div>

          <div>
            <p className="text-white/90 font-medium text-lg">Dr. Sahil Haria, PhD</p>
            <p className="text-white/50 text-sm tracking-widest uppercase mt-2">Mumbai, India</p>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a 
              href="https://www.linkedin.com/in/sahilharia92/" 
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-full bg-white/10 px-6 text-sm font-medium text-white transition-colors hover:bg-white/20 border border-white/10"
            >
              LinkedIn
            </a>
            <a 
              href="https://www.instagram.com/sahil.haria" 
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-full bg-white/10 px-6 text-sm font-medium text-white transition-colors hover:bg-white/20 border border-white/10"
            >
              Instagram
            </a>
          </div>
        </div>

        <LeadForm />
      </div>
    </section>
  );
}
