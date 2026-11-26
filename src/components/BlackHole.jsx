import { useEffect, useRef } from "react";

export function BlackHole() {
  const ref = useRef(null);
  useEffect(() => {
    let t = false;
    const on = () => {
      t = false;
      const p = Math.min(1, window.scrollY / (window.innerHeight * 0.9));
      if (ref.current) ref.current.style.opacity = String(1 - 0.7 * p);
    };
    const h = () => { if (!t) { t = true; requestAnimationFrame(on); } };
    on(); window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);
  const disk = "M350 350m-320 0a320 64 0 1 0 640 0a320 64 0 1 0 -640 0M350 350m-118 0a118 23 0 1 0 236 0a118 23 0 1 0 -236 0";
  const w = { fill: "var(--bh-w)" };
  return (
    <div ref={ref} aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
    <svg
      aria-hidden="true"
      viewBox="0 0 700 700"
      className="absolute -right-[230px] top-[20vh] w-[480px] opacity-55 sm:w-[700px] sm:opacity-65 lg:-top-20 lg:-right-[330px] lg:w-[960px] lg:opacity-70"
    >
      <defs>
        <filter id="bh-streak" x="-10%" y="-60%" width="120%" height="220%">
          <feTurbulence type="fractalNoise" baseFrequency="0.012 0.02" numOctaves="2" seed="7" result="warp" />
          <feDisplacementMap in="SourceGraphic" in2="warp" scale="26" result="ragged" />
          <feTurbulence type="fractalNoise" baseFrequency="0.005 0.34" numOctaves="2" seed="3" result="noise" />
          <feColorMatrix in="noise" type="matrix" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  2.6 0 0 0 -0.85" result="alpha" />
          <feComposite in="ragged" in2="alpha" operator="in" />
        </filter>
        <filter id="bh-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="14" />
        </filter>
        <filter id="bh-soft" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="40" />
        </filter>
        <filter id="bh-ring" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.6" />
        </filter>
        <clipPath id="bh-front"><rect x="0" y="350" width="700" height="350" /></clipPath>
        <clipPath id="bh-core"><circle cx="350" cy="350" r="104" /></clipPath>
      </defs>

      {/* faint orbits */}
      <g fill="none" stroke="var(--bh-w)" strokeOpacity=".12" transform="rotate(-9 350 350)">
        <ellipse cx="350" cy="350" rx="340" ry="92" />
        <ellipse cx="350" cy="350" rx="290" ry="40" />
      </g>

      {/* soft halo (breathing) */}
      <circle className="breathe" cx="350" cy="350" r="150" style={w} opacity=".35" filter="url(#bh-soft)" />

      {/* back half of the disk: full disk beneath the core */}
      <g transform="rotate(-9 350 350)">
        <path d={disk} fillRule="evenodd" style={w} opacity=".55" filter="url(#bh-glow)" />
        <path d={disk} fillRule="evenodd" style={w} opacity=".9" filter="url(#bh-streak)" />
      </g>

      {/* core */}
      <circle cx="350" cy="350" r="104" style={{ fill: "var(--bh-core)" }} opacity=".92" />
      <g clipPath="url(#bh-core)" stroke="var(--bh-w)" strokeOpacity=".1" fill="none">
        {[-60, -30, 0, 30, 60].map((d) => (
          <g key={d}>
            <line x1={350 + d} y1="240" x2={350 + d} y2="460" />
            <line x1="240" y1={350 + d} x2="460" y2={350 + d} />
          </g>
        ))}
      </g>

      {/* lensed light ring */}
      <circle cx="350" cy="350" r="108" fill="none" stroke="var(--bh-w)" strokeWidth="5" opacity=".6" filter="url(#bh-ring)" />
      <circle cx="350" cy="350" r="107" fill="none" stroke="var(--bh-w)" strokeWidth="1.6" opacity=".95" />

      {/* front half of the disk passes over the core */}
      <g clipPath="url(#bh-front)">
        <g transform="rotate(-9 350 350)">
          <path d={disk} fillRule="evenodd" style={w} opacity=".9" filter="url(#bh-streak)" />
        </g>
      </g>
    </svg>
    </div>
  );
}
