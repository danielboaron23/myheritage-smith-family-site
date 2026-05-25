/**
 * Hero band — Figma node 1:14375 "heather" (146px) + title 1:15264.
 * Flat peach (#FFEBDE) full-bleed band with the site title (Title3, 40px Bold)
 * vertically centered and aligned to the content column's left edge.
 */
export function Hero() {
  return (
    <section className="w-full bg-[#ffebde]">
      <div className="mx-auto flex h-[120px] max-w-[1147px] items-center px-s4 sm:h-[146px] lg:px-0">
        <h1 className="text-[32px] font-bold leading-[36px] text-fg-100 sm:text-t3">
          Smith Family Site
        </h1>
      </div>
    </section>
  );
}
