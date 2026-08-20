import type { MetadataRoute } from "next";

import { siteUrl } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/psicoterapia",
    "/nutricao",
    "/politica-de-agendamento",
    "/privacidade",
    "/termos",
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date("2026-08-20"),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/p") || route.startsWith("/n") ? 0.9 : 0.4,
  }));
}
