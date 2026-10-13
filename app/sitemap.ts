import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const siteUrl = "https://hammad986.dpdns.org";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: `${siteUrl}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1
    },
    {
      url: `${siteUrl}/projects/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9
    },
    {
      url: `${siteUrl}/certifications/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: `${siteUrl}/experience/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: `${siteUrl}/about/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7
    },
    {
      url: `${siteUrl}/contact/`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.6
    },
    {
      url: `${siteUrl}/privacy/`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3
    },
    {
      url: `${siteUrl}/terms/`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3
    }
  ];
}
