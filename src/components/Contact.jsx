import { useState } from "react";
import { Send } from "lucide-react";
import { site } from "@/data";

const field = "w-full rounded-xl bg-base border border-line px-4 py-3 text-ink placeholder:text-muted focus:border-electric";

export function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState(null);
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  async function submit(e) {
    e.preventDefault();
    setBusy(true);
    setStatus(null);
    const { VITE_EMAILJS_SERVICE_ID: s, VITE_EMAILJS_TEMPLATE_ID: t, VITE_EMAILJS_PUBLIC_KEY: k } = import.meta.env;
    try {
      if (s && t && k) {
        const emailjs = (await import("@emailjs/browser")).default;
        await emailjs.send(s, t, form, k);
        setStatus({ ok: true, text: "Message sent. I'll get back to you soon." });
        setForm({ name: "", email: "", message: "" });
      } else {
        const body = `${form.message}\n\n${form.name} (${form.email})`;
        window.location.href = `mailto:${site.email}?subject=${encodeURIComponent("Portfolio message from " + form.name)}&body=${encodeURIComponent(body)}`;
        setStatus({ ok: true, text: "Opening your email app to send the message." });
      }
    } catch (err) {
      console.error(err);
      setStatus({ ok: false, text: "Could not send the message. Please try again later." });
    } finally {
      setBusy(false);
    }
  }

  return (
    <form onSubmit={submit} className="space-y-4" noValidate={false}>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm text-muted mb-1.5">Name</label>
          <input id="name" required value={form.name} onChange={set("name")} className={field} placeholder="Your name" autoComplete="name" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm text-muted mb-1.5">Email</label>
          <input id="email" type="email" required value={form.email} onChange={set("email")} className={field} placeholder="you@example.com" autoComplete="email" />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm text-muted mb-1.5">Message</label>
        <textarea id="message" required rows={5} value={form.message} onChange={set("message")} className={field} placeholder="How can I help?" />
      </div>
      <button type="submit" disabled={busy} className="inline-flex items-center gap-2 rounded-full bg-electric px-6 py-3 font-semibold text-white hover:bg-[#2f49d8] disabled:opacity-60 transition-colors">
        {busy ? "Sending..." : "Send message"} <Send size={16} aria-hidden="true" />
      </button>
      <p role="status" aria-live="polite" className={`text-sm min-h-5 ${status?.ok ? "text-[#5eead4]" : "text-[#fca5a5]"}`}>{status?.text}</p>
    </form>
  );
}
