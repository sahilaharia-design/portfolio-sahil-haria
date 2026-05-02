import { TrendingUp, Target, MapPin, Video, Share2, Lightbulb } from "lucide-react";

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
    <section className="relative w-full bg-[#121212] py-24 px-8 md:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            Selected Proof of Work
          </h3>
          <p className="text-lg text-white/60 font-light max-w-2xl">
            A cross-section of growth, product, brand, content, and creative execution across India and the United States.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {proofOfWork.map((work, idx) => {
            const Icon = work.icon;
            return (
              <div
                key={idx}
                className="flex flex-col rounded-2xl bg-white/[0.02] border border-white/5 p-8 transition-colors hover:bg-white/[0.04]"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-white/70" />
                  </div>
                  <div>
                    <p className="text-[10px] font-medium text-white/40 mb-1 uppercase tracking-widest">
                      {work.category}
                    </p>
                    <h4 className="text-xl font-bold text-white leading-tight">
                      {work.title}
                    </h4>
                  </div>
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
