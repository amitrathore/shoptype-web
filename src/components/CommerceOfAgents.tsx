const roles = [
  "SELLERS EARN",
  "CONTENT SHARES EARN",
  "BUYERS WHO SHARE EARN",
  "REFERRERS EARN",
  "FULL-FUNNEL ATTRIBUTION",
  "NO LAST-CLICK PRESSURE",
  "EVERY PAYOUT IS AUTOMATIC",
];

const cosellingPoints = [
  {
    label: "Share content, not just products",
    body: "Articles, videos, posts, stories, recommendations, and product pages can all become tracked growth surfaces.",
  },
  {
    label: "Full-funnel attribution",
    body: "Cosellers can get credit for awareness, education, engagement, and close — not only the final click.",
  },
  {
    label: "#noselling by design",
    body: "People can share what is useful without the high-pressure tactics that last-click affiliate programs create.",
  },
  {
    label: "Native rewards",
    body: "The Commerce of Agents Protocol handles contribution tracking and automatic payouts inside the market.",
  },
];

export default function CommerceOfAgents() {
  const loop = [...roles, ...roles];
  return (
    <section className="relative overflow-hidden py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-wider text-coral">
              Partner-driven growth, built in
            </p>
            <h2 className="mt-4 max-w-xl font-display text-3xl leading-[1.1] tracking-tight text-cream md:text-4xl">
              Shoptype is built on the{" "}
              <span className="text-lime italic">Commerce of Agents</span>{" "}
              Protocol.
            </h2>
          </div>
          <div className="max-w-sm">
            <p className="font-body text-[15px] leading-relaxed text-cream-dim">
              Every seller, coseller, and referrer earns automatically.
              Cosellers can share useful content, not just product links,
              and still receive full-funnel attribution. It&rsquo;s just how
              Shoptype works.
            </p>
            <a
              href="https://commerceofagents.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 font-mono text-[13px] uppercase tracking-wider text-lime underline decoration-lime/40 decoration-1 underline-offset-4 transition-colors hover:decoration-lime"
            >
              Learn more and read the book
              <span aria-hidden>&rarr;</span>
            </a>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {cosellingPoints.map((point) => (
            <div key={point.label} className="bg-canvas p-6">
              <h3 className="font-mono text-[11px] uppercase tracking-wider text-lime">
                {point.label}
              </h3>
              <p className="mt-3 font-body text-[13px] leading-relaxed text-cream-dim">
                {point.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative mt-12 border-y border-line py-5">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
          {loop.map((role, i) => (
            <span
              key={i}
              className="flex items-center gap-3 font-mono text-sm uppercase tracking-wider text-cream-dim"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-lime" />
              {role}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
