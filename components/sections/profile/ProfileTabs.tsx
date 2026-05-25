import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { CheckCircleIcon } from "@/components/icons";

function CountPill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex h-6 items-center gap-s1 rounded-full bg-rowhover px-s2 text-p3 text-fg-80">
      {children}
    </span>
  );
}

interface Tab {
  label: string;
  active?: boolean;
  badge?: ReactNode;
}

const TABS: Tab[] = [
  { label: "Details", active: true },
  {
    label: "Matches",
    badge: (
      <CountPill>
        26
        <CheckCircleIcon className="text-[12px] text-success" />
        <span className="inline-block h-[10px] w-[10px] rounded-full bg-[#f7aa66]" />
      </CountPill>
    ),
  },
  { label: "Biography" },
  { label: "Photos", badge: <CountPill>13</CountPill> },
  { label: "Sources", badge: <CountPill>3</CountPill> },
];

/** Profile tab bar — Figma node 1:17849. */
export function ProfileTabs() {
  return (
    <div className="border-b border-border-strong">
      <ul className="no-scrollbar -mb-px flex items-center gap-s8 overflow-x-auto">
        {TABS.map((tab) => (
          <li key={tab.label} className="shrink-0">
            <button
              className={cn(
                "flex items-center gap-s2 border-b-2 pb-s2 text-[18px] leading-[28px] transition-colors",
                tab.active
                  ? "border-fg-100 font-medium text-fg-100"
                  : "border-transparent text-fg-60 hover:text-fg-100",
              )}
            >
              {tab.label}
              {tab.badge}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
