import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ProfileHeader } from "@/components/sections/profile/ProfileHeader";
import { ProfileBody } from "@/components/sections/profile/ProfileBody";

export default function ProfilePage() {
  return (
    <>
      <Header activeNav="Family tree" />
      <ProfileHeader />
      <ProfileBody />
      <Footer />
    </>
  );
}
