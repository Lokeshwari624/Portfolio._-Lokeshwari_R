import { motion } from "framer-motion";
import { Code2, Lightbulb, Users, Shield } from "lucide-react";

const highlights = [
  { icon: Code2, label: "Full-Stack Dev" },
  { icon: Shield, label: "Cybersecurity" },
  { icon: Lightbulb, label: "Generative AI" },
  { icon: Users, label: "IEEE Communicator" },
];

export function About() {
  return (
    <section id="about" className="relative px-5 py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeader eyebrow="About" title="A multi-skilled student building for the real world" />

        <div className="mt-12 grid gap-8 md:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-3 space-y-4 text-base leading-relaxed text-muted-foreground"
          >
            <p>
              I&apos;m <span className="text-foreground font-semibold">Lokeshwari R</span>, a B.E
              Computer Science undergraduate at{" "}
              <span className="text-foreground">Sri Sairam Engineering College, Chennai</span>.
              My focus is Full-Stack Development and modern web technologies.
            </p>
            <p>
              Beyond tech, I love communication, organizing events, and expressing ideas creatively.
              I&apos;m an active <span className="text-foreground">IEEE member and communicator</span>{" "}
              (IEEE SIGHT / SSIT / CS), passionate about solving real-world problems through code.
            </p>
            <p>
              My interests span Web Development, Cybersecurity, and Generative AI — I combine
              technical skills with a UI/UX and storytelling mindset.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2 grid grid-cols-2 gap-3"
          >
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                whileHover={{ y: -4 }}
                className="glass relative overflow-hidden rounded-2xl p-5"
              >
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-primary opacity-20 blur-2xl" />
                <h.icon className="h-6 w-6 text-[var(--neon-cyan)]" />
                <p className="mt-3 text-sm font-semibold">{h.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <span className="inline-block rounded-full glass px-3 py-1 text-xs font-medium uppercase tracking-widest text-[var(--neon-cyan)]">
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
        <span className="text-gradient">{title}</span>
      </h2>
    </motion.div>
  );
}