import { CtaRows } from "./CtaRows";
import { MatchesToCloseRelatives } from "./MatchesToCloseRelatives";
import { PhotosToLife } from "./PhotosToLife";
import { RecentActivity } from "./RecentActivity";

/** Right-hand content column (852px) — Figma Frame 21700. */
export function MainContent() {
  return (
    <main className="flex min-w-0 flex-1 flex-col gap-[20px] lg:w-[852px]">
      <CtaRows />
      <MatchesToCloseRelatives />
      <PhotosToLife />
      <RecentActivity />
    </main>
  );
}
