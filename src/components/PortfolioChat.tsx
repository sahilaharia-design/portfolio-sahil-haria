"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowRight,
  BriefcaseBusiness,
  ExternalLink,
  GraduationCap,
  MessageCircle,
  Send,
  Sparkles,
  X,
} from "lucide-react";

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

const whatsappUrl =
  "https://wa.me/15107665873?text=Hi%20Sahil%2C%20I%20came%20from%20your%20portfolio%20website%20and%20wanted%20to%20connect.";

const quickPrompts = [
  "How many years of experience?",
  "How long was Sahil in the US?",
  "What is Sahil building now?",
  "What roles fit Sahil?",
  "What is Mirar?",
  "Summarize Sahil in 30 seconds",
];

const knowledge: KnowledgeCard[] = [
  {
    title: "Experience",
    triggers: [
      "experience",
      "years",
      "career",
      "work history",
      "background",
      "resume",
      "cv",
      "total",
    ],
    answer:
      "Sahil has 15+ years of experience across India and the US. His work spans founder/operator roles, product marketing, digital growth, SaaS, apps, restaurant groups, nonprofit/STEAM education, e-commerce, consumer brands, and manufacturing-led ventures.",
    prompts: ["What companies has he worked with?", "What is his strongest skill mix?"],
  },
  {
    title: "US chapter",
    triggers: [
      "usa",
      "us",
      "united states",
      "america",
      "california",
      "san francisco",
      "bay area",
      "berkeley",
      "san jose",
      "sunnyvale",
    ],
    answer:
      "Sahil spent roughly 8 years in the US, mainly in California. That chapter includes UC Berkeley, Flock in San Francisco, Chefling in Sunnyvale, Back of the House in San Francisco, and RAFT in San Jose.",
    prompts: ["What did he do in San Francisco?", "Tell me about his education"],
  },
  {
    title: "Current builds",
    triggers: ["building", "now", "current", "ventures", "founder", "today", "focus"],
    answer:
      "Right now Sahil is building across three connected worlds: Mirar, a self-reflection and inner clarity platform; Jagruti, the modernization/growth side of a stainless steel manufacturing legacy; and Jugaadors, a board game venture bringing modern Indian storytelling to global audiences.",
    prompts: ["What is Mirar?", "What is Jagruti?", "What is Jugaadors?"],
  },
  {
    title: "Mirar",
    triggers: ["mirar", "mental", "emotional", "hygiene", "reflection", "alignment", "purpose"],
    answer:
      "Mirar is Sahil’s current product build: a tech-enabled self-reflection platform for founders and professionals who want to realign with purpose. The idea blends behavioral science, product strategy, and AI-driven insight into a daily emotional and mental hygiene system.",
    prompts: ["Who is Mirar for?", "How does Mirar connect to AI?"],
  },
  {
    title: "Jagruti",
    triggers: ["jagruti", "steel", "manufacturing", "factory", "legacy", "oem", "stainless"],
    answer:
      "Jagruti connects Sahil to stainless steel manufacturing, family business, OEM production, roundware/cookware, factory operations, and B2B growth. The deeper theme is how legacy industries modernize without losing their roots.",
    prompts: ["How does Jagruti fit his story?", "What does Sahil know about operations?"],
  },
  {
    title: "Jugaadors",
    triggers: ["jugaadors", "board", "game", "games", "culture", "storytelling", "amazon", "fba"],
    answer:
      "Jugaadors is Sahil’s board game venture built around culture, play, nostalgia, and modern Indian storytelling. He co-founded it and manages operations from manufacturing in India to Amazon FBA and international go-to-market.",
    prompts: ["What founder skills does that show?", "What is Sahil building now?"],
  },
  {
    title: "Sociato",
    triggers: ["sociato", "agency", "marketing company", "clients", "team", "digital agency"],
    answer:
      "Sociato is Sahil’s digital marketing and creative execution company, started in 2015. He has led a team across marketing, web development, and design, and built a base of 60+ clients across technology, fitness, fashion, entertainment, food, consumer goods, and retail.",
    prompts: ["What are Sahil’s marketing strengths?", "What industries has he worked in?"],
  },
  {
    title: "Professional roles",
    triggers: ["company", "companies", "worked", "raft", "back of the house", "chefling", "flock", "grabr"],
    answer:
      "Selected roles: Growth Marketing Director at RAFT in San Jose; Digital and Growth Marketing Manager at Back of the House across 15 restaurant brands and 35 locations; Product and Digital Marketing Manager at Chefling in Sunnyvale; Digital and Product Marketing Specialist at Flock in San Francisco; plus earlier work with Grabr, freelance consulting, and Deltecs in Mumbai.",
    prompts: ["What did he do at Chefling?", "What did he do at Back of the House?"],
  },
  {
    title: "Product marketing",
    triggers: ["product marketing", "gtm", "go to market", "launch", "positioning", "messaging"],
    answer:
      "Sahil’s product marketing work includes positioning, messaging, GTM planning, release marketing, content calendars, website and blog launches, product videos, competitive differentiation, email programs, and campaign execution across SaaS and app environments.",
    prompts: ["What metrics are on his resume?", "What tools does he know?"],
  },
  {
    title: "Metrics",
    triggers: ["metric", "metrics", "results", "numbers", "cpi", "traffic", "budget", "clients"],
    answer:
      "A few concrete proof points: 60+ clients through Sociato; digital growth across 15 restaurant brands and 35 locations at Back of the House; 30% website traffic lift at Chefling; $25K+ paid media budgets; CPI as low as $0.75 for Android and $1.04 for iOS app downloads.",
    prompts: ["What roles fit Sahil?", "What are his strongest skills?"],
  },
  {
    title: "Education",
    triggers: ["education", "phd", "doctorate", "mba", "degree", "university", "cumberlands", "campbellsville"],
    answer:
      "Sahil holds a PhD in Business with Strategic Management from University of the Cumberlands, an MBA in Marketing from Campbellsville University, a master’s in project management and entrepreneurship from UC Berkeley, a Master of Commerce from University of Mumbai, an Advanced Digital Marketing certificate, and a Bachelor of Management Studies.",
    prompts: ["Why Dr. Sahil Haria, PhD?", "What can he teach?"],
  },
  {
    title: "Teaching",
    triggers: ["teach", "teaching", "professor", "faculty", "lecture", "mentor", "course"],
    answer:
      "Sahil is interested in teaching strategy, entrepreneurship, marketing, and core management subjects. His edge is that he can connect academic strategy with lived founder/operator experience across India and the US.",
    prompts: ["Tell me about his education", "What is his work experience?"],
  },
  {
    title: "Skills",
    triggers: ["skills", "tools", "hubspot", "mailchimp", "pardot", "seo", "ads", "asana", "jira"],
    answer:
      "His skill mix includes customer success, management, project management, strategic planning, digital and product marketing, SEO, Google Ads, paid social, email marketing, HubSpot, Mailchimp, Pardot, Zendesk, Sprout Social, Jira, SurveyMonkey, Hootsuite, Asana, Google Workspace, HTML5, CSS, and Photoshop.",
    prompts: ["What roles fit Sahil?", "What industries has he worked in?"],
  },
  {
    title: "Endurance",
    triggers: ["ironman", "marathon", "hyrox", "endurance", "ultra", "running", "fitness"],
    answer:
      "Sahil’s endurance story includes one Ironman 70.3, three HYROX events, more than five full marathons, more than ten half marathons, and two ultra marathons. On the site, that chapter is less bragging-rights and more proof of discipline, rhythm, and honesty with the body.",
    prompts: ["How does endurance connect to his work?", "Summarize Sahil in 30 seconds"],
  },
  {
    title: "Personality",
    triggers: ["personality", "tone", "person", "values", "how would sahil answer", "style"],
    answer:
      "Based on the portfolio, Sahil’s voice should feel reflective, founder-minded, warm, direct, and systems-oriented. He tends to connect growth with inner clarity: build fast, but stay aligned; use AI, but stay human; respect legacy, but modernize with courage.",
    prompts: ["How can we build together?", "What is Sahil building now?"],
  },
  {
    title: "Fit",
    triggers: ["hire", "role", "fit", "advisor", "consult", "consulting", "collaborate", "build together"],
    answer:
      "The best fit is not a generic advisory pitch. Sahil is strongest where growth, product, founder clarity, storytelling, and operating systems meet: AI-era growth projects, product/GTM strategy, brand and campaign systems, founder/operator support, and modernization work for businesses with real legacy.",
    prompts: ["What should I contact Sahil about?", "What is his strongest skill mix?"],
  },
  {
    title: "Contact",
    triggers: ["contact", "connect", "whatsapp", "email", "reach", "call", "meet", "message"],
    answer:
      "You can use the form on this site for thoughtful collaboration notes. If it feels time-sensitive or more conversational, use WhatsApp and send a short note about what you’re building, where you’re stuck, and what kind of help or collaboration you’re imagining.",
    prompts: ["Draft a message to Sahil", "How can we build together?"],
  },
];

function normalize(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9+\s]/g, " ");
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

  if (includesAny(normalized, ["30 second", "short summary", "summarize", "who is sahil"])) {
    return {
      role: "assistant",
      content:
        "Sahil is a founder, PhD, and growth strategist with 15+ years across India and the US. He has built growth systems across SaaS, apps, restaurants, nonprofits, consumer brands, e-commerce, and manufacturing. Today he is building Mirar around self-reflection and AI-era clarity, Jagruti around legacy manufacturing growth, and Jugaadors around modern Indian storytelling.",
      prompts: ["What is he building now?", "What roles fit Sahil?"],
    };
  }

  if (
    includesAny(normalized, ["years in us", "years was sahil in us", "long in us", "time in us"])
  ) {
    return {
      role: "assistant",
      content:
        "Roughly 8 years. Sahil’s US chapter runs from his UC Berkeley/project management and entrepreneurship period in 2017 through roles in San Francisco, Sunnyvale, and San Jose until 2025.",
      prompts: ["What did he do in the US?", "Tell me about his education"],
    };
  }

  if (
    includesAny(normalized, ["how many years", "total years", "years of work", "years experience"])
  ) {
    return {
      role: "assistant",
      content:
        "Sahil has 15+ years of total India and US experience. The earliest listed professional chapter starts in 2013, and his founder/operator work with Sociato has continued since 2015 while he also built US growth and product marketing experience from 2017 to 2025.",
      prompts: ["How long was Sahil in the US?", "What companies has he worked with?"],
    };
  }

  if (includesAny(normalized, ["draft", "message", "intro note", "whatsapp text"])) {
    return {
      role: "assistant",
      content:
        "Here’s a simple note: “Hi Sahil, I came across your portfolio and liked how you connect growth, AI, product thinking, and inner clarity. I’m working on [context] and would love to explore whether there’s a way to build or think through this together.”",
      prompts: ["What should I contact Sahil about?", "How can we build together?"],
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
        "Try asking me something like: “How many years of experience does Sahil have?”, “What is Mirar?”, “What did he do in the US?”, or “What kind of projects should I contact him about?”",
      prompts: quickPrompts.slice(0, 4),
    };
  }

  return {
    role: "assistant",
    content:
      "I can answer best from Sahil’s resume and portfolio: work history, US experience, education, Mirar, Jagruti, Jugaadors, Sociato, skills, endurance, and collaboration fit. I don’t want to invent personal details that are not in the source material, but I can still help frame a good question or intro note.",
    prompts: ["What info is missing?", "Draft a message to Sahil"],
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
        "Hi, I’m Sahil’s portfolio guide. Ask me about his resume, US experience, founder chapters, education, skills, endurance story, or what he’s building now.",
      prompts: ["How many years of experience?", "What is Sahil building now?"],
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

    const delay = Math.min(1400, Math.max(650, trimmed.length * 18));
    pendingTimer.current = setTimeout(() => {
      setMessages((current) => [...current, getReply(trimmed)]);
      setIsThinking(false);
    }, delay);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    ask(input);
  };

  const lastPrompts = messages[messages.length - 1]?.prompts ?? featuredPrompts.slice(0, 3);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      {isOpen ? (
        <div className="mb-4 flex h-[min(720px,calc(100vh-7rem))] w-[calc(100vw-2rem)] max-w-[430px] flex-col overflow-hidden rounded-[28px] border border-white/12 bg-[#121212]/96 text-white shadow-2xl shadow-black/50 backdrop-blur-2xl">
          <div className="border-b border-white/10 px-5 py-4">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-black">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-base font-semibold">Ask about Sahil</p>
                  <p className="text-xs text-white/45">Resume + portfolio guide</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full text-white/60 transition-colors hover:bg-white/10 hover:text-white"
                aria-label="Close chat"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-2">
                <div className="mb-1 flex items-center gap-1.5 text-[11px] uppercase tracking-widest text-white/35">
                  <BriefcaseBusiness className="h-3 w-3" />
                  Experience
                </div>
                <p className="text-sm font-semibold">15+ years</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-2">
                <div className="mb-1 flex items-center gap-1.5 text-[11px] uppercase tracking-widest text-white/35">
                  <GraduationCap className="h-3 w-3" />
                  Education
                </div>
                <p className="text-sm font-semibold">PhD + MBA</p>
              </div>
            </div>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((message, index) => (
              <div key={`${message.role}-${index}`}>
                <div
                  className={`max-w-[88%] rounded-3xl px-4 py-3 text-[15px] leading-relaxed ${
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

          <div className="border-t border-white/10 px-4 py-4">
            <div className="mb-3 flex gap-2 overflow-x-auto pb-1">
              {lastPrompts.slice(0, 4).map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => ask(prompt)}
                  disabled={isThinking}
                  className="shrink-0 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs text-white/70 transition-colors hover:bg-white/10 hover:text-white disabled:opacity-45"
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
                placeholder="Ask about experience, Mirar, US, skills..."
                className="h-12 min-w-0 flex-1 rounded-full border border-white/10 bg-black/35 px-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-white/30"
              />
              <button
                type="submit"
                disabled={isThinking || !input.trim()}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-black transition-colors hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-50"
                aria-label="Send question"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm font-medium text-emerald-200 transition-colors hover:bg-emerald-400/15"
            >
              Continue on WhatsApp when it needs Sahil
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => {
          setIsOpen(true);
          setTimeout(() => inputRef.current?.focus(), 50);
        }}
        className="group inline-flex h-14 items-center gap-3 rounded-full border border-white/12 bg-white px-5 text-sm font-semibold text-black shadow-xl shadow-black/30 transition-transform hover:scale-[1.02]"
        aria-label="Open portfolio chat"
      >
        <MessageCircle className="h-5 w-5" />
        Ask
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </button>
    </div>
  );
}
