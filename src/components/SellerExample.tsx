export default function SellerExample() {
  return (
    <section id="example" className="section-shell bg-canvas-raised/40">
      <div className="section-inner grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="eyebrow">Seller example / Yvatar</p>
          <h2 className="section-title">
            An AI product.
            <br />A focused market.
            <br />
            <span className="text-lime">A new route to buyers.</span>
          </h2>
          <p className="section-copy">
            Yvatar offers AI products through Agents of Mind. The
            Shoptype-powered seller experience connects product delivery to the
            market, bringing a seller’s offering into a broader community of
            buyers.
          </p>
          <a
            href="https://www.agentsofmind.com/market/yvatar"
            className="mt-7 inline-block text-link"
          >
            Explore Yvatar on Agents of Mind <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="rounded-3xl border border-line bg-canvas p-8 md:p-10">
          <p className="eyebrow">The connection</p>
          <p className="mt-8 font-display text-3xl">Yvatar</p>
          <p className="mt-2 text-cream-dim">
            The seller and product experience
          </p>
          <div aria-hidden="true" className="my-6 h-10 border-l border-lime" />
          <p className="font-display text-3xl text-lime">Shoptype</p>
          <p className="mt-2 text-cream-dim">The product integration bridge</p>
          <div aria-hidden="true" className="my-6 h-10 border-l border-lime" />
          <p className="font-display text-3xl">Agents of Mind</p>
          <p className="mt-2 text-cream-dim">The market and its buyers</p>
        </div>
      </div>
    </section>
  );
}
