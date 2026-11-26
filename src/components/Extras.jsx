import { useEffect, useState } from "react";

export function AltitudeMeter() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const on = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setP(max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0);
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => { window.removeEventListener("scroll", on); window.removeEventListener("resize", on); };
  }, []);
  const alt = Math.round(p * 35000);
  return (
    <div aria-hidden="true" className="hidden md:flex fixed right-3 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-2 text-[10px] tracking-widest text-muted font-mono">
      <span>ALT</span>
      <div className="relative h-40 w-px bg-line">
        <div className="absolute top-0 left-0 w-px bg-electric" style={{ height: `${p * 100}%` }} />
      </div>
      <span className="tabular-nums">{alt.toLocaleString("en-US")} ft</span>
    </div>
  );
}

const KONAMI = ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];
export function KonamiPlane() {
  const [on, setOn] = useState(false);
  useEffect(() => {
    let i = 0;
    const h = (e) => {
      const k = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      i = k === KONAMI[i] ? i + 1 : k === KONAMI[0] ? 1 : 0;
      if (i === KONAMI.length) { i = 0; setOn(true); }
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, []);
  useEffect(() => {
    if (!on) return;
    const t = setTimeout(() => setOn(false), 3400);
    return () => clearTimeout(t);
  }, [on]);
  if (!on) return null;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  return (
    <>
      {!reduce && (
        <svg className="plane" width="56" height="56" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M21 3 3 10.5l6 2.5 2.5 6L21 3Zm-9.2 9.4-1.6-.7 7-5.3-5.4 6Z" />
        </svg>
      )}
      <div role="status" className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[70] rounded-full bg-paper text-[#12151b] px-4 py-2 text-sm font-semibold">
        Cleared for takeoff
      </div>
    </>
  );
}
