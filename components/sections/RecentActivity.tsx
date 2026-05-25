import Image from "next/image";
import type { ReactNode } from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

function B({ children }: { children: ReactNode }) {
  return <span className="font-bold text-fg-100">{children}</span>;
}

const PHOTOS = [1, 2, 3, 4, 5].map((n) => `/assets/images/activity-photo-${n}.png`);

interface Entry {
  date: string;
  body: ReactNode;
  photos?: boolean;
  link?: string;
}

const ENTRIES: Entry[] = [
  {
    date: "Mar 11, 2018",
    body: (
      <>
        <B>Christopher Smith</B> colorized and enhanced 4 photos in the album family
      </>
    ),
    photos: true,
    link: "Try MyHeritage InColor™",
  },
  {
    date: "Mar 10, 2018",
    body: (
      <>
        <B>Christopher Smith</B> confirmed a Smart Match™ of <B>Samuel Rusinek</B> with
        the family tree of Jeffrey Smoley
      </>
    ),
  },
  {
    date: "Mar 10, 2018",
    body: (
      <>
        <B>Yoav Naveh</B> updated the details of <B>Efrat Naveh</B> in family tree Naveh
        Family Tree
      </>
    ),
  },
  {
    date: "Feb 22, 2017",
    body: (
      <>
        <B>Gilad Japhet</B> updated the details of{" "}
        <B>Dr. Esther (Etia) Oren (born Pines), Elje Pines, Hirsh Pines, Tanya Pines</B>{" "}
        and 57 other people in family tree <B>Kovacs Family</B>
      </>
    ),
  },
  {
    date: "Feb 22, 2017",
    body: (
      <>
        <B>Gilad Japhet</B> added source <B>Washington, Spokane County Obituaries</B> and{" "}
        <B>Death Notices</B>
      </>
    ),
  },
];

/** Recent activity timeline — Figma 1:15226. Dated entries + a photo row + View more. */
export function RecentActivity() {
  return (
    <Card radius="r4" className="px-[34px] py-[26px]">
      <h2 className="uppercase-caps text-caps2 font-medium tracking-[1.4px] text-fg-60">
        Recent activity
      </h2>

      <div className="mt-s6 flex flex-col gap-s6">
        {ENTRIES.map((e, i) => (
          <div key={i} className="flex flex-col gap-s1">
            <p className="uppercase-caps text-caps3 font-medium tracking-[1px] text-fg-60">
              {e.date}
            </p>
            <p className="max-w-[521px] text-p2 leading-[24px] text-fg-80">{e.body}</p>

            {e.photos && (
              <div className="mt-s2 flex flex-wrap gap-s2">
                {PHOTOS.map((src, p) => (
                  <Image
                    key={p}
                    src={src}
                    alt=""
                    width={80}
                    height={80}
                    className="h-[80px] w-[80px] rounded-[4px] object-cover"
                  />
                ))}
              </div>
            )}

            {e.link && (
              <a
                href="#"
                className="mt-s2 inline-block text-p2 text-primary hover:underline"
              >
                {e.link}
              </a>
            )}
          </div>
        ))}
      </div>

      <div className="mt-s7 flex justify-center">
        <Button variant="secondary" size="small" className="min-w-[203px]">
          View more
        </Button>
      </div>
    </Card>
  );
}
