"use client"
import Link from "next/link"
import FadeDown from "@/components/animations/FadeDown"
import FadeUp from "@/components/animations/FadeUp"
import ProjectCard from "@/components/ProjectCard"
import { projectList } from "@/lib/projects"

export default function Project() {
  return (
    <section id="projects" className="w-full mx-auto py-24 md:py-32 cursor-default bg-background relative border-t border-text-secondary/10">
      <FadeDown>
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 md:mb-24 w-full text-left">
          <h2 className="text-sm font-bold tracking-[0.2em] text-text-secondary uppercase mb-4">Portfolio</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-text-primary tracking-tighter">Selected Works</h3>
        </div>
      </FadeDown>

      <div className="w-full overflow-hidden relative py-4 motion-reduce:overflow-x-auto">
        <div className="flex w-max animate-infinite-scroll hover:[animation-play-state:paused] focus-within:[animation-play-state:paused] motion-reduce:animate-none">
          {[false, true].map((duplicate) => (
            <div key={String(duplicate)} className="flex gap-6 px-3" aria-hidden={duplicate || undefined}>
              {projectList.map((project) => (
                <div key={project.slug} className="w-[85vw] sm:w-[400px] flex-shrink-0">
                  <ProjectCard project={project} duplicate={duplicate} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <FadeUp>
        <div className="mt-16 flex justify-center w-full px-6">
          <Link href="/projects" className="inline-flex items-center gap-3 px-8 py-4 bg-background border border-text-secondary/20 text-text-primary hover:border-text-primary hover:bg-text-primary hover:text-background rounded-xl font-bold tracking-widest text-sm uppercase transition-all duration-300 ease-out group hover:-translate-y-1.5 hover:scale-[1.02] shadow-sm hover:shadow-xl">
            <span>View All Projects</span>
            <svg aria-hidden="true" className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </Link>
        </div>
      </FadeUp>
    </section>
  )
}
