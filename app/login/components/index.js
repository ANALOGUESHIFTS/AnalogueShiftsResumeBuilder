"use client";
import Group from "@/public/images/login/group.png";
import Avatar from "@/public/images/login/avatar.png";
import LoadingComponent from "@/components/application/LoadingComponent";
import Image from "next/image";
import ApplicationLogo from "@/components/application/layout-components/application-logo";
import { useEffect, useState } from "react";
import { successToast } from "@/utils/success-toast";
import { errorToast } from "@/utils/error-toast";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function Login() {
  const [loading, setLoading] = useState(true); // To display "Verifying..." text while token is being checked
  const router = useRouter();
  const url = process.env.NEXT_PUBLIC_BACKEND_URL + "/login";

  useEffect(() => {
    // Check if the token exists in the cookies
    const token = Cookies.get("authToken");

    if (token) {
      // If token exists, authenticate with it
      authenticateWithToken(JSON.parse(token));
    } else {
      // If no token exists, redirect to external authentication
      window.location.href = "https://auth.analogueshifts.app?app=resume";
    }
  }, []);

  const authenticateWithToken = async (tokenData) => {
    setLoading(true);
    try {
      // Use the token directly for authentication
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${tokenData.token}`, // Pass the token in the Authorization header
        },
        body: JSON.stringify({
          device_token: crypto.randomUUID(),
        }),
      });
      const data = await res.json();
      if (data.success) {
        successToast("Login Successful", "Redirecting You to your Dashboard.");
        router.push("/my-resumes");
      } else {
        throw new Error("Token validation failed");
      }
    } catch (error) {
      // If the token fails, clear the cookie and redirect to the auth page
      Cookies.remove("authToken");
      errorToast(
        "Failed To Login",
        error?.response?.data?.message || error.message || "Failed To Login"
      );
      window.location.href = "https://auth.analogueshifts.app?app=resume";
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <LoadingComponent />}
      <main className="w-full h-max min-h-screen mx-auto flex justify-center items-center px-5 py-10">
        <section className="max-w-full lg:w-[1000px] md:w-[800px] md:flex-row flex-col flex justify-between items-center">
          <div className="lg:w-[450px] md:w-[350px] relative hidden md:flex justify-center items-center">
            <Image src={Group} alt="Group Image" className="absolute" />
            <Image src={Avatar} alt="Avatar Image" />
          </div>
          <div className="lg:w-[450px] md:w-[350px] flex flex-col">
            <ApplicationLogo />
            <div className="pt-11 w-full flex flex-col">
              <p className="font-medium text-lg text-tremor-content-grayText pb-4">
                Verifying...
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
