import { useEffect, useRef } from "react";

// Dark-mode only: twinkling stars with a rare passing aircraft. One canvas, one rAF loop.
export function Sky() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0, h = 0, stars = [], raf = 0, last = 0, clock = 0;
    let plane = null;
    let nextPlane = 9000;

    const build = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth; h = window.innerHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.floor((w * h) / 11000);
      stars = Array.from({ length: n }, () => ({
        x: Math.random() * w, y: Math.random() * h, r: Math.random() * 0.9 + 0.3,
        a: Math.random() * 0.5 + 0.15, ph: Math.random() * 6.28, sp: Math.random() * 0.8 + 0.3,
        z: Math.random() * 0.06 + 0.01,
      }));
    };

    const spawn = () => {
      const dir = Math.random() < 0.5 ? 1 : -1;
      plane = { dir, y0: h * (0.08 + Math.random() * 0.35), slope: (Math.random() - 0.5) * 0.16,
        t: 0, dur: 16000 + Math.random() * 6000, trail: [] };
    };

    const draw = (t) => {
      ctx.clearRect(0, 0, w, h);
      const sy = window.scrollY;
      ctx.fillStyle = "#fff";
      for (const s of stars) {
        const tw = reduce ? 1 : 0.6 + 0.4 * Math.sin(t / 1000 * s.sp + s.ph);
        ctx.globalAlpha = s.a * tw;
        let y = (s.y - sy * s.z) % h; if (y < 0) y += h;
        ctx.fillRect(s.x, y, s.r, s.r);
      }
      if (plane) {
        const p = plane.t / plane.dur;
        const fade = Math.min(1, p / 0.08, (1 - p) / 0.08);
        const x = plane.dir > 0 ? -20 + p * (w + 40) : w + 20 - p * (w + 40);
        const y = plane.y0 + plane.slope * p * w;
        plane.trail.push([x, y]);
        if (plane.trail.length > 90) plane.trail.shift();
        const L = plane.trail.length;
        ctx.strokeStyle = "#fff"; ctx.lineWidth = 1;
        for (let i = 1; i < L; i++) {
          ctx.globalAlpha = 0.18 * (i / L) * fade;
          ctx.beginPath(); ctx.moveTo(...plane.trail[i - 1]); ctx.lineTo(...plane.trail[i]); ctx.stroke();
        }
        ctx.globalAlpha = 0.95 * fade; ctx.fillStyle = "#fff";
        ctx.beginPath(); ctx.arc(x, y, 1.6, 0, 6.28); ctx.fill();
        ctx.globalAlpha = (0.25 + 0.75 * (0.5 + 0.5 * Math.sin(t / 700))) * fade; ctx.fillStyle = "#ff3b3b";
        ctx.beginPath(); ctx.arc(x - plane.dir * 6, y + 1, 1.4, 0, 6.28); ctx.fill();
      }
      ctx.globalAlpha = 1;
    };

    const frame = (now) => {
      const dt = Math.min(now - last, 100); last = now; clock += dt;
      if (plane) { plane.t += dt; if (plane.t >= plane.dur) { plane = null; nextPlane = clock + 35000 + Math.random() * 35000; } }
      else if (clock >= nextPlane) spawn();
      draw(clock);
      raf = requestAnimationFrame(frame);
    };
    const start = () => { cancelAnimationFrame(raf); last = performance.now(); raf = requestAnimationFrame(frame); };
    const onVis = () => (document.hidden ? cancelAnimationFrame(raf) : start());
    const onResize = () => { build(); if (reduce) draw(0); };

    build();
    window.addEventListener("resize", onResize);
    if (reduce) draw(0);
    else { start(); document.addEventListener("visibilitychange", onVis); }
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  return <canvas ref={ref} aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 h-full w-full" />;
}
