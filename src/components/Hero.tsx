import MarketMap from "@/components/MarketMap";
const paths = [
  ["Connect your business", "#sellers", "For sellers"],
  ["Connect your market", "#markets", "For market owners"],
  ["Launch an agentic market", "#launch", "Launch with our team"],
];
export default function Hero() {
  return (
    <section id="top" className="visual-hero">
      <div className="section-inner">
        <div className="hero-intro">
          <p className="eyebrow">Commerce for the age of agents</p>
          <h1>
            Your business.
            <br />
            <span>More markets.</span>
          </h1>
          <p className="hero-description">
            Connect products and services to markets where people and AI agents
            buy.
          </p>
        </div>
        <div className="hero-paths">
          {paths.map(([title, href, label]) => (
            <a key={href} href={href}>
              <span>{label}</span>
              <strong>
                {title} <b aria-hidden="true">↗</b>
              </strong>
            </a>
          ))}
        </div>
        <MarketMap />
      </div>
    </section>
  );
}
