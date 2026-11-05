import LegalPage, { type LegalSection } from "@/components/LegalPage";
import { legalMetadata, legalOperator } from "@/lib/site";

const description =
  "How Shoptype collects, uses, shares, and protects information across its website and integration services.";
export const metadata = legalMetadata(
  "Privacy Policy",
  description,
  "/privacy/",
);

const sections: LegalSection[] = [
  {
    id: "scope",
    title: "Who we are and what this covers",
    paragraphs: [
      `${legalOperator} operates Shoptype. This policy explains how we handle information when you visit shoptype.com, use app.shoptype.com, submit a launch inquiry, or use our APIs, MCP interface, and related integration services.`,
      "Connected markets, sellers, authentication providers, payment providers, and coding-agent services may also handle your information under their own policies. This policy describes Shoptype’s handling of information; it does not replace the policies of those services.",
    ],
  },
  {
    id: "information",
    title: "Information we collect",
    paragraphs: [
      "Account information: identifiers, name, email address, and account or profile information provided through sign-in. Shoptype receives authentication information from the connected identity service rather than your sign-in password.",
      "Business and workspace information: organization names, market and seller identities, memberships, invitations, applications, review decisions, and the information you provide while configuring a workspace or requesting support.",
      "Integration information: product listings and prices, API endpoint configuration, credentials and authorization grants, configuration revisions, readiness results, certification evidence, and activity needed to operate connected services.",
      "Transaction and delivery information: checkout and order identifiers, relevant buyer or recipient details such as an email address, amounts and currencies, payment status, product delivery requests and responses, and refund or dispute activity. The data involved depends on the integration and the operations performed.",
      "Website and inquiry information: information you submit in a launch or contact form, correspondence, technical request information such as IP address and browser details, and diagnostic or security records generated when the website or service is used.",
    ],
  },
  {
    id: "uses",
    title: "How we use information",
    paragraphs: [
      "We use information to authenticate users, verify workspace access, process applications, configure integrations, connect payments, test and activate supported services, deliver purchases, investigate failures, and keep an operational record of actions.",
      "We also use it to answer inquiries, provide support, improve reliability, protect accounts, prevent fraud and abuse, resolve disputes, meet legal obligations, and enforce applicable agreements. We process information as needed to provide the requested service, manage our legitimate business and security needs, comply with law, or act on consent where required.",
    ],
  },
  {
    id: "credentials",
    title: "Credentials, developer tokens, and automation",
    paragraphs: [
      "Shoptype stores product credentials and delegated access information needed to carry out the connections you authorize. Stored product credentials and retained upstream identity credentials are encrypted; developer tokens are verified using stored hashes. Access is restricted through the service’s authorization controls.",
      "Developer access and background authorization have separate scopes and expiry rules. Authorized background work may continue after sign-out. You can revoke developer tokens and supported background grants in the workspace, or contact us for help. Revocation does not automatically remove transaction, security, or audit records.",
      "If you connect your own coding agent, information returned to that agent may be processed by its provider under your configuration and that provider’s terms. Choose its permissions carefully and avoid giving it unrelated personal information or secrets.",
    ],
  },
  {
    id: "sharing",
    title: "Who receives information",
    paragraphs: [
      "Authorized workspace participants receive information appropriate to their organization, seller, or market permissions. Relevant information is exchanged with the connected market, seller’s product API, and payment provider to set up integrations, process purchases, deliver products, and handle lifecycle events.",
      "We use service providers for authentication, hosting, database and infrastructure services, payment connectivity, form collection, and diagnostics. These providers process information as needed to deliver their services. For example, connected sign-in may use Intergraph and Clerk, payment connections use Stripe, and the public launch application uses Tally.",
      "We may disclose information where legally required, to protect rights and security, investigate abuse, or resolve disputes. If the business is involved in a merger, acquisition, or transfer of assets, information may be transferred as part of that transaction, subject to applicable legal protections.",
    ],
  },
  {
    id: "public-information",
    title: "Public and private information",
    paragraphs: [
      "Market directory listings and product or seller information submitted for publication may become public through Shoptype or a connected market. Only publish information you are authorized to make public.",
      "Account emails, connection credentials, internal review records, and operational data are not public directory content by default. Authorized users and service providers may still receive information needed for their permitted role or the operation of a connection.",
    ],
  },
  {
    id: "payments",
    title: "Payment information",
    paragraphs: [
      "Payment providers collect payment account and card information through their own flows. Shoptype stores connection references and relevant transaction or readiness information; the integration service does not need your full card number or card security code.",
      "When purchases occur through a connected market, the seller, market, and payment provider may each hold records needed for fulfillment, refunds, disputes, accounting, and legal obligations. Requests concerning those independent records may need to be directed to the relevant organization.",
    ],
  },
  {
    id: "cookies",
    title: "Cookies, local storage, and embedded forms",
    paragraphs: [
      "The signed-in application uses a secure, HTTP-only session cookie to maintain authentication. The public website uses local storage to remember your light or dark appearance preference.",
      "The launch application embeds a Tally form and loads Tally’s form script. When that content loads, Tally can receive technical information such as your IP address and browser details; information you submit is processed through its service. Connected authentication and payment services may use their own cookies or similar technologies.",
      "You can control cookies and local storage through your browser settings. Blocking them can prevent sign-in, preferences, or embedded forms from working. Third-party services’ policies explain their own storage and privacy choices.",
    ],
  },
  {
    id: "retention",
    title: "Retention and account closure",
    paragraphs: [
      "We retain information while needed to provide the service and afterwards where necessary for security, transaction reconciliation, accounting, legal obligations, dispute resolution, and enforcement of agreements. Retention depends on the type of record and its purpose; account closure does not immediately erase every record.",
      "Completed transactions, review decisions, configuration history, certification evidence, and audit records may need to be preserved to explain past actions and support active integrations. Backup copies may remain until the relevant retention cycle completes. We assess deletion requests subject to these needs and applicable law.",
    ],
  },
  {
    id: "security",
    title: "Security and international processing",
    paragraphs: [
      "We use reasonable technical and organizational safeguards, including access controls and encryption for stored credentials. No system can be guaranteed completely secure. Keep your sign-in and tokens private, grant only needed access, and tell us promptly if you suspect misuse.",
      "We and our service providers may process information in countries other than the country where you live. Applicable data-protection requirements govern such processing; this policy does not promise that data stays in a particular country.",
    ],
  },
  {
    id: "choices",
    title: "Your choices and privacy requests",
    paragraphs: [
      "You can review and update supported workspace information, disconnect services, and revoke supported credentials in Shoptype. Contact us to request access to your information, correction, deletion, or account closure. Depending on applicable law, you may also have rights to portability, restriction, objection, withdrawal of consent, or to raise a concern with a data-protection authority.",
      "We may need to verify your identity and authority before acting on a request. Some records must be retained or are controlled by a connected seller, market, or provider. We will assess your request under applicable law and explain relevant limitations. Do not include passwords or API tokens in an email request.",
    ],
  },
  {
    id: "children",
    title: "Children",
    paragraphs: [
      "Shoptype is intended for adult business users and is not directed to children. If you believe a child has provided personal information through Shoptype, contact us so we can assess and address it.",
    ],
  },
  {
    id: "changes",
    title: "Changes to this policy",
    paragraphs: [
      "We may update this policy as the service and our practices change. We will publish the current version here with an updated date and provide any additional notice required by law.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      description={description}
      sections={sections}
    />
  );
}
