"use client"
import FadeUp from "@/components/animations/FadeUp"
import ProjectCard from "@/components/ProjectCard"
import { projectList } from "@/lib/projects"

export default function ProjectCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {projectList.map((project, index) => (
        <FadeUp key={project.slug} delay={index * 0.05}>
          <ProjectCard project={project} />
        </FadeUp>
      ))}
    </div>
  )
}
