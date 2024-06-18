import GuestLayout from "@/components/application/layouts/guest";
import BuilderLayout from "@/app/resume-builder/components/builder-layout";
import Experience from "./components/experience-form";

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
