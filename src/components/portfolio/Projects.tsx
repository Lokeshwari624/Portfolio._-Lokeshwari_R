import { motion } from "framer-motion";
import { SectionHeader } from "./About";
import { Github, ExternalLink, Shield, Flame, Sprout, Sun } from "lucide-react";

const projects = [
  {
    icon: Shield,
    title: "Phishing Detection Web App",
    desc: "Detects fake emails and malicious links, displaying risk levels and detailed analysis. Focused on cybersecurity and a clean analyst-friendly UI.",
    tags: ["Python", "ML", "Web", "Security"],
  },
  {
    icon: Flame,
    title: "Gas Leakage Detection System",
    desc: "IoT prototype using MQ sensors and a microcontroller to detect gas leaks and trigger real-time buzzer and notification alerts.",
    tags: ["IoT", "Arduino", "Embedded C"],
  },
  {
    icon: Sprout,
    title: "Soil Moisture Monitoring System",
    desc: "Humidity-sensor based system that monitors soil moisture levels to support smart irrigation decisions for sustainable farming.",
    tags: ["IoT", "Sensors", "Sustainability"],
  },
  {
    icon: Sun,
    title: "Solar Automatic Street Light",
    desc: "Energy-efficient street lighting system that automatically switches ON/OFF using solar energy and ambient light sensing.",
    tags: ["Solar", "Embedded", "Automation"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative px-5 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="Projects" title="Things I've built & explored" />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group glass relative overflow-hidden rounded-2xl p-6 transition-shadow hover:glow-blue"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-primary opacity-20 blur-2xl transition-opacity group-hover:opacity-40" />
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary text-white shadow-[var(--shadow-glow)]">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <li key={t} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-muted-foreground">
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex items-center gap-3 text-xs text-muted-foreground">
                <a href="https://github.com/Lokeshwari624" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-foreground">
                  <Github className="h-3.5 w-3.5" /> Code
                </a>
                <span className="opacity-30">·</span>
                <span className="inline-flex items-center gap-1"><ExternalLink className="h-3.5 w-3.5" /> Case study soon</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
