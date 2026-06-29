const roles = [
  "SELLERS EARN",
  "BUYERS WHO SHARE EARN",
  "REFERRERS EARN",
  "EVERY SHARE IS TRACKED",
  "EVERY PAYOUT IS AUTOMATIC",
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
              Every Shoptype network leverages{" "}
              <span className="text-lime">Commerce of Agents</span>.
            </h2>
          </div>
          <div className="max-w-sm">
            <p className="font-body text-[15px] leading-relaxed text-cream-dim">
              Every seller, coseller, and referrer earns automatically —
              you don&rsquo;t configure any of it. It&rsquo;s just how
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
