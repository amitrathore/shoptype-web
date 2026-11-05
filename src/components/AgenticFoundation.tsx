export default function AgenticFoundation() {
  return (
    <section id="agentic" className="section-shell bg-canvas-raised/40">
      <div className="section-inner">
        <p className="eyebrow">What makes commerce agentic?</p>
        <h2 className="section-title">
          Products agents can understand.
          <br />
          <span className="text-lime">Commerce you can follow.</span>
        </h2>
        <p className="section-copy">
          An AI agent needs to understand what’s available, use supported
          purchase operations, and know whether an order was delivered. Shoptype
          connects the seller’s product systems to a participating market’s
          commerce workflow.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            [
              "Understand the offering",
              "Structured product information gives participating markets a consistent way to present what’s available and what it costs.",
            ],
            [
              "Support the purchase",
              "Market checkout and connected payment workflows let buyers purchase supported offerings. Authorization and market rules still apply.",
            ],
            [
              "Confirm the delivery",
              "The bridge routes supported fulfillment actions to the seller’s API and tracks delivery separately from payment and market acknowledgment.",
            ],
          ].map(([title, copy]) => (
            <div
              key={title}
              className="rounded-2xl border border-line bg-canvas p-6"
            >
              <h3 className="font-display text-2xl">{title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-cream-dim">
                {copy}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-sm leading-relaxed text-cream-dim">
          Market Protocol provides the commerce foundation. Shoptype Protocol
          defines the integration contract supported markets implement. Shopping
          agents interact with those markets; coding agents use Shoptype’s MCP
          interface to help set up and manage integrations.
        </p>
      </div>
    </section>
  );
}
