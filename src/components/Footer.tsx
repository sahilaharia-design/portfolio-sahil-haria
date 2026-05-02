export default function Footer() {
  const links = [
    { label: "Mirar", url: "https://www.mirar.life" },
    { label: "Jagruti Steel", url: "https://www.jagrutisteels.com" },
    { label: "Jugaadors", url: "https://www.jugaadors.com" },
    { label: "Sociato", url: "https://www.sociato.in" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/sahilharia92/" },
    { label: "Instagram", url: "https://www.instagram.com/sahil.haria" },
    { label: "Twitter / X", url: "https://x.com/sahilharia92" },
    { label: "Threads", url: "https://www.threads.com/@sahil.haria" },
    { label: "Facebook", url: "https://www.facebook.com/sahil.haria/" },
    { label: "Email", url: "mailto:sahilaharia@gmail.com" },
  ];

  return (
    <footer className="w-full bg-[#121212] py-16 px-8 md:px-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="text-center md:text-left">
          <p className="text-white/40 text-sm tracking-widest uppercase mb-4">
            Sahil Haria © {new Date().getFullYear()}
          </p>
          <p className="text-white/60 text-sm">
            Building with clarity, alignment, and purpose — one chapter at a time.
          </p>
        </div>

        <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-3 max-w-xl">
          {links.map((link, idx) => (
            <a 
              key={idx} 
              href={link.url} 
              target="_blank" 
              rel="noreferrer"
              className="text-white/50 text-sm hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
}
