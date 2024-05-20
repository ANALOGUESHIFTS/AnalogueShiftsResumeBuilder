import GuestLayout from "@/app/components/layouts/GuestLayout";
import BuilderLayout from "@/app/resume-builder/components/BuilderLayout";
import Summary from "@/app/resume-builder/components/SummarySection";

export const metadata = {
  title: "Resume Builder",
  description: "The best Resume Builder.",
};
export default function Page() {
  return (
    <GuestLayout>
      <BuilderLayout>
        <Summary />
      </BuilderLayout>
    </GuestLayout>
  );
}
