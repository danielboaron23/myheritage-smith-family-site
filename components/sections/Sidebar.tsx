import { AppImage as Image } from "@/components/ui/AppImage";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { TextField } from "@/components/ui/TextField";
import { Button } from "@/components/ui/Button";
import { IdeaIcon } from "@/components/icons";

const STATS = [
  { label: "People", value: "180" },
  { label: "Photos", value: "159" },
  { label: "DNA kits", value: "1" },
  { label: "Discoveries", value: "105" },
  { label: "DNA Matches", value: "25" },
];

/**
 * Left sidebar (264px) — Figma node 1:15283.
 * Creator card + stats table · Upgrade card · Research-your-ancestors search.
 */
export function Sidebar() {
  return (
    <aside className="flex w-full flex-col gap-[15px] lg:w-[264px] lg:shrink-0">
      {/* Creator + stats */}
      <div className="flex flex-col gap-s5">
        <Link
          href="/profile"
          className="group flex items-center gap-s5 rounded-r4 outline-none transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-primary/40"
        >
          <Image
            src="/assets/images/creator-avatar.png"
            alt="Christopher Smith"
            width={48}
            height={48}
            className="h-12 w-12 shrink-0 rounded-full object-cover"
          />
          <div className="flex flex-col gap-[6px]">
            <p className="text-t7 font-bold leading-[24px] text-[rgba(0,0,0,0.71)] group-hover:text-primary">
              Christopher Smith
            </p>
            <p className="text-p2 leading-[24px] text-[rgba(0,0,0,0.5)]">Site creator</p>
          </div>
        </Link>

        <dl className="flex flex-col">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="flex h-[40px] items-center justify-between"
            >
              <dt className="text-p2 tracking-[0.3px] text-fg-80/80">{s.label}</dt>
              <dd className="text-p2 font-bold tracking-[0.2px] text-fg-100">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Upgrade card */}
      <Card radius="r4" className="flex min-h-[78px] items-center gap-s1 overflow-hidden pl-s1 pr-s3">
        <div className="relative flex h-[61px] w-[58px] shrink-0 items-center justify-center">
          <Image
            src="/assets/images/upgrade-blob.png"
            alt=""
            fill
            className="object-contain opacity-95"
          />
          <IdeaIcon className="relative text-[24px] text-fg-80" />
        </div>
        <p className="text-p2 leading-[24px] text-fg-80">
          Unlock more MyHeritage features.{" "}
          <a href="#" className="font-bold text-primary hover:underline">
            Upgrade Now
          </a>
        </p>
      </Card>

      {/* Research card */}
      <Card radius="r4" className="px-[19px] pb-s5 pt-[28px]">
        <p className="uppercase-caps text-caps2 font-medium tracking-[1.4px] text-fg-80/80">
          Research your ancestors
        </p>
        <p className="mt-s2 text-p3 text-fg-60">In 9.2 billion historical records</p>

        <div className="mt-s4 flex flex-col gap-s1">
          <TextField variant="line" label="First and middle name" />
          <TextField variant="line" label="Last Name" />
        </div>

        <div className="mt-s5 flex justify-center">
          <Button variant="secondary" size="small" className="w-[168px]">
            Search
          </Button>
        </div>

        <p className="mt-s4 text-center text-p3 text-fg-100">
          <a href="#" className="hover:text-link">
            Advanced search
          </a>
        </p>
      </Card>
    </aside>
  );
}
