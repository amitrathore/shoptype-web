"use client";

function toggleTheme() {
  const root = document.documentElement;
  const next = root.dataset.theme === "light" ? "dark" : "light";
  root.dataset.theme = next;
  try {
    localStorage.setItem("shoptype-theme", next);
  } catch {}
}

export default function ThemeToggle() {
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle light and dark theme"
      title="Toggle theme"
      className="flex h-7 w-7 items-center justify-center rounded-full text-cream-dim transition-colors hover:text-cream"
    >
      <svg viewBox="0 0 20 20" fill="none" className="theme-icon-dark h-4 w-4">
        <circle cx="10" cy="10" r="4.2" stroke="currentColor" strokeWidth="1.3" />
        <g stroke="currentColor" strokeWidth="1.3" strokeLinecap="round">
          <line x1="10" y1="1.2" x2="10" y2="3.4" />
          <line x1="10" y1="16.6" x2="10" y2="18.8" />
          <line x1="1.2" y1="10" x2="3.4" y2="10" />
          <line x1="16.6" y1="10" x2="18.8" y2="10" />
          <line x1="3.8" y1="3.8" x2="5.3" y2="5.3" />
          <line x1="14.7" y1="14.7" x2="16.2" y2="16.2" />
          <line x1="14.7" y1="5.3" x2="16.2" y2="3.8" />
          <line x1="3.8" y1="16.2" x2="5.3" y2="14.7" />
        </g>
      </svg>
      <svg viewBox="0 0 20 20" fill="none" className="theme-icon-light h-4 w-4">
        <path
          d="M17 11.5A7.5 7.5 0 0 1 8.5 3a7.5 7.5 0 1 0 8.5 8.5Z"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
