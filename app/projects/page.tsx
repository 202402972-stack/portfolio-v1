import type { Metadata } from "next"
import Link from "next/link"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ProjectCards from "@/components/ProjectCards"
import { projectList } from "@/lib/projects"
import { socialImage } from "@/lib/site"

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore Abdelhamed Nada's project case studies, technologies, screenshots, and live websites.",
  alternates: { canonical: "/projects" },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Abdelhamed Nada Portfolio",
    title: "Projects | Abdelhamed Nada",
    description: "Explore Abdelhamed Nada's project case studies, technologies, screenshots, and live websites.",
    url: "/projects",
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Abdelhamed Nada",
    description: "Explore Abdelhamed Nada's project case studies, technologies, screenshots, and live websites.",
    images: [socialImage],
  },
}

export default function ProjectsPage() {
  return <>
    <Header />
    <main id="projects" className="max-w-7xl mx-auto px-6 md:px-12 pt-36 md:pt-44 pb-24 text-text-primary">
      <Link href="/#projects" className="text-sm font-bold text-text-secondary hover:text-text-primary">← Back to portfolio</Link>
      <div className="mt-10 mb-12 md:mb-16">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-text-secondary mb-4">{projectList.length} selected projects</p>
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter">Projects, in detail.</h1>
        <p className="max-w-2xl text-text-secondary mt-6 leading-relaxed">Explore the thinking, technology, and visual details behind each project. Every card opens a full case study with screenshots and links to the live experience.</p>
      </div>
      <ProjectCards />
    </main>
    <Footer />
  </>
}
