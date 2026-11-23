import { MetadataRoute } from "next";
import { COURSES } from "@/data/courses";
import { AGENCY_SERVICES } from "@/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://academy.smartedgegroup.in";
  const currentDate = new Date().toISOString();

  // Core Static Routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/courses`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/placements`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.85,
    },
  ];

  // Course Dynamic Pages
  const courseRoutes: MetadataRoute.Sitemap = COURSES.map((course) => ({
    url: `${baseUrl}/courses/${course.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  // Service Dynamic Pages
  const serviceRoutes: MetadataRoute.Sitemap = AGENCY_SERVICES.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...courseRoutes, ...serviceRoutes];
}
