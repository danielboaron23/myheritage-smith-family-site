import { AppImage as Image } from "@/components/ui/AppImage";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { PlusIcon } from "@/components/icons";

interface Photo {
  src: string;
  caption: string;
  year: string;
}

const PHOTOS: Photo[] = [
  { src: "/assets/images/profile-avatar.png", caption: "Christopher Smith", year: "c. 1930" },
  { src: "/assets/images/activity-photo-3.png", caption: "Studio portrait", year: "1940s" },
  { src: "/assets/images/match-rachel.png", caption: "Rachel Pompianska", year: "1918" },
  { src: "/assets/images/activity-photo-4.png", caption: "Wedding day", year: "1949" },
  { src: "/assets/images/match-paul-weiss.png", caption: "Paul Weiss", year: "1935" },
  { src: "/assets/images/activity-photo-1.png", caption: "Family gathering", year: "1952" },
  { src: "/assets/images/avatar-denise.png", caption: "Denise Susan Barnstable", year: "1962" },
  { src: "/assets/images/activity-photo-2.png", caption: "At the seaside", year: "1955" },
  { src: "/assets/images/match-miriam.png", caption: "Miriam Shaviv", year: "1928" },
  { src: "/assets/images/avatar-johannes.png", caption: "Johannes Doreen", year: "1910" },
  { src: "/assets/images/activity-photo-5.png", caption: "Portrait", year: "1947" },
  { src: "/assets/images/creator-avatar.png", caption: "Christopher Smith", year: "1965" },
  { src: "/assets/images/avatar-mother-hint.png", caption: "Unidentified portrait", year: "Undated" },
];

/** Photos tab — gallery of 13 family photos with hover captions. */
export function PhotosTab() {
  return (
    <Card radius="r4" bordered className="rounded-r7 p-[32px]">
      <div className="flex flex-wrap items-center justify-between gap-s4">
        <div>
          <h2 className="text-t5 font-bold text-fg-100">Photos</h2>
          <p className="mt-px text-p3 text-fg-60">13 photos of Christopher Smith and relatives</p>
        </div>
        <Button variant="primary" size="small" startIcon={<PlusIcon className="text-[16px]" />}>
          Add photos
        </Button>
      </div>

      <div className="mt-s5 grid grid-cols-2 gap-s3 sm:grid-cols-3 lg:grid-cols-4">
        {PHOTOS.map((p, i) => (
          <figure
            key={i}
            className="group relative aspect-square overflow-hidden rounded-r4 bg-subtle ring-1 ring-border"
          >
            <Image
              src={p.src}
              alt={p.caption}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 240px"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <figcaption className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-black/70 to-transparent p-s3 transition-transform duration-200 group-hover:translate-y-0">
              <p className="text-p3 font-medium text-fg-on">{p.caption}</p>
              <p className="text-[11px] text-white/70">{p.year}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </Card>
  );
}
