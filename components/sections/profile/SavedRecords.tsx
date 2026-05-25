import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { ChevronDown } from "@/components/icons";

const RECORDS = [
  { title: "U.S Public Records Index", img: "/assets/images/record-us.png" },
  { title: "1920 United States Federal Census", img: "/assets/images/record-census.png" },
  {
    title: "Germany, North Rhine-Westphalia, Deaths 187…",
    img: "/assets/images/record-germany.png",
  },
];

/** "10 saved records" card — Figma node 1:17882. */
export function SavedRecords() {
  return (
    <Card radius="r4" bordered className="rounded-r7 p-[24px]">
      <h2 className="text-t6 font-bold text-fg-80">10 saved records</h2>

      <div className="mt-s5 flex flex-col gap-s4">
        {RECORDS.map((r) => (
          <div key={r.title} className="flex items-center gap-s5 rounded-r6 bg-page p-s4">
            <Image
              src={r.img}
              alt=""
              width={48}
              height={48}
              className="h-12 w-12 shrink-0 rounded-r4 border-4 border-surface object-cover"
            />
            <p className="text-p2 text-fg-80">{r.title}</p>
          </div>
        ))}
      </div>

      <button className="mx-auto mt-s5 flex items-center gap-s2 text-p2 font-medium text-fg-60 hover:text-fg-100">
        Show more
        <ChevronDown className="text-[12px]" />
      </button>
    </Card>
  );
}
