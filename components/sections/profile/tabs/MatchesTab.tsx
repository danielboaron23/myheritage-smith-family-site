"use client";

import Image from "next/image";
import { useState } from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { CheckCircleIcon, CloseIcon, SmartMatchIcon, RecordMatchIcon } from "@/components/icons";

type Kind = "smart" | "record";
type Confidence = "High" | "Medium";

interface Match {
  kind: Kind;
  image: string;
  title: string;
  subtitle: string;
  meta: string;
  confidence: Confidence;
  newInfo: string[];
}

const MATCHES: Match[] = [
  {
    kind: "smart",
    image: "/assets/images/match-rachel.png",
    title: "Christopher Smith",
    subtitle: 'in "The Barnstable Family Web"',
    meta: "Managed by Eleanor Price",
    confidence: "High",
    newInfo: ["Photo", "Burial place", "Mother"],
  },
  {
    kind: "smart",
    image: "/assets/images/match-miriam.png",
    title: "Christopher Smith (Elijah)",
    subtitle: 'in "Harrow & Wealdstone Roots"',
    meta: "Managed by Daniel Cooper",
    confidence: "Medium",
    newInfo: ["Occupation", "Middle name"],
  },
  {
    kind: "smart",
    image: "/assets/images/creator-avatar.png",
    title: "Christopher Smith",
    subtitle: 'in "Smith of Middlesex"',
    meta: "Managed by Patricia Lowe",
    confidence: "High",
    newInfo: ["Parents", "2 siblings"],
  },
  {
    kind: "record",
    image: "/assets/images/record-census.png",
    title: "1920 United States Federal Census",
    subtitle: "Record collection",
    meta: "6 new details",
    confidence: "High",
    newInfo: ["Residence", "Age", "Household"],
  },
  {
    kind: "record",
    image: "/assets/images/record-us.png",
    title: "U.S., Public Records Index",
    subtitle: "Record collection",
    meta: "3 new details",
    confidence: "Medium",
    newInfo: ["Address", "Phone"],
  },
  {
    kind: "record",
    image: "/assets/images/record-germany.png",
    title: "Germany, North Rhine-Westphalia, Deaths 1874–1938",
    subtitle: "Record collection",
    meta: "4 new details",
    confidence: "High",
    newInfo: ["Death date", "Death place"],
  },
];

const FILTERS = [
  { key: "all", label: "All matches", count: 26 },
  { key: "smart", label: "Smart Matches", count: 11 },
  { key: "record", label: "Record Matches", count: 15 },
] as const;

function Confidence({ level }: { level: Confidence }) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center rounded-full px-s2 py-px text-p3 font-medium",
        level === "High"
          ? "bg-success-surface text-success-strong"
          : "bg-warning-surface text-warning-strong",
      )}
    >
      {level} confidence
    </span>
  );
}

function MatchCard({ m }: { m: Match }) {
  return (
    <Card radius="r4" bordered className="flex flex-col gap-s4 p-s5">
      <div className="flex items-start gap-s4">
        <Image
          src={m.image}
          alt=""
          width={64}
          height={64}
          className={cn(
            "h-16 w-16 shrink-0 object-cover",
            m.kind === "smart" ? "rounded-full ring-1 ring-border" : "rounded-r4",
          )}
        />
        <div className="flex min-w-0 flex-1 flex-col gap-px">
          <div className="flex items-start justify-between gap-s2">
            <p className="flex items-center gap-s1 text-caps3 font-medium uppercase tracking-[1px] text-fg-40">
              {m.kind === "smart" ? (
                <SmartMatchIcon className="text-[14px] text-success" />
              ) : (
                <RecordMatchIcon className="text-[14px] text-info" />
              )}
              {m.kind === "smart" ? "Smart Match" : "Record Match"}
            </p>
            <Confidence level={m.confidence} />
          </div>
          <p className="truncate text-p1 font-bold text-fg-100">{m.title}</p>
          <p className="truncate text-p2 text-fg-60">{m.subtitle}</p>
          <p className="truncate text-p3 text-fg-40">{m.meta}</p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-s1">
        <span className="text-p3 font-bold text-fg-80">New info:</span>
        {m.newInfo.map((info) => (
          <span
            key={info}
            className="rounded-full bg-subtle px-s2 py-px text-p3 text-fg-60"
          >
            {info}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-s2">
        <Button variant="primary" size="small" className="flex-1">
          Review match
        </Button>
        <button
          aria-label="Confirm match"
          className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border-strong text-success transition-colors hover:bg-success-surface"
        >
          <CheckCircleIcon className="text-[18px]" />
        </button>
        <button
          aria-label="Reject match"
          className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border-strong text-fg-60 transition-colors hover:bg-rowhover"
        >
          <CloseIcon className="text-[16px]" />
        </button>
      </div>
    </Card>
  );
}

/** Matches tab — Smart Matches + Record Matches. On-system, design.md tokens. */
export function MatchesTab() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]["key"]>("all");
  const shown =
    filter === "all" ? MATCHES : MATCHES.filter((m) => m.kind === filter);

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-s4">
        <div className="no-scrollbar flex items-center gap-s2 overflow-x-auto">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={cn(
                "inline-flex shrink-0 items-center gap-s2 rounded-pill border px-s4 py-s1 text-p2 transition-colors",
                filter === f.key
                  ? "border-primary bg-primary text-primary-on"
                  : "border-border-strong text-fg-80 hover:border-fg-60",
              )}
            >
              {f.label}
              <span
                className={cn(
                  "rounded-full px-s1 text-p3",
                  filter === f.key ? "bg-white/25" : "bg-rowhover text-fg-60",
                )}
              >
                {f.count}
              </span>
            </button>
          ))}
        </div>
        <p className="text-p3 text-fg-60">Showing {shown.length} of 26</p>
      </div>

      <div className="mt-s5 grid grid-cols-1 gap-s4 xl:grid-cols-2">
        {shown.map((m, i) => (
          <MatchCard key={i} m={m} />
        ))}
      </div>

      <div className="mt-s6 flex justify-center">
        <Button variant="secondary" size="medium">
          Load more matches
        </Button>
      </div>
    </div>
  );
}
