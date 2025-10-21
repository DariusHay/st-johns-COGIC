import { useEffect, useMemo, useState } from "react";

/**
 * images: [{ src, pos?, mobilePos?, zoom?, motion? }]
 *   motion: 'lr' | 'rl' | 'tb' | 'bt'
 * interval: ms between slides
 * overlayOpacityClass: e.g., 'bg-sjMaroon/60'
 */
export default function HeroSlideshow({
  images = [],
  interval = 6000,
  overlayOpacityClass = "bg-sjMaroon/60",
  className = "",
  children,
}) {
  const [idx, setIdx] = useState(0);
  const [vw, setVw] = useState(typeof window !== "undefined" ? window.innerWidth : 1024);

  const sources = useMemo(() => images.filter(Boolean), [images]);

  // Preload
  useEffect(() => {
    sources.forEach((s) => {
      const i = new Image();
      i.src = typeof s === "string" ? s : s.src;
    });
  }, [sources]);

  // Advance slides
  useEffect(() => {
    if (sources.length <= 1) return;
    const t = setInterval(() => {
      setIdx((i) => (i + 1) % sources.length);
    }, interval);
    return () => clearInterval(t);
  }, [sources.length, interval]);

  // Track width for mobilePos
  useEffect(() => {
    const onResize = () => setVw(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <section className={`relative text-white ${className}`}>
      {/* Slides BELOW everything */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {sources.map((s, i) => {
          const item = typeof s === "string" ? { src: s } : s;
          const active = i === idx;

          const desktopPos = item.pos || "center center";
          const mobilePos  = item.mobilePos || desktopPos;
          const pos        = vw < 768 ? mobilePos : desktopPos;

          // Pan direction
          const dist = 4; // % pan distance (raise to 6–8 for stronger motion)
          let xFrom = 0, xTo = 0, yFrom = 0, yTo = 0, animName = "kb-pan-x";
          switch (item.motion) {
            case "rl": xFrom =  dist; xTo = -dist; animName = "kb-pan-x"; break;
            case "tb": yFrom = -dist; yTo =  dist; animName = "kb-pan-y"; break;
            case "bt": yFrom =  dist; yTo = -dist; animName = "kb-pan-y"; break;
            case "lr":
            default:   xFrom = -dist; xTo =  dist; animName = "kb-pan-x";
          }

          const scale = item.zoom ?? 1.1;

          return (
            <div
              key={`${item.src}-${i}`}
              className="absolute inset-0"
              style={{
                opacity: active ? 1 : 0,
                transition: "opacity 1.2s ease-in-out", // smooth crossfade
                zIndex: active ? 1 : 0,
              }}
            >
              <img
                src={item.src}
                alt=""
                aria-hidden="true"
                className={`w-full h-full object-cover ${active ? "kb-animate" : ""}`}
                style={{
                  objectPosition: pos,
                  // CSS vars must be strings; include the scale() token
                  "--kb-scale": `scale(${scale})`,
                  "--kb-x-from": `${xFrom}%`,
                  "--kb-x-to":   `${xTo}%`,
                  "--kb-y-from": `${yFrom}%`,
                  "--kb-y-to":   `${yTo}%`,
                  animationName: active ? animName : "none",
                  // extend slightly past fade to avoid a “stop-start” feel
                  animationDuration: `${interval + 400}ms`,
                  animationTimingFunction: "ease-in-out",
                  animationFillMode: "forwards",
                }}
              />
            </div>
          );
        })}
      </div>

      {/* Maroon glaze ABOVE images, BELOW content */}
      <div className={`absolute inset-0 z-10 ${overlayOpacityClass} pointer-events-none`} />

      {/* Your content ON TOP of glaze */}
      <div className="relative z-20">{children}</div>
    </section>
  );
}
