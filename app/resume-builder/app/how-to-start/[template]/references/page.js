import GuestLayout from "@/app/Layouts/GuestLayout";
import BuilderLayout from "@/app/resume-builder/components/BuilderLayout";
import References from "@/app/resume-builder/components/ReferencesSection";

export const metadata = {
  title: "Resume Builder",
  description: "The best Resume Builder.",
};
export default function Page() {
  return (
    <GuestLayout>
      <BuilderLayout>
        <References />
      </BuilderLayout>
    </GuestLayout>
  );
}
