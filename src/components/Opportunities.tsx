import CommerceArt, { type ArtKind } from "@/components/CommerceArt";
const audiences: {
  id: string;
  label: string;
  title: string;
  copy: string;
  nodes: { icon: ArtKind; label: string }[];
}[] = [
  {
    id: "sellers",
    label: "For sellers",
    title: "Bring your offering to new audiences.",
    copy: "Keep your product and fulfillment. Connect to markets beyond your own website.",
    nodes: [
      { icon: "product", label: "Your offering" },
      { icon: "catalog", label: "Connect & test" },
      { icon: "market", label: "Market listing" },
    ],
  },
  {
    id: "markets",
    label: "For market owners",
    title: "Build the catalog your buyers need.",
    copy: "Bring complementary sellers together. Review, test, and activate each integration.",
    nodes: [
      { icon: "service", label: "Your sellers" },
      { icon: "product", label: "Their offerings" },
      { icon: "market", label: "Your market" },
    ],
  },
];
export default function Opportunities() {
  return (
    <section className="section-shell opportunity-section">
      <div className="section-inner">
        <div className="visual-section-heading">
          <p className="eyebrow">Choose your starting point</p>
          <h2>Build on either side of the market.</h2>
        </div>
        <div className="opportunity-grid">
          {audiences.map((a) => (
            <article id={a.id} key={a.id} className="opportunity-panel">
              <p className="eyebrow">{a.label}</p>
              <h3>{a.title}</h3>
              <div
                className="mini-flow"
                role="img"
                aria-label={a.nodes.map((n) => n.label).join(" to ")}
              >
                {a.nodes.map((n, i) => (
                  <div key={n.label}>
                    <span className="mini-art">
                      <CommerceArt kind={n.icon} />
                    </span>
                    <span>{n.label}</span>
                    {i < 2 ? <b aria-hidden="true">→</b> : null}
                  </div>
                ))}
              </div>
              <p>{a.copy}</p>
              <a href="https://app.shoptype.com" className="text-link">
                Open Shoptype ↗
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
