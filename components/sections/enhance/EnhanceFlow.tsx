"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ImageComparison } from "@/components/ui/image-comparison-slider";
import { Button } from "@/components/ui/Button";
import { UploadIcon, DownloadIcon, SparklesIcon, ImageIcon, CheckCircleIcon } from "@/components/icons";
import { cn } from "@/lib/cn";

const BEFORE_FILTER = "blur(2.6px) grayscale(0.4) contrast(0.9) brightness(0.96)";
const AFTER_FILTER = "contrast(1.08) saturate(1.18) brightness(1.02)";

const SAMPLES = [
  "/assets/images/activity-photo-3.png",
  "/assets/images/match-rachel.png",
  "/assets/images/creator-avatar.png",
];

type Step = "upload" | "processing" | "result";

export function EnhanceFlow() {
  const [step, setStep] = useState<Step>("upload");
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [dims, setDims] = useState<{ w: number; h: number } | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const objectUrlRef = useRef<string | null>(null);

  useEffect(() => {
    return () => {
      if (objectUrlRef.current) URL.revokeObjectURL(objectUrlRef.current);
    };
  }, []);

  const loadImage = useCallback((url: string) => {
    const img = new Image();
    img.onload = () => setDims({ w: img.naturalWidth, h: img.naturalHeight });
    img.src = url;
    setImageUrl(url);
    setStep("processing");
    window.setTimeout(() => setStep("result"), 1900);
  }, []);

  const handleFile = useCallback(
    (file: File | undefined) => {
      if (!file || !file.type.startsWith("image/")) return;
      if (objectUrlRef.current) URL.revokeObjectURL(objectUrlRef.current);
      const url = URL.createObjectURL(file);
      objectUrlRef.current = url;
      loadImage(url);
    },
    [loadImage],
  );

  const reset = () => {
    if (objectUrlRef.current) {
      URL.revokeObjectURL(objectUrlRef.current);
      objectUrlRef.current = null;
    }
    setImageUrl(null);
    setDims(null);
    setStep("upload");
  };

  const downloadEnhanced = () => {
    if (!imageUrl) return;
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.filter = AFTER_FILTER;
      ctx.drawImage(img, 0, 0);
      canvas.toBlob((blob) => {
        if (!blob) return;
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "enhanced-photo.png";
        a.click();
        URL.revokeObjectURL(url);
      }, "image/png");
    };
    img.src = imageUrl;
  };

  const viewerAspect = dims ? `${dims.w} / ${dims.h}` : "4 / 3";

  return (
    <div className="mx-auto w-full max-w-[820px]">
      {/* ---- Upload ---- */}
      {step === "upload" && (
        <div>
          <div
            onDragOver={(e) => {
              e.preventDefault();
              setIsDragOver(true);
            }}
            onDragLeave={() => setIsDragOver(false)}
            onDrop={(e) => {
              e.preventDefault();
              setIsDragOver(false);
              handleFile(e.dataTransfer.files?.[0]);
            }}
            onClick={() => inputRef.current?.click()}
            className={cn(
              "flex cursor-pointer flex-col items-center justify-center rounded-r7 border-2 border-dashed bg-surface px-s6 py-s12 text-center transition-colors",
              isDragOver ? "border-primary bg-primary/5" : "border-border-strong hover:border-fg-60",
            )}
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
              <UploadIcon className="text-[28px]" />
            </span>
            <p className="mt-s4 text-t6 font-bold text-fg-100">Drag &amp; drop your photo here</p>
            <p className="mt-s1 text-p2 text-fg-60">or click to browse — JPG or PNG</p>
            <span className="mt-s5">
              <Button variant="primary" size="medium" startIcon={<ImageIcon className="text-[18px]" />}>
                Browse files
              </Button>
            </span>
            <input
              ref={inputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => handleFile(e.target.files?.[0])}
            />
          </div>

          <div className="mt-s6 flex flex-col items-center gap-s3">
            <p className="text-p3 text-fg-60">No photo handy? Try a sample:</p>
            <div className="flex items-center gap-s3">
              {SAMPLES.map((src) => (
                <button
                  key={src}
                  onClick={() => loadImage(src)}
                  className="h-16 w-16 overflow-hidden rounded-r4 ring-1 ring-border transition-transform hover:scale-105 hover:ring-primary"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt="Sample photo" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ---- Processing ---- */}
      {step === "processing" && imageUrl && (
        <div className="flex flex-col items-center">
          <div
            className="relative w-full max-w-[620px] overflow-hidden rounded-r7 ring-1 ring-border"
            style={{ aspectRatio: viewerAspect, maxHeight: "60vh" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={imageUrl}
              alt="Enhancing"
              className="h-full w-full object-cover"
              style={{ filter: BEFORE_FILTER }}
            />
            <div className="absolute inset-0 bg-primary/5" />
            <div className="mh-scan-line absolute inset-x-0 h-[12%] bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
          </div>
          <div className="mt-s5 flex items-center gap-s2 text-t7 font-medium text-fg-100">
            <SparklesIcon className="animate-pulse text-[22px] text-primary" />
            Enhancing your photo…
          </div>
          <p className="mt-s1 text-p2 text-fg-60">Sharpening, reducing noise and restoring detail</p>
        </div>
      )}

      {/* ---- Result ---- */}
      {step === "result" && imageUrl && (
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-s2 text-success-strong">
            <CheckCircleIcon className="text-[20px] text-success" />
            <p className="text-p2 font-medium">Your photo has been enhanced</p>
          </div>

          <div
            className="mt-s4 w-full overflow-hidden rounded-r7 shadow-card ring-1 ring-border"
            style={{ aspectRatio: viewerAspect, maxHeight: "62vh" }}
          >
            <ImageComparison
              beforeImage={imageUrl}
              afterImage={imageUrl}
              beforeFilter={BEFORE_FILTER}
              afterFilter={AFTER_FILTER}
              showLabels
              className="h-full"
              altBefore="Original photo"
              altAfter="Enhanced photo"
            />
          </div>
          <p className="mt-s3 text-p3 text-fg-60">Drag the handle to compare before and after</p>

          <div className="mt-s5 flex flex-wrap items-center justify-center gap-s3">
            <Button
              variant="primary"
              size="medium"
              onClick={downloadEnhanced}
              startIcon={<DownloadIcon className="text-[18px]" />}
            >
              Download enhanced photo
            </Button>
            <Button variant="secondary" size="medium" onClick={reset}>
              Enhance another photo
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
