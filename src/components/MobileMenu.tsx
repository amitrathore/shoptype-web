"use client";

import type { ReactNode } from "react";

export default function MobileMenu({ children }: { children: ReactNode }) {
  return (
    <details
      className="relative lg:hidden"
      onClick={(event) => {
        if (event.target instanceof Element && event.target.closest("a")) {
          event.currentTarget.open = false;
        }
      }}
    >
      <summary className="cursor-pointer list-none whitespace-nowrap rounded-lg border border-line px-3 py-2 text-sm">
        Menu
      </summary>
      {children}
    </details>
  );
}
