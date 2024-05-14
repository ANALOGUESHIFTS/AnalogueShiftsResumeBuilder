import GuestLayout from "@/app/components/layouts/GuestLayout";
import BuilderLayout from "@/app/resume-builder/components/BuilderLayout";
import Skills from "@/app/resume-builder/components/SkillsSection";

export const metadata = {
  title: "Resume Builder",
  description: "The best Resume Builder.",
};
export default function Page() {
  return (
    <GuestLayout>
      <BuilderLayout>
        <Skills />
      </BuilderLayout>
    </GuestLayout>
  );
}
