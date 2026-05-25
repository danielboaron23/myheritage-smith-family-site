import { AppImage as Image } from "@/components/ui/AppImage";
import { Button } from "@/components/ui/Button";
import { FacebookIcon, TwitterXIcon } from "@/components/icons";

const COLUMNS = [
  {
    title: "Home",
    links: [
      "Sign up for free",
      "DNA test",
      "Family Tree",
      "Historical Records",
      "1950 U.S. Census",
      "Colorize photos",
      "Enhance photos",
      "Animate photos",
      "LiveMemory",
      "Family Tree Builder",
    ],
  },
  {
    title: "Support",
    links: [
      "Contact Us",
      "Privacy policy",
      "Terms and conditions",
      "Cookie info",
      "Accessibility",
      "US State Privacy Notice",
      "Price list",
      "Knowledge Base",
    ],
  },
  {
    title: "Blog",
    links: ["User Stories", "Become an affiliate"],
  },
];

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function SocialButton({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href="#"
      aria-label={label}
      className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-surface text-fg-100 shadow-card transition-transform hover:scale-105"
    >
      <span className="text-[18px]">{children}</span>
    </a>
  );
}

/** Dark site footer — Figma node 1:15309. */
export function Footer() {
  return (
    <footer className="w-full bg-grey-600 text-grey-300">
      <div className="mx-auto max-w-[1200px] px-s5 py-[38px]">
        <div className="flex flex-col gap-s10 lg:flex-row lg:gap-[66px]">
          {/* Left side */}
          <div className="flex w-full flex-col gap-[27px] lg:w-[305px] lg:shrink-0">
            <Image
              src="/assets/logos/myheritage-logo-white.svg"
              alt="MyHeritage"
              width={184}
              height={32}
              className="h-8 w-[184px]"
            />
            <div className="flex flex-wrap gap-[7px]">
              <Button variant="primary" tone="core" size="small">
                Go Premium
              </Button>
              <Button variant="primary" tone="dna" size="small">
                Order DNA Kit
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-x-s4 gap-y-s2">
              <SocialButton label="Facebook">
                <FacebookIcon className="text-social-facebook" />
              </SocialButton>
              <SocialButton label="X (Twitter)">
                <TwitterXIcon className="text-fg-100" />
              </SocialButton>
            </div>
            <p className="text-p3 text-grey-300">Copyright © 2026 MyHeritage Ltd.</p>
          </div>

          {/* Nav columns */}
          <nav className="flex flex-1 flex-wrap gap-x-[61px] gap-y-s7">
            {COLUMNS.map((col) => (
              <div key={col.title} className="flex flex-col">
                <h3 className="mb-s1 text-t7 text-white">{col.title}</h3>
                <ul className="flex flex-col">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#"
                        className="block text-p3 leading-[26px] text-grey-300 transition-colors hover:text-white"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* A–Z index */}
        <p className="mt-s8 text-p3 tracking-[0.3px] text-white/60">
          {ALPHABET.join(" ")}
        </p>
      </div>
    </footer>
  );
}
