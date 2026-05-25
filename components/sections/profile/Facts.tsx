import Image from "next/image";
import type { ReactNode } from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { IconButton } from "@/components/ui/IconButton";
import { FilterIcon, MapPinIcon, HintIcon } from "@/components/icons";

interface Fact {
  year: string;
  age?: string;
  title: ReactNode;
  date: string;
  place?: string;
  hint?: string;
}

const FACTS: Fact[] = [
  {
    year: "1922",
    title: "Birth",
    date: "1922",
    place: "Harrow, England",
    hint: "Hint: more complete birth date",
  },
  {
    year: "1940",
    age: "Age 27",
    title: (
      <>
        <span className="font-bold">Marriage to:</span>{" "}
        <span className="text-fg-60">Charles George Barnstable</span>
      </>
    ),
    date: "Nov 11 1949",
  },
  {
    year: "1940",
    age: "Age 29",
    title: (
      <>
        <span className="font-bold">Birth of son:</span>{" "}
        <span className="text-fg-60">Ian Charles Barnstable</span>
      </>
    ),
    date: "Nov 3 1951",
    place: "Chelsea, London, England",
  },
  {
    year: "1946",
    age: "Age 35",
    title: (
      <>
        <span className="font-bold">Birth of daughter:</span>{" "}
        <span className="text-fg-60">Denise Susan Barnstable</span>
      </>
    ),
    date: "Oct 16 1957",
    place: "Chelsea, London, England",
  },
  {
    year: "1988",
    age: "Age 76",
    title: <span className="font-bold">Death</span>,
    date: "May 12 1998",
    place: "London",
  },
];

function HintPill({ text }: { text: string }) {
  return (
    <div className="mt-s3 inline-flex max-w-full items-center gap-s2 rounded-full border border-dashed border-[#ffda80] bg-[#fff7e0] py-s1 pl-s1 pr-s5">
      <Image
        src="/assets/images/hint-record.png"
        alt=""
        width={40}
        height={40}
        className="h-10 w-10 shrink-0 rounded-r4 object-cover"
      />
      <HintIcon className="shrink-0 text-[18px] text-fg-80" />
      <span className="text-p3 text-fg-80">{text}</span>
    </div>
  );
}

/** Facts timeline card — Figma node 1:18210. Bordered card (r7). */
export function Facts() {
  return (
    <Card radius="r4" bordered className="rounded-r7 px-[32px] py-[24px]">
      <div className="flex items-center justify-between">
        <h2 className="text-t6 font-bold text-fg-100">Facts</h2>
        <div className="flex items-center gap-s2">
          <IconButton aria-label="Filter facts" size={32} iconSize={20}>
            <FilterIcon />
          </IconButton>
          <Button variant="secondary" size="small">
            Add
          </Button>
        </div>
      </div>

      <div className="mt-s5 divide-y divide-border-strong">
        {FACTS.map((f, i) => (
          <div key={i} className="flex gap-s5 py-s4 first:pt-0">
            <div className="w-[64px] shrink-0">
              <p className="text-t6 leading-[28px] text-fg-80">{f.year}</p>
              {f.age && (
                <p className="uppercase-caps mt-s1 text-caps3 font-medium tracking-[1.2px] text-fg-60">
                  {f.age}
                </p>
              )}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-p2 text-fg-80">{f.title}</p>
              <p className="text-p2 text-fg-60">{f.date}</p>
              {f.place && (
                <p className="mt-px flex items-center gap-s1 text-p2 text-fg-60">
                  <MapPinIcon className="text-[14px] text-fg-60" />
                  {f.place}
                </p>
              )}
              {f.hint && <HintPill text={f.hint} />}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
