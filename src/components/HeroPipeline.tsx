"use client";

import { motion } from "framer-motion";
import {
  GitBranch,
  Hammer,
  Box,
  Package,
  Boxes,
  Activity,
  Search,
  Workflow,
} from "lucide-react";
import { useHasMounted } from "@/lib/useHasMounted";

const nodes = [
  { icon: GitBranch, label: "Git Repository", tag: "GitHub" },
  { icon: Workflow, label: "CI Pipeline", tag: "Jenkins" },
  { icon: Hammer, label: "Build & Validate", tag: "Maven / Tests" },
  { icon: Box, label: "Docker", tag: "Image Build" },
  { icon: Package, label: "Amazon ECR", tag: "Registry" },
  { icon: Boxes, label: "Kubernetes / EKS", tag: "Orchestration" },
  { icon: Activity, label: "Monitoring", tag: "Metrics & Logs" },
  { icon: Search, label: "Production Investigation", tag: "Root-Cause" },
];

const logLines = [
  "build #482 — validated, 0 failures",
  "image manoj/app:482 pushed to ecr",
  "rollout eks-prod — 4/4 pods ready",
  "healthcheck /ready — 200 OK",
];

export function HeroPipeline() {
  const mounted = useHasMounted();

  return (
    <div
      className="relative rounded-2xl border border-border bg-surface/60 p-5 shadow-lg backdrop-blur-sm sm:p-6"
      role="img"
      aria-label="Diagram of a DevOps delivery pipeline: Git repository, CI pipeline, build and validation, Docker, Amazon ECR, Kubernetes/EKS, monitoring, and production investigation."
    >
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-healthy opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-healthy" />
          </span>
          <span className="mono text-xs font-medium text-text-muted">
            Delivery Pipeline — Healthy
          </span>
        </div>
        <span className="mono text-[11px] text-text-faint">devops-control-plane</span>
      </div>

      <div className="relative">
        {/* connecting line */}
        <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border sm:left-[23px]">
          {mounted ? (
            <motion.div
              className="absolute left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-primary shadow-[0_0_12px_var(--primary)]"
              animate={{ top: ["0%", "100%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            />
          ) : null}
        </div>

        <ul className="flex flex-col gap-4">
          {nodes.map((node, i) => {
            const Icon = node.icon;
            return (
              <motion.li
                key={node.label}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="relative flex items-center gap-3 pl-10 sm:pl-12"
              >
                <span className="absolute left-0 flex h-10 w-10 items-center justify-center rounded-full border border-primary/40 bg-bg text-primary">
                  <Icon size={16} strokeWidth={2} />
                </span>
                <div className="flex min-w-0 flex-1 items-center justify-between gap-3 rounded-lg border border-border bg-bg-elevated px-3 py-2.5">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-text">{node.label}</p>
                  </div>
                  <span className="mono shrink-0 text-[11px] text-text-faint">{node.tag}</span>
                </div>
              </motion.li>
            );
          })}
        </ul>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3 border-t border-border pt-5">
        <Meter label="CPU" value={34} />
        <Meter label="Memory" value={52} />
      </div>

      <div className="mt-4 rounded-lg border border-border bg-bg p-3">
        <div className="mono space-y-1 text-[11px] leading-relaxed text-text-faint">
          {logLines.map((line) => (
            <p key={line} className="truncate">
              <span className="text-healthy">●</span> {line}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

function Meter({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between text-[11px] text-text-faint">
        <span className="mono">{label}</span>
        <span className="mono">{value}%</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-border">
        <motion.div
          className="h-full rounded-full bg-primary"
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
