import Image from "next/image";
import CommerceArt, { ArtDrawing } from "@/components/CommerceArt";

const markets = ["Creator tools", "Business tools", "Industry market"];

export default function MarketMap() {
  return (
    <figure className="market-map">
      <div className="map-topline">
        <span>The Shoptype connection</span>
        <span>01 / The big picture</span>
      </div>
      <svg
        className="market-map-desktop"
        viewBox="0 0 900 440"
        role="img"
        aria-labelledby="map-title map-description"
      >
        <title id="map-title">
          Your offerings, connected to markets and buyers
        </title>
        <desc id="map-description">
          Products and services connect through Shoptype to participating
          creator, business, and industry markets. Those markets serve people
          and AI agents.
        </desc>
        <g fill="none" stroke="var(--map-line)" strokeWidth="2">
          <path d="M137 137C225 137 220 220 313 220M137 307C225 307 220 220 313 220" />
          <path d="M387 220C450 220 435 92 505 92M387 220H505M387 220C450 220 435 348 505 348" />
          <path d="M600 92C675 92 665 156 744 156M600 220C675 220 665 156 744 156M600 348C675 348 665 156 744 156M600 92C675 92 665 296 744 296M600 220C675 220 665 296 744 296M600 348C675 348 665 296 744 296" />
        </g>
        <g fill="var(--accent)">
          <circle cx="220" cy="163" r="5" />
          <circle cx="452" cy="151" r="5" />
          <circle cx="452" cy="289" r="5" />
          <circle cx="682" cy="192" r="5" />
          <circle cx="699" cy="287" r="5" />
        </g>
        <g
          fontFamily="var(--font-body), sans-serif"
          fill="var(--cream)"
          textAnchor="middle"
        >
          <text x="105" y="48" className="map-category">
            Your business
          </text>
          <text x="550" y="28" className="map-category">
            Participating markets
          </text>
          <text x="795" y="48" className="map-category">
            Buyers
          </text>
          <g transform="translate(105 137)">
            <circle r="41" fill="var(--map-blue)" />
            <g
              transform="translate(-25 -27) scale(1.05)"
              fill="none"
              stroke="var(--map-ink)"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <ArtDrawing kind="product" />
            </g>
            <text y="67" className="map-label">
              Products
            </text>
          </g>
          <g transform="translate(105 307)">
            <circle r="41" fill="var(--map-peach)" />
            <g
              transform="translate(-25 -27) scale(1.05)"
              fill="none"
              stroke="var(--map-ink)"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <ArtDrawing kind="service" />
            </g>
            <text y="67" className="map-label">
              Services
            </text>
          </g>
          <g transform="translate(350 220)">
            <circle
              r="62"
              fill="#192a3b"
              stroke="var(--accent)"
              strokeWidth="3"
            />
            <image href="/logo.png" x="-35" y="-35" width="70" height="70" />
            <text y="94" className="map-hub">
              Shoptype
            </text>
            <text y="118" className="map-detail">
              Catalog · Orders · Delivery
            </text>
          </g>
          {markets.map((label, index) => (
            <g key={label} transform={`translate(550 ${92 + index * 128})`}>
              <rect
                x="-65"
                y="-46"
                width="130"
                height="110"
                rx="16"
                fill="var(--map-paper)"
                stroke="var(--map-line)"
              />
              <path d="M-55-45h110" stroke="var(--accent)" strokeWidth="5" />
              <g
                transform="translate(-25 -35) scale(1.05)"
                fill="none"
                stroke="var(--map-ink)"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <ArtDrawing kind="market" />
              </g>
              <text y="31" className="map-detail">
                {label.split(" ").map((word, index) => (
                  <tspan key={word} x="0" dy={index === 0 ? 0 : 21}>
                    {word}
                  </tspan>
                ))}
              </text>
            </g>
          ))}
          <g transform="translate(795 156)">
            <circle r="41" fill="var(--map-peach)" />
            <g
              transform="translate(-25 -27) scale(1.05)"
              fill="none"
              stroke="var(--map-ink)"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <ArtDrawing kind="person" />
            </g>
            <text y="67" className="map-label">
              People
            </text>
          </g>
          <g transform="translate(795 296)">
            <circle r="41" fill="var(--map-blue)" />
            <g
              transform="translate(-25 -27) scale(1.05)"
              fill="none"
              stroke="var(--map-ink)"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <ArtDrawing kind="agent" />
            </g>
            <text y="67" className="map-label">
              AI agents
            </text>
          </g>
        </g>
      </svg>
      <div className="market-map-mobile">
        <div className="mobile-offerings">
          <div>
            <CommerceArt kind="product" />
            <span>Products</span>
          </div>
          <span className="map-plus">+</span>
          <div>
            <CommerceArt kind="service" />
            <span>Services</span>
          </div>
        </div>
        <div className="map-vertical-line" aria-hidden="true" />
        <div className="mobile-hub">
          <Image src="/logo.png" alt="" width={44} height={44} />
          <strong>Shoptype</strong>
          <span>Catalog · Orders · Delivery</span>
        </div>
        <div className="map-branch" aria-hidden="true" />
        <div className="mobile-markets">
          {markets.map((label) => (
            <div key={label}>
              <CommerceArt kind="market" />
              <span>{label}</span>
            </div>
          ))}
        </div>
        <div className="map-vertical-line" aria-hidden="true" />
        <div className="mobile-buyers">
          <div>
            <CommerceArt kind="person" />
            <span>People</span>
          </div>
          <span className="map-plus">+</span>
          <div>
            <CommerceArt kind="agent" />
            <span>AI agents</span>
          </div>
        </div>
      </div>
      <figcaption>
        * Illustrative markets. Each connection needs setup, testing, and
        activation.
      </figcaption>
    </figure>
  );
}
