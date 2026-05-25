import { AppImage as Image } from "@/components/ui/AppImage";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

const AT_A_GLANCE = [
  { label: "Born", value: "1922 · Harrow, England" },
  { label: "Died", value: "May 12 1998 · London (age 76)" },
  { label: "Also known as", value: "Elijah (religious) · Samuel (former)" },
  { label: "Spouse", value: "Charles George Barnstable (m. 1949)" },
  { label: "Children", value: "Ian Charles · Denise Susan" },
  { label: "Places", value: "Harrow · Chelsea · London" },
];

/** Biography tab — editorial article + an at-a-glance aside. */
export function BiographyTab() {
  return (
    <div className="flex flex-col gap-s5 lg:flex-row lg:items-start">
      {/* Article */}
      <Card radius="r4" bordered className="min-w-0 flex-1 rounded-r7 p-[32px]">
        <div className="flex items-start justify-between gap-s4">
          <h2 className="text-t5 font-bold text-fg-100">Biography</h2>
          <Button variant="secondary" size="small">
            Edit biography
          </Button>
        </div>

        <p className="mt-s5 text-p1 text-fg-80">
          Christopher Smith (1922–1998) was born in Harrow, on the north-western edge of
          London, in the early years between the wars. Known within the family by the
          religious name <span className="font-medium text-fg-100">Elijah</span> and earlier
          as <span className="font-medium text-fg-100">Samuel</span>, Christopher grew up in a
          close Middlesex household and remained tied to the city for the whole of a long life.
        </p>

        <h3 className="mt-s7 text-t6 font-bold text-fg-100">Early life in Harrow</h3>
        <p className="mt-s3 text-p2 text-fg-80">
          The Harrow of Christopher&apos;s childhood was a town still half-rural, its lanes
          giving way to the terraces that would soon join it to greater London. Census and
          parish records place the Smith family in the parish through the 1920s and 1930s,
          and it is here that the earliest documented chapters of Christopher&apos;s life
          begin — the births, schooling and the small civic details that historical records
          preserve.
        </p>

        <blockquote className="my-s6 border-l-4 border-primary bg-warning-surface/40 py-s3 pl-s5 pr-s4 text-t6 italic text-fg-80">
          “A family is a story told across generations — each record we recover adds another
          line to it.”
        </blockquote>

        <h3 className="mt-s2 text-t6 font-bold text-fg-100">Marriage and family</h3>
        <p className="mt-s3 text-p2 text-fg-80">
          On 11 November 1949 Christopher married{" "}
          <span className="font-medium text-fg-100">Charles George Barnstable</span> (1921–2009).
          The couple settled in Chelsea, where they raised two children:{" "}
          <span className="font-medium text-fg-100">Ian Charles Barnstable</span>, born in 1950,
          and <span className="font-medium text-fg-100">Denise Susan Barnstable</span>, born in
          1957. The Barnstable line is well represented in surviving records, and several Smart
          Matches connect Christopher to relatives documented in other family trees.
        </p>

        <h3 className="mt-s7 text-t6 font-bold text-fg-100">Later years in London</h3>
        <p className="mt-s3 text-p2 text-fg-80">
          Christopher spent the later decades in London and died there on 12 May 1998, at the
          age of 76. Ten saved records — among them the 1920 United States Federal Census, the
          U.S. Public Records Index and German civil death registers — continue to fill in the
          details of a life that spanned most of the twentieth century.
        </p>

        <p className="mt-s5 text-p3 text-fg-40">
          This biography is generated from connected records and family-tree data. Edit it any
          time to add memories, sources and stories.
        </p>
      </Card>

      {/* At a glance */}
      <aside className="w-full lg:w-[320px] lg:shrink-0">
        <Card radius="r4" bordered className="rounded-r7 p-s5">
          <div className="flex flex-col items-center text-center">
            <Image
              src="/assets/images/profile-avatar.png"
              alt="Christopher Smith"
              width={96}
              height={96}
              className="h-24 w-24 rounded-full object-cover ring-1 ring-border"
            />
            <p className="mt-s3 text-t7 font-bold text-fg-100">Christopher Smith</p>
            <p className="text-p3 text-fg-60">Your great-grandmother</p>
          </div>

          <div className="my-s5 h-px bg-border" />

          <h3 className="uppercase-caps text-caps2 font-medium tracking-[1.4px] text-fg-60">
            At a glance
          </h3>
          <dl className="mt-s4 flex flex-col gap-s4">
            {AT_A_GLANCE.map((item) => (
              <div key={item.label} className="flex flex-col gap-px">
                <dt className="text-p3 text-fg-40">{item.label}</dt>
                <dd className="text-p2 text-fg-80">{item.value}</dd>
              </div>
            ))}
          </dl>
        </Card>
      </aside>
    </div>
  );
}
