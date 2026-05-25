import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

interface TextLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  /** Text size token. */
  size?: "p1" | "p2" | "p3";
  children: ReactNode;
}

/** Link component — colored text, optional icons, gap s1 (design.md `link`). */
export function TextLink({
  startIcon,
  endIcon,
  size = "p2",
  className,
  children,
  ...rest
}: TextLinkProps) {
  const sizeClass = size === "p1" ? "text-p1" : size === "p3" ? "text-p3" : "text-p2";
  return (
    <a
      className={cn(
        "inline-flex items-center gap-s1 text-link hover:text-link-hover hover:underline transition-colors cursor-pointer",
        sizeClass,
        className,
      )}
      {...rest}
    >
      {startIcon && <span className="inline-flex shrink-0">{startIcon}</span>}
      {children}
      {endIcon && <span className="inline-flex shrink-0">{endIcon}</span>}
    </a>
  );
}
