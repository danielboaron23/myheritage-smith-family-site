import { AppImage as Image } from "@/components/ui/AppImage";
import Link from "next/link";
import type { ReactNode } from "react";
import { ChevronDown, ChevronRight, MoreHorizontalIcon, SearchIcon } from "@/components/icons";

const HEADER_GRADIENT =
  "linear-gradient(-70.89deg, rgb(255,216,183) 4.78%, rgb(255,255,255) 131.25%)";

/** White pill action button used in the header strip. */
function PillButton({
  children,
  dropdown = false,
}: {
  children: ReactNode;
  dropdown?: boolean;
}) {
  return (
    <button className="inline-flex h-8 items-center gap-s2 rounded-pill bg-surface pl-s4 pr-s4 text-p2 text-fg-80 shadow-card transition-colors hover:bg-rowhover">
      <span className="whitespace-nowrap">{children}</span>
      {dropdown && (
        <span className="flex items-center gap-s2">
          <span className="h-4 w-px bg-border" />
          <ChevronDown className="text-[12px] text-fg-60" />
        </span>
      )}
    </button>
  );
}

function RoundIconButton({
  label,
  children,
  filled = true,
}: {
  label: string;
  children: ReactNode;
  filled?: boolean;
}) {
  return (
    <button
      aria-label={label}
      className={`inline-flex h-8 w-8 items-center justify-center rounded-full text-fg-80 transition-colors hover:bg-rowhover ${
        filled ? "bg-surface shadow-card" : ""
      }`}
    >
      <span className="text-[20px]">{children}</span>
    </button>
  );
}

/** Detail row: small icon + content. */
function DetailRow({ icon, children }: { icon: ReactNode; children: ReactNode }) {
  return (
    <div className="flex items-center gap-s1">
      <span className="flex h-5 w-5 shrink-0 items-center justify-center">{icon}</span>
      <p className="text-p2 text-fg-100">{children}</p>
    </div>
  );
}

const Dot = () => <span className="mx-s2 text-fg-40">•</span>;

/** Profile page header — Figma node 1:17802. Peach gradient banner. */
export function ProfileHeader() {
  return (
    <section className="w-full" style={{ backgroundImage: HEADER_GRADIENT }}>
      <div className="mx-auto max-w-[1152px] px-s4 pb-s8 pt-s5 lg:px-0">
        {/* Top row: breadcrumb + actions */}
        <div className="flex flex-wrap items-center justify-between gap-y-s3">
          <Link
            href="/"
            className="inline-flex items-center gap-s1 text-p2 text-fg-60 hover:text-fg-100"
          >
            Family tree
            <ChevronRight className="text-[12px]" />
          </Link>

          <div className="flex flex-wrap items-center gap-s2">
            <PillButton>Research this person</PillButton>
            <PillButton dropdown>View in tree</PillButton>
            <PillButton dropdown>Edit profile</PillButton>
            <RoundIconButton label="More">
              <MoreHorizontalIcon />
            </RoundIconButton>
            <RoundIconButton label="Search" filled={false}>
              <SearchIcon className="text-[18px]" />
            </RoundIconButton>
          </div>
        </div>

        {/* Profile row: avatar + details */}
        <div className="mt-s6 flex flex-col gap-s5 sm:flex-row sm:items-start">
          <div className="relative h-[136px] w-[136px] shrink-0">
            <Image
              src="/assets/images/profile-avatar.png"
              alt="Christopher Smith"
              width={136}
              height={136}
              className="h-[136px] w-[136px] rounded-full object-cover"
            />
            <Image
              src="/assets/icons/ribbon.svg"
              alt=""
              width={60}
              height={60}
              className="absolute -left-1 -top-1 h-[60px] w-[60px]"
            />
          </div>

          <div className="flex flex-col gap-s2 pt-s1">
            <h1 className="text-t4 font-bold text-fg-100">Christopher Smith</h1>

            <p className="text-p2 text-fg-100">
              Religious name: Elijah <Dot /> Former name: Samuel
            </p>

            <DetailRow
              icon={
                <Image src="/assets/icons/icon-relative.svg" alt="" width={20} height={20} />
              }
            >
              <a href="#" className="underline decoration-fg-40 underline-offset-2 hover:text-primary">
                Your great-grandmother
              </a>
            </DetailRow>

            <DetailRow
              icon={<Image src="/assets/icons/icon-birth.svg" alt="" width={20} height={20} />}
            >
              Born: 1922 <Dot /> Harrow, England
            </DetailRow>

            <DetailRow
              icon={<Image src="/assets/icons/icon-grave.svg" alt="" width={20} height={20} />}
            >
              Died: May 12 1998{" "}
              <span className="text-fg-80">(at age 76)</span> <Dot /> London <Dot /> Perished in
              the Holocaust{" "}
              <Image
                src="/assets/icons/icon-star.svg"
                alt="Holocaust"
                width={16}
                height={16}
                className="ml-s1 inline-block align-text-bottom"
              />
            </DetailRow>
          </div>
        </div>
      </div>
    </section>
  );
}
