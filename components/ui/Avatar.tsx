import { AppImage as Image } from "@/components/ui/AppImage";
import { cn } from "@/lib/cn";

interface AvatarProps {
  src?: string;
  alt?: string;
  /** Pixel diameter. */
  size?: number;
  /** Fallback initials when no src. */
  initials?: string;
  /** Demographic ring color: 'male' | 'female' | 'none'. */
  marker?: "male" | "female" | "none";
  className?: string;
}

export function Avatar({
  src,
  alt = "",
  size = 40,
  initials,
  marker = "none",
  className,
}: AvatarProps) {
  const ring =
    marker === "male"
      ? "ring-2 ring-male"
      : marker === "female"
        ? "ring-2 ring-female"
        : "ring-1 ring-border";

  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-subtle text-fg-60",
        ring,
        className,
      )}
      style={{ width: size, height: size }}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          width={size}
          height={size}
          className="h-full w-full object-cover"
        />
      ) : (
        <span className="text-p3 font-medium">{initials}</span>
      )}
    </span>
  );
}
