"use client";

import { FormEvent, useMemo, useRef, useState } from "react";
import { MessageCircle, Send, X, ExternalLink } from "lucide-react";

type ChatMessage = {
  role: "assistant" | "visitor";
  content: string;
};

const whatsappUrl =
  "https://wa.me/15107665873?text=Hi%20Sahil%2C%20I%20came%20from%20your%20portfolio%20website%20and%20wanted%20to%20connect.";

const knowledge = [
  {
    triggers: ["mirar", "mental", "emotional", "hygiene", "self", "reflection", "alignment"],
    answer:
      "Mirar is Sahil’s current product build: a daily emotional and mental hygiene system for inner clarity, self-reflection, and alignment. It is not therapy or advice; it is designed as a daily mirror for noticing patterns in ambition, identity, and inner direction.",
  },
  {
    triggers: ["jagruti", "steel", "manufacturing", "factory", "legacy", "oem", "stainless"],
    answer:
      "Jagruti connects Sahil to his family’s stainless steel manufacturing business in Mumbai, including OEM production, roundware, cookware, B2B growth, factory operations, and the modernization of legacy industry.",
  },
  {
    triggers: ["ai", "growth", "advisory", "strategy", "product", "systems", "build"],
    answer:
      "Sahil’s work sits at the intersection of AI-era growth, product systems, founder clarity, and legacy business modernization. The site is intentionally less about a fixed consulting menu and more about building useful systems with thoughtful people.",
  },
  {
    triggers: ["sociato", "marketing", "campaign", "brand", "client"],
    answer:
      "Sociato is Sahil’s digital marketing and creative execution company. It shaped his foundation in client strategy, campaigns, web development, content, brand building, and team management.",
  },
  {
    triggers: ["jugaadors", "board", "game", "culture", "storytelling"],
    answer:
      "Jugaadors is a board game company built around culture, play, nostalgia, and modern Indian storytelling, with work across manufacturing, US go-to-market, Amazon FBA, and logistics.",
  },
  {
    triggers: ["ironman", "marathon", "hyrox", "endurance", "ultra", "running"],
    answer:
      "Sahil’s endurance chapter includes one Ironman 70.3, three HYROX events, more than five full marathons, more than ten half marathons, and two ultra marathons.",
  },
  {
    triggers: ["contact", "connect", "whatsapp", "email", "reach", "call", "meet"],
    answer:
      "The best next step is to use the contact form near the end of the site. If it feels time-sensitive or more conversational, WhatsApp is available as a handoff.",
  },
];

function getReply(input: string) {
  const normalized = input.toLowerCase();
  const matched = knowledge.find((item) =>
    item.triggers.some((trigger) => normalized.includes(trigger)),
  );

  if (matched) return matched.answer;

  if (normalized.length < 8) {
    return "Ask me about Mirar, Jagruti, AI-era growth, endurance, work experience, or how to connect with Sahil.";
  }

  return "I can answer from Sahil’s portfolio: Mirar, Jagruti, AI-era growth, Sociato, Jugaadors, endurance, and how to connect. For anything more specific or personal, WhatsApp is the better handoff.";
}

export default function PortfolioChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content:
        "Hi, I can answer questions about Sahil’s work, builds, endurance story, and ways to connect.",
    },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);

  const quickPrompts = useMemo(
    () => ["What is Mirar?", "What is Jagruti?", "How can we build together?"],
    [],
  );

  const ask = (question: string) => {
    const trimmed = question.trim();
    if (!trimmed) return;

    setMessages((current) => [
      ...current,
      { role: "visitor", content: trimmed },
      { role: "assistant", content: getReply(trimmed) },
    ]);
    setInput("");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    ask(input);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      {isOpen ? (
        <div className="mb-4 w-[calc(100vw-2.5rem)] max-w-sm overflow-hidden rounded-2xl border border-white/12 bg-[#161616]/95 text-white shadow-2xl shadow-black/40 backdrop-blur-xl">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
            <div>
              <p className="text-sm font-semibold">Ask about Sahil</p>
              <p className="text-xs text-white/45">Portfolio-aware assistant</p>
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

          <div className="max-h-[360px] space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                  message.role === "visitor"
                    ? "ml-8 bg-white text-black"
                    : "mr-8 bg-white/[0.06] text-white/75"
                }`}
              >
                {message.content}
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 px-4 py-3">
            <div className="mb-3 flex flex-wrap gap-2">
              {quickPrompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => ask(prompt)}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/65 transition-colors hover:bg-white/10 hover:text-white"
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
                placeholder="Ask a question..."
                className="h-11 min-w-0 flex-1 rounded-full border border-white/10 bg-black/30 px-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-white/30"
              />
              <button
                type="submit"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-black transition-colors hover:bg-white/90"
                aria-label="Send question"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2.5 text-sm font-medium text-emerald-200 transition-colors hover:bg-emerald-400/15"
            >
              Continue on WhatsApp
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
        className="inline-flex h-14 items-center gap-3 rounded-full border border-white/12 bg-white px-5 text-sm font-semibold text-black shadow-xl shadow-black/30 transition-transform hover:scale-[1.02]"
        aria-label="Open portfolio chat"
      >
        <MessageCircle className="h-5 w-5" />
        Ask
      </button>
    </div>
  );
}
