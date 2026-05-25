import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { EnhanceFlow } from "@/components/sections/enhance/EnhanceFlow";
import { ChevronLeft, SparklesIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Enhance photo — MyHeritage",
  description: "Bring blurry and low-quality family photos into focus.",
};

const BAND_GRADIENT =
  "linear-gradient(-70.89deg, rgb(255,216,183) 4.78%, rgb(255,255,255) 131.25%)";

export default function EnhancePage() {
  return (
    <>
      <Header activeNav="Photos" />

      <section className="w-full" style={{ backgroundImage: BAND_GRADIENT }}>
        <div className="mx-auto max-w-[1152px] px-s4 pb-s8 pt-s5 lg:px-0">
          <Link
            href="/"
            className="inline-flex items-center gap-s1 text-p2 text-fg-60 hover:text-fg-100"
          >
            <ChevronLeft className="text-[14px]" />
            Back to home
          </Link>

          <div className="mt-s4 flex items-center gap-s3">
            <span className="flex h-12 w-12 items-center justify-center rounded-r6 bg-primary/15 text-primary">
              <SparklesIcon className="text-[26px]" />
            </span>
            <div>
              <h1 className="text-t4 font-bold text-fg-100">Enhance</h1>
              <p className="text-p2 text-fg-60">
                Bring blurry and low-quality photos into sharp focus
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-surface">
        <div className="mx-auto max-w-[1152px] px-s4 py-s10 lg:px-0">
          <EnhanceFlow />
        </div>
      </section>

      <Footer />
    </>
  );
}
