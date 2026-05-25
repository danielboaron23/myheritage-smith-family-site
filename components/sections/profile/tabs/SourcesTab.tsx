import { AppImage as Image } from "@/components/ui/AppImage";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { PlusIcon, ArrowRightIcon } from "@/components/icons";

interface Source {
  image: string;
  title: string;
  repository: string;
  citation: string;
  quality: "High quality" | "Secondary";
  fields: { label: string; value: string }[];
  citedFor: string[];
}

const SOURCES: Source[] = [
  {
    image: "/assets/images/record-census.png",
    title: "1920 United States Federal Census",
    repository: "National Archives and Records Administration",
    citation:
      "1920 United States Federal Census, NARA microfilm publication T625. Record for Christopher Smith, enumerated in the household of the Smith family.",
    quality: "High quality",
    fields: [
      { label: "Name", value: "Christopher Smith" },
      { label: "Residence", value: "Harrow, Middlesex" },
      { label: "Age (recorded)", value: "8" },
      { label: "Household", value: "Smith family" },
    ],
    citedFor: ["Birth", "Residence"],
  },
  {
    image: "/assets/images/record-us.png",
    title: "U.S., Public Records Index",
    repository: "MyHeritage collection",
    citation:
      "U.S., Public Records Index, 1950–1993, Vol. 2. Record for Christopher Smith, listing residence and recorded contact details.",
    quality: "Secondary",
    fields: [
      { label: "Name", value: "Christopher Smith" },
      { label: "Residence", value: "London, England" },
      { label: "Recorded", value: "1971" },
    ],
    citedFor: ["Residence"],
  },
  {
    image: "/assets/images/record-germany.png",
    title: "Germany, North Rhine-Westphalia, Deaths 1874–1938",
    repository: "Landesarchiv Nordrhein-Westfalen",
    citation:
      "Germany, North Rhine-Westphalia, Deaths, 1874–1938. Civil registration death record connected through the Barnstable line.",
    quality: "High quality",
    fields: [
      { label: "Death date", value: "Aug 11 1915" },
      { label: "Place", value: "North Rhine-Westphalia" },
      { label: "Registrar", value: "Standesamt" },
    ],
    citedFor: ["Death"],
  },
];

function SourceCard({ s }: { s: Source }) {
  return (
    <Card radius="r4" bordered className="rounded-r7 p-s5">
      <div className="flex flex-col gap-s5 sm:flex-row">
        <Image
          src={s.image}
          alt=""
          width={88}
          height={112}
          className="h-[112px] w-[88px] shrink-0 self-start rounded-r4 object-cover ring-1 ring-border"
        />

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-s2">
            <div className="min-w-0">
              <h3 className="text-t7 font-bold text-fg-100">{s.title}</h3>
              <p className="text-p3 text-fg-60">{s.repository}</p>
            </div>
            <span
              className={
                s.quality === "High quality"
                  ? "shrink-0 rounded-full bg-success-surface px-s2 py-px text-p3 font-medium text-success-strong"
                  : "shrink-0 rounded-full bg-subtle px-s2 py-px text-p3 font-medium text-fg-60"
              }
            >
              {s.quality}
            </span>
          </div>

          <p className="mt-s2 border-l-2 border-border-strong pl-s3 text-p3 italic text-fg-60">
            {s.citation}
          </p>

          <dl className="mt-s4 grid grid-cols-1 gap-x-s5 gap-y-s2 sm:grid-cols-2">
            {s.fields.map((f) => (
              <div key={f.label} className="flex justify-between gap-s4 border-b border-border pb-s1">
                <dt className="text-p3 text-fg-40">{f.label}</dt>
                <dd className="text-p3 font-medium text-fg-80">{f.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-s4 flex flex-wrap items-center gap-s2">
            <span className="text-p3 text-fg-40">Cited for:</span>
            {s.citedFor.map((c) => (
              <span key={c} className="rounded-full bg-subtle px-s2 py-px text-p3 text-fg-60">
                {c}
              </span>
            ))}
            <Button
              variant="secondary"
              size="small"
              className="ml-auto"
              endIcon={<ArrowRightIcon className="text-[14px]" />}
            >
              View source
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}

/** Sources tab — formal citations supporting the profile. */
export function SourcesTab() {
  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-s4">
        <div>
          <h2 className="text-t5 font-bold text-fg-100">Sources</h2>
          <p className="mt-px text-p3 text-fg-60">3 sources support the facts on this profile</p>
        </div>
        <Button variant="primary" size="small" startIcon={<PlusIcon className="text-[16px]" />}>
          Add source
        </Button>
      </div>

      <div className="mt-s5 flex flex-col gap-s4">
        {SOURCES.map((s, i) => (
          <SourceCard key={i} s={s} />
        ))}
      </div>
    </div>
  );
}
