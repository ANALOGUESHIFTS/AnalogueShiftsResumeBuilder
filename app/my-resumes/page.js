import AuthenticatedLayout from "@/components/application/layouts/authenticated";
import Resumes from "./components/resumes-dashboard";

export const metadata = {
  title: "My Resumes | AnalogueShifts Resume Builder",
  description: "The best Resume Builder",
};

export default function Page() {
  return (
    <AuthenticatedLayout>
      <Resumes />
    </AuthenticatedLayout>
  );
}
