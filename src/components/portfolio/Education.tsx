import { motion } from "framer-motion";
import { SectionHeader } from "./About";
import { GraduationCap, School, BookOpen } from "lucide-react";

const items = [
  {
    icon: GraduationCap,
    title: "B.E. Computer Science & Engineering",
    org: "Sri Sairam Engineering College, Chennai",
    period: "2025 — Present",
    note: "CGPA: 9.09. Active IEEE member (SIGHT / SSIT / CS). Engaged in hackathons, workshops, and technical events focused on Full-Stack Development, Cybersecurity, and Generative AI.",
  },
  {
    icon: School,
    title: "Higher Secondary — Computer Science with Mathematics",
    org: "Velammal Matriculation Higher Secondary School",
    period: "Graduated 2024",
    note: "Class 12: 93.1% · Class 10: 94.8%. Built academic projects including a Gas Leakage Detection System, Soil Moisture Monitoring System, and Solar-Based Automatic Street Light System.",
  },
  {
    icon: BookOpen,
    title: "Primary & Middle School",
    org: "Elite Matriculation Higher Secondary School",
    period: "Graduated 2022",
    note: "Grade A+. Built early interest in technology, design, and communication.",
  },
];

export function Education() {
  return (
    <section id="education" className="relative px-5 py-28">
      <div className="mx-auto max-w-4xl">
        <SectionHeader eyebrow="Education" title="My academic journey" />
        <div className="relative mt-14 pl-6 sm:pl-10">
          <div className="absolute left-2 top-0 h-full w-px bg-gradient-to-b from-[var(--neon-blue)] via-[var(--neon-purple)] to-transparent sm:left-4" />
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative mb-8"
            >
              <span className="absolute -left-[18px] top-3 grid h-4 w-4 place-items-center rounded-full bg-background sm:-left-[26px]">
                <span className="h-3 w-3 rounded-full bg-gradient-primary shadow-[var(--shadow-glow)]" />
              </span>
              <div className="glass rounded-2xl p-5">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-primary text-white">
                    <it.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold">{it.title}</h3>
                    <p className="text-xs text-muted-foreground">{it.org}</p>
                  </div>
                  <span className="ml-auto rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10px] uppercase tracking-wider text-[var(--neon-cyan)]">
                    {it.period}
                  </span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{it.note}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
