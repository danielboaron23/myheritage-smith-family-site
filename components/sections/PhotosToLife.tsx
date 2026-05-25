"use client";

import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { ImageComparison } from "@/components/ui/image-comparison-slider";
import { PlusIcon } from "@/components/icons";

/**
 * Interactive Enhance card — matches the original Figma card styling (white,
 * rounded, shadow, label + description) but its preview is a live before/after
 * slider and the whole card links to the /enhance flow.
 */
function EnhanceCard() {
  return (
    <div className="flex h-[250px] w-[161px] shrink-0 items-center justify-center">
      <Link
        href="/enhance"
        className="flex h-[213px] w-[146px] flex-col overflow-hidden rounded-[14px] bg-surface shadow-[0_2px_20px_0_rgba(0,0,0,0.10)] transition-shadow hover:shadow-[0_6px_24px_0_rgba(0,0,0,0.14)]"
      >
        <div
          // Let the slider be dragged without triggering navigation.
          onMouseDown={(e) => e.stopPropagation()}
          onClick={(e) => e.preventDefault()}
          className="h-[126px] w-full shrink-0"
        >
          <ImageComparison
            beforeImage="/assets/images/activity-photo-3.png"
            afterImage="/assets/images/activity-photo-3.png"
            beforeFilter="blur(2.5px) grayscale(0.35) contrast(0.92) brightness(0.97)"
            afterFilter="contrast(1.06) saturate(1.12)"
            compact
            className="h-full"
            altBefore="Enhance before"
            altAfter="Enhance after"
          />
        </div>
        <div className="flex flex-1 flex-col items-center px-s2 pt-s3 text-center">
          <p className="text-[15px] font-bold leading-[24px] text-fg-100">Enhance</p>
          <p className="mt-px text-[12px] leading-[16px] text-fg-60">
            Bring blurry faces into focus
          </p>
        </div>
      </Link>
    </div>
  );
}

/**
 * Bring your photos to life — Figma 1:15217.
 * Original cards (Animate · Colorize · Restore colors · Repair) are the exact
 * Figma artwork; only the Enhance card is interactive (before/after slider →
 * /enhance flow).
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

      <div className="no-scrollbar mt-s4 flex items-center gap-s2 overflow-x-auto pb-s1">
        <Image
          src="/assets/images/card-animate.png"
          alt="Animate the faces in your photos"
          width={176}
          height={273}
          className="h-[250px] w-auto max-w-none shrink-0"
        />
        <EnhanceCard />
        <Image
          src="/assets/images/card-colorize.png"
          alt="Colorize black & white photos"
          width={178}
          height={273}
          className="h-[250px] w-auto max-w-none shrink-0"
        />
        <Image
          src="/assets/images/photos-to-life-2.png"
          alt="Restore colors and Repair your photos"
          width={342}
          height={273}
          className="h-[250px] w-auto max-w-none shrink-0"
        />
      </div>
    </Card>
  );
}
