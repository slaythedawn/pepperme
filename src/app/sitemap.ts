import type { MetadataRoute } from "next";
import { ROUTES, SITE_URL } from "@/content/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: new URL(route.path, SITE_URL).toString(),
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
