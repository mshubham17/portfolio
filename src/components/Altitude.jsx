import { useEffect, useRef } from "react";

export function Altitude() {
  const ref = useRef(null);
  useEffect(() => {
    let ticking = false;
    const update = () => {
      ticking = false;
      const el = ref.current; if (!el) return;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const y = window.scrollY;
      let text;
      if (max <= 0 || y <= 2) text = "On the ground";
      else if (max - y <= 2) text = "Landed";
      else {
        const p = y / max;
        const alt = p <= 0.85 ? 36000 * (p / 0.85) : p < 0.97 ? 36000 : 36000 * (1 - (p - 0.97) / 0.03);
        text = `${(Math.round(alt / 100) * 100).toLocaleString("en-US")} ft`;
      }
      if (el.textContent !== text) el.textContent = text;
    };
    const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); };
  }, []);
  return <div ref={ref} aria-hidden="true" className="pointer-events-none fixed bottom-3 left-4 z-20 rounded bg-bg/80 px-1.5 py-0.5 text-[11px] tabular-nums text-mute backdrop-blur-sm sm:bottom-4 sm:left-5" />;
}
