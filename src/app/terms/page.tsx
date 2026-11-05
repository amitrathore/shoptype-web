import LegalPage, { type LegalSection } from "@/components/LegalPage";
import { legalMetadata, legalOperator } from "@/lib/site";

const description =
  "Terms for using Shoptype’s website, workspace, APIs, and seller integration services.";
export const metadata = legalMetadata(
  "Terms of Service",
  description,
  "/terms/",
);

const sections: LegalSection[] = [
  {
    id: "agreement",
    title: "Your agreement with Shoptype",
    paragraphs: [
      `Shoptype is operated by ${legalOperator} (“Shoptype,” “we,” “us,” or “our”). These Terms of Service govern your access to and use of shoptype.com, app.shoptype.com, and our related workspaces, APIs, MCP interface, and integration services. By using the service, you agree to these terms.`,
      "If you use Shoptype for a company or another organization, you confirm that you are authorized to act for it and accept these terms on its behalf. You must have the legal capacity to enter this agreement. Shoptype is intended for adult business users.",
      "A separate signed agreement or accepted commercial schedule may govern a particular service or market relationship. That agreement controls if it conflicts with these terms on the same subject. A launch application is an inquiry, not a promise of acceptance or a completed market launch.",
    ],
  },
  {
    id: "accounts",
    title: "Accounts and workspace access",
    paragraphs: [
      "You are responsible for the accuracy of your account and business information, the security of your sign-in, and actions taken through your account or authorized integrations. Use only accounts, seller identities, markets, and business systems you are authorized to manage.",
      "Access depends on current account, organization, seller, and market permissions. An invitation, application approval, or connected payment account does not by itself authorize live selling. Report suspected unauthorized access promptly through our contact address.",
    ],
  },
  {
    id: "your-materials",
    title: "Your products, services, and materials",
    paragraphs: [
      "You retain your rights in the products, services, listings, branding, and other materials you provide. You grant Shoptype permission to host, process, transmit, and display those materials as needed to operate the service and the integrations you authorize.",
      "You are responsible for having the necessary rights, permissions, and lawful basis to provide your materials and data. Listings and product information must be accurate, and your offering must comply with applicable law and the relevant market’s rules. Shoptype’s software, branding, and other platform materials remain ours or our licensors’.",
    ],
  },
  {
    id: "markets",
    title: "Sellers, markets, and launch decisions",
    paragraphs: [
      "Shoptype helps sellers and market operators configure and run supported integrations. Sellers remain responsible for their offerings, fulfillment, customer commitments, taxes, and required disclosures. Market operators remain responsible for their market rules, seller approval, and activation decisions under their agreements.",
      "The applicable seller agreement, commercial schedule, market rules, and purchase terms govern the relationship between a seller, a market, and its buyers. Connecting through Shoptype does not itself make Shoptype the seller or merchant of record, or replace those agreements.",
      "An integration must meet the applicable setup, payment, authorization, testing, and certification requirements before activation. Availability of an integration or a test result is not a guarantee of future sales, earnings, compatibility, or uninterrupted delivery.",
    ],
  },
  {
    id: "payments",
    title: "Payments, fees, refunds, and disputes",
    paragraphs: [
      "Payments are handled through supported payment providers and market checkout workflows. You must have authority to connect any payment account and comply with its provider’s terms. Any Shoptype fees or commercial charges are governed by the applicable order, checkout, or written agreement; these terms do not set a universal commission rate.",
      "Buyer refunds, returns, cancellations, chargebacks, and related costs follow applicable law and the relevant seller, market, payment provider, and commercial terms. These platform terms do not create a separate refund entitlement or remove mandatory consumer rights. Technical support for a refund or return does not itself establish the commercial policy for a purchase.",
    ],
  },
  {
    id: "authorization",
    title: "Credentials and background operations",
    paragraphs: [
      "When you connect a product API, payment account, or market, you authorize the access and operations described by that connection and the permissions you grant. Provide only credentials you are authorized to use and only the access needed for the intended integration.",
      "Authorized background operations can continue while you are signed out, until the relevant permission expires or is revoked. You are responsible for reviewing the scope, duration, and configuration of your integrations. Revocation prevents further authorized use as supported by the service; it does not undo completed actions or necessarily cancel work already in progress.",
    ],
  },
  {
    id: "agents",
    title: "Coding agents and automated actions",
    paragraphs: [
      "You may use the MCP interface or other supported tools with authorized coding agents. Developer tokens are credentials: keep them private, select appropriate permissions and expiry, and revoke access when it is no longer needed. Agents operate within your existing permissions; they do not gain independent authority to act for other people or businesses.",
      "Review configurations and consequential actions performed by your agents. Automation may be delayed, fail, or return an uncertain outcome. Inspect the relevant activity and records before repeating an action that could affect a buyer, payment, or product entitlement. Connecting an agent does not itself accept a seller agreement, authorize background operations, or activate production selling.",
    ],
  },
  {
    id: "acceptable-use",
    title: "Acceptable use",
    paragraphs: [
      "Use Shoptype lawfully. Do not misrepresent an identity or authority, infringe others’ rights, submit unlawful or malicious material, expose other people’s credentials, bypass access controls or required reviews, or attempt unauthorized access to accounts or systems.",
      "Do not disrupt the service, exploit integrations, manipulate transaction or certification records, or use automation to carry out fraud or abuse. You are responsible for complying with the rules of connected markets and third-party services.",
    ],
  },
  {
    id: "third-parties",
    title: "Third-party services and availability",
    paragraphs: [
      "Shoptype depends on third-party authentication, hosting, payment, market, and product services. Their terms and privacy policies apply to their services. Their availability, permissions, or APIs may change and can affect an integration.",
      "We may update, modify, suspend, or discontinue features. We do not guarantee uninterrupted or error-free operation, that every business or market can be connected, or that an integration will satisfy every use case. Separate written service commitments, if any, remain governed by their own terms.",
    ],
  },
  {
    id: "suspension",
    title: "Suspension and ending use",
    paragraphs: [
      "We may restrict or suspend access when reasonably necessary to address a breach of these terms, unauthorized activity, security risks, legal obligations, or service abuse. You can stop using Shoptype and contact us about closing your account.",
      "Stopping use does not cancel existing buyer obligations, completed transactions, payment disputes, or obligations under separate agreements. Relevant records may be retained for the purposes described in our Privacy Policy. Disconnect or revoke unnecessary integrations when ending use.",
    ],
  },
  {
    id: "liability",
    title: "Disclaimers and limitation of liability",
    paragraphs: [
      "To the extent permitted by law and except for any express commitments in a separate agreement, Shoptype is provided on an “as is” and “as available” basis, without warranties of uninterrupted operation, fitness for a particular purpose, or commercial results.",
      `To the fullest extent permitted by law, ${legalOperator} is not liable for indirect, incidental, consequential, special, exemplary, or punitive loss, including lost profits, data, goodwill, or business opportunities. Nothing in these terms excludes rights, remedies, or liability that cannot lawfully be excluded or limited.`,
    ],
  },
  {
    id: "changes",
    title: "Changes to these terms",
    paragraphs: [
      "We may update these terms and will publish the revised version here with an updated date. Where required by law, we will provide additional notice or obtain consent. Review the current terms when using the service; separate agreements continue to govern their own subject matter.",
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      description={description}
      sections={sections}
    />
  );
}
