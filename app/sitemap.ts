import { MetadataRoute } from "next"
import { projectList } from "@/lib/projects"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

  if (!baseUrl) return []

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    { url: `${baseUrl.replace(/\/$/, "")}/projects`, changeFrequency: "monthly", priority: 0.8 },
    ...projectList.map((project) => ({ url: `${baseUrl.replace(/\/$/, "")}/projects/${project.slug}`, changeFrequency: "monthly" as const, priority: 0.7 })),
  ]
}
