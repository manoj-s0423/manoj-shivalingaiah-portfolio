"use client";

import { useState } from "react";
import { projects } from "@/data/profile";
import type { Project } from "@/types/profile";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectCaseStudyModal } from "@/components/ProjectCaseStudyModal";
import { SectionBackdrop } from "@/components/backdrops/SectionBackdrop";

export function Projects() {
  const [open, setOpen] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative overflow-hidden py-24">
      <SectionBackdrop motif="architecture-topology" />
      <Container className="relative">
        <SectionHeading
          eyebrow="Featured Work"
          title="Projects"
          description="Two case studies — real engineering, presented honestly. Each one shows the problem, the architecture, and exactly what's built versus what's still in progress."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onOpen={() => setOpen(project)}
            />
          ))}
        </div>
      </Container>

      <ProjectCaseStudyModal project={open} onClose={() => setOpen(null)} />
    </section>
  );
}
