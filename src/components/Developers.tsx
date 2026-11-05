import CommerceArt from "@/components/CommerceArt";
export default function Developers() {
  return (
    <section id="developers" className="section-shell developer-section">
      <div className="section-inner developer-grid">
        <div className="visual-section-heading">
          <p className="eyebrow">For builders</p>
          <h2>
            Your workspace.
            <br />
            Your coding agent.
          </h2>
          <p>
            Configure and inspect integrations in Shoptype, or connect an
            authorized coding agent through MCP.
          </p>
          <div className="developer-links">
            <a
              className="text-link"
              href="https://app.shoptype.com/mcp-guide.md"
            >
              Connect a coding agent ↗
            </a>
            <a
              className="text-link"
              href="https://app.shoptype.com/shoptype-protocol.md"
            >
              Shoptype Protocol ↗
            </a>
          </div>
          <details className="developer-note">
            <summary>Access &amp; permissions</summary>
            <p>
              Developer tokens use your existing permissions. Background
              authorization and production activation remain separate steps.
            </p>
          </details>
        </div>
        <div
          className="developer-art"
          role="img"
          aria-label="Shoptype workspace and coding agents connect to the same integration tools"
        >
          <div className="developer-interfaces">
            <div>
              <CommerceArt kind="window" />
              <span>Workspace</span>
            </div>
            <div>
              <CommerceArt kind="code" />
              <span>Coding agent</span>
            </div>
          </div>
          <div className="map-branch" aria-hidden="true" />
          <div className="developer-target">
            <CommerceArt kind="catalog" />
            <strong>Your integrations</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
