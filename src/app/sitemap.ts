import type { MetadataRoute } from "next";
import { ARTICLES } from "@/content/articles";
import { ROUTES, SITE_URL, articleRoutes } from "@/content/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [...ROUTES, ...articleRoutes(ARTICLES.map((a) => a.slug))];

  return routes.map((route) => ({
    url: new URL(route.path, SITE_URL).toString(),
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
