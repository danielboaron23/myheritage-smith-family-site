import { Facts } from "../Facts";
import { ConsistencyIssue } from "../ConsistencyIssue";
import { TrailMap } from "../TrailMap";
import { SavedRecords } from "../SavedRecords";
import { ImmediateFamily } from "../ImmediateFamily";

/** Details tab — the two-column overview (Figma node 1:17801 body). */
export function DetailsTab() {
  return (
    <div className="flex flex-col gap-s5 lg:flex-row lg:items-start">
      <div className="flex min-w-0 flex-1 flex-col gap-s5">
        <Facts />
        <ConsistencyIssue />
        <TrailMap />
      </div>
      <div className="flex w-full flex-col gap-s5 lg:w-[384px] lg:shrink-0">
        <SavedRecords />
        <ImmediateFamily />
      </div>
    </div>
  );
}
