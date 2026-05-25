import { Avatar } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";
import {
  ChevronDown,
  SmartMatchIcon,
  RecordMatchIcon,
  DnaIcon,
  GiftIcon,
  InboxIcon,
  HelpIcon,
  GlobeIcon,
} from "@/components/icons";

/**
 * Dark utility strip (40px, bg #333) — Figma node 1:15333.
 * Site name menu · Smart/Record/DNA match counters · invitations · account ·
 * inbox · Help · language. Cells separated by #595959 hairlines.
 */
export function UtilityBar() {
  return (
    <div className="hidden h-10 w-full items-stretch justify-between bg-grey-600 text-grey-300 lg:flex">
      {/* Left group */}
      <div className="flex items-stretch">
        {/* Site name dropdown */}
        <button className="flex items-center gap-s2 border-r border-fg-60 pr-[13px] pl-[12px] text-[12px] hover:text-white">
          <span className="whitespace-nowrap">Web Site name</span>
          <ChevronDown className="text-[7px] text-grey-300" />
        </button>

        {/* Match counters */}
        <button
          className="relative flex items-center border-r border-fg-60 px-[13px] hover:bg-white/5"
          aria-label="Review 24 new Smart Matches"
        >
          <SmartMatchIcon className="text-[20px] text-grey-300" />
          <span className="ml-[6px]">
            <Badge>24</Badge>
          </span>
        </button>
        <button
          className="relative flex items-center border-r border-fg-60 px-[13px] hover:bg-white/5"
          aria-label="Confirm 448 Record Matches"
        >
          <RecordMatchIcon className="text-[20px] text-grey-300" />
          <span className="ml-[6px]">
            <Badge>448</Badge>
          </span>
        </button>
        <button
          className="flex items-center border-r border-fg-60 px-[13px] hover:bg-white/5"
          aria-label="Review new DNA Matches"
        >
          <DnaIcon className="text-[20px] text-grey-300" />
        </button>
      </div>

      {/* Right group */}
      <div className="flex items-stretch pr-[15px]">
        <button
          className="relative flex items-center border-l border-fg-60 px-[16px] hover:bg-white/5"
          aria-label="Invitations"
        >
          <GiftIcon className="text-[22px] text-grey-300" />
          <span className="absolute right-[8px] top-[4px]">
            <Badge shape="circle">1</Badge>
          </span>
        </button>

        <button className="flex items-center gap-s2 border-l border-fg-60 pl-[13px] pr-[12px] hover:bg-white/5">
          <Avatar src="/assets/images/account-avatar.jpg" alt="Account" size={26} />
          <span className="max-w-[120px] truncate text-[12px]" dir="auto">
            לולו תהילה פיינסילבר
          </span>
          <ChevronDown className="text-[7px] text-grey-300" />
        </button>

        <button
          className="flex items-center border-l border-fg-60 px-[13px] hover:bg-white/5"
          aria-label="Inbox"
        >
          <InboxIcon className="text-[18px] text-grey-300" />
        </button>

        <button className="flex items-center gap-s2 border-l border-fg-60 pl-[13px] pr-[12px] hover:bg-white/5">
          <HelpIcon className="text-[17px] text-grey-300" />
          <span className="text-[12px]">Help</span>
          <ChevronDown className="text-[7px] text-grey-300" />
        </button>

        <button className="flex items-center gap-s2 border-l border-fg-60 pl-[13px] pr-[12px] hover:bg-white/5">
          <GlobeIcon className="text-[17px] text-grey-300" />
          <span className="text-[12px]">English</span>
        </button>
      </div>
    </div>
  );
}
