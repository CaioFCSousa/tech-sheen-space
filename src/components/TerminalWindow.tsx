import { useState, useEffect } from "react";

const lines = [
  { text: "> npm start developer-career", delay: 0 },
  { text: "✓ Initializing career module...", delay: 1200 },
  { text: "✓ Loading Node.js expertise...", delay: 2200 },
  { text: "✓ Building scalable APIs with Node.js", delay: 3200 },
  { text: "> Status: Ready to ship 🚀", delay: 4400 },
];

function TypedLine({ text, startDelay }: { text: string; startDelay: number }) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(timer);
  }, [startDelay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 35);
    return () => clearInterval(interval);
  }, [started, text]);

  if (!started) return null;
  return <span>{displayed}</span>;
}

export default function TerminalWindow() {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);

  useEffect(() => {
    lines.forEach((line, i) => {
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, i]);
      }, line.delay);
    });
  }, []);

  return (
    <div className="glass-card rounded-xl overflow-hidden max-w-2xl w-full">
      {/* Terminal header */}
      <div
        className="flex items-center gap-2 px-4 py-3"
        style={{ background: "hsl(220 18% 12%)", borderBottom: "1px solid hsl(var(--border))" }}
      >
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <div className="w-3 h-3 rounded-full bg-green-500/80" />
        <span
          className="ml-3 text-xs mono"
          style={{ color: "hsl(var(--muted-foreground))" }}
        >
          terminal — zsh
        </span>
      </div>

      {/* Terminal body */}
      <div
        className="p-6 font-mono text-sm leading-relaxed min-h-[180px]"
        style={{ background: "hsl(220 20% 7%)" }}
      >
        {lines.map((line, i) =>
          visibleLines.includes(i) ? (
            <div
              key={i}
              className="mb-1"
              style={{
                color:
                  line.text.startsWith(">")
                    ? "hsl(var(--primary))"
                    : line.text.startsWith("✓")
                    ? "hsl(195 100% 60%)"
                    : "hsl(var(--foreground))",
              }}
            >
              <TypedLine text={line.text} startDelay={0} />
              {i === visibleLines[visibleLines.length - 1] &&
                visibleLines.length < lines.length && (
                  <span className="cursor-blink" />
                )}
            </div>
          ) : null
        )}
        {visibleLines.length === lines.length && (
          <div className="mt-2" style={{ color: "hsl(var(--primary))" }}>
            <span>$ </span>
            <span className="cursor-blink" />
          </div>
        )}
      </div>
    </div>
  );
}
