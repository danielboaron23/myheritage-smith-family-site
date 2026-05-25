import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

/** "One consistency issue" card — Figma node 1:18186. */
export function ConsistencyIssue() {
  return (
    <Card radius="r4" bordered className="rounded-r7 p-[24px]">
      <div className="flex items-center gap-s2">
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-fg-100 text-[13px] font-bold leading-none text-surface">
          !
        </span>
        <p className="text-p2 text-fg-80">One consistency issue</p>
      </div>

      <div className="mt-s4 flex flex-col items-center gap-s5 rounded-r6 bg-page p-s5 sm:flex-row">
        <Image
          src="/assets/images/avatar-johannes.png"
          alt="Johannes Doreen"
          width={72}
          height={72}
          className="h-[72px] w-[72px] shrink-0 rounded-full object-cover"
        />
        <p className="min-w-0 flex-1 text-p2 text-fg-80">
          Johannes Doreen has a death date (August 11 1915), which is before his birth date
          (June 6 1922)
          <br />
          <span className="font-bold">Tip:</span> Correct birth or death dates of Johannes
          Doreen
        </p>
        <Button variant="secondary" size="small" className="shrink-0">
          Edit
        </Button>
      </div>
    </Card>
  );
}
