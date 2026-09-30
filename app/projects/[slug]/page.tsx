import type { Metadata } from "next"
import type { ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ProjectGallery from "@/components/ProjectGallery"
import { getProject, projectList } from "@/lib/projects"
import { siteUrl } from "@/lib/site"

type Props = { params: Promise<{ slug: string }> }
export const dynamicParams = false

export function generateStaticParams() {
  return projectList.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProject((await params).slug)
  if (!project) return { title: "Project not found" }
  return {
    title: project.title,
    description: project.shortDescription,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.title} | Abdelhamed Nada`,
      description: project.shortDescription,
      type: "article",
      url: `/projects/${project.slug}`,
      locale: "en_US",
      siteName: "Abdelhamed Nada Portfolio",
      images: [{ url: project.imagePath, width: project.imageWidth, height: project.imageHeight, alt: project.title }],
    },
    twitter: { card: "summary_large_image", title: project.title, description: project.shortDescription, images: [project.imagePath] },
  }
}

function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return <section id={id} className="scroll-mt-36 py-10 md:py-14 border-t border-text-secondary/10">
    <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-8">{title}</h2>
    {children}
  </section>
}

export default async function ProjectPage({ params }: Props) {
  const project = getProject((await params).slug)
  if (!project) notFound()
  const sources = project.sourceLinks || [{ label: "Source Code", url: project.githubUrl }]
  const screens = [{ src: project.imagePath, alt: "home screen", caption: "Home — project overview", width: project.imageWidth, height: project.imageHeight }, ...project.gallery]
  const position = projectList.findIndex((item) => item.slug === project.slug)
  const nextProject = projectList[(position + 1) % projectList.length]
  const baseUrl = siteUrl

  return <>
    <Header />
    <main id="projects" className="max-w-7xl mx-auto px-6 md:px-12 pt-36 md:pt-44 pb-24 text-text-primary">
      <div className="flex flex-wrap items-center gap-6 text-sm font-bold text-text-secondary">
        <Link href="/projects" className="hover:text-text-primary">← All projects</Link>
        <Link href="/#projects" className="hover:text-text-primary">Back to portfolio</Link>
      </div>
      <div className="mt-10 max-w-4xl">
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-text-secondary mb-4">Case study · {project.createdAt}</p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-tight">{project.title}</h1>
        <p className="mt-6 text-lg text-text-secondary leading-relaxed max-w-3xl">{project.shortDescription}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer" className="bg-text-primary text-background px-6 py-3 rounded-xl text-sm font-bold hover:opacity-80">Visit live website ↗</a>
          {!project.isPrivateRepo && sources.map((source) => <a key={source.url} href={source.url} target="_blank" rel="noopener noreferrer" className="border border-text-secondary/20 text-text-primary px-6 py-3 rounded-xl text-sm font-bold hover:border-text-primary">{source.label} ↗</a>)}
        </div>
      </div>
      <div className="mt-12 md:mt-16 rounded-2xl overflow-hidden border border-text-secondary/20 bg-thirdary/20">
        <Image src={project.imagePath} alt={`${project.title} home screen`} width={project.imageWidth} height={project.imageHeight} sizes="(max-width: 1280px) 100vw, 1152px" priority className="w-full h-auto" />
      </div>
      <nav aria-label="Case study sections" className="flex flex-wrap gap-x-6 gap-y-3 py-6 text-sm font-bold text-text-secondary">
        <a href="#overview" className="hover:text-text-primary">Overview</a>
        <a href="#features" className="hover:text-text-primary">Features</a>
        {project.architecture?.length ? <a href="#architecture" className="hover:text-text-primary">Architecture</a> : null}
        {project.security?.length ? <a href="#security" className="hover:text-text-primary">Security</a> : null}
        {project.commands?.length ? <a href="#commands" className="hover:text-text-primary">Commands</a> : null}
        <a href="#gallery" className="hover:text-text-primary">Gallery ({screens.length})</a>
      </nav>
      <Section id="overview" title="Project overview">
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 md:gap-16">
          <p className="text-base md:text-lg leading-relaxed text-text-secondary">{project.description}</p>
          <div className="rounded-2xl border border-text-secondary/15 bg-thirdary/20 p-6">
            <dl className="space-y-6">
              <div><dt className="text-xs font-bold uppercase tracking-widest text-text-secondary mb-2">Year</dt><dd className="font-bold">{project.createdAt}</dd></div>
              {project.role && <div><dt className="text-xs font-bold uppercase tracking-widest text-text-secondary mb-2">My role</dt><dd className="font-bold">{project.role}</dd></div>}
              <div><dt className="text-xs font-bold uppercase tracking-widest text-text-secondary mb-3">Technologies</dt><dd className="flex flex-wrap gap-2">{project.tech.map((tech) => <span key={tech} className="text-xs font-bold px-3 py-2 rounded-lg bg-thirdary/60 border border-text-secondary/10">{tech}</span>)}</dd></div>
            </dl>
          </div>
        </div>
      </Section>
      <Section id="features" title="Key features">
        <ul className="grid sm:grid-cols-2 gap-4">
          {project.features.map((feature, index) => <li key={index} className="rounded-2xl border border-text-secondary/10 bg-thirdary/20 p-6">
            <span className="text-xs font-bold text-text-secondary">{String(index + 1).padStart(2, "0")}</span>
            <h3 className="text-base font-bold mt-3">{typeof feature === "string" ? feature : feature.title}</h3>
            {typeof feature !== "string" && <p className="text-sm text-text-secondary leading-relaxed mt-3">{feature.description}</p>}
          </li>)}
        </ul>
      </Section>
      {project.architecture?.length ? <Section id="architecture" title="How it is built">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">{project.architecture.map((item) => <div key={item.title} className="border border-text-secondary/10 rounded-2xl p-6"><h3 className="font-bold">{item.title}</h3><p className="mt-3 text-sm text-text-secondary leading-relaxed">{item.description}</p></div>)}</div>
      </Section> : null}
      {project.security?.length ? <Section id="security" title="Security & privacy">
        <ul className="space-y-4 max-w-4xl">{project.security.map((item, index) => <li key={index} className="flex gap-4 p-5 rounded-xl bg-thirdary/20 border border-text-secondary/10"><span aria-hidden="true" className="font-bold">✓</span><p className="text-text-secondary leading-relaxed">{item}</p></li>)}</ul>
      </Section> : null}
      {project.commands?.length ? <Section id="commands" title="Command reference">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">{project.commands.map((command) => <div key={command.command} className="p-6 border border-text-secondary/10 rounded-2xl bg-thirdary/20"><div className="flex items-center justify-between gap-3"><code className="text-sm font-bold">{command.command}</code><span className="text-[10px] font-bold uppercase tracking-widest text-text-secondary">{command.category}</span></div><p className="text-sm leading-relaxed text-text-secondary mt-3">{command.description}</p></div>)}</div>
      </Section> : null}
      <Section id="gallery" title="Explore the interface">
        <p className="text-sm text-text-secondary mb-8">Select any screenshot to enlarge it. Use the arrows to browse every view.</p>
        <ProjectGallery title={project.title} screens={screens} />
      </Section>
      <div className="flex flex-col sm:flex-row justify-between gap-8 border-t border-text-secondary/10 pt-10 mt-4">
        <Link href="/projects" className="text-sm font-bold text-text-secondary hover:text-text-primary">← Browse all projects</Link>
        <Link href={`/projects/${nextProject.slug}`} className="sm:text-right group"><span className="text-xs uppercase tracking-widest font-bold text-text-secondary">Next project</span><span className="block text-lg font-bold mt-2 group-hover:underline">{nextProject.title} →</span></Link>
      </div>
    </main>
    <Footer />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "CreativeWork", name: project.title, description: project.shortDescription, author: { "@type": "Person", name: "Abdelhamed Nada" }, ...(baseUrl ? { url: `${baseUrl}/projects/${project.slug}` } : {}), image: baseUrl ? `${baseUrl}${project.imagePath}` : project.imagePath }).replace(/</g, "\\u003c") }} />
  </>
}
