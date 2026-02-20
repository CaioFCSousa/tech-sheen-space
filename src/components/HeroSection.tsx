import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import TerminalWindow from "./TerminalWindow";

export default function HeroSection() {
  const scrollToWork = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 grid-bg overflow-hidden"
    >
      {/* Ambient glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, hsl(152 100% 50% / 0.06) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <div
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ background: "hsl(var(--primary))" }}
          />
          <span
            className="mono text-sm tracking-widest uppercase"
            style={{ color: "hsl(var(--primary))" }}
          >
            Available for hire
          </span>
          <div
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ background: "hsl(var(--primary))" }}
          />
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-6"
          style={{ color: "hsl(var(--foreground))" }}
        >
          Junior{" "}
          <span
            className="neon-text"
            style={{
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              background: "var(--gradient-neon)",
              WebkitTextFillColor: "transparent",
            }}
          >
            Backend
          </span>
          <br />
          Developer
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: "hsl(var(--muted-foreground))" }}
        >
          Building production-grade APIs and microservices with{" "}
          <span style={{ color: "hsl(var(--primary))" }}>Node.js</span>,{" "}
          <span style={{ color: "hsl(195 100% 50%)" }}>TypeScript</span>, and a
          passion for clean architecture.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <button
            onClick={scrollToWork}
            className="btn-neon-filled px-8 py-3.5 rounded-lg font-semibold text-base"
          >
            &gt; View My Work
          </button>
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-neon px-8 py-3.5 rounded-lg font-semibold text-base"
          >
            Get In Touch
          </button>
        </motion.div>

        {/* Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center"
        >
          <TerminalWindow />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: "hsl(var(--muted-foreground))" }}
      >
        <span className="mono text-xs tracking-widest">SCROLL</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
