import { useEffect, useMemo, useState } from "react";
import { PROFILE, ABOUT, EXPERIENCE, PROJECTS, CONTACT } from "@/data";
import { BlackHole } from "@/components/BlackHole";
import { Sky } from "@/components/Sky";
import { Altitude } from "@/components/Altitude";
import { Palette } from "@/components/Palette";

const reduced = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const scrollToId = (id) => document.getElementById(id)?.scrollIntoView({ behavior: reduced() ? "auto" : "smooth", block: "start" });
const toTop = () => window.scrollTo({ top: 0, behavior: reduced() ? "auto" : "smooth" });

const Icon = ({ d, ...p }) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...p}>{d}</svg>
);
const icons = {
  github: <Icon d={<path d="M9 19c-4 1.5-4-2-6-2m12 4v-3.5c0-1 .1-1.4-.5-2 2.800-.3 5.500-1.400 5.500-6a4.600 4.600 0 0 0-1.300-3.200 4.200 4.200 0 0 0-.1-3.200s-1.100-.3-3.500 1.300a12 12 0 0 0-6.200 0C6.500 2.800 5.400 3.100 5.400 3.100a4.200 4.200 0 0 0-.1 3.200A4.600 4.600 0 0 0 4 9.500c0 4.600 2.700 5.700 5.500 6-.6.600-.6 1.200-.5 2V21" />} />,
  linkedin: <Icon d={<><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></>} />,
  mail: <Icon d={<><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" /></>} />,
  menu: <Icon d={<path d="M3 6h18M3 12h18M3 18h18" />} />,
  chevron: <Icon d={<path d="m9 6 6 6-6 6" />} width="16" height="16" />,
  plane: <Icon d={<path d="M17.800 19.200 16 11l3.500-3.500C21 6 21.500 4 21.500 4s-2 .5-3.500 2L14.500 9.500 6.300 7.700l-1.100 1.100 6.300 3.400-3.500 3.500-3-.5L4 16.300l3.500 1.200 1.200 3.500 1.100-1.100-.5-3 3.500-3.500 3.400 6.300 1.100-1.100Z" />} width="16" height="16" />,
};

const linkCls = "text-mute transition-colors hover:text-ink";

function Header({ openPalette }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on(); window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header className={`sticky top-0 z-30 transition-colors ${scrolled ? "border-b border-line bg-bg/80 backdrop-blur-md" : "border-b border-transparent"}`}>
      <div className="mx-auto flex h-14 max-w-[640px] items-center justify-between px-5">
        <a href="#top" onClick={(e) => { e.preventDefault(); toTop(); }} className="flex items-center gap-2 font-medium">
          Shubham <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
        </a>
        <nav aria-label="Primary" className="flex items-center gap-4 text-sm">
          <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToId("projects"); }} className={`hidden sm:inline ${linkCls}`}>Projects</a>
          <a href="#work" onClick={(e) => { e.preventDefault(); scrollToId("work"); }} className={`hidden sm:inline ${linkCls}`}>Work</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToId("contact"); }} className={`hidden sm:inline ${linkCls}`}>Contact</a>
          <button type="button" onClick={openPalette} aria-label="Open command palette" className="hidden rounded-md border border-line px-2 py-1 text-xs text-mute hover:text-ink sm:inline">Ctrl K</button>
          <button type="button" onClick={openPalette} aria-label="Open menu" className={`p-1.5 sm:hidden ${linkCls}`}>{icons.menu}</button>
        </nav>
      </div>
    </header>
  );
}

const H2 = ({ children, id }) => <h2 id={id} className="mb-5 font-display text-2xl tracking-tight">{children}</h2>;

function Contact() {
  const [status, setStatus] = useState("");
  const submit = (e) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const body = `${f.get("message")}\n\n${f.get("name")} (${f.get("email")})`;
    window.location.href = `mailto:${PROFILE.email}?subject=${encodeURIComponent("Portfolio message from " + f.get("name"))}&body=${encodeURIComponent(body)}`;
    setStatus("Opening your email app to send the message.");
  };
  const field = "w-full rounded-lg border border-line bg-card px-3 py-2 text-sm placeholder:text-mute focus:border-accent";
  return (
    <section id="contact" aria-labelledby="contact-h" className="scroll-mt-20 py-10">
      <H2 id="contact-h">Contact</H2>
      <p className="mb-6 text-mute">{CONTACT.note}</p>
      <form id="contact-form" onSubmit={submit} className="space-y-3">
        <label className="block text-sm"><span className="mb-1 block text-mute">Name</span><input name="name" required autoComplete="name" className={field} /></label>
        <label className="block text-sm"><span className="mb-1 block text-mute">Email</span><input name="email" type="email" required autoComplete="email" className={field} /></label>
        <label className="block text-sm"><span className="mb-1 block text-mute">Message</span><textarea name="message" rows={4} required className={field} /></label>
        <button type="submit" className="rounded-lg bg-ink px-4 py-2 text-sm font-medium text-bg hover:opacity-90">Send message</button>
        <p role="status" aria-live="polite" className="min-h-5 text-sm text-mute">{status}</p>
      </form>
    </section>
  );
}

export default function App() {
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [quote] = useState(() => ABOUT.quotes[Math.floor(Math.random() * ABOUT.quotes.length)]);

  useEffect(() => {
    const onKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") { e.preventDefault(); setPaletteOpen((o) => !o); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const commands = useMemo(() => [
    { label: "About", run: () => scrollToId("about") },
    { label: "Projects", run: () => scrollToId("projects") },
    { label: "Work experience", run: () => scrollToId("work") },
    { label: "Contact", run: () => scrollToId("contact") },
    { label: "Download CV", run: () => { const a = document.createElement("a"); a.href = PROFILE.cv; a.download = ""; a.click(); } },
    { label: "GitHub", run: () => window.open(PROFILE.github, "_blank", "noopener") },
    { label: "LinkedIn", run: () => window.open(PROFILE.linkedin, "_blank", "noopener") },
    { label: "Cleared for takeoff", run: toTop },
    { label: "Request clearance", run: () => { scrollToId("contact"); setTimeout(() => document.querySelector("#contact-form input")?.focus({ preventScroll: true }), reduced() ? 0 : 600); } },
  ], []);

  const iconLink = "p-1.5 text-mute transition-colors hover:text-ink";
  return (
    <>
      <BlackHole />
      <Sky />
      <Altitude />
      <Palette open={paletteOpen} onClose={() => setPaletteOpen(false)} commands={commands} />
      <div className="relative z-10">
        <Header openPalette={() => setPaletteOpen(true)} />
        <main id="top" className="mx-auto max-w-[640px] px-5">
          <section className="pb-16 pt-16 sm:pt-24">
            <h1 className="font-display text-5xl font-semibold tracking-tight sm:text-6xl">{PROFILE.name}</h1>
            <p className="mt-3 text-lg">{PROFILE.subtitle}</p>
            <p className="mt-3 text-mute">{PROFILE.tagline}</p>
            <div className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-3">
              <a href={PROFILE.github} target="_blank" rel="noreferrer" aria-label="GitHub" className={iconLink}>{icons.github}</a>
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className={iconLink}>{icons.linkedin}</a>
              <a href={`mailto:${PROFILE.email}`} aria-label="Email" className={iconLink}>{icons.mail}</a>
              <a href={PROFILE.cv} download className="ml-2 text-sm underline underline-offset-4">Download CV</a>
              <span className="ml-2 inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 text-xs text-mute">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden="true" />{PROFILE.badge}
              </span>
            </div>
          </section>

          <section id="about" aria-labelledby="about-h" className="scroll-mt-20 py-10">
            <H2 id="about-h">{ABOUT.heading}</H2>
            <div className="space-y-4 text-mute">{ABOUT.paragraphs.map((p) => <p key={p}>{p}</p>)}</div>
            <blockquote className="my-8 border-l-2 border-accent pl-4">
              <p className="italic">“{quote.text}”</p>
              <footer className="mt-1 text-sm text-mute">{quote.by}</footer>
            </blockquote>
            <p className="text-sm text-mute"><span className="text-ink">Technologies I work with:</span> {ABOUT.tech.join(", ")}</p>
          </section>

          <section id="projects" aria-labelledby="proj-h" className="scroll-mt-20 py-10">
            <H2 id="proj-h">Featured work</H2>
            <div className="space-y-8">
              {PROJECTS.map((p) => (
                <article key={p.title}>
                  {p.image && (
                    <img src={p.image} alt={`${p.title} screenshot`} loading="lazy" width="1000" height="560"
                      className="mb-4 aspect-[16/9] w-full rounded-xl border border-line object-cover object-top" />
                  )}
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-medium">{p.title}</h3>
                    <span className="flex gap-4 text-sm">
                      {p.live && <a href={p.live} target="_blank" rel="noreferrer" className="underline underline-offset-4">Live</a>}
                      <a href={p.code} target="_blank" rel="noreferrer" className="underline underline-offset-4">Code</a>
                    </span>
                  </div>
                  <p className="mt-1 text-mute">{p.blurb}</p>
                  {p.flow && <p className="mt-2 text-sm text-accent">{p.flow}</p>}
                  <div className="mt-3 flex flex-wrap gap-2">{p.tags.map((t) => <span key={t} className="rounded-full border border-line px-2.5 py-0.5 text-xs text-mute">{t}</span>)}</div>
                </article>
              ))}
              <p className="text-mute/80">More coming soon</p>
            </div>
          </section>

          <section id="work" aria-labelledby="work-h" className="scroll-mt-20 py-10">
            <H2 id="work-h">Work experience</H2>
            <div className="divide-y divide-line rounded-xl border border-line bg-bg/80 px-4 backdrop-blur-md">
              {EXPERIENCE.map((e) => (
                <details key={e.company} className="group py-4">
                  <summary className="flex cursor-pointer list-none items-center gap-3 [&::-webkit-details-marker]:hidden">
                    <span className="text-mute transition-transform group-open:rotate-90">{icons.chevron}</span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-medium">{e.company}{e.current && <span className="ml-2 rounded-full border border-line px-2 py-0.5 align-middle text-[10px] font-normal text-mute">Working</span>}</span>
                      <span className="block text-sm text-ink/70">{e.role}</span>
                    </span>
                    <span className="shrink-0 text-xs text-mute">{e.period}</span>
                  </summary>
                  <ul className="mt-3 list-disc space-y-2 pl-8 text-sm text-ink/80">{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
                </details>
              ))}
            </div>
          </section>

          <Contact />
        </main>
        <footer className="mx-auto max-w-[640px] px-5 pb-16 pt-6">
          <button type="button" onClick={toTop} className="inline-flex items-center gap-2 text-sm text-mute hover:text-ink">
            {icons.plane} Cleared for takeoff
          </button>
        </footer>
      </div>
    </>
  );
}
