import ScrollyCanvas from "@/components/ScrollyCanvas";
import SiteNav from "@/components/SiteNav";
import JourneyMap from "@/components/JourneyMap";
import InquiryRoutes from "@/components/InquiryRoutes";
import CurrentFocus from "@/components/CurrentFocus";
import ProofOfWork from "@/components/ProofOfWork";
import ProfessionalProof from "@/components/ProfessionalProof";
import Endurance from "@/components/Endurance";
import AcademicFoundation from "@/components/AcademicFoundation";
import Capabilities from "@/components/Capabilities";
import SpeakingMedia from "@/components/SpeakingMedia";
import Writing from "@/components/Writing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import PortfolioChat from "@/components/PortfolioChat";
import { ScrollProgress } from "@/components/MotionPrimitives";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.sahilharia.com/#website",
      url: "https://www.sahilharia.com",
      name: "Dr. Sahil Haria, PhD",
      description:
        "Personal portfolio of Dr. Sahil Haria, PhD: founder, growth strategist, product thinker, and endurance builder.",
      inLanguage: "en",
      publisher: {
        "@id": "https://www.sahilharia.com/#person",
      },
    },
    {
      "@type": "ProfilePage",
      "@id": "https://www.sahilharia.com/#profile",
      url: "https://www.sahilharia.com",
      name: "Dr. Sahil Haria, PhD | Portfolio",
      description:
        "Explore Sahil Haria’s current work across Mirar, Jagruti Steel, Jugaadors, Sociato, consulting, speaking, growth strategy, product marketing, AI-supported systems, endurance, writing, and collaboration.",
      about: {
        "@id": "https://www.sahilharia.com/#person",
      },
      isPartOf: {
        "@id": "https://www.sahilharia.com/#website",
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://www.sahilharia.com/og-image.png",
        width: 1200,
        height: 630,
      },
    },
    {
      "@type": "Person",
      "@id": "https://www.sahilharia.com/#person",
      name: "Dr. Sahil Haria, PhD",
      alternateName: ["Sahil Haria", "Sahil Haria PhD"],
      honorificPrefix: "Dr.",
      honorificSuffix: "PhD",
      url: "https://www.sahilharia.com",
      image: "https://www.sahilharia.com/og-image.png",
      email: "mailto:sahilaharia@gmail.com",
      jobTitle: "Founder, Growth Strategist, Product Thinker, Endurance Builder",
      gender: "Male",
      nationality: "Indian",
      homeLocation: {
        "@type": "Place",
        name: "Mumbai, India",
      },
      alumniOf: [
        {
          "@type": "CollegeOrUniversity",
          name: "University of the Cumberlands",
        },
        {
          "@type": "CollegeOrUniversity",
          name: "Campbellsville University",
        },
        {
          "@type": "CollegeOrUniversity",
          name: "University of California, Berkeley",
        },
        {
          "@type": "CollegeOrUniversity",
          name: "University of Mumbai",
        },
      ],
      knowsAbout: [
        "Growth strategy",
        "Product marketing",
        "Digital marketing",
        "AI-supported systems",
        "Lead generation systems",
        "Consulting",
        "Speaking",
        "Workshops",
        "Podcast interviews",
        "Founder conversations",
        "Self-reflection products",
        "Emotional and mental hygiene",
        "Stainless steel manufacturing",
        "OEM manufacturing",
        "Legacy business modernization",
        "Founder-led storytelling",
        "Endurance training",
      ],
      founder: [
        {
          "@type": "Organization",
          name: "Mirar",
          url: "https://www.mirar.life",
          description: "An emotional and mental hygiene system for daily self-reflection.",
        },
        {
          "@type": "Organization",
          name: "Jugaadors",
          url: "https://www.jugaadors.com",
          description: "A board game company focused on modern Indian storytelling for global audiences.",
        },
        {
          "@type": "Organization",
          name: "Sociato",
          url: "https://www.sociato.in",
          description: "A digital marketing and creative execution company.",
        },
      ],
      worksFor: [
        {
          "@type": "Organization",
          name: "Mirar",
          url: "https://www.mirar.life",
        },
        {
          "@type": "Organization",
          name: "Jagruti Group / Jagruti Steel",
          url: "https://www.jagrutisteels.com",
        },
      ],
      sameAs: [
        "https://www.linkedin.com/in/sahilharia92/",
        "https://www.instagram.com/sahil.haria",
        "https://x.com/sahilharia92",
        "https://www.threads.com/@sahil.haria",
        "https://www.facebook.com/sahil.haria/",
        "https://www.mirar.life",
        "https://www.jagrutisteels.com",
        "https://www.jugaadors.com",
        "https://www.sociato.in",
      ],
    },
    {
      "@type": "VideoObject",
      "@id": "https://www.sahilharia.com/#speaking-video",
      name: "Dr. Sahil Haria speaking feature",
      description:
        "A recent YouTube feature showcasing Dr. Sahil Haria’s founder-led perspective on building, growth, systems, and modern work.",
      embedUrl: "https://www.youtube.com/embed/J4iG1q_CLEk",
      url: "https://www.youtube.com/watch?v=J4iG1q_CLEk",
      thumbnailUrl: "https://i.ytimg.com/vi/J4iG1q_CLEk/hqdefault.jpg",
      inLanguage: "en",
      creator: {
        "@id": "https://www.sahilharia.com/#person",
      },
    },
    {
      "@type": "OfferCatalog",
      "@id": "https://www.sahilharia.com/#inquiry-routes",
      name: "Ways to work with Dr. Sahil Haria, PhD",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Consulting and Growth Systems",
            description:
              "Growth strategy, lead-generation systems, funnel design, CRM workflows, website conversion, and founder-led go-to-market systems.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Speaking, Podcasts, and Workshops",
            description:
              "Speaking on AI-supported systems, founder journeys, emotional and mental hygiene, endurance, returning to India, and legacy business modernization.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Workflows and Product Builds",
            description:
              "Chatbots, lightweight MVPs, reporting systems, automation layers, product strategy, and practical AI operating systems.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Jagruti Manufacturing Inquiries",
            description:
              "OEM stainless steel, cookware, hospitality products, B2B partnerships, private label, export exploration, and legacy modernization conversations.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.sahilharia.com/#breadcrumbs",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Portfolio",
          item: "https://www.sahilharia.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Inquiry Routes",
          item: "https://www.sahilharia.com/#inquiries",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Current Focus",
          item: "https://www.sahilharia.com/#focus",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "Speaking",
          item: "https://www.sahilharia.com/#speaking",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Connect",
          item: "https://www.sahilharia.com/#connect",
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <main id="journey" className="min-h-screen bg-[#121212] selection:bg-white/20">
      <ScrollProgress />
      <SiteNav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ScrollyCanvas />
      
      <div className="relative z-20 bg-[#121212]">
        <JourneyMap />
        <InquiryRoutes />
        <CurrentFocus />
        <ProofOfWork />
        <ProfessionalProof />
        <Endurance />
        <AcademicFoundation />
        <Capabilities />
        <SpeakingMedia />
        <Writing />
        <Contact />
        <Footer />
      </div>
      <PortfolioChat />
    </main>
  );
}
