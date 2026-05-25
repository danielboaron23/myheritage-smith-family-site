import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { InfoIcon, AddPersonIcon } from "@/components/icons";
import { cn } from "@/lib/cn";

interface MatchCard {
  name: string;
  relation: string;
  info: string;
  buttonLabel: string;
  avatar: string;
  gender: "male" | "female";
}

const MATCHES: MatchCard[] = [
  {
    name: "Paul Weiss",
    relation: "Your uncle",
    info: "birth date, death place, burial, place, father ...",
    buttonLabel: "Review all 4 matches",
    avatar: "/assets/images/match-paul-weiss.png",
    gender: "male",
  },
  {
    name: "Rachel Pompianska",
    relation: "Your grandmother",
    info: "birth date, death place, burial, place, father ...",
    buttonLabel: "Review all 12 matches",
    avatar: "/assets/images/match-rachel.png",
    gender: "female",
  },
  {
    name: "Miriam Shaviv",
    relation: "Your aunt",
    info: "Story",
    buttonLabel: "Review match",
    avatar: "/assets/images/match-miriam.png",
    gender: "female",
  },
];

/** Matches to close relatives — Figma 1:15202. Horizontally scrolling cards. */
export function MatchesToCloseRelatives() {
  return (
    <Card radius="r4" className="overflow-hidden px-[34px] py-[26px]">
      <div className="flex items-center justify-between">
        <h2 className="uppercase-caps text-caps2 font-medium tracking-[1.4px] text-fg-60">
          Matches to close relatives
        </h2>
        <InfoIcon className="text-[20px] text-fg-40" />
      </div>

      <div className="no-scrollbar mt-s5 flex gap-[13px] overflow-x-auto pb-s1">
        {MATCHES.map((m) => (
          <article
            key={m.name}
            className="flex h-[258px] w-[337px] shrink-0 flex-col justify-between rounded-[10px] bg-surface p-[20px] shadow-[0_10px_20px_0_rgba(0,0,0,0.06)] ring-1 ring-border/60"
          >
            <div className="flex flex-col gap-s4">
              <div className="flex items-center gap-[19px] rounded-[10px] bg-[#f0f6f2] p-[10px]">
                <span
                  className={cn(
                    "inline-flex h-[78px] w-[78px] shrink-0 overflow-hidden rounded-full ring-2",
                    m.gender === "male" ? "ring-male" : "ring-female",
                  )}
                >
                  <Image
                    src={m.avatar}
                    alt={m.name}
                    width={78}
                    height={78}
                    className="h-full w-full object-cover"
                  />
                </span>
                <div className="flex min-w-0 flex-col gap-[3px]">
                  <p className="text-t7 font-bold leading-[24px] text-fg-100">{m.name}</p>
                  <p className="text-p2 leading-[20px] text-[rgba(0,0,0,0.65)]">
                    {m.relation}
                  </p>
                </div>
              </div>
              <p className="text-p2 leading-[20px] text-fg-60">
                <span className="font-bold">New info:</span> {m.info}
              </p>
            </div>

            <Button variant="secondary" size="small" className="w-full">
              {m.buttonLabel}
            </Button>
          </article>
        ))}

        {/* View more */}
        <div className="flex h-[258px] w-[120px] shrink-0 flex-col items-center justify-center gap-[9px]">
          <AddPersonIcon className="text-[38px] text-primary" />
          <span className="text-p3 text-primary">View more</span>
        </div>
      </div>
    </Card>
  );
}
