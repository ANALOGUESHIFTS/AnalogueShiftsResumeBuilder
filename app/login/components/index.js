"use client";
import Group from "@/public/images/login/group.png";
import Avatar from "@/public/images/login/avatar.png";
import LoadingComponent from "@/components/application/LoadingComponent";
import Image from "next/image";
import ApplicationLogo from "@/components/application/layout-components/application-logo";
import { useEffect, useState } from "react";
import Link from "next/link";
import { successToast } from "@/utils/success-toast";
import { errorToast } from "@/utils/error-toast";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function Login() {
  const [loading, setLoading] = useState(true); // To display "Verifying..." text while checking token
  const router = useRouter();

  useEffect(() => {
    // Check if the token exists in the cookies
    const token = Cookies.get("analogueshifts");

    if (token) {
      // If token exists, redirect to /my-resumes
      router.push("/my-resumes");
    } else {
      // If no token exists, redirect to external authentication
      window.location.href = "https://auth.analogueshifts.app?app=resume";
    }
  }, [router]);

  return (
    <>
      {loading && <LoadingComponent />}
      <main className="w-full h-max min-h-screen mx-auto flex justify-center items-center px-5 py-10">
        <section className="max-w-full lg:w-[1000px] md:w-[800px] md:flex-row flex-col flex justify-between items-center">
          <div className="lg:w-[450px] md:w-[350px] relative hidden md:flex justify-center items-center">
            <Image src={Group} alt="Group Image" className="absolute" />
            <Image src={Avatar} alt="Avatar Image" />
          </div>
          <div className="lg:w-[450px] md:w/[350px] flex flex-col">
            <ApplicationLogo />
            <div className="pt-11 w-full flex flex-col">
              <p className="font-medium text-lg text-tremor-content-grayText pb-4">
                {loading ? "Verifying..." : "Redirecting..."}
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
