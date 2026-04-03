import Header from "@/components/Header";

/**
 * Placeholder sections — give the active-section observer real targets.
 * Each section will be replaced by its real component in subsequent steps.
 */
const SECTIONS = ["about", "skills", "experience", "projects", "contact"];

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* Hero placeholder */}
        <section className="min-h-screen grid-bg flex items-center justify-center">
          <div className="text-center space-y-4 px-6">
            <p className="label">PORTFOLIO · STEP 02 COMPLETE</p>
            <h1 className="font-display font-black text-5xl md:text-7xl text-[var(--text-primary)] tracking-tight leading-none">
              SRITHARAN<span className="text-[var(--accent)] cursor-blink">_</span>
            </h1>
            <p className="font-mono text-xs text-[var(--text-muted)] tracking-widest">
              HEADER BUILT · SCROLL TO TEST ACTIVE STATES
            </p>
          </div>
        </section>

        {/* Stub sections — scroll targets for active highlight testing */}
        {SECTIONS.map((id) => (
          <section
            key={id}
            id={id}
            className="min-h-screen flex items-center justify-center border-t border-[var(--border)]"
          >
            <p className="label tracking-widest">
              #{id} — SECTION COMING IN NEXT STEP
            </p>
          </section>
        ))}
      </main>
    </>
  );
}
