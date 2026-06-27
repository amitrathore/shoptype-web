const points = [
  {
    n: "01",
    title: "Recruit sellers into your ecosystem.",
    body: "Their products become your agentic market's virtual inventory — you never buy or hold a single unit.",
  },
  {
    n: "02",
    title: "Zero capital cost.",
    body: "Nothing is purchased until a buyer actually buys it.",
  },
  {
    n: "03",
    title: "Zero fulfillment burden.",
    body: "Every order routes straight back to the seller who owns it — you never touch a box.",
  },
  {
    n: "04",
    title: "Minimal support role.",
    body: "Buyer and seller connect and transact directly through your agentic market; you're not the middleman managing every interaction.",
  },
  {
    n: "05",
    title: "You earn on every sale.",
    body: "Automatically, as the platform's cut of each transaction.",
  },
];

export default function Leapfrog() {
  return (
    <section id="leapfrog" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-wider text-coral">
              Platformize your industry
            </p>
            <h2 className="mt-4 font-display text-4xl leading-[1.05] tracking-tight text-cream md:text-5xl">
              You don&rsquo;t need to dominate your industry.
              <br />
              You need to platform it.
            </h2>
            <p className="mt-6 max-w-md font-body text-base leading-relaxed text-cream-dim">
              Every industry has a business that becomes the platform
              everyone else builds on — the one others plug into instead
              of competing with. Shoptype lets you be that business.
              Recruit the sellers, creators, and partners in your space
              into your ecosystem, and become the agentic market that's
              the hub of distribution for your entire category.
            </p>
            <p className="mt-8 max-w-md font-body text-base leading-relaxed text-cream-dim">
              This is the leapfrog: instead of out-competing every seller
              in your industry, you out-platform them — turning rivals and
              adjacent businesses into partners who distribute through
              you, while you carry none of the balance-sheet risk and none
              of the operational weight.
            </p>
          </div>

          <div className="border-t border-line">
            {points.map((p, i) => (
              <div
                key={p.n}
                className="group grid grid-cols-[64px_1fr] gap-6 border-b border-line py-7 transition-colors hover:bg-canvas-raised/50 md:py-8"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <span className="font-mono text-sm text-lime-dim transition-colors group-hover:text-lime">
                  {p.n}
                </span>
                <div>
                  <h3 className="font-display text-xl text-cream md:text-2xl">
                    {p.title}
                  </h3>
                  <p className="mt-2 max-w-lg font-body text-[15px] leading-relaxed text-cream-dim">
                    {p.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
