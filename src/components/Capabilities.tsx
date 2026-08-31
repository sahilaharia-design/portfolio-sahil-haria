"use client";

import { Layers, Megaphone, Target, Users, Wrench } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "./MotionPrimitives";

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
    skills: ["Product messaging", "Website strategy", "Product launch planning", "Funnel design", "User onboarding", "Customer journey mapping", "Product-led growth", "AI-supported product thinking", "No-code and automation workflows", "Chatbot and lead-routing systems"]
  },
  {
    title: "Leadership & Operations",
    icon: Users,
    skills: ["Team management", "Client strategy", "Cross-functional collaboration", "Creative direction", "Project management", "Agency operations", "Founder operations", "Vendor coordination", "International launch execution", "Manufacturing coordination", "B2B growth"]
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: ["HubSpot", "Mailchimp", "Pardot", "Zendesk", "Sprout Social", "Jira", "SurveyMonkey", "Hootsuite", "Asana", "Google Workspace", "ChatGPT", "Claude", "Manus", "Antigravity", "Notion", "Google Sheets", "WhatsApp", "HTML5", "CSS", "Photoshop"]
  }
];

export default function Capabilities() {
  return (
    <section className="cinematic-section relative w-full overflow-hidden bg-[#121212] py-24 px-6 md:px-24">
      <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="max-w-7xl mx-auto">
        <Reveal>
          <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-16">
            Capabilities for inquiry, strategy, and execution
          </h3>
        </Reveal>

        <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {capabilityGroups.map((group, idx) => {
            const Icon = group.icon;
            return (
              <StaggerItem key={idx} className="premium-card kinetic-card group flex flex-col rounded-3xl border border-white/5 bg-white/[0.02] p-6">
                <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                  <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.045] transition-colors duration-500 group-hover:bg-white/[0.08]">
                    <Icon className="w-4 h-4 text-white/70 transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <h4 className="text-lg font-bold text-white">
                    {group.title}
                  </h4>
                </div>
                <ul className="space-y-3">
                  {group.skills.map((skill, i) => (
                    <li key={i} className="text-white/60 font-light text-sm flex items-center transition-colors duration-300 hover:text-white/85">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/20 mr-3 shrink-0 transition-colors duration-300 group-hover:bg-white/35" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
