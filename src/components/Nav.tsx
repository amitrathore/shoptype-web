import Image from "next/image";
import MobileMenu from "@/components/MobileMenu";

const links = [
  ["For sellers", "#sellers"],
  ["For markets", "#markets"],
  ["How it works", "#how"],
  ["Developers", "#developers"],
];

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-canvas/95 backdrop-blur-md">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-4 py-4 sm:px-6 md:px-10">
        <a
          href="#top"
          aria-label="Shoptype home"
          className="flex shrink-0 items-center gap-2.5"
        >
          <Image
            src="/logo.png"
            alt=""
            width={28}
            height={28}
            className="h-7 w-7"
            priority
          />
          <span className="hidden font-display text-xl tracking-tight min-[380px]:inline">Shoptype</span>
        </a>
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-6 font-mono text-xs text-cream-dim lg:flex"
        >
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="transition-colors hover:text-cream"
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="https://app.shoptype.com"
            className="button-primary whitespace-nowrap px-3 text-[11px] sm:px-5 sm:text-sm"
          >
            Open Shoptype <span aria-hidden="true">↗</span>
          </a>
          <MobileMenu>
            <nav
              aria-label="Mobile navigation"
              className="absolute right-0 top-full mt-3 flex w-56 flex-col rounded-xl border border-line bg-canvas p-3 shadow-xl"
            >
              {links.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  className="rounded-lg px-4 py-3 text-sm hover:bg-canvas-raised"
                >
                  {label}
                </a>
              ))}
              <a
                href="#launch"
                className="rounded-lg px-4 py-3 text-sm text-lime hover:bg-canvas-raised"
              >
                Launch a market
              </a>
            </nav>
          </MobileMenu>
        </div>
      </div>
    </header>
  );
}
