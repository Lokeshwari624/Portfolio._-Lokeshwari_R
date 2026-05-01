import { motion } from "framer-motion";
import { SectionHeader } from "./About";
import {
  Code, Layout, Server, Palette, Wrench, Heart,
} from "lucide-react";

const groups = [
  {
    icon: Layout,
    title: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "React.js (learning)"],
  },
  {
    icon: Server,
    title: "Backend",
    items: ["Node.js (basic)", "REST APIs", "Express (learning)"],
  },
  {
    icon: Palette,
    title: "Design",
    items: ["UI/UX Fundamentals", "Figma (basic)", "Canva", "Storytelling"],
  },
  {
    icon: Wrench,
    title: "Tools",
    items: ["Git", "GitHub", "VS Code", "Figma", "Canva", "Microsoft Word"],
  },
  {
    icon: Code,
    title: "Currently Learning",
    items: ["React.js", "Node.js", "Generative AI", "Full-Stack Apps"],
  },
  {
    icon: Heart,
    title: "Soft Skills",
    items: ["Communication", "Teamwork", "Creativity", "Leadership"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative px-5 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="Skills" title="Tools & technologies I work with" />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ y: -6 }}
              className="group glass relative overflow-hidden rounded-2xl p-6 transition-shadow hover:glow-blue"
            >
              <div className="absolute inset-0 -z-10 opacity-0 transition-opacity group-hover:opacity-100">
                <div className="absolute -inset-1 bg-gradient-primary opacity-20 blur-xl" />
              </div>
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-primary text-white shadow-[var(--shadow-glow)]">
                  <g.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">{g.title}</h3>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-muted-foreground"
                  >
                    {s}
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