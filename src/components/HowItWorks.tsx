const steps = [
  [
    "Connect",
    "Bring your business and market together.",
    "Set up a seller organization, apply to a participating market, and connect the seller’s product API.",
  ],
  [
    "Configure",
    "Give every purchase a clear path.",
    "Set up products, supported payments, and delivery actions. Keep test and production connections separate.",
  ],
  [
    "Test",
    "Check the whole journey before launch.",
    "Verify readiness, run test purchases, and confirm fulfillment. Complete the required checks and certification.",
  ],
  [
    "Launch",
    "Go live when the integration is ready.",
    "The market operator activates the approved integration after payment, commercial, authorization, and testing requirements are met.",
  ],
];
export default function HowItWorks() {
  return (
    <section id="how" className="section-shell">
      <div className="section-inner">
        <p className="eyebrow">How it works</p>
        <h2 className="section-title">
          From connection
          <br />
          <span className="text-lime">to commerce.</span>
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map(([title, heading, copy], index) => (
            <div key={title} className="border-t border-line pt-6">
              <p className="eyebrow">
                0{index + 1} / {title}
              </p>
              <h3 className="mt-5 font-display text-2xl">{heading}</h3>
              <p className="mt-4 text-sm leading-relaxed text-cream-dim">
                {copy}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-9 text-sm leading-relaxed text-cream-dim">
          Seller approval, payment connection, testing, and activation are
          separate steps. Available features depend on the market and product
          integration.
        </p>
      </div>
    </section>
  );
}
