import Link from "next/link";
import type { ReactNode } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { contactEmail, legalOperator, legalUpdated } from "@/lib/site";

export type LegalSection = {
  id: string;
  title: string;
  paragraphs: ReactNode[];
};

type Props = { title: string; description: string; sections: LegalSection[] };

export default function LegalPage({ title, description, sections }: Props) {
  return (
    <>
      <Nav />
      <main id="main" className="flex-1 pb-20 pt-32 md:pb-28 md:pt-40">
        <div className="section-inner">
          <header id="top" className="max-w-3xl">
            <Link href="/" className="text-link text-sm">
              ← Back to Shoptype
            </Link>
            <p className="eyebrow mt-10">Shoptype / Legal</p>
            <h1 className="mt-5 font-display text-5xl leading-tight tracking-tight md:text-6xl">
              {title}
            </h1>
            <p className="section-copy">{description}</p>
            <p className="mt-6 text-sm leading-relaxed text-cream-dim">
              {legalOperator}
              <br />
              Last updated: <time dateTime="2026-11-04">{legalUpdated}</time>
            </p>
          </header>
          <div className="mt-12 grid items-start gap-12 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-20">
            <nav
              aria-label={`${title} contents`}
              className="rounded-2xl border border-line bg-canvas-raised/50 p-6 lg:sticky lg:top-28"
            >
              <h2 className="eyebrow">On this page</h2>
              <ol className="mt-5 space-y-3">
                {sections.map((section, index) => (
                  <li key={section.id}>
                    <Link
                      className="inline-block text-sm leading-relaxed text-cream-dim hover:text-cream"
                      href={`#${section.id}`}
                    >
                      <span className="mr-2 text-lime">{index + 1}.</span>
                      {section.title}
                    </Link>
                  </li>
                ))}
              </ol>
              <Link
                href="#contact"
                className="mt-5 inline-block text-link text-sm"
              >
                Contact us
              </Link>
            </nav>
            <article className="max-w-3xl space-y-10">
              {sections.map((section, index) => (
                <section key={section.id} id={section.id}>
                  <h2 className="font-display text-2xl leading-tight md:text-3xl">
                    <span className="mr-3 text-lime">{index + 1}.</span>
                    {section.title}
                  </h2>
                  <div className="mt-5 space-y-4 text-base leading-8 text-cream-dim">
                    {section.paragraphs.map((paragraph, paragraphIndex) => (
                      <p key={paragraphIndex}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              ))}
              <section
                id="contact"
                className="rounded-2xl border border-line bg-canvas-raised/50 p-6 md:p-8"
              >
                <h2 className="font-display text-2xl">Contact us</h2>
                <p className="mt-4 leading-relaxed text-cream-dim">
                  For questions about this document or to make a request,
                  contact {legalOperator} at{" "}
                  <Link
                    className="text-link break-words"
                    href={`mailto:${contactEmail}`}
                  >
                    {contactEmail}
                  </Link>
                  .
                </p>
                <div className="mt-5 flex flex-wrap gap-5 text-sm">
                  <Link className="text-link" href="/terms/">
                    Terms of Service
                  </Link>
                  <Link className="text-link" href="/privacy/">
                    Privacy Policy
                  </Link>
                </div>
              </section>
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
