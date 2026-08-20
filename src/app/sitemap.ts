import type { MetadataRoute } from "next";

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
    {
      url: `${baseUrl}/llms.txt`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.4,
    },
  ];
}
