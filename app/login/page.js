import AuthenticationLayout from "@/components/application/layouts/authentication";
import LoginPage from "./components";

export const metadata = {
  title: "Login | AnalogueShifts Resume Builder",
  description: "The best Resume Builder",
};

export default function Page() {
  return (
    <AuthenticationLayout>
      <LoginPage />
    </AuthenticationLayout>
  );
}
