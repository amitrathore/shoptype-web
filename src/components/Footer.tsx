import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "@/components/ThemeToggle";
import { contactEmail, legalOperator } from "@/lib/site";

const groups = [
  {
    title: "Platform",
    links: [
      ["Connect your business", "/#sellers"],
      ["Connect your market", "/#markets"],
      ["Launch an agentic market", "/#launch"],
      ["Open Shoptype", "https://app.shoptype.com"],
    ],
  },
  {
    title: "Resources",
    links: [
      ["How it works", "/#how"],
      ["Agentic commerce", "/#agentic"],
      ["Connect a coding agent", "https://app.shoptype.com/mcp-guide.md"],
      ["Shoptype Protocol", "https://app.shoptype.com/shoptype-protocol.md"],
    ],
  },
  {
    title: "Ecosystem",
    links: [
      ["Opentangle", "https://opentangle.ai"],
      ["Daemons", "https://daemons.ai/"],
      ["Toolisman", "https://toolisman.com/"],
      ["AwakeVC", "https://awake.vc/"],
      ["Yvatar", "https://yvatar.com"],
      ["Coselling.ai", "https://coselling.ai"],
      ["Commerce of Agents", "https://www.commerceofagents.com"],
    ],
  },
  {
    title: "Legal & contact",
    links: [
      ["Terms of Service", "/terms/"],
      ["Privacy Policy", "/privacy/"],
      ["Contact support", `mailto:${contactEmail}`],
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-canvas-raised/40">
      <div className="section-inner pb-8 pt-14 md:pt-20">
        <div className="grid gap-12 xl:grid-cols-[1fr_2fr] xl:gap-16">
          <div>
            <Link
              href="/"
              aria-label="Shoptype home"
              className="inline-flex items-center gap-3"
            >
              <Image src="/logo.png" alt="" width={36} height={36} />
              <span className="font-display text-3xl">Shoptype</span>
            </Link>
            <p className="mt-5 max-w-xs leading-relaxed text-cream-dim">
              Connect products and services to agentic markets.
            </p>
            <Link
              className="mt-5 inline-block text-link text-sm"
              href={`mailto:${contactEmail}`}
            >
              {contactEmail}
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
            {groups.map((group) => (
              <nav key={group.title} aria-label={`Footer: ${group.title}`}>
                <h2 className="font-mono text-[11px] uppercase tracking-wider text-lime">
                  {group.title}
                </h2>
                <ul className="mt-5 space-y-3">
                  {group.links.map(([label, href]) => (
                    <li key={href}>
                      <Link
                        href={href}
                        className="inline-block py-1 text-sm leading-relaxed text-cream-dim transition-colors hover:text-cream"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-5 border-t border-line pt-7 text-xs text-cream-dim sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {legalOperator}. All rights
            reserved.
          </p>
          <div className="flex items-center gap-3">
            <span>Appearance</span>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </footer>
  );
}
