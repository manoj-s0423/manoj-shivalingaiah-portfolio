import { ArrowRight, ArrowDown } from "lucide-react";

export function FlowDiagram({ stages, dense = false }: { stages: string[]; dense?: boolean }) {
  return (
    <div
      className={`flex flex-wrap items-center gap-x-1 gap-y-2 sm:flex-nowrap sm:overflow-x-auto ${
        dense ? "text-[11px]" : "text-xs"
      }`}
    >
      {stages.map((stage, i) => (
        <span key={stage} className="flex shrink-0 items-center gap-1">
          <span
            className={`mono whitespace-nowrap rounded-md border border-border bg-bg-elevated font-medium text-text-muted ${
              dense ? "px-2 py-1" : "px-2.5 py-1.5"
            }`}
          >
            {stage}
          </span>
          {i < stages.length - 1 ? (
            <ArrowRight size={12} className="hidden shrink-0 text-text-faint sm:block" />
          ) : null}
          {i < stages.length - 1 ? (
            <ArrowDown size={12} className="shrink-0 text-text-faint sm:hidden" />
          ) : null}
        </span>
      ))}
    </div>
  );
}
