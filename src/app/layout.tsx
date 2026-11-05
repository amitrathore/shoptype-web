import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Mono, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const hanken = Hanken_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
});

const title = "Shoptype — Connect Your Business to Agentic Markets";
const description =
  "Connect products and services to agentic markets. Manage seller onboarding, payments, delivery, and integrations—or launch a new market with Shoptype.";

export const metadata: Metadata = {
  metadataBase: new URL("https://shoptype.com"),
  title,
  description,
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title,
    description,
    url: "https://shoptype.com",
    siteName: "Shoptype",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-agentic-commerce-v3.png",
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [
      {
        url: "/og-agentic-commerce-v3.png",
        alt: title,
        type: "image/png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${plexMono.variable} ${hanken.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem("shoptype-theme");document.documentElement.dataset.theme=s==="light"?"light":"dark";}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-canvas text-cream">
        {children}
      </body>
    </html>
  );
}
