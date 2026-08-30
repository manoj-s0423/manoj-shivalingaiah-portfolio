import { Particle } from "./Particle";

// ---------------------------------------------------------------------------
// Shared line-art primitives. Everything draws in a common 480×300 viewBox
// so proportions stay consistent; the wrapping <svg> (see SectionBackdrop)
// scales/crops it per section with preserveAspectRatio="xMidYMid slice".
// Kept deliberately abstract/geometric (no brand logos) — evocative of AWS
// / Kubernetes / Docker rather than a reproduction of any of them.
// ---------------------------------------------------------------------------

function Node({ x, y, r = 5, filled = false }: { x: number; y: number; r?: number; filled?: boolean }) {
  return (
    <circle
      cx={x}
      cy={y}
      r={r}
      fill={filled ? "currentColor" : "var(--bg)"}
      stroke="currentColor"
      strokeWidth={1.4}
    />
  );
}

function Line({ x1, y1, x2, y2, dashed = false }: { x1: number; y1: number; x2: number; y2: number; dashed?: boolean }) {
  return (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke="currentColor"
      strokeWidth={1.2}
      strokeDasharray={dashed ? "3 5" : undefined}
    />
  );
}

function Path({ d, dashed = false }: { d: string; dashed?: boolean }) {
  return (
    <path
      d={d}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.2}
      strokeLinecap="round"
      strokeDasharray={dashed ? "3 6" : undefined}
    />
  );
}

function Hex({ x, y, size = 14 }: { x: number; y: number; size?: number }) {
  const pts = Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 3) * i - Math.PI / 2;
    return `${x + size * Math.cos(a)},${y + size * Math.sin(a)}`;
  }).join(" ");
  return <polygon points={pts} fill="var(--bg)" stroke="currentColor" strokeWidth={1.3} />;
}

function Box({ x, y, w = 22, h = 16 }: { x: number; y: number; w?: number; h?: number }) {
  return <rect x={x} y={y} width={w} height={h} rx={2.5} fill="var(--bg)" stroke="currentColor" strokeWidth={1.3} />;
}

function Label({ x, y, text, anchor = "start" }: { x: number; y: number; text: string; anchor?: "start" | "middle" | "end" }) {
  return (
    <text
      x={x}
      y={y}
      textAnchor={anchor}
      fontSize={8.5}
      fontFamily="var(--font-mono)"
      fill="currentColor"
      opacity={0.75}
      letterSpacing="0.02em"
    >
      {text}
    </text>
  );
}

// ---------------------------------------------------------------------------
// Home — Git → Docker → EKS → Monitoring
// ---------------------------------------------------------------------------
export function PipelineFlowMotif() {
  const y = 230;
  const nodes = [
    { x: 40, y, label: "GIT" },
    { x: 150, y, label: "DOCKER" },
    { x: 270, y, label: "EKS" },
    { x: 400, y, label: "MONITOR" },
  ];
  return (
    <svg viewBox="0 0 480 300" preserveAspectRatio="xMidYMid slice">
      {nodes.slice(0, -1).map((n, i) => (
        <Line key={n.label} x1={n.x} y1={n.y} x2={nodes[i + 1].x} y2={nodes[i + 1].y} dashed />
      ))}
      {/* faint cloud silhouette drifting above the flow */}
      <Path d="M60 90 q10 -22 34 -16 q6 -18 30 -14 q22 -6 30 12 q22 -4 24 16 q10 4 4 18 h-118 q-10 -6 -4 -16Z" />
      <Hex x={270} y={70} size={16} />
      <Hex x={310} y={100} size={10} />
      {nodes.map((n) => (
        <Node key={n.label} x={n.x} y={n.y} r={7} />
      ))}
      {nodes.map((n) => (
        <Label key={n.label} x={n.x} y={n.y + 24} text={n.label} anchor="middle" />
      ))}
      <Particle x0={40} y0={y} x1={400} y1={y} duration={9} delay={0} />
      <Particle x0={40} y0={y} x1={400} y1={y} duration={9} delay={-4.5} variant="secondary" />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// About — Automation → CI/CD → Cloud → Kubernetes → DevOps (ascending steps)
// ---------------------------------------------------------------------------
export function EvolutionMotif() {
  const steps = [
    { x: 40, y: 250, label: "AUTOMATION" },
    { x: 140, y: 205, label: "CI/CD" },
    { x: 240, y: 160, label: "CLOUD" },
    { x: 340, y: 115, label: "KUBERNETES" },
    { x: 430, y: 70, label: "DEVOPS" },
  ];
  return (
    <svg viewBox="0 0 480 300" preserveAspectRatio="xMidYMid slice">
      <Path d={`M ${steps.map((s) => `${s.x} ${s.y}`).join(" L ")}`} dashed />
      {steps.map((s, i) => (
        <Node key={s.label} x={s.x} y={s.y} r={i === steps.length - 1 ? 8 : 5.5} filled={i === steps.length - 1} />
      ))}
      {steps.map((s, i) => (
        <Label key={s.label} x={s.x} y={s.y - 12} text={s.label} anchor={i > 2 ? "end" : "start"} />
      ))}
      <Particle x0={steps[0].x} y0={steps[0].y} x1={steps[4].x} y1={steps[4].y} duration={11} />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Experience — Jenkins / Docker / ECR nodes + flowing signal lines
// ---------------------------------------------------------------------------
export function CircuitTimelineMotif() {
  const spine = 60;
  const rows = [70, 140, 210, 270];
  const labels = ["JENKINS", "DOCKER", "AMAZON ECR", "DEPLOY"];
  return (
    <svg viewBox="0 0 480 300" preserveAspectRatio="xMidYMid slice">
      <Line x1={spine} y1={40} x2={spine} y2={290} />
      {rows.map((y, i) => (
        <g key={y}>
          <Line x1={spine} y1={y} x2={spine + 70} y2={y} />
          <Box x={spine + 70} y={y - 11} w={26} h={22} />
          <Label x={spine + 104} y={y + 4} text={labels[i]} />
          <Node x={spine} y={y} r={5} filled={i === 0} />
        </g>
      ))}
      {rows.slice(0, -1).map((y, i) => (
        <Particle key={y} x0={spine} y0={y} x1={spine} y1={rows[i + 1]} duration={4.5} delay={-i * 1.2} variant="secondary" />
      ))}
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Projects — VPC / EKS cluster / containers / ECR / monitoring topology
// ---------------------------------------------------------------------------
export function ArchitectureTopologyMotif() {
  return (
    <svg viewBox="0 0 480 300" preserveAspectRatio="xMidYMid slice">
      <rect x={40} y={40} width={330} height={220} rx={10} fill="none" stroke="currentColor" strokeWidth={1.2} strokeDasharray="3 6" />
      <Label x={54} y={58} text="VPC · 10.0.0.0/16" />
      <rect x={70} y={90} width={210} height={130} rx={8} fill="none" stroke="currentColor" strokeWidth={1.3} />
      <Label x={84} y={106} text="AMAZON EKS CLUSTER" />
      {[
        [100, 130],
        [150, 160],
        [200, 130],
        [240, 175],
      ].map(([x, y]) => (
        <Box key={`${x}-${y}`} x={x} y={y} w={20} h={16} />
      ))}
      <Hex x={330} y={110} size={16} />
      <Label x={330} y={140} text="ECR" anchor="middle" />
      <Hex x={330} y={190} size={16} />
      <Label x={330} y={220} text="CLOUDWATCH" anchor="middle" />
      <Line x1={280} y1={120} x2={314} y2={112} dashed />
      <Line x1={280} y1={190} x2={314} y2={190} dashed />
      <Particle x0={280} y0={120} x1={314} y1={112} duration={4} />
      <Particle x0={280} y0={190} x1={314} y1={190} duration={4} delay={-2} variant="secondary" />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Production Troubleshooting — telemetry: sparklines, log ticks, alert pulses
// ---------------------------------------------------------------------------
export function TelemetryMotif() {
  const spark = "M20 220 L60 200 L100 215 L140 170 L180 190 L220 140 L260 165 L300 120 L340 150 L380 100 L420 130";
  return (
    <svg viewBox="0 0 480 300" preserveAspectRatio="xMidYMid slice">
      <Path d={spark} />
      <Line x1={20} y1={240} x2={440} y2={240} dashed />
      {[60, 130, 200, 270, 340, 410].map((x) => (
        <Line key={x} x1={x} y1={244} x2={x} y2={250} />
      ))}
      <circle cx={340} cy={150} r={4} fill="currentColor" className="backdrop-pulse" />
      <circle cx={220} cy={140} r={3} fill="currentColor" />
      <Node x={220} y={140} r={3} filled />
      <Label x={30} y={40} text="P99  184ms" />
      <Label x={30} y={54} text="ERR  0.02%" />
      <Label x={330} y={40} text="ALERT: pod restart" />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// DevOps Control Plane — Git → CI → Security → Registry → K8s → GitOps → Obs
// ---------------------------------------------------------------------------
export function MeshNetworkMotif() {
  const nodes = [
    { x: 60, y: 70 }, { x: 180, y: 50 }, { x: 300, y: 80 }, { x: 420, y: 55 },
    { x: 90, y: 190 }, { x: 220, y: 210 }, { x: 350, y: 180 }, { x: 440, y: 220 },
  ];
  const edges: [number, number][] = [
    [0, 1], [1, 2], [2, 3], [0, 4], [1, 5], [2, 6], [3, 7], [4, 5], [5, 6], [6, 7],
  ];
  return (
    <svg viewBox="0 0 480 300" preserveAspectRatio="xMidYMid slice">
      {edges.map(([a, b], i) => (
        <Line key={i} x1={nodes[a].x} y1={nodes[a].y} x2={nodes[b].x} y2={nodes[b].y} dashed />
      ))}
      {nodes.map((n, i) => (
        <Node key={i} x={n.x} y={n.y} r={5.5} filled={i % 3 === 0} />
      ))}
      <Particle x0={nodes[0].x} y0={nodes[0].y} x1={nodes[3].x} y1={nodes[3].y} duration={8} />
      <Particle x0={nodes[4].x} y0={nodes[4].y} x1={nodes[7].x} y1={nodes[7].y} duration={8} delay={-4} variant="secondary" />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Skills — interconnected technology ecosystem (orbit cluster)
// ---------------------------------------------------------------------------
export function TechOrbitMotif() {
  const cx = 240;
  const cy = 150;
  const radii = [60, 100, 140];
  const satellites = [
    { r: 60, a: 30 }, { r: 60, a: 160 }, { r: 60, a: 260 },
    { r: 100, a: 70 }, { r: 100, a: 200 }, { r: 100, a: 320 },
    { r: 140, a: 10 }, { r: 140, a: 120 }, { r: 140, a: 240 },
  ];
  return (
    <svg viewBox="0 0 480 300" preserveAspectRatio="xMidYMid slice">
      {radii.map((r) => (
        <circle key={r} cx={cx} cy={cy} r={r} fill="none" stroke="currentColor" strokeWidth={1} strokeDasharray="2 6" opacity={0.7} />
      ))}
      <Node x={cx} y={cy} r={9} filled />
      {satellites.map((s, i) => {
        const rad = (s.a * Math.PI) / 180;
        const x = cx + s.r * Math.cos(rad);
        const y = cy + s.r * Math.sin(rad) * 0.55;
        return <Node key={i} x={x} y={y} r={4.5} />;
      })}
      <Particle x0={cx} y0={cy} x1={cx + 140} y1={cy} duration={10} />
      <Particle x0={cx} y0={cy} x1={cx - 100} y1={cy - 55} duration={10} delay={-5} variant="secondary" />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Certifications / Resume — technical blueprint grid + dimension lines
// ---------------------------------------------------------------------------
export function BlueprintMotif() {
  const cols = Array.from({ length: 9 }, (_, i) => 30 + i * 52);
  const rows = Array.from({ length: 6 }, (_, i) => 20 + i * 52);
  return (
    <svg viewBox="0 0 480 300" preserveAspectRatio="xMidYMid slice">
      {cols.map((x) => (
        <Line key={`c${x}`} x1={x} y1={20} x2={x} y2={280} dashed />
      ))}
      {rows.map((y) => (
        <Line key={`r${y}`} x1={30} y1={y} x2={450} y2={y} dashed />
      ))}
      <rect x={82} y={72} width={156} height={104} fill="none" stroke="currentColor" strokeWidth={1.4} />
      <Line x1={82} y1={190} x2={238} y2={190} />
      <Line x1={82} y1={186} x2={82} y2={194} />
      <Line x1={238} y1={186} x2={238} y2={194} />
      <Label x={160} y={205} text="156 × 104" anchor="middle" />
      <Node x={82} y={72} r={2.5} filled />
      <Node x={238} y={176} r={2.5} filled />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Contact — global network, glowing nodes + arcs
// ---------------------------------------------------------------------------
export function GlobalNetworkMotif() {
  const nodes = [
    { x: 70, y: 90 }, { x: 160, y: 60 }, { x: 250, y: 110 }, { x: 340, y: 70 },
    { x: 410, y: 140 }, { x: 300, y: 200 }, { x: 180, y: 220 }, { x: 90, y: 190 },
    { x: 240, y: 150 },
  ];
  const arcs: [number, number][] = [
    [8, 0], [8, 1], [8, 2], [8, 3], [8, 4], [8, 5], [8, 6], [8, 7],
  ];
  return (
    <svg viewBox="0 0 480 300" preserveAspectRatio="xMidYMid slice">
      {arcs.map(([a, b], i) => {
        const n1 = nodes[a];
        const n2 = nodes[b];
        const mx = (n1.x + n2.x) / 2;
        const my = (n1.y + n2.y) / 2 - 22;
        return <Path key={i} d={`M ${n1.x} ${n1.y} Q ${mx} ${my} ${n2.x} ${n2.y}`} dashed />;
      })}
      {nodes.map((n, i) => (
        <Node key={i} x={n.x} y={n.y} r={i === 8 ? 8 : 4.5} filled={i === 8} />
      ))}
      <circle cx={nodes[8].x} cy={nodes[8].y} r={8} fill="currentColor" className="backdrop-pulse" />
      <Particle x0={nodes[8].x} y0={nodes[8].y} x1={nodes[3].x} y1={nodes[3].y} duration={6} />
      <Particle x0={nodes[8].x} y0={nodes[8].y} x1={nodes[6].x} y1={nodes[6].y} duration={6} delay={-3} variant="secondary" />
    </svg>
  );
}

export const motifs = {
  "pipeline-flow": PipelineFlowMotif,
  evolution: EvolutionMotif,
  "circuit-timeline": CircuitTimelineMotif,
  "architecture-topology": ArchitectureTopologyMotif,
  telemetry: TelemetryMotif,
  "mesh-network": MeshNetworkMotif,
  "tech-orbit": TechOrbitMotif,
  blueprint: BlueprintMotif,
  "global-network": GlobalNetworkMotif,
} as const;

export type MotifKey = keyof typeof motifs;
