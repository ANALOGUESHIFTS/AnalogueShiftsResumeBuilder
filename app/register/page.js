import AuthenticationLayout from "@/components/application/layouts/authentication";
import RegisterPage from "./components";

export const metadata = {
  title: "Sign Up | AnalogueShifts Resume Builder",
  description: "The best Resume Builder",
};

export default function Page() {
  return (
    <AuthenticationLayout>
      <RegisterPage />
    </AuthenticationLayout>
  );
}
