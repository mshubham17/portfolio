import { ArrowUpRight, Code2, Download, Mail } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Sky } from "@/components/Sky";
import { ContactForm } from "@/components/Contact";
import { AltitudeMeter, KonamiPlane } from "@/components/Extras";
import { site, tech, about, projects, experience, contact, footer } from "@/data";

const GithubIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}><path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.25.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.84 1.18 3.09 0 4.41-2.69 5.39-5.25 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z"/></svg>
);
const LinkedinIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z"/></svg>
);

const Pipeline = ({ steps }) => (
  <ol className="flex flex-col @lg:flex-row @lg:items-stretch gap-1 list-none p-0 m-0" aria-label="Pipeline">
    {steps.map(([label, sub], i) => (
      <li key={label} className="contents">
        <div className="flex-1 basis-0 min-w-0 rounded-xl border border-[#b9c0d2] bg-white/60 px-2 py-2 text-center">
          <div className="text-xs font-bold break-words">{label}</div>
          {sub && <div className="text-[11px] muted break-words leading-tight">{sub}</div>}
        </div>
        {i < steps.length - 1 && (
          <span aria-hidden="true" className="self-center text-[#475066] rotate-90 @lg:rotate-0 leading-none">›</span>
        )}
      </li>
    ))}
  </ol>
);

const ProjectTile = ({ p, paper, i }) => (
  <article className={`tile ${paper ? "tile-paper" : ""} @container lg:col-span-6 flex flex-col`} style={{ "--i": i }}>
    <h3 className="font-display font-bold tracking-tight text-2xl">{p.title}</h3>
    <p className={`mt-3 text-[15px] leading-relaxed ${paper ? "muted" : "text-muted"}`}>{p.description}</p>
    <div className="mt-6 mb-6">
      {paper ? <Pipeline steps={p.pipeline} /> : <DarkPipeline steps={p.pipeline} />}
    </div>
    <div className="mt-auto flex flex-wrap items-center gap-2">
      <a href={p.code} target="_blank" rel="noreferrer" className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-semibold mr-2 ${paper ? "bg-[#12151b] text-white" : "bg-ink text-base"}`}>
        <Code2 size={14} aria-hidden="true" /> Code
      </a>
      {p.tags.map((t) => <span key={t} className="chip">{t}</span>)}
    </div>
  </article>
);

const DarkPipeline = ({ steps }) => (
  <ol className="flex flex-col @lg:flex-row @lg:items-stretch gap-1 list-none p-0 m-0" aria-label="Pipeline">
    {steps.map(([label, sub], i) => (
      <li key={label} className="contents">
        <div className="flex-1 basis-0 min-w-0 rounded-xl border border-line bg-base px-2 py-2 text-center">
          <div className="text-xs font-bold break-words">{label}</div>
          {sub && <div className="text-[11px] text-muted break-words leading-tight">{sub}</div>}
        </div>
        {i < steps.length - 1 && (
          <span aria-hidden="true" className="self-center text-muted rotate-90 @lg:rotate-0 leading-none">›</span>
        )}
      </li>
    ))}
  </ol>
);

function Home() {
  const half = Math.ceil(experience.length / 2);
  const cols = [experience.slice(0, half), experience.slice(half)];
  return (
    <>
      <Navbar />
      <AltitudeMeter />
      <KonamiPlane />
      <main id="top" className="mx-auto max-w-[1280px] px-4 md:px-6 py-4 md:py-6 grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Row 1 */}
        <section className="tile tile-blue lg:col-span-8 flex flex-col justify-between min-h-[22rem]" style={{ "--i": 0 }}>
          <div className="stars" aria-hidden="true" />
          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-sm font-medium">
              <span className="h-2 w-2 rounded-full bg-[#7CFFB2]" aria-hidden="true" /> {site.badge}
            </span>
            <h1 className="mt-6 font-display font-bold tracking-tighter text-5xl sm:text-6xl lg:text-7xl leading-[1.02]">{site.name}</h1>
            <p className="mt-3 font-display text-lg md:text-xl font-semibold">{site.role}</p>
            <p className="mt-3 max-w-xl text-white/90">{site.tagline}</p>
          </div>
          <div className="relative mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-white text-[#1a2a9c] px-6 py-3 font-semibold hover:bg-paper"><Mail size={16} aria-hidden="true" /> Get in touch</a>
            <a href={site.cvUrl} download className="inline-flex items-center gap-2 rounded-full border border-white/60 px-6 py-3 font-semibold hover:bg-white/10"><Download size={16} aria-hidden="true" /> Download CV</a>
          </div>
        </section>

        <aside className="tile lg:col-span-4 flex flex-col" style={{ "--i": 1 }} aria-label="Tech stack and links">
          <h2 className="font-display font-bold text-lg">Tech stack</h2>
          <div className="mt-4 flex flex-wrap gap-2">{tech.map((t) => <span key={t} className="chip !text-ink">{t}</span>)}</div>
          <div className="mt-6 flex gap-3">
            <a href={site.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="p-3 rounded-xl border border-line hover:border-muted"><GithubIcon width="20" height="20" /></a>
            <a href={site.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-3 rounded-xl border border-line hover:border-muted"><LinkedinIcon width="20" height="20" /></a>
          </div>
          <div className="mt-auto"><Sky /></div>
        </aside>

        {/* Row 2 */}
        <div id="projects" className="contents">
          <ProjectTile p={projects[1]} paper i={2} />
          <ProjectTile p={projects[0]} i={3} />
        </div>

        {/* Row 3 */}
        <aside className="tile lg:col-span-4" style={{ "--i": 4 }}>
          <h2 className="text-xs uppercase tracking-widest text-muted">Now</h2>
          <div className="mt-4 flex items-center gap-4">
            <div className="radar" aria-hidden="true"><i /></div>
            <div>
              <p className="font-display font-bold text-xl leading-tight">{site.nowRole}</p>
              <p className="text-muted">{site.nowCompany}</p>
            </div>
          </div>
        </aside>
        <section id="about" className="tile lg:col-span-8" style={{ "--i": 5 }}>
          <h2 className="font-display font-bold tracking-tight text-3xl">{about.heading}</h2>
          {about.paragraphs.map((t) => <p key={t} className="mt-4 text-muted leading-relaxed">{t}</p>)}
          <blockquote className="mt-6 border-l-2 border-electric pl-4">
            <p className="text-ink italic">“{about.quote}”</p>
            <footer className="mt-1 text-sm text-muted">- {about.quoteBy}</footer>
          </blockquote>
        </section>

        {/* Row 4 */}
        <section id="experience" className="tile lg:col-span-12" style={{ "--i": 6 }}>
          <h2 className="font-display font-bold tracking-tight text-3xl">Career journey</h2>
          <div className="mt-6 grid gap-8 lg:grid-cols-2">
            {cols.map((col, ci) => (
              <div key={ci} className="space-y-8">
                {col.map((e) => (
                  <article key={e.period} className="min-w-0">
                    <p className="text-sm text-muted">{e.period}</p>
                    <h3 className="font-display font-bold text-xl mt-1">{e.role}</h3>
                    <p className="text-[#9db0ff]">{e.company}</p>
                    <ul className="mt-3 space-y-2 text-[15px] text-muted list-disc pl-5">
                      {e.points.map((p) => <li key={p}>{p}</li>)}
                    </ul>
                    <div className="mt-3 flex flex-wrap gap-2">{e.tags.map((t) => <span key={t} className="chip">{t}</span>)}</div>
                  </article>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* Row 5 */}
        <section id="contact" className="tile lg:col-span-8" style={{ "--i": 7 }}>
          <h2 className="font-display font-bold tracking-tight text-3xl">{contact.heading}</h2>
          <p className="mt-2 mb-6 text-muted">{contact.text}</p>
          <ContactForm />
        </section>
        <aside className="tile lg:col-span-4" style={{ "--i": 8 }}>
          <span className="inline-flex items-center gap-2 text-sm"><span className="h-2.5 w-2.5 rounded-full bg-[#3ddc97]" aria-hidden="true" />{contact.availabilityTitle}</span>
          <p className="mt-4 text-muted leading-relaxed">{contact.availabilityText}</p>
          <a href="#top" className="mt-6 inline-flex items-center gap-1 text-sm text-ink underline underline-offset-4">Back to top <ArrowUpRight size={14} aria-hidden="true" /></a>
        </aside>
      </main>
      <footer className="mx-auto max-w-[1280px] px-4 md:px-6 py-8 flex flex-col md:flex-row gap-2 md:justify-between text-sm text-muted">
        <p>© {new Date().getFullYear()} {site.name}</p>
        <p>{footer.right}</p>
      </footer>
    </>
  );
}

function NotFound() {
  return (
    <main className="min-h-screen grid place-items-center px-4 text-center">
      <div>
        <p className="text-muted text-sm tracking-widest">404</p>
        <h1 className="mt-3 font-display font-bold tracking-tighter text-4xl sm:text-6xl">Off the chart. Return to base.</h1>
        <a href="/" className="mt-8 inline-block rounded-full bg-electric px-6 py-3 font-semibold text-white">Back to home</a>
      </div>
    </main>
  );
}

export default function App() {
  const known = window.location.pathname === "/" || window.location.pathname === "/index.html";
  return known ? <Home /> : <NotFound />;
}
