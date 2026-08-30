"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect } from "react";
import type { Project } from "@/types/profile";
import { Badge, TechBadge } from "@/components/ui/Badge";
import { FlowDiagram } from "@/components/ui/FlowDiagram";
import { GithubIcon } from "@/components/icons/BrandIcons";

const fields: { key: keyof Project["caseStudy"]; label: string }[] = [
  { key: "overview", label: "Overview" },
  { key: "problem", label: "Problem" },
  { key: "architecture", label: "Architecture" },
  { key: "infrastructure", label: "Infrastructure" },
  { key: "cicd", label: "CI/CD" },
  { key: "containerization", label: "Containerization" },
  { key: "kubernetes", label: "Kubernetes" },
  { key: "security", label: "Security" },
  { key: "observability", label: "Observability" },
  { key: "troubleshooting", label: "Troubleshooting" },
];

export function ProjectCaseStudyModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!project) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-black/60 p-4 backdrop-blur-sm sm:p-8"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} case study`}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="my-4 w-full max-w-3xl rounded-2xl border border-border bg-bg-elevated shadow-lg"
          >
            <div className="flex items-start justify-between gap-4 border-b border-border p-6 sm:p-8">
              <div>
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <Badge tone={project.statusTone} dot>
                    {project.statusLabel}
                  </Badge>
                  <Badge>{project.projectType}</Badge>
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-text sm:text-3xl">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-text-muted">{project.subtitle}</p>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close case study"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border text-text-muted hover:text-text"
              >
                <X size={16} />
              </button>
            </div>

            <div className="space-y-8 p-6 sm:p-8">
              <div>
                <p className="mono mb-2 text-xs font-medium uppercase tracking-[0.15em] text-text-faint">
                  Delivery Flow
                </p>
                <div className="overflow-x-auto rounded-lg border border-border bg-surface p-4">
                  <FlowDiagram stages={project.pipeline} />
                </div>
              </div>

              {fields.map(({ key, label }) => (
                <div key={key}>
                  <p className="mono mb-1.5 text-xs font-medium uppercase tracking-[0.15em] text-primary">
                    {label}
                  </p>
                  <p className="text-sm leading-relaxed text-text-muted">
                    {project.caseStudy[key] as string}
                  </p>
                </div>
              ))}

              <div>
                <p className="mono mb-2 text-xs font-medium uppercase tracking-[0.15em] text-text-faint">
                  Challenges
                </p>
                <div className="space-y-3">
                  {project.caseStudy.challenges.map((c) => (
                    <div key={c.title} className="rounded-lg border border-border bg-surface p-4">
                      <div className="mb-1 flex flex-wrap items-center gap-2">
                        <p className="text-sm font-semibold text-text">{c.title}</p>
                        <Badge tone={c.labeled === "confirmed" ? "healthy" : "warning"}>
                          {c.labeled === "confirmed" ? "Confirmed" : "Production-style scenario"}
                        </Badge>
                      </div>
                      <p className="text-sm leading-relaxed text-text-muted">{c.detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p className="mono mb-1.5 text-xs font-medium uppercase tracking-[0.15em] text-primary">
                  Solution
                </p>
                <p className="text-sm leading-relaxed text-text-muted">{project.caseStudy.solution}</p>
              </div>

              <div className="rounded-lg border border-healthy/30 bg-healthy/5 p-4">
                <p className="mono mb-1.5 text-xs font-medium uppercase tracking-[0.15em] text-healthy">
                  Outcome
                </p>
                <p className="text-sm leading-relaxed text-text">{project.caseStudy.outcome}</p>
              </div>

              <div>
                <p className="mono mb-2 text-xs font-medium uppercase tracking-[0.15em] text-text-faint">
                  Technologies
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((t) => (
                    <TechBadge key={t}>{t}</TechBadge>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3 border-t border-border pt-6">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-border-strong px-4 py-2.5 text-sm font-semibold text-text hover:bg-surface-hover"
                  >
                    <GithubIcon size={16} />
                    View on GitHub
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1.5 rounded-lg border border-border px-4 py-2.5 text-sm text-text-faint">
                    <GithubIcon size={16} />
                    Repository not public yet
                  </span>
                )}
                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-border-strong px-4 py-2.5 text-sm font-semibold text-text hover:bg-surface-hover"
                  >
                    Live Demo
                  </a>
                ) : null}
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
