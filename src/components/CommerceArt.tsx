export type ArtKind =
  | "product"
  | "service"
  | "market"
  | "person"
  | "agent"
  | "catalog"
  | "payment"
  | "delivery"
  | "check"
  | "code"
  | "window";

export function ArtDrawing({ kind }: { kind: ArtKind }) {
  switch (kind) {
    case "product":
      return (
        <>
          <path d="m8 15 16-8 16 8v19l-16 8-16-8Z" />
          <path d="m8 15 16 8 16-8M24 23v19M16 11l16 8v9" />
        </>
      );
    case "service":
      return (
        <>
          <path d="M13 38v-8a11 11 0 0 1 22 0v8M8 39h32" />
          <circle cx="24" cy="14" r="7" />
          <path d="m35 5 1 4 4 1-4 1-1 4-1-4-4-1 4-1Z" />
        </>
      );
    case "market":
      return (
        <>
          <path d="M8 20v20h32V20M5 19l5-11h28l5 11" />
          <path d="M5 19a5 5 0 0 0 10 0 4.5 4.5 0 0 0 9 0 4.5 4.5 0 0 0 9 0 5 5 0 0 0 10 0M15 8v11M24 8v11M33 8v11M17 40V29h10v11M32 29h4v5h-4Z" />
        </>
      );
    case "person":
      return (
        <>
          <circle cx="24" cy="15" r="8" />
          <path d="M8 41v-4a16 16 0 0 1 32 0v4Z" />
          <path d="m18 30 6 6 6-6" />
        </>
      );
    case "agent":
      return (
        <>
          <rect x="7" y="13" width="34" height="27" rx="9" />
          <path d="M24 5v8M3 23v8M45 23v8M18 33h12" />
          <circle cx="17" cy="24" r="2" />
          <circle cx="31" cy="24" r="2" />
          <circle cx="24" cy="5" r="2" />
        </>
      );
    case "catalog":
      return (
        <>
          <rect x="8" y="6" width="32" height="36" rx="4" />
          <path d="M8 15h32M15 22h6v6h-6ZM27 22h6v6h-6ZM15 33h6M27 33h6" />
        </>
      );
    case "payment":
      return (
        <>
          <rect x="5" y="11" width="38" height="27" rx="5" />
          <path d="M5 20h38M12 30h8M30 28l3 3 6-6" />
        </>
      );
    case "delivery":
      return (
        <>
          <path d="M4 14h24v23H4ZM28 22h9l7 8v7H28M4 21h15M4 27h10" />
          <circle cx="13" cy="38" r="4" />
          <circle cx="36" cy="38" r="4" />
        </>
      );
    case "check":
      return (
        <>
          <circle cx="24" cy="24" r="18" />
          <path d="m14 24 7 7 14-15" />
        </>
      );
    case "code":
      return (
        <>
          <path d="m17 12-12 12 12 12M31 12l12 12-12 12M28 7 20 41" />
        </>
      );
    case "window":
      return (
        <>
          <rect x="4" y="8" width="40" height="33" rx="4" />
          <path d="M4 17h40M10 12h1M16 12h1M22 12h1M13 24h9v10h-9ZM28 25h9M28 32h7" />
        </>
      );
  }
}

export default function CommerceArt({
  kind,
  className = "",
}: {
  kind: ArtKind;
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <ArtDrawing kind={kind} />
    </svg>
  );
}
