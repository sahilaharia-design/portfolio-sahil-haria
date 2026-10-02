import type { MetadataRoute } from "next";
import { videos } from "@/lib/videos";

const baseUrl = "https://www.sahilharia.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      images: [`${baseUrl}/og-image.png`, `${baseUrl}/ironman-endurance.jpg`],
    },
    ...videos.map((video) => ({
      url: `${baseUrl}/watch/${video.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
      videos: [{ title: video.title, description: video.description, thumbnail_loc: `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`, player_loc: `https://www.youtube.com/embed/${video.id}` }],
    })),
  ];
}
