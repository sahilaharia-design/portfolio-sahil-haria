export const youtubeChannel = "https://www.youtube.com/@sahilharia92";

export const videos = [
  {
    id: "eq05AbEPus4",
    slug: "your-phone-keeps-getting-upgraded",
    title: "Your Phone Keeps Getting Upgraded. But Are You?",
    category: "Reflection",
    duration: "2:50",
    isoDuration: "PT2M50S",
    published: "2026-09-30",
    description: "We update our devices constantly. A reflection on questioning the old definitions of success, fears, and patterns we keep carrying forward.",
    paragraphs: [
      "Phones, laptops, and apps keep reminding us when an update is available. Our beliefs and habits rarely come with that notification.",
      "This reflection asks what happens when we revisit the version of ourselves running in the background: our definition of success, our relationship with money, and the patterns we have stopped questioning.",
      "It connects to the inquiry behind Mirar: making a little room each day to notice ourselves more clearly.",
    ],
    question: "What is one belief about yourself that you have not questioned in a while?",
    attribution: "Sahil × Mirar",
  },
  {
    id: "D8NSjxA9s2A",
    slug: "phone-toh-charge-ho-gaya",
    title: "Phone toh charge ho gaya… par khud ka kya",
    category: "Reflection",
    duration: "4:41",
    isoDuration: "PT4M41S",
    published: "2026-09-26",
    description: "A reflection on attention, daily check-ins, and how much of our day we choose versus how much we spend responding to the world.",
    paragraphs: [
      "Before we are properly awake, messages, work, notifications, and expectations are already asking for our attention.",
      "We make sure our phones are charged. This reflection asks how often we check in with ourselves before the demands of the day take over.",
      "The invitation is small: before asking what needs to get done today, pause to ask how you are today. A thought in collaboration with Mirar.",
    ],
    question: "Before your next notification, how are you actually feeling today?",
    attribution: "A reflection in collaboration with Mirar",
  },
  {
    id: "J4iG1q_CLEk",
    slug: "choose-purpose-over-addiction",
    title: "Choose Purpose Over Addiction",
    category: "Speaking",
    duration: "9:12",
    isoDuration: "PT9M12S",
    published: "2026-08-20",
    description: "Sahil's full talk at MET College, delivered as part of Nasha Mukt Bharat Abhiyan, an initiative driven by Brahma Kumaris.",
    paragraphs: [
      "The full recording of Sahil's talk at MET College on choosing purpose over addiction.",
      "Delivered as part of Nasha Mukt Bharat Abhiyan, an initiative driven by Brahma Kumaris. This recording gives hosts and communities a direct sample of Sahil's speaking.",
    ],
    question: "What would a more purposeful choice look like in your day?",
    attribution: "MET College · Nasha Mukt Bharat Abhiyan · Brahma Kumaris",
  },
] as const;

export type PortfolioVideo = (typeof videos)[number];

export function videoSchema(video: PortfolioVideo) {
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: video.title,
    description: video.description,
    url: `https://www.sahilharia.com/watch/${video.slug}`,
    embedUrl: `https://www.youtube.com/embed/${video.id}`,
    thumbnailUrl: `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`,
    duration: video.isoDuration,
    ...("published" in video ? { uploadDate: `${video.published}T00:00:00+05:30` } : {}),
    creator: { "@type": "Person", name: "Sahil Haria", url: "https://www.sahilharia.com" },
  };
}
