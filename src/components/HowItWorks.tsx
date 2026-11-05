import PurchaseJourney from "@/components/PurchaseJourney";
export default function HowItWorks() {
  return (
    <section id="how" className="section-shell">
      <div className="section-inner">
        <div id="agentic" className="visual-section-heading">
          <p className="eyebrow">How agentic commerce works</p>
          <h2>Follow one purchase.</h2>
          <p>
            Different participants. One connected journey. Select a stage to see
            what happens.
          </p>
        </div>
        <PurchaseJourney />
      </div>
    </section>
  );
}
