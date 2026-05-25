import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProfileHeader } from "@/components/sections/profile/ProfileHeader";
import { ProfileTabs } from "@/components/sections/profile/ProfileTabs";
import { Facts } from "@/components/sections/profile/Facts";
import { ConsistencyIssue } from "@/components/sections/profile/ConsistencyIssue";
import { TrailMap } from "@/components/sections/profile/TrailMap";
import { SavedRecords } from "@/components/sections/profile/SavedRecords";
import { ImmediateFamily } from "@/components/sections/profile/ImmediateFamily";

export default function ProfilePage() {
  return (
    <>
      <Header activeNav="Family tree" />
      <ProfileHeader />

      <section className="w-full bg-surface">
        <div className="mx-auto max-w-[1152px] px-s4 pb-s12 pt-s5 lg:px-0">
          <ProfileTabs />

          <div className="mt-s6 flex flex-col gap-s5 lg:flex-row lg:items-start">
            {/* Left column */}
            <div className="flex min-w-0 flex-1 flex-col gap-s5">
              <Facts />
              <ConsistencyIssue />
              <TrailMap />
            </div>

            {/* Right column */}
            <div className="flex w-full flex-col gap-s5 lg:w-[384px] lg:shrink-0">
              <SavedRecords />
              <ImmediateFamily />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
