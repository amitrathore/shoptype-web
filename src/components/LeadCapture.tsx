import Script from "next/script";

const tallyFormId = process.env.NEXT_PUBLIC_TALLY_FORM_ID;

const qualifiers = [
  "Your industry vertical and current audience",
  "The sellers, creators, or partners you can recruit",
  "Whether you need marketplace launch, agentic distribution, or both",
  "Timeline, budget range, and best next conversation",
];

export default function LeadCapture() {
  const tallyUrl = tallyFormId
    ? `https://tally.so/embed/${tallyFormId}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1&source=shoptype-web`
    : null;

  return (
    <section
      id="launch"
      className="relative overflow-hidden border-t border-line py-28 md:py-40"
    >
      <div className="bg-grid bg-grid-drift absolute inset-0 -z-10 opacity-[0.25]" />
      <div className="absolute bottom-0 left-1/2 -z-10 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-lime/10 blur-[150px]" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 md:grid-cols-[0.9fr_1.1fr] md:px-10 md:items-start">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-wider text-cream-dim">
            Build your market ecosystem
          </p>
          <h2 className="mt-5 font-display text-4xl leading-[1.05] tracking-tight text-cream md:text-6xl">
            You bring the industry vertical.
            <br />
            <span className="text-lime text-glow-lime">
              Shoptype brings the agentic market ecosystem.
            </span>
          </h2>
          <p className="mt-7 max-w-xl font-body text-base leading-relaxed text-cream-dim md:text-lg">
            Tell us what market you want to platformize. The strongest fit is
            a business, creator, community, or media property that can assemble
            sellers and partners around a specific category.
          </p>

          <div className="mt-10 border-y border-line">
            {qualifiers.map((qualifier, index) => (
              <div
                key={qualifier}
                className="grid grid-cols-[44px_1fr] gap-4 border-b border-line py-4 last:border-b-0"
              >
                <span className="font-mono text-xs text-lime-dim">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="font-body text-sm leading-relaxed text-cream-dim">
                  {qualifier}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="-mx-2 rounded-xl border border-line bg-canvas-raised p-2 shadow-[0_24px_80px_rgba(0,0,0,0.24)] sm:mx-0 sm:p-4 md:rounded-2xl md:p-6">
          {tallyUrl ? (
            <>
              <iframe
                data-tally-src={tallyUrl}
                src={tallyUrl}
                loading="eager"
                width="100%"
                height="1200"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                scrolling="no"
                title="Shoptype launch application"
                className="block h-[1200px] w-full rounded-lg bg-transparent md:h-[920px] md:rounded-xl"
                style={{ border: 0, overflow: "hidden" }}
              />
              <Script
                src="https://tally.so/widgets/embed.js"
                strategy="afterInteractive"
              />
            </>
          ) : (
            <div className="flex min-h-[560px] flex-col justify-center rounded-xl border border-line bg-canvas p-8">
              <p className="font-mono text-[11px] uppercase tracking-wider text-coral">
                Tally form id missing
              </p>
              <h3 className="mt-4 font-display text-3xl leading-tight text-cream">
                Add your Tally form id to turn this into live lead capture.
              </h3>
              <p className="mt-4 font-body text-sm leading-relaxed text-cream-dim">
                Set{" "}
                <code className="font-mono text-lime">
                  NEXT_PUBLIC_TALLY_FORM_ID
                </code>{" "}
                to the form id from your Tally share URL. This section is
                already wired for Tally embeds, dynamic height, transparent
                background, and a source tag for attribution.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
