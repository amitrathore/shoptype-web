import ThemeToggle from "@/components/ThemeToggle";

export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row md:px-10">
        <span className="font-display text-lg text-cream">Shoptype</span>
        <div className="flex items-center gap-5">
          <p className="font-mono text-[11px] uppercase tracking-wider text-cream-dim">
            &copy; {new Date().getFullYear()} Shoptype. Built for the agentic economy.
          </p>
          <ThemeToggle />
        </div>
      </div>
    </footer>
  );
}
