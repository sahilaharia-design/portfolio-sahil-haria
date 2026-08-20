"use client";

import { FormEvent, useState } from "react";

type FormState = "idle" | "sending" | "sent" | "fallback" | "error";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxfyqjwanPTz87BfevFproCuRNZkrz6EUCjkS1DIF7Nbk2OfptDMT318ATQYR0CC2A9/exec";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  website: "",
  interest: "Build together",
  message: "",
};

export default function LeadForm() {
  const [form, setForm] = useState(initialForm);
  const [startedAt, setStartedAt] = useState(() => Date.now());
  const [state, setState] = useState<FormState>("idle");
  const [feedback, setFeedback] = useState("");

  const updateField = (field: keyof typeof initialForm, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const buildMailto = () => {
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        `Phone: ${form.phone}`,
        `Interest: ${form.interest}`,
        "",
        form.message,
      ].join("\n"),
    );

    return `mailto:sahilaharia@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setState("sending");
    setFeedback("");

    if (form.website.trim()) {
      setState("sent");
      setFeedback("Thanks. Your note is in. I’ll get back to you soon.");
      setForm(initialForm);
      setStartedAt(Date.now());
      return;
    }

    if (Date.now() - startedAt < 2500) {
      setState("idle");
      setFeedback("Give it one more second, then send again.");
      return;
    }

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify({
          ...form,
          formStartedAt: new Date(startedAt).toISOString(),
          submittedAt: new Date().toISOString(),
          page: typeof window !== "undefined" ? window.location.href : "",
          source: "sahilharia.com",
        }),
      });

      setState("sent");
      setFeedback("Thanks. Your note is in. I’ll get back to you soon.");
      setForm(initialForm);
      setStartedAt(Date.now());
      return;
    } catch {
      setState("fallback");
      setFeedback("Something went sideways. Opening an email draft instead.");
      window.location.href = buildMailto();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full rounded-3xl border border-white/10 bg-white/[0.03] p-5 md:p-8 text-left">
      <label className="sr-only" aria-hidden="true">
        Website
        <input
          tabIndex={-1}
          name="website"
          autoComplete="off"
          value={form.website}
          onChange={(event) => updateField("website", event.target.value)}
        />
      </label>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label className="block">
          <span className="mb-2 block text-xs font-medium uppercase tracking-widest text-white/45">Name</span>
          <input
            required
            name="name"
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            className="h-12 w-full rounded-xl border border-white/10 bg-black/30 px-4 text-white outline-none transition-colors placeholder:text-white/25 focus:border-white/35"
            placeholder="Your name"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-xs font-medium uppercase tracking-widest text-white/45">Email *</span>
          <input
            required
            name="email"
            type="email"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            className="h-12 w-full rounded-xl border border-white/10 bg-black/30 px-4 text-white outline-none transition-colors placeholder:text-white/25 focus:border-white/35"
            placeholder="you@example.com"
          />
        </label>
      </div>

      <label className="mt-4 block">
        <span className="mb-2 block text-xs font-medium uppercase tracking-widest text-white/45">WhatsApp / Phone *</span>
        <input
          required
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          value={form.phone}
          onChange={(event) => updateField("phone", event.target.value)}
          className="h-12 w-full rounded-xl border border-white/10 bg-black/30 px-4 text-white outline-none transition-colors placeholder:text-white/25 focus:border-white/35"
          placeholder="WhatsApp / phone number"
        />
      </label>

      <label className="mt-4 block">
        <span className="mb-2 block text-xs font-medium uppercase tracking-widest text-white/45">Where should we begin?</span>
        <select
          name="interest"
          value={form.interest}
          onChange={(event) => updateField("interest", event.target.value)}
          className="h-12 w-full rounded-xl border border-white/10 bg-black/30 px-4 text-white outline-none transition-colors focus:border-white/35"
        >
          <option>Build together</option>
          <option>Consulting / growth strategy</option>
          <option>Speaking / podcast / media</option>
          <option>Workshop / guest lecture</option>
          <option>AI and growth systems</option>
          <option>Website / lead-generation system</option>
          <option>Founder conversation</option>
          <option>Legacy business modernization</option>
          <option>Mirar</option>
          <option>Jagruti / manufacturing</option>
          <option>Brand / content collaboration</option>
        </select>
      </label>

      <label className="mt-4 block">
        <span className="mb-2 block text-xs font-medium uppercase tracking-widest text-white/45">Message</span>
        <textarea
          required
          name="message"
          rows={5}
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          className="w-full resize-none rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition-colors placeholder:text-white/25 focus:border-white/35"
          placeholder="A little context: what you’re building, what is changing, or where you think we could create something useful..."
        />
      </label>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={state === "sending"}
          className="inline-flex h-12 items-center justify-center rounded-full bg-white px-7 text-sm font-semibold text-black transition-colors hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {state === "sending" ? "Sending..." : "Start the conversation"}
        </button>
        <a
          href="mailto:sahilaharia@gmail.com"
          className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-7 text-sm font-medium text-white transition-colors hover:bg-white/[0.08]"
        >
          Email directly
        </a>
      </div>

      {feedback && (
        <p className={`mt-4 text-sm ${state === "sent" ? "text-emerald-300" : "text-white/55"}`}>
          {feedback}
        </p>
      )}
    </form>
  );
}
