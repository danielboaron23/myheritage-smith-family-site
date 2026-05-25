import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { PlusIcon } from "@/components/icons";

/**
 * Bring your photos to life — Figma 1:15217.
 * Title + "Upload photos" link, then a scrolling strip of effect cards
 * (Animate · Enhance · Colorize · Restore colors · Repair).
 * Cards carry baked before/after split photos captured from Figma.
 */
export function PhotosToLife() {
  return (
    <Card radius="r4" className="overflow-hidden px-[34px] py-[26px]">
      <div className="flex items-center justify-between">
        <h2 className="uppercase-caps text-caps2 font-medium tracking-[1.4px] text-fg-60">
          Bring your photos to life
        </h2>
        <a
          href="#"
          className="inline-flex items-center gap-s1 text-p3 text-primary hover:underline"
        >
          <PlusIcon className="text-[16px]" />
          Upload photos
        </a>
      </div>

      <div className="no-scrollbar mt-s4 flex items-start gap-s2 overflow-x-auto pb-s1">
        <Image
          src="/assets/images/photos-to-life-1.png"
          alt="Animate, Enhance and Colorize your photos"
          width={536}
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
