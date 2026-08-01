import type { MetadataRoute } from "next";
import { dataMeta } from "@/data/timeline";
import { CLUSTERS } from "@/lib/clusters";
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
    // Cluster pages come from the registry, so a new one cannot ship unlisted.
    ...CLUSTERS.map((c) => ({
      url: `${SITE_URL}${c.path}`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    {
      url: `${SITE_URL}/api-docs`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
  ];
}
