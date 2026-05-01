import { motion } from "framer-motion";
import { SectionHeader } from "./About";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { useState } from "react";

const EMAIL = "rlokeswari23@gmail.com";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${name || "Visitor"}`);
    const body = encodeURIComponent(`${msg}\n\nFrom: ${name} <${email}>`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative px-5 py-28">
      <div className="mx-auto max-w-4xl">
        <SectionHeader eyebrow="Contact" title="Let's build something together" />
        <div className="mt-12 grid gap-6 md:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 space-y-3"
          >
            <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 glass rounded-2xl p-4 hover:glow-blue transition-shadow">
              <Mail className="h-5 w-5 text-[var(--neon-cyan)]" />
              <span className="text-sm">{EMAIL}</span>
            </a>
            <a href="https://github.com/Lokeshwari624" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 glass rounded-2xl p-4 hover:glow-blue transition-shadow">
              <Github className="h-5 w-5 text-[var(--neon-cyan)]" />
              <span className="text-sm">github.com/Lokeshwari624</span>
            </a>
            <a href="https://www.linkedin.com/in/lokeshwari-ramesh-20b61a36a" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 glass rounded-2xl p-4 hover:glow-blue transition-shadow">
              <Linkedin className="h-5 w-5 text-[var(--neon-cyan)]" />
              <span className="text-sm">LinkedIn Profile</span>
            </a>
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-3 glass rounded-2xl p-6 space-y-4"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                required value={name} onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm outline-none focus:border-[var(--neon-purple)]"
              />
              <input
                required type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm outline-none focus:border-[var(--neon-purple)]"
              />
            </div>
            <textarea
              required value={msg} onChange={(e) => setMsg(e.target.value)}
              rows={5} placeholder="Tell me about your project or opportunity..."
              className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm outline-none focus:border-[var(--neon-purple)]"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-white shadow-[var(--shadow-glow)] hover:scale-105 transition-transform animate-gradient"
            >
              Send Message <Send className="h-4 w-4" />
            </button>
          </motion.form>
        </div>

        <p className="mt-12 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Lokeshwari R · Built with creativity & code.
        </p>
      </div>
    </section>
  );
}
