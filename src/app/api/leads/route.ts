import { NextRequest, NextResponse } from "next/server";

type LeadPayload = {
  name?: string;
  email?: string;
  phone?: string;
  interest?: string;
  message?: string;
  page?: string;
};

const required = ["name", "email", "phone", "message"] as const;

export async function POST(request: NextRequest) {
  const payload = (await request.json()) as LeadPayload;
  const missing = required.filter((field) => !payload[field]?.trim());

  if (missing.length > 0) {
    return NextResponse.json(
      { ok: false, error: `Missing required fields: ${missing.join(", ")}` },
      { status: 400 },
    );
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
