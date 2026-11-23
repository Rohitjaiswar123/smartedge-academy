import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://academy.smartedgegroup.in";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: [
          "Googlebot",
          "Bingbot",
          "Applebot",
          "Baiduspider",
          "YandexBot",
          "facebookexternalhit",
          "Twitterbot",
          "LinkedInBot",
        ],
        allow: "/",
      },
      // AI Crawlers for Answer Engines & LLM Retrieval (AEO & GEO)
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "PerplexityBot",
          "ClaudeBot",
          "Claude-Web",
          "Anthropic-ai",
          "Cohere-ai",
          "OAI-SearchBot",
          "Google-Extended",
        ],
        allow: "/",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
