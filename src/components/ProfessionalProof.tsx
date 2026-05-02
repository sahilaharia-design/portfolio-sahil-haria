import { Building2, Utensils, Smartphone, MessageSquare } from "lucide-react";

const experiences = [
  {
    company: "RAFT",
    icon: Building2,
    role: "Growth Marketing Director",
    location: "San Jose, California",
    period: "2024 – 2025",
    description: "Led growth marketing for a STEAM education nonprofit across digital and physical store strategy, campaigns, kit sales, school partnerships, community visibility, donations, and revenue growth.",
    highlights: [
      "Revamped online and physical store growth strategy",
      "Drove STEAM kit sales and bulk order growth",
      "Built partnerships with schools and community organizations",
      "Improved brand visibility and audience engagement"
    ]
  },
  {
    company: "Back of the House, Inc.",
    icon: Utensils,
    role: "Digital and Growth Marketing Manager",
    location: "San Francisco, California",
    period: "2021 – 2024",
    description: "Owned digital growth across a major San Francisco restaurant group with 15 restaurant brands and 35 locations. Managed email marketing, paid ads, search, third-party delivery platforms, and POS-connected digital systems to support customer acquisition, retention, and digital revenue.",
    highlights: [
      "Led digital growth across 15 restaurant brands",
      "Supported 35 restaurant locations",
      "Managed campaigns across email, ads, search, delivery apps, and POS systems",
      "Worked across acquisition, retention, and revenue optimization"
    ]
  },
  {
    company: "Chefling Inc.",
    icon: Smartphone,
    role: "Product and Digital Marketing Manager",
    location: "Sunnyvale, California",
    period: "2020 – 2021",
    description: "Led product and digital marketing across website strategy, product messaging, content, blog, social media, email, A/B testing, paid acquisition, GTM planning, and product development support.",
    highlights: [
      "Launched a new website and blog",
      "Increased website traffic by 30%",
      "Managed over $25K in paid media budgets",
      "Achieved CPI of $0.75 for Android app downloads",
      "Achieved CPI of $1.04 for iOS app downloads",
      "Supported product, pricing, and GTM strategy"
    ]
  },
  {
    company: "Flock Software",
    icon: MessageSquare,
    role: "Digital and Product Marketing Specialist",
    location: "San Francisco, California",
    period: "2017 – 2020",
    description: "Worked on integrated marketing communication plans for product launches, social channels, email campaigns, events, webinars, conferences, competitive analysis, product positioning, and field enablement.",
    highlights: [
      "Supported product launches and GTM communication",
      "Built competitive differentiation materials",
      "Managed creative resources and campaign KPIs",
      "Created product spotlight video snippets for feature promotion"
    ]
  }
];

const earlierChapters = [
  { role: "Marketing Intern", company: "Grabr", location: "San Francisco", year: "2017" },
  { role: "Marketing Consultant", company: "Freelance", location: "Mumbai", year: "2014 – 2015" },
  { role: "Marketing Associate", company: "Deltecs InfoTech", location: "Mumbai", year: "2013 – 2014" },
];

export default function ProfessionalProof() {
  return (
    <section className="relative w-full bg-[#121212] py-24 px-8 md:px-24">
      <div className="max-w-4xl mx-auto">
        
        <div className="mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            Professional Proof
          </h3>
          <p className="text-lg text-white/60 font-light max-w-2xl">
            Before my current founder chapters, I built growth, product, and digital systems across SaaS, apps, restaurants, nonprofits, e-commerce, and consumer brands in India and the United States.
          </p>
        </div>

        <div className="space-y-16">
          {experiences.map((exp, idx) => {
            const Icon = exp.icon;
            return (
              <div key={idx} className="relative pl-8 md:pl-0">
                
                {/* Desktop Timeline Line */}
                <div className="hidden md:block absolute left-[-40px] top-2 bottom-[-64px] w-px bg-white/10" />
                
                {/* Desktop Icon Node */}
                <div className="hidden md:flex absolute left-[-54px] top-1 w-7 h-7 rounded-full bg-[#121212] border border-white/20 items-center justify-center z-10">
                  <Icon className="w-3.5 h-3.5 text-white/70" />
                </div>

                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 mb-4">
                  <h4 className="text-2xl font-bold text-white w-full md:w-1/3 shrink-0 flex items-center gap-3 md:block">
                    <span className="md:hidden w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-white/70" />
                    </span>
                    {exp.company}
                  </h4>
                  <div className="w-full md:w-2/3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between text-white/50 text-sm mb-2">
                      <span className="font-medium text-white/80">{exp.role}</span>
                      <span className="tracking-widest uppercase text-xs mt-1 sm:mt-0">{exp.period} • {exp.location}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-2 md:gap-8">
                  <div className="hidden md:block w-1/3 shrink-0" />
                  <div className="w-full md:w-2/3 text-white/60 font-light text-sm leading-relaxed">
                    <p className="mb-4">{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-white/30 mr-3 mt-1">—</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            );
          })}

          {/* Earlier Chapters */}
          <div className="relative pl-8 md:pl-0 pt-8 border-t border-white/5">
            <h4 className="text-lg font-medium text-white mb-6">Earlier Chapters</h4>
            <div className="space-y-4">
              {earlierChapters.map((chapter, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between text-sm text-white/50">
                  <span className="font-medium text-white/70">{chapter.role} <span className="text-white/30 mx-2">at</span> {chapter.company}</span>
                  <span className="text-xs uppercase tracking-widest mt-1 sm:mt-0">{chapter.year} • {chapter.location}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
