import { motion } from "framer-motion";
import { ArrowRight, Mail, Github, Linkedin, Phone } from "lucide-react";

const LINKEDIN =
  "https://www.linkedin.com/posts/lokeshwari-ramesh-20b61a36a_audionex-techsprint-ieee-ugcPost-7429716004269715456-iono";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 pt-32"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--neon-purple)] opacity-20 blur-[120px] animate-pulse-glow" />
        <div className="absolute right-1/4 top-1/2 h-[400px] w-[400px] rounded-full bg-[var(--neon-blue)] opacity-15 blur-[120px]" />
      </div>

      <div className="mx-auto w-full max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground"
        >
          <span className="h-2 w-2 rounded-full bg-[var(--neon-cyan)] shadow-[0_0_10px_var(--neon-cyan)]" />
          Available for opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl md:text-8xl"
        >
          <span className="text-gradient animate-gradient">Lokeswari R</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-base text-muted-foreground sm:text-lg"
        >
          <a
            href="https://github.com/Lokeshwari624"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full glass px-3 py-1.5 transition-all hover:text-foreground hover:glow-blue"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full glass px-3 py-1.5 transition-all hover:text-foreground hover:glow-blue"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-full glass px-3 py-1.5 transition-all hover:text-foreground hover:glow-blue"
          >
            <Phone className="h-4 w-4" /> Contact
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl"
        >
          Full Stack Developer · Gen AI Enthusiast · UI/UX Designer
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mx-auto mt-3 max-w-xl text-sm italic text-muted-foreground/80 sm:text-base"
        >
          &quot;Building impactful tech solutions with creativity and innovation.&quot;
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-white shadow-[var(--shadow-glow)] transition-transform hover:scale-105 animate-gradient"
          >
            View Projects
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold transition-all hover:bg-white/10"
          >
            <Phone className="h-4 w-4" /> Contact
          </a>
          <a
            href="mailto:rlokeswari23@gmail.com"
            className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold transition-all hover:bg-white/10"
          >
            <Mail className="h-4 w-4" /> Mail
          </a>
        </motion.div>
      </div>
    </section>
  );
}