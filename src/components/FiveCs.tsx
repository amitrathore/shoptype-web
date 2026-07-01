const cs = [
  {
    n: "01",
    name: "Content",
    body: "Articles, videos, posts, stories, and recommendations that pull people in and give cosellers something useful to share.",
  },
  {
    n: "02",
    name: "Community",
    body: "Buyers and sellers gather around that content, building trust and a shared identity.",
  },
  {
    n: "03",
    name: "Commerce",
    body: "The community starts transacting — products list, sales happen, money moves.",
  },
  {
    n: "04",
    name: "Cosellers",
    body: "Members share content or products without a hard sell, earning for the full-funnel value they help create.",
  },
  {
    n: "05",
    name: "Campaigns",
    body: "Those earnings fund the next push — promotions, drops, and stories — which become new content.",
  },
];

function LoopDiagram() {
  return (
    <svg viewBox="0 0 440 380" className="w-full max-w-[420px]" fill="none">
      <polygon
        points="220,50 362.7,153.6 308.2,321.4 131.8,321.4 77.3,153.6"
        stroke="currentColor"
        strokeOpacity="0.18"
        strokeWidth="1.4"
        fill="none"
      />
      <polygon
        points="220,50 362.7,153.6 308.2,321.4 131.8,321.4 77.3,153.6"
        stroke="var(--lime)"
        strokeWidth="2"
        strokeLinejoin="round"
        fill="none"
        strokeDasharray="14 30"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="0"
          to="-44"
          dur="2.4s"
          repeatCount="indefinite"
        />
      </polygon>

      {/* Content — top */}
      <circle cx="220" cy="50" r="20" fill="var(--canvas)" stroke="var(--lime)" strokeWidth="1.6" />
      <text x="220" y="54" textAnchor="middle" fontSize="9" fontFamily="var(--font-mono)" fill="var(--lime)">01</text>
      <text x="220" y="20" textAnchor="middle" fontSize="13" fontFamily="var(--font-display)" fill="var(--cream)">Content</text>

      {/* Community — upper right */}
      <circle cx="362.7" cy="153.6" r="20" fill="var(--canvas)" stroke="currentColor" strokeOpacity="0.6" strokeWidth="1.4" />
      <text x="362.7" y="157.6" textAnchor="middle" fontSize="9" fontFamily="var(--font-mono)" fill="var(--cream-dim)">02</text>
      <text x="362.7" y="190" textAnchor="middle" fontSize="13" fontFamily="var(--font-display)" fill="var(--cream)">Community</text>

      {/* Commerce — lower right */}
      <circle cx="308.2" cy="321.4" r="20" fill="var(--canvas)" stroke="currentColor" strokeOpacity="0.6" strokeWidth="1.4" />
      <text x="308.2" y="325.4" textAnchor="middle" fontSize="9" fontFamily="var(--font-mono)" fill="var(--cream-dim)">03</text>
      <text x="308.2" y="356" textAnchor="middle" fontSize="13" fontFamily="var(--font-display)" fill="var(--cream)">Commerce</text>

      {/* Cosellers — lower left */}
      <circle cx="131.8" cy="321.4" r="20" fill="var(--canvas)" stroke="currentColor" strokeOpacity="0.6" strokeWidth="1.4" />
      <text x="131.8" y="325.4" textAnchor="middle" fontSize="9" fontFamily="var(--font-mono)" fill="var(--cream-dim)">04</text>
      <text x="131.8" y="356" textAnchor="middle" fontSize="13" fontFamily="var(--font-display)" fill="var(--cream)">Cosellers</text>

      {/* Campaigns — upper left */}
      <circle cx="77.3" cy="153.6" r="20" fill="var(--canvas)" stroke="currentColor" strokeOpacity="0.6" strokeWidth="1.4" />
      <text x="77.3" y="157.6" textAnchor="middle" fontSize="9" fontFamily="var(--font-mono)" fill="var(--cream-dim)">05</text>
      <text x="77.3" y="190" textAnchor="middle" fontSize="13" fontFamily="var(--font-display)" fill="var(--cream)">Campaigns</text>

      <text x="220" y="195" textAnchor="middle" fontSize="9" fontFamily="var(--font-mono)" fill="var(--cream-dim)" letterSpacing="1.5">
        CLOSED
      </text>
      <text x="220" y="210" textAnchor="middle" fontSize="9" fontFamily="var(--font-mono)" fill="var(--cream-dim)" letterSpacing="1.5">
        LOOP
      </text>
    </svg>
  );
}

export default function FiveCs() {
  return (
    <section id="loop" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-[1fr_0.95fr] md:items-center">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-wider text-coral">
              The distribution flywheel
            </p>
            <h2 className="mt-4 font-display text-4xl leading-[1.05] tracking-tight text-cream md:text-5xl">
              The 5Cs Flywheel drives self-improving Growth Intelligence
            </h2>
            <p className="mt-6 max-w-md font-body text-base leading-relaxed text-cream-dim">
              Growth doesn&rsquo;t come from ads — it comes from a loop.
              Content draws a community in. Community becomes commerce.
              Commerce pays cosellers — human and AI — for distributing
              articles, videos, posts, recommendations, and products.
              Cosellers fuel campaigns. And campaigns produce the next
              round of content, aimed at exactly who&rsquo;s buying.
            </p>
          </div>

          <div className="flex justify-center">
            <LoopDiagram />
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
          {cs.map((c) => (
            <div key={c.n} className="bg-canvas p-7">
              <span className="font-mono text-sm text-lime-dim">{c.n}</span>
              <h3 className="mt-3 font-display text-xl text-cream">
                {c.name}
              </h3>
              <p className="mt-2 font-body text-[13px] leading-relaxed text-cream-dim">
                {c.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
