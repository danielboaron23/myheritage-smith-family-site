"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import { cn } from "@/lib/cn";

export interface ImageComparisonProps {
  beforeImage: string;
  afterImage: string;
  altBefore?: string;
  altAfter?: string;
  /** Optional CSS filter applied to the before / after layers (used to simulate enhancement). */
  beforeFilter?: string;
  afterFilter?: string;
  /** Initial slider position (0–100). */
  initial?: number;
  /** When false, the slider is a fixed, non-draggable divider (preview mode). */
  interactive?: boolean;
  /** Smaller handle + bar for compact card previews. */
  compact?: boolean;
  /** Show the Before / After corner labels. */
  showLabels?: boolean;
  className?: string;
}

/**
 * Before/after image comparison slider. Drag the handle to reveal the "after"
 * image. (Adapted from the provided 21st.dev component — drag behavior intact,
 * extended with TypeScript types, per-layer filters and compact/preview modes.)
 */
export const ImageComparison = ({
  beforeImage,
  afterImage,
  altBefore = "Before",
  altAfter = "After",
  beforeFilter,
  afterFilter,
  initial = 50,
  interactive = true,
  compact = false,
  showLabels = false,
  className,
}: ImageComparisonProps) => {
  const [sliderPosition, setSliderPosition] = useState(initial);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!isDragging || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      let newPosition = ((clientX - rect.left) / rect.width) * 100;
      newPosition = Math.max(0, Math.min(100, newPosition));
      setSliderPosition(newPosition);
    },
    [isDragging],
  );

  const startDrag = () => interactive && setIsDragging(true);
  const handleMouseUp = useCallback(() => setIsDragging(false), []);
  const handleMouseMove = (e: React.MouseEvent) => handleMove(e.clientX);
  const handleTouchMove = (e: React.TouchEvent) => handleMove(e.touches[0].clientX);

  useEffect(() => {
    window.addEventListener("mouseup", handleMouseUp);
    return () => window.removeEventListener("mouseup", handleMouseUp);
  }, [handleMouseUp]);

  return (
    <div
      ref={containerRef}
      className={cn("relative w-full select-none overflow-hidden", className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseUp}
    >
      {/* After image (top layer, revealed by clip-path) */}
      <div
        className="absolute left-0 top-0 h-full w-full overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img
          src={afterImage}
          alt={altAfter}
          draggable={false}
          className="h-full w-full object-cover object-center"
          style={afterFilter ? { filter: afterFilter } : undefined}
        />
        {showLabels && (
          <span className="absolute left-2 top-2 rounded-full bg-success/90 px-2 py-0.5 text-[11px] font-medium text-white">
            After
          </span>
        )}
      </div>

      {/* Before image (bottom layer) */}
      <img
        src={beforeImage}
        alt={altBefore}
        draggable={false}
        className="block h-full w-full object-cover object-center"
        style={beforeFilter ? { filter: beforeFilter } : undefined}
      />
      {showLabels && (
        <span
          className="absolute right-2 top-2 rounded-full bg-black/55 px-2 py-0.5 text-[11px] font-medium text-white transition-opacity"
          style={{ opacity: sliderPosition < 88 ? 1 : 0 }}
        >
          Before
        </span>
      )}

      {/* Slider handle */}
      <div
        className={cn(
          "absolute bottom-0 top-0 flex items-center justify-center bg-white/85",
          compact ? "w-1" : "w-1.5",
          interactive ? "cursor-ew-resize" : "pointer-events-none",
        )}
        style={{
          left: `calc(${sliderPosition}% - ${compact ? "0.125rem" : "0.375rem"})`,
        }}
        onMouseDown={startDrag}
        onTouchStart={startDrag}
      >
        <div
          className={cn(
            "flex items-center justify-center rounded-full bg-white shadow-md transition-all duration-200 ease-in-out",
            compact ? "h-7 w-7" : "h-12 w-12",
            isDragging && "scale-110 shadow-xl",
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={compact ? 14 : 24}
            height={compact ? 14 : 24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-fg-80"
          >
            <line x1="15" y1="18" x2="9" y2="12" />
            <line x1="9" y1="6" x2="15" y2="12" />
            <line x1="9" y1="18" x2="15" y2="12" transform="translate(6 0)" />
          </svg>
        </div>
      </div>
    </div>
  );
};
