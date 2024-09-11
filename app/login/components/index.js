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
  const [loading, setLoading] = useState(true); // To display "Verifying..." text while fetching user data
  const [userData, setUserData] = useState(null); // State to store user details
  const router = useRouter();

  useEffect(() => {
    // Check if the token exists in the cookies
    const token = Cookies.get("analogueshifts");

    if (token) {
      // If token exists, fetch user data with it
      fetchUserData(token); // Pass the token as a string
    } else {
      // If no token exists, redirect to external authentication
      window.location.href = "https://auth.analogueshifts.app?app=resume";
    }
  }, []);

  const fetchUserData = async (token) => {
    try {
      const res = await fetch("https://api.analogueshifts.app/api/user", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`, // Pass the token in the Authorization header
        },
      });

      if (!res.ok) throw new Error("Failed to fetch user information");

      const data = await res.json();
      setUserData(data); // Store the fetched user details in state

      successToast("User Information Retrieved Successfully");
      // Redirect to the dashboard or another route if needed
      router.push("/my-resumes");

    } catch (error) {
      // Handle any errors by clearing the token and redirecting to auth page
      Cookies.remove("authToken");
      errorToast(
        "Failed To Retrieve User Information",
        error.message || "Failed to fetch user data"
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
          <div className="lg:w-[450px] md:w/[350px] flex flex-col">
            <ApplicationLogo />
            <div className="pt-11 w-full flex flex-col">
              <p className="font-medium text-lg text-tremor-content-grayText pb-4">
                {loading ? "Verifying..." : `Welcome, ${userData?.name || "User"}`}
              </p>
              {/* Additional UI to display user information can be added here */}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
