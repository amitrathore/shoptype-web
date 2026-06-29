export default function ClosingCta() {
  return (
    <section
      id="launch"
      className="relative overflow-hidden border-t border-line py-28 md:py-40"
    >
      <div className="bg-grid bg-grid-drift absolute inset-0 -z-10 opacity-[0.25]" />
      <div className="absolute bottom-0 left-1/2 -z-10 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-lime/10 blur-[150px]" />

      <div className="mx-auto max-w-4xl px-6 text-center md:px-10">
        <p className="font-mono text-[11px] uppercase tracking-wider text-cream-dim">
          The bottom line
        </p>
        <h2 className="mt-5 font-display text-4xl leading-[1.05] tracking-tight text-cream md:text-6xl">
          You bring the business vertical.
          <br />
          <span className="text-lime text-glow-lime">
            Shoptype brings agentic distribution.
          </span>
        </h2>
        <p className="mx-auto mt-7 max-w-xl font-body text-base leading-relaxed text-cream-dim md:text-lg">
          The growth engine underneath it, and a head start on the agentic
          economy that&rsquo;s already arriving.
        </p>

        <div className="mt-10 flex justify-center">
          <a
            href="#top"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-lime px-8 py-4 font-mono text-sm font-medium uppercase tracking-wider text-canvas transition-transform hover:scale-[1.03]"
          >
            Build your distribution network today
            <span aria-hidden className="transition-transform group-hover:translate-x-1">
              &rarr;
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
