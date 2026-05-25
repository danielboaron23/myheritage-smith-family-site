import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** Radius token: r3 (4px, base card) or r4 (6px, CardLayout). */
  radius?: "r3" | "r4";
  /** Use a hairline border instead of a shadow (never both). */
  bordered?: boolean;
  /** Adds the depth-03 hover elevation on hover. */
  hoverable?: boolean;
  children: ReactNode;
}

export function Card({
  radius = "r3",
  bordered = false,
  hoverable = false,
  className,
  children,
  ...rest
}: CardProps) {
  return (
    <div
      className={cn(
        "bg-surface",
        radius === "r3" ? "rounded-r3" : "rounded-r4",
        bordered ? "border border-border" : "shadow-card",
        hoverable && "transition-shadow duration-200 hover:shadow-card-hover",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
