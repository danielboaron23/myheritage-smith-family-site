"use client";

import { useState } from "react";
import { ProfileTabs, type ProfileTab } from "./ProfileTabs";
import { DetailsTab } from "./tabs/DetailsTab";
import { MatchesTab } from "./tabs/MatchesTab";
import { BiographyTab } from "./tabs/BiographyTab";
import { PhotosTab } from "./tabs/PhotosTab";
import { SourcesTab } from "./tabs/SourcesTab";

/** Interactive profile body — tab bar + active tab panel. */
export function ProfileBody() {
  const [tab, setTab] = useState<ProfileTab>("Details");

  return (
    <section className="w-full bg-surface">
      <div className="mx-auto max-w-[1152px] px-s4 pb-s12 pt-s5 lg:px-0">
        <ProfileTabs active={tab} onSelect={setTab} />

        <div className="mt-s6">
          {tab === "Details" && <DetailsTab />}
          {tab === "Matches" && <MatchesTab />}
          {tab === "Biography" && <BiographyTab />}
          {tab === "Photos" && <PhotosTab />}
          {tab === "Sources" && <SourcesTab />}
        </div>
      </div>
    </section>
  );
}
