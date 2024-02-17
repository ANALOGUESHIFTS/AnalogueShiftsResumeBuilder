import Certification from "@/app/resume-builder/components/CertificationSection";
import GuestLayout from "@/app/Layouts/GuestLayout";
import BuilderLayout from "@/app/resume-builder/components/BuilderLayout";

export const metadata = {
  title: "Resume Builder",
  description: "The best Resume Builder.",
};
export default function Page() {
  return (
    <GuestLayout>
      <BuilderLayout>
        <Certification />
      </BuilderLayout>
    </GuestLayout>
  );
}
