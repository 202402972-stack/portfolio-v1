import { MetadataRoute } from "next"
import { projectList } from "@/lib/projects"
import { siteUrl } from "@/lib/site"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      changeFrequency: "yearly",
      priority: 1,
    },
    { url: `${siteUrl}/projects`, changeFrequency: "monthly", priority: 0.8 },
    ...projectList.map((project) => ({ url: `${siteUrl}/projects/${project.slug}`, changeFrequency: "monthly" as const, priority: 0.7 })),
  ]
}
