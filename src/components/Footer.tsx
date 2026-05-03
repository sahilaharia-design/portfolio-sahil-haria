import { Mail } from "lucide-react";

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <rect x="4" y="4" width="16" height="16" rx="5" stroke="currentColor" strokeWidth="2" />
    <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="2" />
    <circle cx="17" cy="7" r="1.2" fill="currentColor" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <rect x="4" y="4" width="16" height="16" rx="2.5" stroke="currentColor" strokeWidth="2" />
    <path d="M8 10v7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M12 17v-4.2c0-1.7 1-2.8 2.5-2.8s2.5 1.1 2.5 2.8V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="8" cy="7.6" r="1.1" fill="currentColor" />
  </svg>
);

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path d="M6 5l12 14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    <path d="M18 5L6 19" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
  </svg>
);

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

  const socialLinks = [
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/sahilharia92/",
      icon: LinkedinIcon,
    },
    {
      label: "Instagram",
      url: "https://www.instagram.com/sahil.haria",
      icon: InstagramIcon,
    },
    {
      label: "Twitter / X",
      url: "https://x.com/sahilharia92",
      icon: XIcon,
    },
    {
      label: "Email",
      url: "mailto:sahilaharia@gmail.com",
      icon: Mail,
    },
  ];

  return (
    <footer className="w-full bg-[#121212] py-16 px-8 md:px-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="text-center md:text-left">
          <p className="text-white/40 text-sm tracking-widest uppercase mb-4">
            Dr. Sahil Haria, PhD © {new Date().getFullYear()}
          </p>
          <p className="text-white/60 text-sm">
            Building with clarity, alignment, and purpose — one chapter at a time.
          </p>
        </div>

        <div className="flex flex-col items-center gap-6 md:items-end">
          <div className="flex justify-center gap-3 md:justify-end">
            {socialLinks.map(({ label, url, icon: Icon }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/65 transition-colors hover:bg-white hover:text-black"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
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

      </div>
    </footer>
  );
}
