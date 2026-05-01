import { motion } from "framer-motion";
import { SectionHeader } from "./About";
import { Briefcase, Award, Users } from "lucide-react";

const items = [
  {
    icon: Users,
    role: "IEEE Communicator & Active Member",
    org: "IEEE SIGHT / SSIT / CS — Sri Sairam Engineering College",
    period: "2023 — Present",
    points: [
      "Coordinated technical and outreach events across multiple IEEE chapters.",
      "Hosted & emceed sessions, building strong public-speaking and storytelling skills.",
    ],
  },
  {
    icon: Briefcase,
    role: "Hackathon Participant — TechSprint (Audionex)",
    org: "IEEE TechSprint",
    period: "2024",
    points: [
      "Built a collaborative audio-driven web project under tight time constraints.",
      "Owned UI/UX flow and contributed to front-end implementation.",
    ],
  },
  {
    icon: Award,
    role: "Student Volunteer & Organizer",
    org: "College Tech & Cultural Events",
    period: "2023 — Present",
    points: [
      "Helped organize symposiums, workshops and design-led student events.",
      "Created posters and digital assets in Canva for event promotion.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative px-5 py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeader eyebrow="Experience" title="Roles, events & real-world exposure" />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={it.role}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-2xl p-6"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary text-white shadow-[var(--shadow-glow)]">
                <it.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-base font-semibold">{it.role}</h3>
              <p className="text-xs text-muted-foreground">{it.org}</p>
              <p className="mt-1 text-xs text-[var(--neon-cyan)]">{it.period}</p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {it.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-primary" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
