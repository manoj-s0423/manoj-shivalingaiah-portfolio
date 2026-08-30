import type { ReactNode } from "react";

type Tone = "default" | "healthy" | "warning" | "error" | "info";

const toneStyles: Record<Tone, string> = {
  default: "bg-surface-hover text-text-muted border-border",
  healthy: "bg-healthy/10 text-healthy border-healthy/30",
  warning: "bg-warning/10 text-warning border-warning/30",
  error: "bg-error/10 text-error border-error/30",
  info: "bg-primary/10 text-primary border-primary/30",
};

export function Badge({
  children,
  tone = "default",
  dot = false,
  className = "",
}: {
  children: ReactNode;
  tone?: Tone;
  dot?: boolean;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium ${toneStyles[tone]} ${className}`}
    >
      {dot ? <span className="h-1.5 w-1.5 rounded-full bg-current" /> : null}
      {children}
    </span>
  );
}

export function TechBadge({ children }: { children: ReactNode }) {
  return (
    <span className="mono rounded-md border border-border bg-surface px-2 py-1 text-[11px] text-text-muted">
      {children}
    </span>
  );
}
