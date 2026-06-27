const steps = [
  {
    n: "01",
    title: "Launch.",
    body: "Tell Shoptype who you are and what kind of agentic market you're building. Live in minutes — already speaking the protocol AI agents transact on.",
  },
  {
    n: "02",
    title: "Recruit sellers.",
    body: "Bring in the sellers your audience already wants — their inventory becomes your agentic market's catalog, with no capital outlay.",
  },
  {
    n: "03",
    title: "Let your audience — human and AI — sell for you.",
    body: "Every product is shareable, by a person or surfaced by an AI agent shopping on a buyer's behalf. Every share that leads to a sale earns a cut, automatically.",
  },
  {
    n: "04",
    title: "Get paid without lifting a box.",
    body: "Orders route to the seller who fulfills them. Money settles to everyone — you, the seller, the referrer — automatically.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <p className="font-mono text-[11px] uppercase tracking-wider text-lime-dim">
          How it works
        </p>
        <h2 className="mt-4 max-w-xl font-display text-4xl leading-[1.05] tracking-tight text-cream md:text-5xl">
          From audience to agentic market to coseller networks, in four moves.
        </h2>

        <div className="relative mt-16 grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-6">
          <div className="absolute left-0 right-0 top-[26px] hidden h-px bg-line md:block" />
          {steps.map((step) => (
            <div key={step.n} className="relative">
              <div className="relative z-10 flex h-[52px] w-[52px] items-center justify-center rounded-full border border-line bg-canvas font-mono text-sm text-lime">
                {step.n}
              </div>
              <h3 className="mt-6 font-display text-xl leading-snug text-cream md:text-2xl">
                {step.title}
              </h3>
              <p className="mt-3 font-body text-[14px] leading-relaxed text-cream-dim">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
