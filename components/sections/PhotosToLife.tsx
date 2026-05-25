"use client";

import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { ImageComparison } from "@/components/ui/image-comparison-slider";
import { PlusIcon, ArrowRightIcon } from "@/components/icons";

interface Tool {
  label: string;
  description: string;
  image: string;
  beforeFilter: string;
  afterFilter?: string;
  href?: string;
}

const TOOLS: Tool[] = [
  {
    label: "Animate",
    description: "Animate the faces in your photos",
    image: "/assets/images/activity-photo-1.png",
    beforeFilter: "grayscale(0.7) brightness(0.95)",
  },
  {
    label: "Enhance",
    description: "Bring blurry faces into focus",
    image: "/assets/images/activity-photo-3.png",
    beforeFilter: "blur(2.5px) grayscale(0.35) contrast(0.92) brightness(0.97)",
    afterFilter: "contrast(1.06) saturate(1.12)",
    href: "/enhance",
  },
  {
    label: "Colorize",
    description: "Colorize black & white photos",
    image: "/assets/images/activity-photo-2.png",
    beforeFilter: "grayscale(1)",
    afterFilter: "saturate(1.1)",
  },
  {
    label: "Restore colors",
    description: "Restore faded color photos",
    image: "/assets/images/activity-photo-4.png",
    beforeFilter: "saturate(0.35) sepia(0.25) contrast(0.9)",
    afterFilter: "saturate(1.15) contrast(1.05)",
  },
  {
    label: "Repair",
    description: "Fix scratched or torn photos",
    image: "/assets/images/activity-photo-5.png",
    beforeFilter: "grayscale(0.5) contrast(0.8) brightness(0.92)",
    afterFilter: "contrast(1.05)",
  },
];

function ToolCard({ tool }: { tool: Tool }) {
  const isEnhance = Boolean(tool.href);

  const slider = (
    <div
      // Stop drag/clicks on the slider from triggering the card's navigation.
      onMouseDown={(e) => e.stopPropagation()}
      onClick={(e) => isEnhance && e.preventDefault()}
      className="h-[150px] w-full"
    >
      <ImageComparison
        beforeImage={tool.image}
        afterImage={tool.image}
        beforeFilter={tool.beforeFilter}
        afterFilter={tool.afterFilter}
        interactive={isEnhance}
        compact
        initial={isEnhance ? 50 : 55}
        className="h-full"
        altBefore={`${tool.label} before`}
        altAfter={`${tool.label} after`}
      />
    </div>
  );

  return (
    <Card
      radius="r4"
      className={`w-[190px] shrink-0 overflow-hidden rounded-r6 !shadow-[0_2px_20px_0_rgba(0,0,0,0.10)] transition-shadow ${
        isEnhance ? "ring-1 ring-primary/30 hover:!shadow-[0_8px_28px_0_rgba(245,105,50,0.18)]" : ""
      }`}
    >
      {slider}
      {isEnhance ? (
        <Link href={tool.href!} className="group block p-s4 text-center">
          <p className="text-[17px] font-bold leading-[24px] text-fg-100">{tool.label}</p>
          <p className="mt-px text-p3 text-fg-60">{tool.description}</p>
          <span className="mt-s2 inline-flex items-center gap-s1 text-p3 font-medium text-primary group-hover:underline">
            Enhance a photo
            <ArrowRightIcon className="text-[13px]" />
          </span>
        </Link>
      ) : (
        <div className="p-s4 text-center">
          <p className="text-[17px] font-bold leading-[24px] text-fg-100">{tool.label}</p>
          <p className="mt-px text-p3 text-fg-60">{tool.description}</p>
        </div>
      )}
    </Card>
  );
}

/**
 * Bring your photos to life — Figma 1:15217, rebuilt as interactive cards.
 * Each card shows a before/after; Enhance is a live, draggable slider that
 * links to the /enhance flow.
 */
export function PhotosToLife() {
  return (
    <Card radius="r4" className="overflow-hidden px-[34px] py-[26px]">
      <div className="flex items-center justify-between">
        <h2 className="uppercase-caps text-caps2 font-medium tracking-[1.4px] text-fg-60">
          Bring your photos to life
        </h2>
        <Link
          href="/enhance"
          className="inline-flex items-center gap-s1 text-p3 text-primary hover:underline"
        >
          <PlusIcon className="text-[16px]" />
          Upload photos
        </Link>
      </div>

      <div className="no-scrollbar mt-s4 flex items-stretch gap-s4 overflow-x-auto pb-s2">
        {TOOLS.map((tool) => (
          <ToolCard key={tool.label} tool={tool} />
        ))}
      </div>
    </Card>
  );
}
