export default function Developers() {
  return (
    <section id="developers" className="section-shell">
      <div className="section-inner grid gap-10 lg:grid-cols-2">
        <div>
          <p className="eyebrow">For developers &amp; coding agents</p>
          <h2 className="section-title">
            Use the workspace.
            <br />
            <span className="text-lime">Or bring your agent.</span>
          </h2>
          <p className="section-copy">
            Configure and inspect integrations through Shoptype’s MCP interface.
            A coding agent can help map products, check launch readiness, trace
            checkout delivery, and diagnose issues using your existing workspace
            permissions.
          </p>
        </div>
        <div className="rounded-2xl border border-line bg-canvas-raised/50 p-6 md:p-8">
          <p className="font-mono text-sm text-lime break-all">
            https://app.shoptype.com/mcp
          </p>
          <p className="mt-5 leading-relaxed text-cream-dim">
            Create a scoped, expiring developer token in Shoptype. Connecting an
            agent does not activate a seller or grant background access. Payment
            authorization and other required human steps stay in the workspace.
          </p>
          <div className="mt-7 flex flex-col items-start gap-5">
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
              Read Shoptype Protocol ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
