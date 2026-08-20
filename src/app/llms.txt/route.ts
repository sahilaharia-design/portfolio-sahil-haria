const content = `# Dr. Sahil Haria, PhD

Website: https://www.sahilharia.com
Location: Mumbai, India
Email: sahilaharia@gmail.com
Booking: https://calendar.app.google/gJe3uipGZPyMipvXA
LinkedIn: https://www.linkedin.com/in/sahilharia92/

## Summary

Dr. Sahil Haria, PhD is a Mumbai-based founder, growth strategist, product thinker, speaker, consultant, and endurance builder with 15+ years of India and US experience across SaaS, apps, restaurants, nonprofits, e-commerce, consumer brands, board games, stainless steel manufacturing, digital marketing, and self-reflection products.

His current work is anchored in two main pillars:

1. Mirar: an emotional and mental hygiene system for daily self-reflection.
2. Jagruti Group / Jagruti Steel: a stainless steel manufacturing and OEM business rooted in legacy, operations, B2B relationships, and modernization.

He is also Co-Founder of Jugaadors, a board game company focused on modern Indian storytelling for global audiences, and Sociato, a digital marketing and creative execution company.

## Inquiry routes

Sahil is open to thoughtful conversations around:

- Consulting and growth strategy
- Lead-generation systems
- AI-supported workflows
- Website conversion systems
- Product strategy
- Founder-led content systems
- Speaking, podcasts, panels, workshops, and guest lectures
- Mirar, emotional hygiene, mental hygiene, and self-reflection products
- Jagruti Steel, OEM stainless steel, private label, cookware, hospitality products, and manufacturing modernization
- Founder journeys, returning to India, endurance, alignment, and identity shifts
- Brand, media, writing, and content collaborations

## Speaking topics

Sahil can speak on AI-supported systems, founder identity shifts, emotional and mental hygiene, returning to India after years in the US, growth and product strategy, lead generation, legacy manufacturing modernization, endurance and discipline, Mirar, Jagruti, Jugaadors, Sociato, and building clearly in fast-moving markets.

## Current ventures

Mirar: https://www.mirar.life
Jagruti Steel: https://www.jagrutisteels.com
Jugaadors: https://www.jugaadors.com
Sociato: https://www.sociato.in

## Boundaries

Mirar is not therapy, medical advice, coaching, or a quick fix. It is being built as an emotional and mental hygiene system for daily self-reflection.

Jagruti manufacturing inquiries should be reviewed based on product details, material requirements, quantity, specifications, and feasibility. The site does not quote pricing, capacity, or timelines.

Jugaadors unreleased product details, costs, partners, and internal launch plans should not be shared.
`;

export function GET() {
  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
