import ThemeToggle from "@/components/ThemeToggle";

export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row md:px-10">
        <span className="font-display text-lg text-cream">Shoptype</span>
        <div className="flex flex-wrap items-center justify-center gap-5">
          <p className="font-mono text-[11px] uppercase tracking-wider text-cream-dim">
            &copy; {new Date().getFullYear()} Shoptype. Built for the agentic economy.
          </p>
          <a href="https://app.shoptype.com" className="text-link text-sm">Open Shoptype ↗</a>
          <a href="https://app.shoptype.com/mcp-guide.md" className="text-link text-sm">Developer guide ↗</a>
          <ThemeToggle />
        </div>
      </div>
    </footer>
  );
}
