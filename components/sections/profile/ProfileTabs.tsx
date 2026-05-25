"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { CheckCircleIcon } from "@/components/icons";

export const PROFILE_TABS = [
  "Details",
  "Matches",
  "Biography",
  "Photos",
  "Sources",
] as const;
export type ProfileTab = (typeof PROFILE_TABS)[number];

function CountPill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex h-6 items-center gap-s1 rounded-full bg-rowhover px-s2 text-p3 text-fg-80">
      {children}
    </span>
  );
}

const BADGES: Partial<Record<ProfileTab, ReactNode>> = {
  Matches: (
    <CountPill>
      26
      <CheckCircleIcon className="text-[12px] text-success" />
      <span className="inline-block h-[10px] w-[10px] rounded-full bg-[#f7aa66]" />
    </CountPill>
  ),
  Photos: <CountPill>13</CountPill>,
  Sources: <CountPill>3</CountPill>,
};

interface ProfileTabsProps {
  active: ProfileTab;
  onSelect: (tab: ProfileTab) => void;
}

/** Profile tab bar — Figma node 1:17849. Controlled. */
export function ProfileTabs({ active, onSelect }: ProfileTabsProps) {
  return (
    <div className="border-b border-border-strong">
      <ul className="no-scrollbar -mb-px flex items-center gap-s8 overflow-x-auto">
        {PROFILE_TABS.map((tab) => (
          <li key={tab} className="shrink-0">
            <button
              onClick={() => onSelect(tab)}
              aria-current={tab === active ? "page" : undefined}
              className={cn(
                "flex items-center gap-s2 border-b-2 pb-s2 text-[18px] leading-[28px] transition-colors",
                tab === active
                  ? "border-fg-100 font-medium text-fg-100"
                  : "border-transparent text-fg-60 hover:text-fg-100",
              )}
            >
              {tab}
              {BADGES[tab]}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
