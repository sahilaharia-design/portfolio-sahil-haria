"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  CalendarDays,
  ExternalLink,
  GraduationCap,
  Mail,
  MessageCircle,
  Send,
  Sparkles,
  Phone,
  X,
} from "lucide-react";
import { bookingUrl, email, hasBookingUrl, linkedinUrl, whatsappUrl } from "@/lib/contact-links";

type ChatMessage = {
  role: "assistant" | "visitor";
  content: string;
  prompts?: string[];
};

type KnowledgeCard = {
  title: string;
  triggers: string[];
  answer: string;
  prompts?: string[];
};

const quickPrompts = [
  "What is Sahil building now?",
  "Tell me about Mirar",
  "Tell me about Jagruti",
  "View Sahil’s experience",
  "Explore collaboration opportunities",
  "Ask about growth systems",
  "Book a call",
  "Contact Sahil",
];

const collaborationPrompts = [
  "What are you trying to build or improve?",
  "Is this product, growth, manufacturing, content, AI, or something else?",
  "What stage is it at: idea, early build, live project, or scaling?",
];

const knowledge: KnowledgeCard[] = [
  {
    title: "Who is Sahil",
    triggers: ["who is sahil", "about sahil", "bio", "profile", "summary", "introduce sahil"],
    answer:
      "Sahil Haria is a Mumbai-based founder, PhD holder, growth strategist, product thinker, and endurance builder with 15+ years of India and US experience across SaaS, apps, restaurants, nonprofits, e-commerce, consumer brands, board games, manufacturing, and self-reflection products. His current work is anchored in two main pillars: Mirar and Jagruti Group / Jagruti Steel. Jugaadors and Sociato are supporting ventures in that wider world.",
    prompts: ["What is Sahil building now?", "What is his professional background?"],
  },
  {
    title: "Current builds",
    triggers: [
      "building now",
      "currently building",
      "current work",
      "current focus",
      "ventures",
      "priority",
      "main focus",
      "what is sahil building",
    ],
    answer:
      "Sahil’s current work is anchored in two main pillars. Mirar is being built as an emotional and mental hygiene system for daily self-reflection. Jagruti Group / Jagruti Steel connects him to stainless steel manufacturing, OEM production, B2B growth, and legacy business modernization. He is also involved with Jugaadors, a board game company focused on modern Indian storytelling for global audiences, and Sociato, his digital marketing and creative execution foundation.",
    prompts: ["Tell me about Mirar", "Tell me about Jagruti", "How can we collaborate?"],
  },
  {
    title: "Mirar",
    triggers: [
      "mirar",
      "mental hygiene",
      "emotional hygiene",
      "self reflection",
      "reflection",
      "alignment",
      "identity",
      "inner clarity",
      "daily check in",
      "therapy",
    ],
    answer:
      "Mirar is being built as an emotional and mental hygiene system for daily self-reflection. It is a tech-enabled platform for founders, professionals, and people navigating transition, ambition, identity shifts, and internal misalignment. The idea is simple: a small reflective check-in to help people notice where their actions, emotions, and inner direction may be drifting apart. Mirar is not therapy, not advice, not coaching, and not a quick fix. It is a small daily mirror for the inner self. Website: https://www.mirar.life. You can also reach Sahil at sahilaharia@gmail.com for thoughtful conversations around Mirar, product, or collaboration.",
    prompts: ["Who is Mirar for?", "How does Mirar connect to AI?", "Can I discuss Mirar with Sahil?"],
  },
  {
    title: "Jagruti",
    triggers: [
      "jagruti",
      "jagruti steel",
      "jagruti group",
      "manufacturing",
      "oem",
      "stainless",
      "steel",
      "cookware",
      "hospitality",
      "roundware",
      "factory",
      "private label",
      "b2b",
    ],
    answer:
      "Jagruti Group / Jagruti Steel connects Sahil to his family-linked stainless steel and metal manufacturing business in Mumbai. The business has deep roots in OEM stainless steel manufacturing, especially roundware and precision-formed products such as bread baskets, measuring bowls, food covers, trays, dhokla plates, idli plates, lids, and custom stainless steel components. For Sahil, Jagruti is not just manufacturing. It is about trust, process, quality, relationships, and modernizing an old-economy business. Website: https://www.jagrutisteels.com. For manufacturing or OEM inquiries, share product details, material requirements, expected quantity, and use case with Sahil at sahilaharia@gmail.com.",
    prompts: ["What can Jagruti manufacture?", "How should I send a manufacturing inquiry?"],
  },
  {
    title: "Jugaadors",
    triggers: ["jugaadors", "board game", "board games", "game", "games", "indian storytelling", "tabletop", "culture"],
    answer:
      "Jugaadors is a board game company focused on modern Indian storytelling for global audiences. Sahil is Co-Founder & COO, and his work focuses on operations, manufacturing coordination, international go-to-market planning, logistics, and launch execution. Website: https://www.jugaadors.com. I’ll keep this at the company level because unreleased game details, internal launch plans, partner details, costs, or specific product concepts should not be shared here.",
    prompts: ["How does Jugaadors fit Sahil’s story?", "What else is Sahil building?"],
  },
  {
    title: "Sociato",
    triggers: ["sociato", "agency", "digital marketing agency", "marketing company", "clients", "creative execution"],
    answer:
      "Sociato is Sahil’s digital marketing and creative execution company. It began as an agency in Mumbai and has worked with 60+ clients across technology, fitness, fashion, entertainment, food, consumer goods, and retail. Sociato is Sahil’s foundation in digital growth, campaign execution, web projects, brand communication, client strategy, team management, and creative direction. Website: https://www.sociato.in.",
    prompts: ["What are Sahil’s growth capabilities?", "Can Sahil help with lead generation?"],
  },
  {
    title: "Professional background",
    triggers: [
      "experience",
      "professional background",
      "work history",
      "resume",
      "career",
      "companies",
      "roles",
      "raft",
      "back of the house",
      "chefling",
      "flock",
      "grabr",
    ],
    answer:
      "Sahil has 15+ years of professional experience across India and the United States. His past roles include Growth Marketing Director at RAFT in San Jose; Digital and Growth Marketing Manager at Back of the House in San Francisco across 15 restaurant brands and 35 locations; Product and Digital Marketing Manager at Chefling in Sunnyvale; Digital and Product Marketing Specialist at Flock Software in San Francisco; and earlier chapters with Grabr, freelance consulting, and Deltecs InfoTech.",
    prompts: ["How long was Sahil in the US?", "What proof of work can I see?"],
  },
  {
    title: "US chapter",
    triggers: [
      "usa",
      "united states",
      "america",
      "california",
      "san francisco",
      "bay area",
      "berkeley",
      "san jose",
      "sunnyvale",
      "years in us",
      "long in us",
      "years was sahil in us",
    ],
    answer:
      "Sahil spent roughly 8 years in the US, mainly in California. That chapter includes UC Berkeley, Flock in San Francisco, Chefling in Sunnyvale, Back of the House in San Francisco, and RAFT in San Jose.",
    prompts: ["What did he do in San Francisco?", "Tell me about his education"],
  },
  {
    title: "Education",
    triggers: [
      "education",
      "phd",
      "doctorate",
      "mba",
      "degree",
      "university",
      "cumberlands",
      "campbellsville",
      "berkeley",
      "academic",
      "teaching",
      "speaking",
    ],
    answer:
      "Sahil holds a PhD in Business, Strategic Management from University of the Cumberlands; an MBA in Marketing from Campbellsville University; a Master’s in Project Management and Entrepreneurship from UC Berkeley; a Master of Commerce in Marketing from University of Mumbai; a Certificate in Advanced Digital Marketing from Digital Marketing Institute; and a Bachelor of Management Studies from University of Mumbai. This makes him a fit for conversations around strategy, entrepreneurship, marketing, product, growth, and teaching or speaking opportunities.",
    prompts: ["Can Sahil speak or teach?", "What is his professional background?"],
  },
  {
    title: "Portfolio",
    triggers: [
      "portfolio",
      "proof of work",
      "work samples",
      "campaigns",
      "creative direction",
      "video",
      "social media",
      "brand channels",
      "restaurant group",
    ],
    answer:
      "Sahil’s portfolio is best understood in categories: growth and digital campaigns; product marketing and positioning; restaurant group digital growth across 15 brands and 35 locations; video and creative direction; social media and brand channels; and founder-led execution across Mirar, Jagruti, Jugaadors, and Sociato. His work spans brands and projects including Flock, Chefling, Wildseed, Delarosa, Beretta, Amano, Drona Platform, Tailor’s Son, Lolinda, El Techo, The Bird, Uno Dos Tacos, Super Duper Burgers, Sociato, SoFit, Grabr, Toppr.com, Little Muffet, Raas, and Caramella.",
    prompts: ["Tell me about product marketing", "Tell me about video work"],
  },
  {
    title: "Growth systems",
    triggers: [
      "growth",
      "lead generation",
      "lead gen",
      "crm",
      "funnel",
      "outreach",
      "gtm",
      "go to market",
      "digital marketing",
      "website conversion",
      "email automation",
      "whatsapp automation",
    ],
    answer:
      "Yes. Sahil has deep experience across digital growth, campaign strategy, CRM workflows, funnel design, B2B outreach, content systems, and website conversion. He is especially interested in lead-generation systems that are not just about collecting contacts, but about creating a clearer path from positioning to outreach to follow-up to relationship-building.",
    prompts: ["Can Sahil help build a website?", "How can we collaborate?"],
  },
  {
    title: "AI systems",
    triggers: [
      "ai",
      "chatbot",
      "automation",
      "ai tools",
      "ai systems",
      "ai workflow",
      "reporting",
      "no code",
      "low code",
      "manus",
      "chatgpt",
      "claude",
      "antigravity",
    ],
    answer:
      "Sahil is actively exploring AI-supported systems across reflection, growth, lead generation, content, reporting, and workflows. If you’re building an AI-enabled product, internal system, chatbot, automation layer, or lightweight MVP, it may be worth sharing the idea and seeing where there is alignment.",
    prompts: ["What kind of AI builds interest Sahil?", "How can we collaborate?"],
  },
  {
    title: "Capabilities",
    triggers: ["capabilities", "skills", "tools", "platforms", "what can sahil do", "strengths"],
    answer:
      "Sahil’s capabilities sit in five groups. Growth & Strategy: growth strategy, GTM planning, product marketing, strategic planning, acquisition, retention, positioning, and competitive analysis. Digital Marketing: SEO, Google Ads, Meta Ads, email, paid acquisition, content calendars, A/B testing, analytics, and KPIs. Product & Systems: messaging, website strategy, funnels, onboarding, journey mapping, product-led growth, AI-supported product thinking, and no-code workflows. Leadership & Operations: team management, client strategy, creative direction, project management, founder operations, vendor coordination, manufacturing coordination, and B2B growth. Tools include HubSpot, Mailchimp, Pardot, Zendesk, Sprout Social, Jira, Asana, Google Workspace, HTML5, CSS, Photoshop, ChatGPT, Claude, Manus, Antigravity, Notion, Google Sheets, Gmail, Calendar, and WhatsApp.",
    prompts: ["Can Sahil help with lead generation?", "What kind of projects does he take on?"],
  },
  {
    title: "Endurance",
    triggers: [
      "endurance",
      "ironman",
      "ironman 70.3",
      "goa",
      "hyrox",
      "marathon",
      "ultra",
      "ultramarathon",
      "running",
      "cycling",
      "swimming",
      "tennis",
      "discipline",
    ],
    answer:
      "Endurance has become one of the clearest mirrors in Sahil’s life. Marathons, ultra-distance running, HYROX, swimming, cycling, strength training, and Ironman 70.3 Goa have taught him things that work alone never could. He sees physical challenges as a direct way to study discipline, resistance, alignment, and the gap between intention and action. A line that captures this chapter: “The body has a way of showing the truth before the mind can explain it.”",
    prompts: ["How does endurance connect to Mirar?", "Summarize Sahil in 30 seconds"],
  },
  {
    title: "Writing",
    triggers: [
      "writing",
      "personal brand",
      "content",
      "linkedin",
      "threads",
      "twitter",
      "instagram",
      "identity shifts",
      "returning home",
      "founder life",
      "building in public",
    ],
    answer:
      "Sahil writes about clarity, alignment, identity shifts, discipline, transitions, founder life, emotional and mental hygiene, returning home after years abroad, building in public, rebuilding from within, endurance, and personal alignment. His writing is not advice. It is a record of what he is learning while rebuilding his own relationship with work, ambition, movement, and purpose.",
    prompts: ["Where can I follow Sahil?", "Tell me about Mirar"],
  },
  {
    title: "Collaboration",
    triggers: [
      "collaborate",
      "collaboration",
      "work with sahil",
      "hire",
      "project",
      "build together",
      "partner",
      "advisory",
      "consulting",
      "help me build",
      "interested",
      "inquiry",
    ],
    answer:
      "Sahil is open to thoughtful projects and collaborations where there is clear overlap in values, curiosity, and execution. His current work spans Mirar, Jagruti, Jugaadors, Sociato, growth systems, product thinking, manufacturing, AI-supported workflows, and founder-led storytelling. If you’re exploring something that could benefit from strategy, systems, positioning, outreach, or collaborative building, the best next step is to share what you’re trying to build.",
    prompts: collaborationPrompts,
  },
  {
    title: "Media speaking teaching",
    triggers: [
      "podcast",
      "media",
      "interview",
      "feature",
      "speaking",
      "workshop",
      "teaching",
      "lecture",
      "academic",
      "professor",
    ],
    answer:
      "For media, podcast, speaking, teaching, or academic opportunities, Sahil can speak around building Mirar, emotional and mental hygiene, returning to India after years in the US, founder identity shifts, growth and product strategy, legacy manufacturing modernization, endurance and discipline, AI-supported systems, and building across multiple ventures. The best next step is to email sahilaharia@gmail.com with context, format, audience, and timing.",
    prompts: ["Draft an outreach note", "Tell me about Sahil’s education"],
  },
  {
    title: "Contact",
    triggers: [
      "contact",
      "email",
      "reach",
      "linkedin",
      "social",
      "instagram",
      "facebook",
      "threads",
      "message sahil",
      "whatsapp",
      "book a call",
      "calendar",
      "schedule",
      "appointment",
      "meeting",
    ],
    answer:
      "The best way to contact Sahil is by email, LinkedIn, WhatsApp, or a short booking call when there is a clear reason to talk. Email: sahilaharia@gmail.com. LinkedIn: https://www.linkedin.com/in/sahilharia92/. The chat has WhatsApp and booking handoffs below for direct follow-up. You can also follow him on Instagram: https://www.instagram.com/sahil.haria, Twitter/X: https://x.com/sahilharia92, Threads: https://www.threads.com/@sahil.haria, and Facebook: https://www.facebook.com/sahil.haria/. For collaboration, a useful subject line is: Potential Collaboration — [Your Project Name].",
    prompts: ["Book a call", "Draft an outreach note", "What should I include in my note?"],
  },
];

function normalize(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9+\s./:-]/g, " ");
}

function includesAny(text: string, terms: string[]) {
  return terms.some((term) => text.includes(term));
}

function scoreCard(text: string, card: KnowledgeCard) {
  return card.triggers.reduce((score, trigger) => {
    if (text.includes(trigger)) return score + trigger.split(" ").length + 1;
    return score;
  }, 0);
}

function getReply(input: string): ChatMessage {
  const normalized = normalize(input);

  if (
    includesAny(normalized, [
      "phone number",
      "mobile number",
      "contact number",
      "whatsapp number",
      "call number",
      "cell number",
      "phone",
      "mobile",
      "whatsapp",
    ])
  ) {
    return {
      role: "assistant",
      content:
        "You can reach Sahil through email, LinkedIn, or WhatsApp. Email: sahilaharia@gmail.com. LinkedIn: https://www.linkedin.com/in/sahilharia92/. WhatsApp is available from the chat button below for direct follow-up when the conversation needs Sahil.",
      prompts: ["Draft an outreach note", "What should I include?"],
    };
  }

  if (
    includesAny(normalized, [
      "price",
      "pricing",
      "quote",
      "cost",
      "manufacturing timeline",
      "delivery timeline",
      "capacity",
      "can jagruti make any",
      "guarantee",
    ])
  ) {
    return {
      role: "assistant",
      content:
        "For manufacturing inquiries, Sahil or the Jagruti team can review the requirement and respond based on capability, quantity, specifications, and feasibility. I should not quote pricing, promise capacity, confirm timelines, or guarantee export feasibility here. A useful inquiry includes product details, material, dimensions, quantity, use case, timeline, and any drawings or reference photos.",
      prompts: ["How should I send a manufacturing inquiry?", "Tell me about Jagruti"],
    };
  }

  if (
    includesAny(normalized, [
      "unreleased",
      "secret",
      "game concept",
      "gameplay",
      "launch strategy",
      "amazon strategy",
      "manufacturing costs",
      "partner details",
    ])
  ) {
    return {
      role: "assistant",
      content:
        "I can talk about Jugaadors at the company level: it is a board game company focused on modern Indian storytelling for global audiences. I should not reveal unreleased product details, specific game concepts, internal launch plans, partner details, or manufacturing costs.",
      prompts: ["What is Jugaadors?", "What else is Sahil building?"],
    };
  }

  if (includesAny(normalized, ["therapy", "diagnose", "mental health", "anxiety", "depression", "trauma", "burnout"])) {
    return {
      role: "assistant",
      content:
        "Mirar should not be framed as therapy, diagnosis, medical advice, coaching, or a replacement for mental health support. Mirar is being built as an emotional and mental hygiene system for daily self-reflection — a small reflective check-in to help people notice drift between actions, emotions, and inner direction.",
      prompts: ["Tell me about Mirar", "Who is Mirar for?"],
    };
  }

  if (includesAny(normalized, ["30 second", "short summary", "summarize", "quick bio", "one paragraph"])) {
    return {
      role: "assistant",
      content:
        "Sahil Haria is a Mumbai-based founder, PhD holder, growth strategist, product thinker, and endurance builder with 15+ years of India and US experience across SaaS, apps, restaurants, nonprofits, e-commerce, consumer brands, board games, manufacturing, and self-reflection products. He is currently focused on Mirar, an emotional and mental hygiene system, and Jagruti Group / Jagruti Steel, a legacy stainless steel manufacturing business being viewed through a modern growth lens. He is also the Co-Founder of Jugaadors and Sociato, and has completed Ironman 70.3 Goa, HYROX, marathons, and ultra-distance endurance challenges.",
      prompts: ["What is Sahil building now?", "How can we collaborate?"],
    };
  }

  if (
    includesAny(normalized, ["years in us", "years was sahil in us", "long in us", "time in us"])
  ) {
    return {
      role: "assistant",
      content:
        "Sahil spent roughly 8 years in the US, mainly in California. That chapter includes UC Berkeley, Flock in San Francisco, Chefling in Sunnyvale, Back of the House in San Francisco, and RAFT in San Jose.",
      prompts: ["What did he do in the US?", "Tell me about his education"],
    };
  }

  if (
    includesAny(normalized, ["how many years", "total years", "years of work", "years experience"])
  ) {
    return {
      role: "assistant",
      content:
        "Sahil has 15+ years of total India and US experience. His professional chapters run from early marketing work in Mumbai, to US growth and product marketing roles in California, to his current founder work across Mirar, Jagruti, Jugaadors, and Sociato.",
      prompts: ["How long was Sahil in the US?", "View Sahil’s experience"],
    };
  }

  if (
    includesAny(normalized, [
      "what kind of projects",
      "take on",
      "project types",
      "open to",
      "can sahil help",
      "work on",
    ])
  ) {
    return {
      role: "assistant",
      content:
        "Sahil is most interested in projects that involve building something meaningful — whether that is a growth system, product concept, manufacturing opportunity, content engine, reflective digital tool, AI-enabled workflow, or new business experiment. He is not positioning himself as a generic consultant; he is more interested in thoughtful builds, strategic collaboration, and systems that can compound.\n\nIf you are exploring a real collaboration, the useful starting point is: what are you trying to build or improve, what stage is it at, and what kind of support are you looking for?",
      prompts: collaborationPrompts,
    };
  }

  if (
    includesAny(normalized, [
      "i want to work",
      "let's work",
      "lets work",
      "can i work",
      "work with sahil",
      "interested in working",
      "collaboration inquiry",
      "we should talk",
      "i have a project",
      "i'm building",
      "im building",
    ])
  ) {
    return {
      role: "assistant",
      content:
        "Sounds interesting. The best next step is to send Sahil a short note with what you’re building, where it currently stands, and what kind of collaboration you’re exploring. Email: sahilaharia@gmail.com. LinkedIn: https://www.linkedin.com/in/sahilharia92/. Suggested subject: Potential Collaboration — [Your Project Name]. To shape the note, start with: what are you trying to build or improve?",
      prompts: collaborationPrompts,
    };
  }

  if (includesAny(normalized, ["draft", "message", "intro note", "email subject", "outreach note"])) {
    return {
      role: "assistant",
      content:
        "Here’s a simple note: “Hi Sahil, I came across your portfolio and liked how you connect growth, product, AI-supported systems, manufacturing, and inner clarity. I’m working on [brief context]. It is currently at [idea / early build / live / scaling], and I’m exploring support around [strategy / execution / systems / positioning / outreach / collaboration]. Would be glad to share more if there’s overlap.” Subject: Potential Collaboration — [Your Project Name]. Send it to sahilaharia@gmail.com or connect on LinkedIn: https://www.linkedin.com/in/sahilharia92/.",
      prompts: ["What should I include in my note?", "What projects interest Sahil?"],
    };
  }

  const ranked = knowledge
    .map((card) => ({ card, score: scoreCard(normalized, card) }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score);

  if (ranked[0]) {
    return {
      role: "assistant",
      content: ranked[0].card.answer,
      prompts: ranked[0].card.prompts,
    };
  }

  if (normalized.trim().length < 6) {
    return {
      role: "assistant",
      content:
        "Try asking me about what Sahil is building now, Mirar, Jagruti or manufacturing, growth systems, collaboration opportunities, his portfolio, endurance, or how to contact him.",
      prompts: quickPrompts.slice(0, 4),
    };
  }

  return {
    role: "assistant",
    content:
      "I can help you explore Sahil’s current builds, portfolio, systems, collaborations, endurance, or how you might build something together. I’ll stay grounded in public portfolio information and avoid inventing private details or making commitments on Sahil’s behalf. What angle are you curious about: Mirar, Jagruti, growth systems, collaboration, experience, or endurance?",
    prompts: ["What is Sahil building now?", "Explore collaboration opportunities", "Contact Sahil"],
  };
}

function TypingIndicator() {
  return (
    <div className="mr-10 inline-flex items-center gap-1 rounded-2xl bg-white/[0.06] px-4 py-3 text-white/60">
      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/45 [animation-delay:-0.2s]" />
      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/45 [animation-delay:-0.1s]" />
      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/45" />
    </div>
  );
}

export default function PortfolioChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content:
        "Hi, I’m here to help you explore Sahil’s work across Mirar, Jagruti, Jugaadors, Sociato, growth strategy, endurance, writing, and collaborations.\n\nWhat would you like to know?",
      prompts: quickPrompts,
    },
  ]);

  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const pendingTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const featuredPrompts = useMemo(() => quickPrompts, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, isThinking, isOpen]);

  useEffect(() => {
    return () => {
      if (pendingTimer.current) clearTimeout(pendingTimer.current);
    };
  }, []);

  const ask = (question: string) => {
    const trimmed = question.trim();
    if (!trimmed || isThinking) return;

    setMessages((current) => [...current, { role: "visitor", content: trimmed }]);
    setInput("");
    setIsThinking(true);

    const delay = Math.min(1600, Math.max(700, trimmed.length * 18));
    pendingTimer.current = setTimeout(() => {
      setMessages((current) => [...current, getReply(trimmed)]);
      setIsThinking(false);
    }, delay);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    ask(input);
  };

  const lastPrompts = messages[messages.length - 1]?.prompts ?? featuredPrompts.slice(0, 4);

  return (
    <div className="fixed inset-x-3 bottom-[calc(env(safe-area-inset-bottom)+0.75rem)] z-50 flex flex-col items-end sm:inset-x-auto sm:right-5 sm:bottom-5">
      {isOpen ? (
        <div className="mb-3 flex h-[min(82dvh,720px)] min-h-0 w-full flex-col overflow-hidden rounded-[24px] border border-white/12 bg-[#121212]/96 text-white shadow-2xl shadow-black/50 backdrop-blur-2xl sm:mb-4 sm:h-[min(760px,calc(100vh-6.5rem))] sm:w-[calc(100vw-2rem)] sm:max-w-[460px] sm:rounded-[28px]">
          <div className="shrink-0 border-b border-white/10 px-4 py-3 sm:px-5 sm:py-4">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white text-black sm:h-11 sm:w-11">
                  <Sparkles className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold sm:text-base">Ask about Sahil</p>
                  <p className="text-[11px] text-white/45 sm:text-xs">Thoughtful portfolio guide</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/[0.06] text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                aria-label="Close chat"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-4 hidden grid-cols-2 gap-2 sm:grid">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-2">
                <div className="mb-1 flex items-center gap-1.5 text-[11px] uppercase tracking-widest text-white/35">
                  <BriefcaseBusiness className="h-3 w-3" />
                  Current pillars
                </div>
                <p className="text-sm font-semibold">Mirar + Jagruti</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-2">
                <div className="mb-1 flex items-center gap-1.5 text-[11px] uppercase tracking-widest text-white/35">
                  <GraduationCap className="h-3 w-3" />
                  Background
                </div>
                <p className="text-sm font-semibold">15+ yrs · PhD</p>
              </div>
            </div>
          </div>

          <div ref={scrollRef} className="min-h-0 flex-1 space-y-3 overflow-y-auto overscroll-contain px-3 py-3 sm:px-4 sm:py-4">
            {messages.map((message, index) => (
              <div key={`${message.role}-${index}`}>
                <div
                  data-chat-message={message.role}
                  className={`max-w-[92%] whitespace-pre-line rounded-3xl px-4 py-3 text-sm leading-relaxed sm:max-w-[90%] sm:text-[15px] ${
                    message.role === "visitor"
                      ? "ml-auto bg-white text-black"
                      : "mr-auto border border-white/8 bg-white/[0.06] text-white/78"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            {isThinking ? <TypingIndicator /> : null}
          </div>

          <div className="shrink-0 border-t border-white/10 px-3 py-3 sm:px-4 sm:py-4">
            <div className="mb-3 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {lastPrompts.slice(0, 4).map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => ask(prompt)}
                  disabled={isThinking}
                  className="shrink-0 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-[11px] text-white/70 transition-colors hover:bg-white/10 hover:text-white disabled:opacity-45 sm:px-3.5 sm:text-xs"
                >
                  {prompt}
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                ref={inputRef}
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask about Mirar, Jagruti, growth, collaboration..."
                className="h-11 min-w-0 flex-1 rounded-full border border-white/10 bg-black/35 px-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-white/30 sm:h-12"
              />
              <button
                type="submit"
                disabled={isThinking || !input.trim()}
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-black transition-colors hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-50 sm:h-12 sm:w-12"
                aria-label="Send question"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>

            <div className="mt-3 grid grid-cols-2 gap-2">
              <a
                href={bookingUrl}
                target={hasBookingUrl ? "_blank" : undefined}
                rel={hasBookingUrl ? "noreferrer" : undefined}
                className="col-span-2 inline-flex items-center justify-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-white/90 sm:py-3"
              >
                <CalendarDays className="h-3.5 w-3.5" />
                Book a Call
                {hasBookingUrl ? <ExternalLink className="h-3.5 w-3.5" /> : null}
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="col-span-2 inline-flex items-center justify-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2.5 text-sm font-medium text-emerald-200 transition-colors hover:bg-emerald-400/15 sm:py-3"
              >
                <Phone className="h-3.5 w-3.5" />
                Continue on WhatsApp
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
              <a
                href={`mailto:${email}?subject=Potential%20Collaboration%20%E2%80%94%20`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-white/75 transition-colors hover:bg-white/10 hover:text-white sm:py-3"
              >
                <Mail className="h-3.5 w-3.5" />
                Email Sahil
              </a>
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-white/75 transition-colors hover:bg-white/10 hover:text-white sm:py-3"
              >
                LinkedIn
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => {
          setIsOpen(true);
          setTimeout(() => inputRef.current?.focus(), 50);
        }}
        className="group inline-flex h-14 w-14 items-center justify-center gap-3 rounded-full border border-white/12 bg-white px-0 text-sm font-semibold text-black shadow-xl shadow-black/30 transition-transform hover:scale-[1.02] sm:w-auto sm:px-5"
        aria-label="Open portfolio chat"
      >
        <MessageCircle className="h-5 w-5" />
        <span className="hidden sm:inline">Ask</span>
        <ArrowRight className="hidden h-4 w-4 transition-transform group-hover:translate-x-0.5 sm:block" />
      </button>
    </div>
  );
}
