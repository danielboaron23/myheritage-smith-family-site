import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface BadgeProps {
  children: ReactNode;
  /** 'count' = rounded rect count chip; 'dot' = small circular badge. */
  shape?: "count" | "circle";
  className?: string;
}

/** Notification / match count badge (orange chip, white text). */
export function Badge({ children, shape = "count", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center bg-primary text-fg-on font-medium leading-none",
        shape === "count"
          ? "rounded-r5 px-[6px] py-[3px] text-[9px]"
          : "h-4 w-4 rounded-full text-[11px]",
        className,
      )}
    >
      {children}
    </span>
  );
}
