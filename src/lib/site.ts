export const legalOperator = "Shoptype Global Corporation";
export const contactEmail = "support@shoptype.com";
export const legalUpdated = "November 4, 2026";

export function legalMetadata(
  title: string,
  description: string,
  path: string,
) {
  const pageTitle = `${title} | Shoptype`;
  return {
    title: pageTitle,
    description,
    alternates: { canonical: `https://shoptype.com${path}` },
    openGraph: {
      title: pageTitle,
      description,
      url: `https://shoptype.com${path}`,
      siteName: "Shoptype",
      type: "website" as const,
      images: [
        {
          url: "/og-agentic-commerce-v3.png",
          width: 1200,
          height: 630,
          alt: "Shoptype",
        },
      ],
    },
    twitter: {
      card: "summary_large_image" as const,
      title: pageTitle,
      description,
      images: ["/og-agentic-commerce-v3.png"],
    },
  };
}
