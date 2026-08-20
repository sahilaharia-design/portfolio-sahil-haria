import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sahilharia.com"),
  title: {
    default: "Dr. Sahil Haria, PhD | Founder, Growth Strategist & Endurance Builder",
    template: "%s | Dr. Sahil Haria, PhD",
  },
  description:
    "Explore Dr. Sahil Haria, PhD: Mumbai-based founder, growth strategist, product thinker, speaker, consultant, and endurance builder working across Mirar, Jagruti Steel, Jugaadors, Sociato, AI growth systems, self-reflection, speaking, workshops, and legacy business modernization.",
  applicationName: "Dr. Sahil Haria, PhD",
  authors: [{ name: "Dr. Sahil Haria, PhD", url: "https://www.sahilharia.com" }],
  creator: "Dr. Sahil Haria, PhD",
  publisher: "Dr. Sahil Haria, PhD",
  category: "Personal portfolio",
  keywords: [
    "Dr. Sahil Haria",
    "Sahil Haria",
    "Sahil Haria PhD",
    "Mumbai founder",
    "growth strategist",
    "growth consultant",
    "business consultant Mumbai",
    "speaker on AI and growth",
    "founder speaker India",
    "podcast guest founder",
    "entrepreneurship speaker",
    "marketing speaker",
    "AI systems consultant",
    "lead generation consultant",
    "workshop facilitator",
    "product marketing",
    "digital growth",
    "AI growth systems",
    "Mirar",
    "Mirar life",
    "emotional hygiene",
    "mental hygiene",
    "self-reflection platform",
    "Jagruti Steel",
    "Jagruti Group",
    "stainless steel manufacturing",
    "OEM stainless steel",
    "legacy business modernization",
    "manufacturing modernization",
    "consulting opportunities",
    "speaking opportunities",
    "podcast interviews",
    "founder workshops",
    "Jugaadors",
    "Sociato",
    "founder portfolio",
    "endurance builder",
    "Ironman 70.3",
    "HYROX",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    locale: "en_US",
    url: "https://www.sahilharia.com",
    siteName: "Dr. Sahil Haria, PhD",
    title: "Dr. Sahil Haria, PhD | Founder, Growth Strategist & Endurance Builder",
    description:
      "A portfolio and inquiry hub across Mirar, Jagruti Steel, consulting, speaking, workshops, Jugaadors, Sociato, AI-era growth systems, product strategy, endurance, and thoughtful collaboration.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dr. Sahil Haria, PhD portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@sahilharia92",
    creator: "@sahilharia92",
    title: "Dr. Sahil Haria, PhD | Founder, Growth Strategist & Endurance Builder",
    description:
      "Mumbai-based founder, speaker, consultant, and builder across Mirar, Jagruti Steel, AI growth systems, digital strategy, endurance, and modern collaboration.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/sahil-avatar.png", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/sahil-avatar.png",
    apple: "/sahil-avatar.png",
  },
  other: {
    "profile:first_name": "Sahil",
    "profile:last_name": "Haria",
    "profile:username": "sahilharia92",
    "geo.region": "IN-MH",
    "geo.placename": "Mumbai",
    "theme-color": "#121212",
    "ai:summary":
      "Dr. Sahil Haria, PhD is a Mumbai-based founder, growth strategist, product thinker, speaker, consultant, and endurance builder focused on Mirar, Jagruti Steel, AI-supported growth systems, consulting, speaking, workshops, manufacturing modernization, and thoughtful collaboration.",
    "ai:topics":
      "consulting, speaking, podcasts, workshops, AI systems, growth strategy, lead generation, product marketing, Mirar, Jagruti Steel, stainless steel manufacturing, founder journeys, emotional hygiene, endurance",
    "llms:summary":
      "This site explains Sahil Haria's current work, ventures, experience, inquiry paths, speaking topics, collaboration interests, and contact routes.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} antialiased bg-background text-foreground`}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GEZDJK0P24"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GEZDJK0P24');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
