import { AppImage as Image } from "@/components/ui/AppImage";
import type { ReactNode } from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

interface CtaRowProps {
  visualSrc: string;
  visualW: number;
  visualH: number;
  title: ReactNode;
  body: ReactNode;
  buttonLabel: string;
  tone?: "core" | "dna" | "health";
}

/**
 * Onboarding CTA row (852×139) — Figma Frame 21740–21743.
 * White card · visual (174×100 slot) · title (Title6 Bold) + 2-line body ·
 * pill action button on the right.
 */
export function CtaRow({
  visualSrc,
  visualW,
  visualH,
  title,
  body,
  buttonLabel,
  tone = "core",
}: CtaRowProps) {
  return (
    <Card radius="r4" className="px-s5 py-s4 sm:px-[30px] sm:py-[19px]">
      <div className="flex flex-col gap-s4 sm:flex-row sm:items-center">
        <div className="flex min-w-0 flex-1 items-center gap-s3 sm:gap-[22px]">
          <div className="flex h-[72px] w-[92px] shrink-0 items-center justify-center sm:h-[100px] sm:w-[174px]">
            <Image
              src={visualSrc}
              alt=""
              width={visualW}
              height={visualH}
              className="max-h-[84px] w-auto object-contain sm:max-h-[120px]"
            />
          </div>
          <div className="flex min-w-0 flex-col gap-s1">
            <h3 className="text-t7 font-bold text-fg-80 sm:text-t6">{title}</h3>
            <p className="text-p2 leading-[22px] text-fg-80 sm:leading-[24px]">{body}</p>
          </div>
        </div>

        <Button
          variant="primary"
          size="small"
          tone={tone}
          className="w-full shrink-0 sm:ml-auto sm:w-[134px]"
        >
          {buttonLabel}
        </Button>
      </div>
    </Card>
  );
}
