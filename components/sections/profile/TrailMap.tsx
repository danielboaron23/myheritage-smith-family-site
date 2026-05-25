import { AppImage as Image } from "@/components/ui/AppImage";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon } from "@/components/icons";

/** "Johannes's trail" map card — Figma node 1:18176. */
export function TrailMap() {
  return (
    <Card radius="r4" bordered className="rounded-r7 p-[24px]">
      <h2 className="text-t6 font-bold text-fg-100">Johannes&apos;s trail</h2>

      <div className="mt-s5 overflow-hidden rounded-r6">
        <Image
          src="/assets/images/profile-map.png"
          alt="Map of Johannes's trail"
          width={745}
          height={400}
          className="h-auto w-full object-cover"
        />
      </div>

      <div className="mt-s5 flex justify-center">
        <Button variant="secondary" size="small" endIcon={<ArrowRightIcon className="text-[14px]" />}>
          View in PedigreeMap
        </Button>
      </div>
    </Card>
  );
}
