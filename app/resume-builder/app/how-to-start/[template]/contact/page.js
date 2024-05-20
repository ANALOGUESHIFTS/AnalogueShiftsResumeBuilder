import ContactSection from "@/app/resume-builder/components/ContactSection";
import GuestLayout from "@/app/components/layouts/GuestLayout";
import BuilderLayout from "@/app/resume-builder/components/BuilderLayout";

export const metadata = {
  title: "Resume Builder",
  description: "The best Resume Builder.",
};
export default function Page() {
  return (
    <GuestLayout>
      <BuilderLayout>
        <ContactSection />
      </BuilderLayout>
    </GuestLayout>
  );
}
