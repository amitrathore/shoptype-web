const items = [
  {
    label: "Visible to agents",
    title: "Your distribution reaches AI shopping agents, not just search engines.",
    body: "As buyers increasingly delegate research and purchasing to AI assistants, a business those agents can actually transact with captures demand the old web can't.",
  },
  {
    label: "Inherited, not configured",
    title: "Your sellers don't need to do anything differently.",
    body: "Agentic readiness is a property of the platform itself — every seller you recruit inherits it automatically.",
  },
  {
    label: "Early, on purpose",
    title: "You're early to a wave most competitors haven't started preparing for.",
    body: "Building “AI-ready” commerce from scratch later is a rebuild. Starting on Shoptype means you never have to do that rebuild — you're already there.",
  },
];

export default function AgenticFoundation() {
  return (
    <section
      id="agentic"
      className="relative overflow-hidden border-y border-line bg-canvas-raised py-28 md:py-36"
    >
      <div className="bg-grid absolute inset-0 -z-10 opacity-[0.15]" />
      <div className="absolute left-1/2 top-0 -z-10 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-violet/10 blur-[160px]" />

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-[11px] uppercase tracking-wider text-violet">
            The engine underneath your distribution
          </p>
          <h2 className="mt-4 font-display text-4xl leading-[1.05] tracking-tight text-cream md:text-5xl">
            It&rsquo;s the foundation.
          </h2>
          <p className="mt-6 font-body text-base leading-relaxed text-cream-dim md:text-lg">
            Commerce is in the middle of a handoff. Search is being replaced
            by AI assistants that research and compare on a buyer&rsquo;s
            behalf. Checkout is being replaced by agents that complete the
            purchase without a human ever loading a page. This isn&rsquo;t
            a future trend to plan for — it&rsquo;s already how a growing
            share of commerce starts and finishes.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-line bg-canvas p-6 text-center md:p-8">
          <p className="font-display text-xl leading-snug text-cream md:text-2xl">
            Most platforms were built for a human clicking a mouse, and are
            racing to retrofit AI on top.{" "}
            <span className="text-lime">
              Shoptype was built the other way around.
            </span>
          </p>
          <p className="mt-3 font-body text-sm text-cream-dim md:text-base">
            Every agentic market launched on Shoptype speaks the protocol AI
            agents already use to browse, evaluate, and buy — from day
            one, no separate integration, no waiting on a platform update.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
          {items.map((item) => (
            <div key={item.label} className="bg-canvas-raised p-8">
              <span className="font-mono text-[11px] uppercase tracking-wider text-cream-dim">
                {item.label}
              </span>
              <h3 className="mt-4 font-display text-xl leading-snug text-cream">
                {item.title}
              </h3>
              <p className="mt-3 font-body text-[14px] leading-relaxed text-cream-dim">
                {item.body}
              </p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-14 max-w-2xl text-center font-display text-2xl leading-snug text-cream md:text-3xl">
          Launching on Shoptype isn&rsquo;t just skipping the cost of
          building a store. It&rsquo;s skipping a generation of commerce
          infrastructure — and building the distribution network to
          outgrow it.
        </p>
      </div>
    </section>
  );
}
