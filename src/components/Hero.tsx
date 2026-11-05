const paths = [
  {
    title: "Connect your business",
    href: "#sellers",
    description:
      "Offer your products or services through participating markets.",
    label: "For sellers",
  },
  {
    title: "Connect your market",
    href: "#markets",
    description:
      "Bring Shoptype’s seller integrations into your existing market.",
    label: "For market operators",
  },
  {
    title: "Launch an agentic market",
    href: "#launch",
    description: "Build a market around your community, industry, or niche.",
    label: "Launch with our team",
  },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pb-20 pt-32 md:pb-28 md:pt-44"
    >
      <div className="bg-grid bg-grid-drift absolute inset-0 -z-10 opacity-30" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-canvas via-canvas/90 to-canvas" />
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.4fr_0.8fr]">
          <div className="animate-rise">
            <p className="eyebrow">Commerce for the age of agents</p>
            <h1 className="mt-6 font-display text-[clamp(2.8rem,7vw,5.5rem)] leading-[1.04] tracking-tight">
              Your products
              <br />
              and services.
              <br />
              <span className="text-lime">
                More markets.
                <br />
                Ready for agents.
              </span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-cream-dim md:text-xl">
              Shoptype connects sellers to markets where humans and AI agents
              discover and buy. Bring your products or services, connect
              payments and delivery, and manage your market integrations in one
              place.
            </p>
            <p className="mt-4 max-w-xl leading-relaxed text-cream-dim">
              Building a market? Onboard sellers and connect their offerings to
              your commerce experience.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3 lg:order-3 lg:col-span-2">
            {paths.map((path) => (
              <a
                key={path.href}
                href={path.href}
                className="group rounded-2xl border border-line bg-canvas p-6 transition-colors hover:border-lime"
              >
                <p className="eyebrow">{path.label}</p>
                <h2 className="mt-4 font-display text-2xl">
                  {path.title}{" "}
                  <span className="text-lime" aria-hidden="true">
                    ↗
                  </span>
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-cream-dim">
                  {path.description}
                </p>
              </a>
            ))}
          </div>
          <div
            className="lg:order-2 rounded-3xl border border-line bg-canvas-raised/60 p-6 md:p-8"
            aria-label="Shoptype connects product and service APIs to participating markets for human and AI buyers"
          >
            <p className="eyebrow">One connection. New possibilities.</p>
            <div className="mt-7 rounded-xl border border-line bg-canvas p-5">
              <p className="font-display text-2xl">Products &amp; services</p>
              <p className="mt-2 text-sm text-cream-dim">
                Your offering. Your product systems.
              </p>
            </div>
            <div
              className="py-3 text-center text-xl text-lime"
              aria-hidden="true"
            >
              ↓
            </div>
            <div className="rounded-xl border border-lime/50 bg-canvas p-5">
              <p className="font-display text-2xl text-lime">Shoptype Bridge</p>
              <p className="mt-2 text-sm text-cream-dim">
                Catalog · Payments · Delivery
              </p>
            </div>
            <div
              className="py-3 text-center text-xl text-lime"
              aria-hidden="true"
            >
              ↓
            </div>
            <div className="rounded-xl border border-line bg-canvas p-5">
              <p className="font-display text-2xl">Participating markets</p>
              <p className="mt-2 text-sm text-cream-dim">
                New audiences. Human and AI buyers.
              </p>
            </div>
            <p className="mt-5 text-xs leading-relaxed text-cream-dim">
              Each market integration is configured, tested, and activated
              before going live.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
