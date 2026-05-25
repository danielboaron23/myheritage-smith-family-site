import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  /** Visual family: box (bordered) or line (underline only). */
  variant?: "box" | "line";
  /** Box-medium (40px input) or box-large (50px input). Ignored for line. */
  fieldSize?: "medium" | "large";
}

/**
 * Text field with a CSS-only floating label (design.md textfield-*).
 * Label rests vertically centered, floats + shrinks (p2 -> meta) on focus or
 * when filled. Uses an empty placeholder (" ") so `placeholder-shown` drives it.
 *   - box:  bordered r3 wrapper (Box-Medium / Box-Large)
 *   - line: underline only (most compact) — used in the sidebar search
 */
export function TextField({
  label,
  variant = "box",
  fieldSize = "medium",
  id,
  className,
  ...rest
}: TextFieldProps) {
  const inputId = id ?? `tf-${label.replace(/\s+/g, "-").toLowerCase()}`;

  if (variant === "line") {
    return (
      <div className={cn("relative h-[48px]", className)}>
        <input
          id={inputId}
          placeholder=" "
          className={cn(
            "peer absolute inset-x-0 bottom-0 top-[18px] w-full rounded-none border-0 border-b border-border-strong bg-transparent px-0 text-p2 font-medium text-fg-80",
            "outline-none transition-colors placeholder:text-transparent",
            "hover:border-fg-60 focus:border-fg-60",
          )}
          {...rest}
        />
        <label
          htmlFor={inputId}
          className={cn(
            "pointer-events-none absolute left-0 top-[22px] text-p2 text-fg-60 transition-all duration-150",
            "peer-focus:top-0 peer-focus:text-[11px] peer-focus:leading-none peer-focus:text-fg-80",
            "peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:leading-none peer-[:not(:placeholder-shown)]:text-fg-80",
          )}
        >
          {label}
        </label>
      </div>
    );
  }

  const inputHeight = fieldSize === "large" ? "h-[50px]" : "h-[40px]";
  return (
    <div className={cn("relative", className)}>
      <input
        id={inputId}
        placeholder=" "
        className={cn(
          "peer w-full rounded-r3 border border-border-strong bg-surface px-[13px] text-p2 font-medium text-fg-80",
          "outline-none transition-colors placeholder:text-transparent",
          "hover:border-fg-60 focus:border-fg-60",
          inputHeight,
        )}
        {...rest}
      />
      <label
        htmlFor={inputId}
        className={cn(
          "pointer-events-none absolute left-[13px] top-1/2 -translate-y-1/2 bg-surface px-[2px] text-p2 text-fg-60 transition-all duration-150",
          "peer-focus:top-0 peer-focus:text-[11px] peer-focus:leading-none peer-focus:text-fg-80",
          "peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:leading-none peer-[:not(:placeholder-shown)]:text-fg-80",
        )}
      >
        {label}
      </label>
    </div>
  );
}
