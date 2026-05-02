import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Reimagined",
    category: "Web Application",
    description: "A headless Shopify experience built with Next.js and Framer Motion, delivering sub-second page loads and fluid transitions.",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Fintech Dashboard",
    category: "UI/UX Design",
    description: "Complex financial data visualization turned into an intuitive, accessible dashboard using Recharts and Tailwind.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "AI Chat Interface",
    category: "Product Design",
    description: "A sleek, responsive interface for an AI assistant, featuring real-time streaming responses and markdown support.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Web3 Platform",
    category: "Frontend Development",
    description: "Decentralized application frontend with wallet integration, interactive 3D elements, and robust error handling.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f4ec651?auto=format&fit=crop&q=80&w=800",
  },
];

export default function Projects() {
  return (
    <section className="relative w-full bg-[#121212] py-24 md:py-48 px-8 md:px-24">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <h3 className="text-4xl md:text-5xl font-bold text-white mb-16 tracking-tight">
          Selected Works
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md transition-all duration-500 hover:bg-white/[0.05] hover:border-white/[0.15] hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.1)]"
            >
              <div className="relative h-64 md:h-80 w-full overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent opacity-80" />
              </div>

              <div className="relative p-8 md:p-10 -mt-20">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-blue-400 mb-2 uppercase tracking-wider">
                      {project.category}
                    </p>
                    <h4 className="text-2xl md:text-3xl font-bold text-white mb-4">
                      {project.title}
                    </h4>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/20 transition-transform duration-500 group-hover:scale-110 group-hover:bg-white/20">
                    <ArrowUpRight className="w-6 h-6 text-white" />
                  </div>
                </div>
                <p className="text-white/60 leading-relaxed max-w-md">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
