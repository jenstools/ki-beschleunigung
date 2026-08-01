import type { MetadataRoute } from "next";
import { dataMeta } from "@/data/timeline";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  // The dataset's verification date is the honest lastmod for every surface
  // that renders it — bumping `dataMeta.lastVerifiedISO` refreshes the sitemap.
  const lastModified = dataMeta.lastVerifiedISO;

  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/api-docs`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
