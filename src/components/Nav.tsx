export default function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-line bg-canvas/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <a href="#top" className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-lime" />
          </span>
          <span className="font-display text-xl tracking-tight text-cream">
            Shoptype
          </span>
        </a>

        <nav className="hidden items-center gap-8 font-mono text-[13px] uppercase tracking-wider text-cream-dim md:flex">
          <a href="#leapfrog" className="transition-colors hover:text-cream">
            For sellers
          </a>
          <a href="#agentic" className="transition-colors hover:text-cream">
            Agentic-ready
          </a>
          <a href="#how" className="transition-colors hover:text-cream">
            How it works
          </a>
          <a href="#who" className="transition-colors hover:text-cream">
            Who it&rsquo;s for
          </a>
        </nav>

        <a
          href="#launch"
          className="group relative overflow-hidden rounded-full bg-lime px-5 py-2 font-mono text-[12px] font-medium uppercase tracking-wider text-canvas transition-transform hover:scale-[1.03]"
        >
          Launch
        </a>
      </div>
    </header>
  );
}
