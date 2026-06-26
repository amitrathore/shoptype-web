const audiences = [
  {
    tag: "Creators & influencers",
    title: "Monetize your audience without becoming a logistics company.",
  },
  {
    tag: "Communities & media",
    title: "You have the attention. Shoptype gives you the commerce layer.",
  },
  {
    tag: "Any business, no storefront",
    title:
      "Leapfrog straight to an AI-ready marketplace instead of building a storefront that needs rebuilding in two years.",
  },
];

export default function WhoItsFor() {
  return (
    <section id="who" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <p className="font-mono text-[11px] uppercase tracking-wider text-coral">
          Who it&rsquo;s for
        </p>
        <h2 className="mt-4 max-w-xl font-display text-4xl leading-[1.05] tracking-tight text-cream md:text-5xl">
          Built to skip the old generation of retail.
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
          {audiences.map((a) => (
            <div
              key={a.tag}
              className="group flex flex-col justify-between bg-canvas p-8 transition-colors hover:bg-canvas-raised md:min-h-[220px]"
            >
              <span className="font-mono text-[11px] uppercase tracking-wider text-lime-dim transition-colors group-hover:text-lime">
                {a.tag}
              </span>
              <p className="mt-6 font-display text-xl leading-snug text-cream md:text-2xl">
                {a.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
