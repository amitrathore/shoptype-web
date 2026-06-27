function NetworkDiagram() {
  return (
    <svg
      viewBox="0 0 440 440"
      className="w-full max-w-[440px] text-cream-dim"
      fill="none"
    >
      {/* connecting lines */}
      <g stroke="currentColor" strokeOpacity="0.25" strokeWidth="1">
        <line x1="220" y1="220" x2="80" y2="90" />
        <line x1="220" y1="220" x2="360" y2="90" />
        <line x1="220" y1="220" x2="80" y2="350" />
        <line x1="220" y1="220" x2="360" y2="350" />
        <line x1="220" y1="220" x2="220" y2="40" />
      </g>
      {/* animated pulse traveling lines */}
      <g stroke="var(--lime)" strokeWidth="2" strokeLinecap="round">
        <line x1="220" y1="220" x2="80" y2="90" strokeDasharray="6 220">
          <animate
            attributeName="stroke-dashoffset"
            from="226"
            to="0"
            dur="2.4s"
            repeatCount="indefinite"
          />
        </line>
        <line x1="220" y1="220" x2="360" y2="350" strokeDasharray="6 220">
          <animate
            attributeName="stroke-dashoffset"
            from="226"
            to="0"
            dur="3.1s"
            repeatCount="indefinite"
          />
        </line>
      </g>

      {/* center node: business */}
      <circle cx="220" cy="220" r="34" fill="#0a0a0d" stroke="var(--lime)" strokeWidth="1.5" />
      <text x="220" y="216" textAnchor="middle" fontSize="9" fontFamily="var(--font-mono)" fill="var(--lime)">YOUR</text>
      <text x="220" y="228" textAnchor="middle" fontSize="9" fontFamily="var(--font-mono)" fill="var(--lime)">BUSINESS</text>

      {/* coseller node */}
      <circle cx="80" cy="90" r="20" fill="#0a0a0d" stroke="currentColor" strokeWidth="1.2" />
      <text x="80" y="93" textAnchor="middle" fontSize="8" fontFamily="var(--font-mono)" fill="var(--cream)">COSELLER</text>

      <circle cx="360" cy="90" r="20" fill="#0a0a0d" stroke="currentColor" strokeWidth="1.2" />
      <text x="360" y="93" textAnchor="middle" fontSize="8" fontFamily="var(--font-mono)" fill="var(--cream)">SELLER</text>

      {/* buyer node */}
      <circle cx="80" cy="350" r="20" fill="#0a0a0d" stroke="var(--coral)" strokeWidth="1.2" />
      <text x="80" y="353" textAnchor="middle" fontSize="8" fontFamily="var(--font-mono)" fill="var(--coral)">BUYER</text>

      {/* AI agent node */}
      <circle cx="360" cy="350" r="20" fill="#0a0a0d" stroke="var(--violet)" strokeWidth="1.2" />
      <text x="360" y="353" textAnchor="middle" fontSize="8" fontFamily="var(--font-mono)" fill="var(--violet)">AGENT</text>

      {/* referrer node */}
      <circle cx="220" cy="40" r="18" fill="#0a0a0d" stroke="currentColor" strokeWidth="1.2" />
      <text x="220" y="43" textAnchor="middle" fontSize="7.5" fontFamily="var(--font-mono)" fill="var(--cream)">REFERRER</text>
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32"
    >
      <div className="bg-grid bg-grid-drift absolute inset-0 -z-10 opacity-[0.35]" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-canvas via-canvas/95 to-canvas" />
      <div className="absolute -top-40 right-0 -z-10 h-[520px] w-[520px] rounded-full bg-lime/10 blur-[140px]" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 md:grid-cols-[1.15fr_0.85fr] md:px-10 md:items-center">
        <div className="animate-rise">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-line px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-wider text-cream-dim">
            <span className="h-1.5 w-1.5 rounded-full bg-lime" />
            The distribution layer for any business
          </div>

          <h1 className="font-display text-[13vw] leading-[0.98] tracking-tight text-cream md:text-[clamp(2.6rem,5.4vw,5.2rem)]">
            Distribution
            <br />
            <span className="text-glow-lime text-lime">for the Age of AI</span>
            <span className="text-cream-dim">.</span>
          </h1>

          <p className="mt-7 max-w-xl font-body text-lg leading-relaxed text-cream-dim md:text-xl">
            <strong className="font-semibold text-cream">Shoptype</strong>{" "}
            turns your business into a growth ecosystem — a network of
            human cosellers and AI agents that find buyers, share products,
            and drive sales on your behalf. The agentic market underneath
            handles the transacting; distribution is what actually grows
            you.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <a
              href="#launch"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-lime px-7 py-3.5 font-mono text-[13px] font-medium uppercase tracking-wider text-canvas transition-transform hover:scale-[1.03]"
            >
              Build your distribution ecosystem
              <span aria-hidden className="transition-transform group-hover:translate-x-1">
                &rarr;
              </span>
            </a>
            <a
              href="#agentic"
              className="font-mono text-[13px] uppercase tracking-wider text-cream-dim underline decoration-line decoration-1 underline-offset-4 transition-colors hover:text-cream hover:decoration-lime"
            >
              See how the ecosystem grows
            </a>
          </div>
        </div>

        <div className="relative flex justify-center md:justify-end">
          <NetworkDiagram />
        </div>
      </div>
    </section>
  );
}
