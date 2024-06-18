import GuestLayout from "@/components/application/layouts/guest";
import BuilderLayout from "@/app/resume-builder/components/builder-layout";
import Summary from "./components/summary-form";

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
