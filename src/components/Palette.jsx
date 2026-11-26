import { useEffect, useMemo, useRef, useState } from "react";

export function Palette({ open, onClose, commands }) {
  return open ? <PaletteInner onClose={onClose} commands={commands} /> : null;
}

function PaletteInner({ onClose, commands }) {
  const [q, setQ] = useState("");
  const [idx, setIdx] = useState(0);
  const input = useRef(null);
  const list = useRef(null);

  const items = useMemo(() => commands.filter((c) => c.label.toLowerCase().includes(q.trim().toLowerCase())), [commands, q]);

  useEffect(() => { input.current?.focus(); }, []);
  useEffect(() => { list.current?.children[idx]?.scrollIntoView({ block: "nearest" }); }, [idx]);

  const run = (c) => { onClose(); setTimeout(c.run, 0); };
  const onKey = (e) => {
    if (e.key === "Escape") { e.preventDefault(); onClose(); }
    else if (e.key === "ArrowDown") { e.preventDefault(); setIdx((i) => Math.min(i + 1, items.length - 1)); }
    else if (e.key === "ArrowUp") { e.preventDefault(); setIdx((i) => Math.max(i - 1, 0)); }
    else if (e.key === "Enter" && items[idx]) { e.preventDefault(); run(items[idx]); }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/40 px-4 pt-[15vh]" onMouseDown={onClose}>
      <div role="dialog" aria-modal="true" aria-label="Command palette" onKeyDown={onKey} onMouseDown={(e) => e.stopPropagation()}
        className="w-full max-w-md overflow-hidden rounded-xl border border-line bg-card shadow-2xl">
        <input ref={input} value={q} onChange={(e) => { setQ(e.target.value); setIdx(0); }} placeholder="Type a command..."
          aria-label="Filter commands" className="w-full border-b border-line bg-transparent px-4 py-3 text-sm outline-none placeholder:text-mute" />
        <ul ref={list} className="max-h-72 overflow-y-auto p-1">
          {items.map((c, i) => (
            <li key={c.label}>
              <button type="button" onClick={() => run(c)} onMouseEnter={() => setIdx(i)}
                className={`flex w-full items-center rounded-lg px-3 py-2 text-left text-sm ${i === idx ? "bg-line" : ""}`}>
                {c.label}
              </button>
            </li>
          ))}
          {items.length === 0 && <li className="px-3 py-2 text-sm text-mute">No matches</li>}
        </ul>
      </div>
    </div>
  );
}
