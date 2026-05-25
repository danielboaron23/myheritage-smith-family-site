/**
 * Base path the app is served under (e.g. "/myheritage-smith-family-site" on
 * GitHub Project Pages). Empty for local dev / root deployments.
 * next/image and next/link prepend basePath automatically — use `asset()` only
 * for plain <img> / fetch / CSS url() references to files in /public.
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefix an absolute public path with the deployment base path. */
export function asset(path: string): string {
  if (!path.startsWith("/")) return path; // blob:, data:, http(s) — leave as-is
  return `${BASE_PATH}${path}`;
}
