type ParticleProps = {
  /** Start/end coordinates in the motif's own SVG viewBox units. */
  x0: number;
  y0: number;
  x1: number;
  y1: number;
  duration?: number;
  delay?: number;
  r?: number;
  variant?: "primary" | "secondary";
};

// A small dot that travels from (x0,y0) to (x1,y1) along a straight line,
// looping. One shared @keyframes rule (backdrop-particle-travel, in
// globals.css) is reused for every particle — only the CSS custom
// properties differ, so this stays cheap regardless of how many are on
// screen.
export function Particle({ x0, y0, x1, y1, duration = 7, delay = 0, r = 2.2, variant = "primary" }: ParticleProps) {
  return (
    <circle
      r={r}
      className={`backdrop-particle ${variant === "secondary" ? "backdrop-particle--secondary" : ""}`}
      style={
        {
          "--x0": `${x0}px`,
          "--y0": `${y0}px`,
          "--x1": `${x1}px`,
          "--y1": `${y1}px`,
          animationDuration: `${duration}s`,
          animationDelay: `${delay}s`,
        } as React.CSSProperties
      }
    />
  );
}
