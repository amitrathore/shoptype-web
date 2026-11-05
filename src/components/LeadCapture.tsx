import Script from "next/script";
const tallyUrl =
  "https://tally.so/embed/dW1bXD?alignLeft=1&hideTitle=1&dynamicHeight=1&source=shoptype-web";
export default function LeadCapture() {
  return (
    <section id="launch" className="section-shell launch-section">
      <div className="section-inner launch-grid">
        <div className="visual-section-heading">
          <p className="eyebrow">Launch with our team</p>
          <h2>
            Your community.
            <br />
            Your industry.
            <br />
            <span className="text-lime">Your market.</span>
          </h2>
          <p>
            Bring the audience or the idea. We’ll help you bring sellers,
            products, and commerce together.
          </p>
          <span className="launch-label">Guided launch application</span>
        </div>
        <div className="launch-form">
          <iframe
            data-tally-src={tallyUrl}
            src={tallyUrl}
            loading="lazy"
            width="100%"
            height="920"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            scrolling="no"
            title="Shoptype launch application"
            className="block h-[1500px] w-full rounded-lg bg-[#f7f3ea] md:h-[920px]"
            style={{ border: 0, overflow: "hidden" }}
          />
          <Script
            src="https://tally.so/widgets/embed.js"
            strategy="lazyOnload"
          />
        </div>
      </div>
    </section>
  );
}
