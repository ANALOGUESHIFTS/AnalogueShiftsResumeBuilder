import GuestLayout from "@/app/layouts/GuestLayout";
import BuilderLayout from "@/app/resume-builder/components/BuilderLayout";
import Finalize from "@/app/resume-builder/components/FinalizeSection";

export const metadata = {
  title: "Resume Builder",
  description: "The best Resume Builder.",
};
export default function Page() {
  return (
    <GuestLayout>
      <BuilderLayout>
        <Finalize />
      </BuilderLayout>
    </GuestLayout>
  );
}
