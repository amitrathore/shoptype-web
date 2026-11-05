const audiences = [
  {
    id: "sellers",
    label: "For sellers",
    title: "You offer a product or service. Open a new route to buyers.",
    copy: "Your next customers may already be gathering in someone else’s market. Connect your offering to participating markets and reach beyond your own website and audience.",
    benefits: [
      "Bring your existing product or service and connect its supported API workflows.",
      "Configure catalog, payments, and delivery in one workspace.",
      "Keep control of your offering and fulfillment while reaching new communities.",
    ],
    note: "Sign in to create your seller organization, discover listed markets, and apply. Approval and integration setup come before activation.",
  },
  {
    id: "markets",
    label: "For market operators",
    title: "You know the audience. Bring the right sellers together.",
    copy: "Build a stronger destination by assembling complementary products and services around what your buyers need. Shoptype gives you the tools to connect and manage the sellers behind them.",
    benefits: [
      "List your market, invite sellers, and review applications.",
      "Manage seller integrations, testing, and launch readiness.",
      "Inspect payment, delivery, and market acknowledgment when an order needs attention.",
    ],
    note: "Sign in to open markets you own. Your market must support Shoptype Protocol; connecting an existing market may require developer setup.",
  },
];

export default function Opportunities() {
  return (
    <>
      {audiences.map((audience) => (
        <section key={audience.id} id={audience.id} className="section-shell">
          <div className="section-inner grid gap-10 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="eyebrow">{audience.label}</p>
              <h2 className="section-title">{audience.title}</h2>
              <p className="section-copy">{audience.copy}</p>
            </div>
            <div className="rounded-2xl border border-line bg-canvas-raised/50 p-6 md:p-8">
              <ul className="space-y-5">
                {audience.benefits.map((benefit, index) => (
                  <li key={benefit} className="flex gap-4">
                    <span
                      className="font-mono text-sm text-lime"
                      aria-hidden="true"
                    >
                      0{index + 1}
                    </span>
                    <span className="leading-relaxed text-cream-dim">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                className="button-primary mt-8"
                href="https://app.shoptype.com"
              >
                Open Shoptype <span aria-hidden="true">↗</span>
              </a>
              <p className="mt-5 text-sm leading-relaxed text-cream-dim">
                {audience.note}
              </p>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
