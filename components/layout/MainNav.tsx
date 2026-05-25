import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

const TABS = [
  { label: "Home", href: "/" },
  { label: "Family tree", href: "/profile" },
  { label: "Discoveries", href: "#" },
  { label: "Photos", href: "#" },
  { label: "DNA", href: "#" },
  { label: "Research", href: "#" },
];

interface MainNavProps {
  /** Label of the active tab (Amber, bold). */
  active?: string;
}

/**
 * White main navigation bar (70px) — Figma node 1:14374 / 0:3552.
 * Centered: MyHeritage logo (185×32) + tab row (42px gap, 18px/Title7).
 * Active tab is Amber #F2994A bold; the rest are Black60.
 */
export function MainNav({ active = "Home" }: MainNavProps) {
  return (
    <nav className="relative h-[70px] w-full bg-surface shadow-card">
      <div className="mx-auto flex h-full max-w-[1680px] items-center justify-center gap-[50px] px-s5">
        {/* Logo — links home */}
        <Link href="/" className="flex shrink-0 items-center" aria-label="MyHeritage home">
          <Image
            src="/assets/logos/myheritage-logo.svg"
            alt="MyHeritage"
            width={185}
            height={32}
            priority
          />
        </Link>

        {/* Tabs (desktop) */}
        <ul className="hidden items-center gap-[42px] tracking-[0.3px] lg:flex">
          {TABS.map((tab) => (
            <li key={tab.label}>
              <Link
                href={tab.href}
                className={cn(
                  "block whitespace-nowrap text-center text-t7 transition-colors",
                  tab.label === active
                    ? "font-bold text-[#f2994a]"
                    : "text-fg-60 hover:text-fg-100",
                )}
              >
                {tab.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="absolute right-s5 inline-flex h-10 w-10 items-center justify-center text-fg-60 lg:hidden"
          aria-label="Open menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
