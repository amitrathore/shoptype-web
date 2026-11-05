import CommerceArt from "@/components/CommerceArt";
export default function SellerExample() {
  return (
    <section id="example" className="section-shell">
      <div className="section-inner seller-example-grid">
        <div className="visual-section-heading">
          <p className="eyebrow">The connection in practice</p>
          <h2>
            Yvatar.
            <br />
            Meet your next market.
          </h2>
          <p>
            AI products, offered through Agents of Mind. Shoptype connects the
            seller’s product delivery to the market.
          </p>
          <a
            href="https://www.agentsofmind.com/market/yvatar"
            className="text-link"
          >
            Explore Yvatar ↗
          </a>
        </div>
        <figure className="seller-example-art">
          <div className="example-offering">
            <div className="example-product-symbol">
              <CommerceArt kind="agent" />
            </div>
            <div>
              <span className="eyebrow">The seller</span>
              <h3>Yvatar</h3>
              <p>AI tools &amp; credits</p>
            </div>
          </div>
          <div className="example-connector">
            <span aria-hidden="true">↓</span>
            <span>
              Connected through <strong>Shoptype</strong>
            </span>
            <span aria-hidden="true">↓</span>
          </div>
          <div className="example-storefront">
            <div className="storefront-awning" aria-hidden="true" />
            <div className="example-market-heading">
              <CommerceArt kind="market" />
              <div>
                <span className="eyebrow">The market</span>
                <h3>Agents of Mind</h3>
              </div>
            </div>
            <div className="example-product-row">
              <CommerceArt kind="agent" />
              <div>
                <strong>Yvatar credits</strong>
                <span>A product in the market</span>
              </div>
              <span className="example-listing-tag">Explore ↗</span>
            </div>
          </div>
          <figcaption>
            Illustrative listing. Purchase terms are provided by the seller and
            market.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
