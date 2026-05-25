import NextImage, { type ImageProps } from "next/image";
import { asset } from "@/lib/asset";

/**
 * next/image wrapper that prepends the deployment base path to string `src`
 * values (next/image does NOT do this automatically). Lets every component use
 * plain "/assets/..." paths and still work under a GitHub Pages sub-path.
 */
export function AppImage({ src, ...props }: ImageProps) {
  const finalSrc = typeof src === "string" ? asset(src) : src;
  return <NextImage src={finalSrc} {...props} />;
}
