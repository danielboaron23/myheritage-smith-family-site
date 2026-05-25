import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "tertiary" | "destructive";
type Size = "large" | "medium" | "small" | "xsmall";
type Tone = "core" | "dna" | "health";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  /** Theme tone for filled/outline color (Core=amber, DNA=purple, Health=blue). */
  tone?: Tone;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  children: ReactNode;
}

// Size axis — height + padding + text style (design.md button-*).
const sizeClasses: Record<Size, string> = {
  large: "h-[52px] px-s7 py-s3 text-t6 gap-s2",
  medium: "h-[40px] px-s6 py-s2 text-t7 gap-s2",
  small: "h-[32px] px-s5 py-s1 text-p2 gap-s1",
  xsmall: "h-[28px] px-s4 py-s1 text-p3 gap-s1",
};

// Filled background per tone.
const toneFilled: Record<Tone, string> = {
  core: "bg-primary hover:bg-primary-hover active:bg-primary-active text-primary-on",
  dna: "bg-dna hover:brightness-110 text-primary-on",
  health: "bg-health hover:brightness-110 text-primary-on",
};

// Outline/ghost text + border per tone.
const toneOutline: Record<Tone, string> = {
  core: "text-primary border-primary hover:bg-primary/5",
  dna: "text-dna border-dna hover:bg-dna/5",
  health: "text-health border-health hover:bg-health/5",
};

export function Button({
  variant = "primary",
  size = "small",
  tone = "core",
  startIcon,
  endIcon,
  className,
  children,
  ...rest
}: ButtonProps) {
  const variantClasses: Record<Variant, string> = {
    primary: toneFilled[tone],
    secondary: cn("bg-transparent border", toneOutline[tone]),
    tertiary: cn("bg-transparent", toneOutline[tone].split(" ")[0], "hover:bg-primary/5"),
    destructive: "bg-transparent text-error hover:bg-error/5",
  };

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-pill font-sans font-normal tracking-[0.3px] whitespace-nowrap transition-colors duration-[180ms] ease-[var(--ease-standard)] cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 disabled:cursor-not-allowed disabled:opacity-60",
        sizeClasses[size],
        variantClasses[variant],
        className,
      )}
      {...rest}
    >
      {startIcon && <span className="inline-flex shrink-0">{startIcon}</span>}
      {children}
      {endIcon && <span className="inline-flex shrink-0">{endIcon}</span>}
    </button>
  );
}
