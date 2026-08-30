"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types/profile";
import { Badge, TechBadge } from "@/components/ui/Badge";
import { FlowDiagram } from "@/components/ui/FlowDiagram";
import { GithubIcon } from "@/components/icons/BrandIcons";

export function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: () => void;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-border-strong sm:p-8"
    >
      <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="mono text-xs font-medium uppercase tracking-[0.15em] text-primary">
            {project.category}
          </p>
          <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-semibold text-text">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-text-muted">{project.subtitle}</p>
        </div>
        <Badge tone={project.statusTone} dot>
          {project.statusLabel}
        </Badge>
      </div>

      <p className="mb-6 max-w-2xl text-sm leading-relaxed text-text-muted">{project.description}</p>

      <div className="mb-6 overflow-hidden rounded-lg border border-border bg-bg p-4">
        <FlowDiagram stages={project.pipeline} dense />
      </div>

      <div className="mb-6 flex flex-wrap gap-2">
        {project.technologies.map((t) => (
          <TechBadge key={t}>{t}</TechBadge>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={onOpen}
          className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-bg transition-colors hover:bg-primary-strong"
        >
          {project.ctaCaseStudy}
          <ArrowUpRight size={15} />
        </button>
        <button
          type="button"
          onClick={onOpen}
          className="inline-flex items-center gap-1.5 rounded-lg border border-border-strong px-4 py-2.5 text-sm font-semibold text-text transition-colors hover:bg-surface-hover"
        >
          View Case Study
        </button>
        {project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2.5 text-sm font-medium text-text-muted transition-colors hover:text-text"
          >
            <GithubIcon size={16} />
            GitHub
          </a>
        ) : null}
      </div>
    </motion.article>
  );
}
