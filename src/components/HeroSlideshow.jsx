import { useEffect, useMemo, useState } from "react";

/**
 * Props:
 * - images: (string[] | {src: string, pos?: string}[])
 * - interval: number (ms)
 * - overlayOpacityClass: e.g. 'bg-sjMaroon/60'
 * - className: wrapper classes
 * - children: hero content
 */
export default function HeroSlideshow({
  images = [],
  interval = 5000,
  overlayOpacityClass = "bg-sjMaroon/60",
  className = "",
  children,
}) {
  const [idx, setIdx] = useState(0);

  // Normalize: ensure each item has src + pos
  const slides = useMemo(
    () =>
      images
        .filter(Boolean)
        .map((it) =>
          typeof it === "string" ? { src: it, pos: "center 50%" } : it
        ),
    [images]
  );

  // Preload images
  useEffect(() => {
    slides.forEach(({ src }) => {
      const i = new Image();
      i.src = src;
    });
  }, [slides]);

  // Slideshow timer
  useEffect(() => {
    if (slides.length <= 1) return;
    const t = setInterval(() => {
      setIdx((i) => (i + 1) % slides.length);
    }, interval);
    return () => clearInterval(t);
  }, [slides.length, interval]);

  return (
    <section className={`relative text-white ${className}`}>
      {/* Slides */}
      <div className="absolute inset-0 overflow-hidden">
        // HeroSlideshow.jsx
{slides.map(({ src, pos, zoom }, i) => (
  <img
    key={src + i}
    src={src}
    alt=""
    aria-hidden="true"
    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
      i === idx ? "opacity-100" : "opacity-0"
    }`}
    style={{
      objectPosition: pos || "50% 50%",
      transform: zoom ? `scale(${zoom})` : undefined,  // 👈 slight zoom
      transition: "opacity 1s ease, transform 1s ease",
    }}
  />
))}


        {/* Maroon glaze */}
        <div className={`absolute inset-0 ${overlayOpacityClass}`} />
      </div>

      {/* Content on top */}
      <div className="relative">{children}</div>
    </section>
  );
}
