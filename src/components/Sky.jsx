import { useEffect, useState } from "react";

// Moon phase computed locally from the mean synodic month.
function moonPhase(date = new Date()) {
  const synodic = 29.530588853;
  const ref = Date.UTC(2000, 0, 6, 18, 14); // known new moon
  const age = (((date.getTime() - ref) / 86400000) % synodic + synodic) % synodic;
  const names = ["New Moon", "Waxing Crescent", "First Quarter", "Waxing Gibbous", "Full Moon", "Waning Gibbous", "Last Quarter", "Waning Crescent"];
  const name = names[Math.round((age / synodic) * 8) % 8];
  const illum = Math.round(((1 - Math.cos((2 * Math.PI * age) / synodic)) / 2) * 100);
  return { name, illum };
}

export function Sky() {
  const [moon] = useState(() => moonPhase());
  const [iss, setIss] = useState(null);

  useEffect(() => {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 4000);
    fetch("https://api.wheretheiss.at/v1/satellites/25544", { signal: ctrl.signal })
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((d) => setIss({ lat: d.latitude, lon: d.longitude }))
      .catch(() => {}) // hide the ISS line on failure
      .finally(() => clearTimeout(timer));
    return () => { clearTimeout(timer); ctrl.abort(); };
  }, []);

  return (
    <div className="mt-6 pt-4 border-t border-line text-xs text-muted space-y-1">
      <p><span aria-hidden="true">☾ </span>Moon today: {moon.name} ({moon.illum}%)</p>
      {iss && <p><span aria-hidden="true">◎ </span>ISS over {iss.lat.toFixed(1)}°, {iss.lon.toFixed(1)}°</p>}
    </div>
  );
}
