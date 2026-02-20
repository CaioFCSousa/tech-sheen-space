import { motion } from "framer-motion";

const techStack = [
  { name: "Node.js", icon: "⬡", color: "hsl(120 60% 50%)" },
  { name: "Express.js", icon: "◈", color: "hsl(var(--foreground))" },
  { name: "TypeScript", icon: "◆", color: "hsl(210 90% 60%)" },
  { name: "PostgreSQL", icon: "◉", color: "hsl(200 80% 55%)" },
  { name: "MongoDB", icon: "◈", color: "hsl(120 50% 45%)" },
  { name: "Docker", icon: "▣", color: "hsl(200 90% 55%)" },
  { name: "Git", icon: "◈", color: "hsl(15 90% 60%)" },
  { name: "REST API", icon: "◆", color: "hsl(var(--primary))" },
  { name: "JWT", icon: "◉", color: "hsl(40 90% 60%)" },
  { name: "Redis", icon: "◈", color: "hsl(0 80% 55%)" },
  { name: "GraphQL", icon: "◆", color: "hsl(320 80% 60%)" },
  { name: "Nginx", icon: "◉", color: "hsl(120 60% 50%)" },
];

function TechBadge({ name, icon, color }: { name: string; icon: string; color: string }) {
  return (
    <div
      className="inline-flex items-center gap-2.5 mx-6 px-5 py-3 rounded-lg glass-card cursor-default select-none flex-shrink-0"
      style={{ borderColor: `${color}22` }}
    >
      <span className="text-lg" style={{ color }}>
        {icon}
      </span>
      <span
        className="mono text-sm font-medium whitespace-nowrap"
        style={{ color: "hsl(var(--foreground))" }}
      >
        {name}
      </span>
    </div>
  );
}

export default function TechMarquee() {
  const doubled = [...techStack, ...techStack];

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Fade edges */}
      <div
        className="absolute left-0 top-0 w-32 h-full z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to right, hsl(var(--background)) 0%, transparent 100%)",
        }}
      />
      <div
        className="absolute right-0 top-0 w-32 h-full z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to left, hsl(var(--background)) 0%, transparent 100%)",
        }}
      />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <span
          className="mono text-sm tracking-widest uppercase"
          style={{ color: "hsl(var(--primary))" }}
        >
          // Tech Stack
        </span>
      </motion.div>

      {/* Divider */}
      <div
        className="w-full h-px mb-8"
        style={{ background: "hsl(var(--border))" }}
      />

      <div className="marquee-container">
        <div className="marquee-track py-2">
          {doubled.map((tech, i) => (
            <TechBadge key={i} {...tech} />
          ))}
        </div>
      </div>

      <div
        className="w-full h-px mt-8"
        style={{ background: "hsl(var(--border))" }}
      />
    </section>
  );
}
