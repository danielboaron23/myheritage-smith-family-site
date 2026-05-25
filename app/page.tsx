import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Sidebar } from "@/components/sections/Sidebar";
import { MainContent } from "@/components/sections/MainContent";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <div className="mx-auto w-full max-w-[1147px] px-s4 pb-s10 pt-s6 lg:px-0">
        <div className="flex flex-col gap-[31px] lg:flex-row">
          <Sidebar />
          <MainContent />
        </div>
      </div>
      <Footer />
    </>
  );
}
