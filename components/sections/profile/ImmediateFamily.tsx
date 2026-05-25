import Image from "next/image";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { HintIcon } from "@/components/icons";

const MALE = "/assets/images/avatar-male.svg";

const HINTS = [
  { text: "Hint: father", avatar: MALE },
  { text: "Hint: mother", avatar: "/assets/images/avatar-mother-hint.png" },
];

const MEMBERS = [
  {
    name: "Charles George Barnstable",
    relation: "Her husband",
    dates: "1921 - 2009",
    avatar: MALE,
  },
  { name: "Ian Charles Barnstable", relation: "Her son", dates: "Born: 1950", avatar: MALE },
  {
    name: "Denise Susan Barnstable",
    relation: "Her daughter",
    dates: "Born: 1957",
    avatar: "/assets/images/avatar-denise.png",
  },
];

function FamilyAvatar({ src, alt }: { src: string; alt: string }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={48}
      height={48}
      className="h-12 w-12 shrink-0 rounded-full border border-border-strong object-cover"
    />
  );
}

/** "Immediate family" card — Figma node 1:18191. */
export function ImmediateFamily() {
  return (
    <Card radius="r4" bordered className="rounded-r7 p-[24px]">
      <div className="flex items-center justify-between">
        <h2 className="text-t6 font-bold text-fg-100">Immediate family</h2>
        <Button variant="secondary" size="small">
          Add
        </Button>
      </div>

      {/* Hint pills */}
      <div className="mt-s5 flex flex-col gap-s4">
        {HINTS.map((h) => (
          <div
            key={h.text}
            className="flex h-16 items-center gap-s2 rounded-full border border-dashed border-[#ffda80] bg-[#fff7e0] pl-s1 pr-s5"
          >
            <FamilyAvatar src={h.avatar} alt="" />
            <HintIcon className="shrink-0 text-[18px] text-fg-80" />
            <span className="text-p2 text-fg-80">{h.text}</span>
          </div>
        ))}
      </div>

      <div className="my-s5 h-px bg-border" />

      {/* Members */}
      <div className="flex flex-col gap-s5">
        {MEMBERS.map((m) => (
          <div key={m.name} className="flex items-center gap-s4">
            <FamilyAvatar src={m.avatar} alt={m.name} />
            <div className="flex min-w-0 flex-col">
              <p className="text-p2 font-medium text-fg-100">{m.name}</p>
              <p className="text-p3 text-fg-60">{m.relation}</p>
              <p className="text-p3 text-fg-60">{m.dates}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
