/**
 * page.jsx — Root page (Step 1: scaffold only)
 * Sections will be imported here as they are built in subsequent steps.
 */
export default function Home() {
  return (
    <main className="min-h-screen grid-bg flex items-center justify-center">
      <div className="text-center space-y-4">
        <p className="label">PORTFOLIO · INITIALIZING</p>
        <h1 className="font-display font-black text-5xl md:text-7xl text-[var(--text-primary)] tracking-tight">
          SRITHARAN<span className="text-[var(--accent)] cursor-blink">_</span>
        </h1>
        <p className="font-mono text-xs text-[var(--text-muted)] tracking-widest">
          SCAFFOLD READY · AWAITING SECTIONS
        </p>
      </div>
    </main>
  );
}
