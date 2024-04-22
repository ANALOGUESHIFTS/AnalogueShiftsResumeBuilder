import GuestLayout from "@/app/layouts/GuestLayout";
import BuilderLayout from "@/app/resume-builder/components/BuilderLayout";
import Education from "@/app/resume-builder/components/EducationSection";

export const metadata = {
  title: "Resume Builder",
  description: "The best Resume Builder.",
};
export default function Page() {
  return (
    <GuestLayout>
      <BuilderLayout>
        <Education />
      </BuilderLayout>
    </GuestLayout>
  );
}
