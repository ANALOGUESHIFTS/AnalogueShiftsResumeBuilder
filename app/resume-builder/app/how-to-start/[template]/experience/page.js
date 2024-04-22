import GuestLayout from "@/app/layouts/GuestLayout";
import BuilderLayout from "@/app/resume-builder/components/BuilderLayout";
import Experience from "@/app/resume-builder/components/ExperienceSection";

export const metadata = {
  title: "Resume Builder",
  description: "The best Resume Builder.",
};
export default function Page() {
  return (
    <GuestLayout>
      <BuilderLayout>
        <Experience />
      </BuilderLayout>
    </GuestLayout>
  );
}
