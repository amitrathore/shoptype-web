"use client";
import { useState } from "react";
import CommerceArt, { type ArtKind } from "@/components/CommerceArt";
const stages: {
  title: string;
  owner: string;
  icon: ArtKind;
  caption: string;
}[] = [
  {
    title: "Discover",
    owner: "The market",
    icon: "market",
    caption:
      "A person or authorized AI agent discovers your offering in a participating market.",
  },
  {
    title: "Checkout",
    owner: "The buyer",
    icon: "catalog",
    caption:
      "The buyer uses the market’s supported checkout. Required permissions and approvals still apply.",
  },
  {
    title: "Payment",
    owner: "The provider",
    icon: "payment",
    caption:
      "The payment provider confirms payment through the market’s configured payment route.",
  },
  {
    title: "Delivery",
    owner: "The seller",
    icon: "delivery",
    caption:
      "Shoptype routes the fulfillment request to the seller’s connected product system.",
  },
  {
    title: "Confirmed",
    owner: "Back to the market",
    icon: "check",
    caption:
      "Delivery is confirmed and the market receives its acknowledgment. Each status can be inspected.",
  },
];
export default function PurchaseJourney() {
  const [current, setCurrent] = useState(0);
  return (
    <div className="purchase-journey">
      <div
        className="journey-stages"
        role="group"
        aria-label="Choose a purchase stage"
      >
        {stages.map((stage, index) => (
          <button
            key={stage.title}
            type="button"
            aria-pressed={index === current}
            onClick={() => setCurrent(index)}
            className={`journey-stage ${index === current ? "is-current" : ""}`}
          >
            <span className="stage-number">0{index + 1}</span>
            <span className="stage-art">
              <CommerceArt kind={stage.icon} />
            </span>
            <strong>{stage.title}</strong>
            <span className="stage-owner">{stage.owner}</span>
            {index < stages.length - 1 ? (
              <span className="stage-arrow" aria-hidden="true">
                →
              </span>
            ) : null}
          </button>
        ))}
      </div>
      <div className="journey-detail">
        <div aria-live="polite" aria-atomic="true">
          <p className="eyebrow">
            0{current + 1} / {stages[current].title}
          </p>
          <p>{stages[current].caption}</p>
        </div>
        <div className="journey-controls">
          <button
            type="button"
            onClick={() => setCurrent(current - 1)}
            disabled={current === 0}
            aria-label="Previous purchase stage"
          >
            ←
          </button>
          <span>
            {current + 1} / {stages.length}
          </span>
          <button
            type="button"
            onClick={() => setCurrent(current + 1)}
            disabled={current === stages.length - 1}
            aria-label="Next purchase stage"
          >
            →
          </button>
        </div>
      </div>
      <p className="visual-footnote">
        * Illustrative walkthrough. Payments follow the market’s configured
        route; Shoptype is the integration bridge.
      </p>
    </div>
  );
}
