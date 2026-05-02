import { Target, Megaphone, Layers, Users, Wrench } from "lucide-react";

const capabilityGroups = [
  {
    title: "Growth & Strategy",
    icon: Target,
    skills: ["Growth strategy", "Go-to-market planning", "Digital growth", "Product marketing", "Strategic planning", "Customer acquisition", "Retention strategy", "Campaign management", "Market positioning", "Competitive analysis"]
  },
  {
    title: "Digital Marketing",
    icon: Megaphone,
    skills: ["Social media marketing", "SEO", "Google Ads", "Meta Ads", "Email marketing", "Paid acquisition", "Content calendars", "Brand campaigns", "A/B testing", "Analytics and KPIs"]
  },
  {
    title: "Product & Systems",
    icon: Layers,
    skills: ["Product messaging", "Website strategy", "Product launch planning", "Funnel design", "User onboarding", "Customer journey mapping", "Product-led growth", "AI-supported product thinking", "No-code and automation workflows"]
  },
  {
    title: "Leadership & Operations",
    icon: Users,
    skills: ["Team management", "Client strategy", "Cross-functional collaboration", "Creative direction", "Project management", "Agency operations", "Founder operations", "Vendor coordination", "International launch execution", "Manufacturing coordination", "B2B growth"]
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: ["HubSpot", "Mailchimp", "Pardot", "Zendesk", "Sprout Social", "Jira", "SurveyMonkey", "Hootsuite", "Asana", "Google Workspace", "HTML5", "CSS", "Photoshop"]
  }
];

export default function Capabilities() {
  return (
    <section className="relative w-full bg-[#121212] py-24 px-8 md:px-24">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-16">
          Capabilities
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {capabilityGroups.map((group, idx) => {
            const Icon = group.icon;
            return (
              <div key={idx} className="flex flex-col">
                <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-white/70" />
                  </div>
                  <h4 className="text-lg font-bold text-white">
                    {group.title}
                  </h4>
                </div>
                <ul className="space-y-3">
                  {group.skills.map((skill, i) => (
                    <li key={i} className="text-white/60 font-light text-sm flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/20 mr-3 shrink-0" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
