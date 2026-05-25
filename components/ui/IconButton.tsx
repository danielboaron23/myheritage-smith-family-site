import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Shape = "transparent" | "circle" | "square";
type IconType = "gray" | "colored" | "outline";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  shape?: Shape;
  iconType?: IconType;
  /** Box size in px (40 = medium, 48 = large). */
  size?: number;
  /** Icon glyph size in px. */
  iconSize?: number;
  children: ReactNode;
  "aria-label": string;
}

export function IconButton({
  shape = "transparent",
  iconType = "gray",
  size = 40,
  iconSize = 20,
  className,
  children,
  ...rest
}: IconButtonProps) {
  const radius =
    shape === "circle" ? "rounded-full" : shape === "square" ? "rounded-r4" : "rounded-full";
  const color = iconType === "colored" ? "text-primary" : "text-fg-60";
  const border = iconType === "outline" ? "border border-[rgba(0,0,0,0.2)]" : "";

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center transition-colors duration-150 hover:bg-rowhover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 cursor-pointer",
        radius,
        color,
        border,
        className,
      )}
      style={{ width: size, height: size }}
      {...rest}
    >
      <span
        className="inline-flex items-center justify-center"
        style={{ width: iconSize, height: iconSize, fontSize: iconSize }}
      >
        {children}
      </span>
    </button>
  );
}
