import { useState } from "react";
import { Menu, X } from "lucide-react";
import { nav } from "@/data";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="sticky top-0 z-50 bg-base border-b border-line">
      <div className="mx-auto max-w-[1280px] px-4 md:px-6 h-16 flex items-center justify-between">
        <a href="#top" onClick={close} className="font-display font-bold text-xl tracking-tight">SM.</a>
        <nav aria-label="Primary" className="hidden md:flex items-center gap-8 text-sm text-muted">
          {nav.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-ink transition-colors">{l.label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href="#contact" onClick={close} className="rounded-full bg-electric px-4 py-2 text-sm font-semibold text-white hover:bg-[#2f49d8] transition-colors">Hire me</a>
          <button
            type="button"
            className="md:hidden p-2 rounded-lg border border-line"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="md:hidden absolute left-0 right-0 top-full bg-base border-b border-line shadow-2xl">
          <ul className="px-4 py-2">
            {nav.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={close} className="block py-3 text-lg font-display border-b border-line last:border-0">{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
