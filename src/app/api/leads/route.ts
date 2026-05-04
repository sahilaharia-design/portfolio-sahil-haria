import { NextRequest, NextResponse } from "next/server";

type LeadPayload = {
  name?: string;
  email?: string;
  phone?: string;
  website?: string;
  formStartedAt?: string;
  interest?: string;
  message?: string;
  page?: string;
};

const required = ["name", "email", "phone", "message"] as const;

export async function POST(request: NextRequest) {
  const payload = (await request.json()) as LeadPayload;

  if (payload.website?.trim()) {
    return NextResponse.json({ ok: true, skipped: "spam" });
  }

  const missing = required.filter((field) => !payload[field]?.trim());

  if (missing.length > 0) {
    return NextResponse.json(
      { ok: false, error: `Missing required fields: ${missing.join(", ")}` },
      { status: 400 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email || "")) {
    return NextResponse.json({ ok: false, error: "Invalid email." }, { status: 400 });
  }

  if ((payload.phone || "").replace(/\D/g, "").length < 7) {
    return NextResponse.json({ ok: false, error: "Invalid phone." }, { status: 400 });
  }

  if (payload.formStartedAt) {
    const startedAt = Date.parse(payload.formStartedAt);
    if (Number.isFinite(startedAt) && Date.now() - startedAt < 2500) {
      return NextResponse.json({ ok: true, skipped: "too-fast" });
    }
  }

  const webhookUrl = process.env.LEAD_WEBHOOK_URL;

  if (!webhookUrl) {
    return NextResponse.json(
      {
        ok: false,
        fallback: "mailto",
        error: "Lead webhook is not configured.",
      },
      { status: 202 },
    );
  }

  const forwarded = await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...payload,
      source: "sahilharia.com",
      submittedAt: new Date().toISOString(),
    }),
  });

  if (!forwarded.ok) {
    return NextResponse.json(
      { ok: false, error: "Lead webhook rejected the submission." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
