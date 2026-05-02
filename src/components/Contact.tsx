export default function Contact() {
  return (
    <section className="relative w-full bg-[#121212] py-32 px-8 md:px-24">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[128px] pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-8">
          Let’s Connect
        </h3>
        
        <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed mb-12">
          Open to collaborations, speaking opportunities, and thoughtful conversations around growth, product, and founder journeys. Feel free to reach out.
        </p>

        <div className="mb-16">
          <p className="text-white/90 font-medium text-lg">Sahil Haria</p>
          <p className="text-white/50 text-sm tracking-widest uppercase mt-2">Mumbai, India</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="mailto:sahilaharia@gmail.com" 
            className="w-full sm:w-auto px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-white/90 transition-colors"
          >
            Email Me
          </a>
          <a 
            href="https://www.linkedin.com/in/sahilharia92/" 
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white font-medium rounded-full hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/10"
          >
            Connect on LinkedIn
          </a>
          <a 
            href="https://www.instagram.com/sahil.haria" 
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-white/10 text-white font-medium rounded-full hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/10"
          >
            Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
