import AnimatedSection from "./AnimatedSection";

export default function SectionHeader({ index, title }) {
  return (
    <AnimatedSection className="mb-16">
      <p className="font-mono text-xs tracking-widest uppercase mb-3 gradient-text">
        // {index}. {title}
      </p>
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight" style={{ color: "var(--text-primary)" }}>
        {title}
      </h2>
      <div className="mt-4 h-[3px] w-16 rounded-full"
        style={{ background: "linear-gradient(90deg, var(--accent), var(--accent2))" }} />
    </AnimatedSection>
  );
}
