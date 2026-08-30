// Ambient, fixed background — one persistent grid + soft brand-color glow,
// mounted once in the root layout so every section reads as part of the
// same product rather than restarting its own background per section.
// Pure CSS (see .bg-layer* in globals.css); no client JS needed, and it
// already goes still under prefers-reduced-motion (global rule in
// globals.css zeroes all animation durations).
export function BackgroundLayer() {
  return (
    <div className="bg-layer" aria-hidden="true">
      <div className="bg-layer__grid" />
      <div className="bg-layer__glow bg-layer__glow--a" />
      <div className="bg-layer__glow bg-layer__glow--b" />
      <div className="bg-layer__glow bg-layer__glow--c" />
    </div>
  );
}
