"use client";
import { useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Resumes() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, []);

  return (
    <main className="w-full">
      <main className=" mt-[80px] py-10 bg-[rgb(43,58,69)] px-10 max-[800px]:px-5">
        <p className="pb-5 text-base font-semibold text-white">
          Welcome Back, {user.name}!
        </p>
        <p className="pb-10 font-bold text-white text-xl">
          Edit and Download Professional resumes to get your dream Job!
        </p>
        <div className="w-full flex flex-wrap">
          <Link
            href="/dashboard"
            className="w-max  px-2 pb-1 text-white  hover:text-white/80 text-sm font-medium"
          >
            Dashboard
          </Link>
          <Link
            href="/dashboard/account"
            className="w-max px-2 pb-1 text-white  hover:text-white/80 text-sm font-medium"
          >
            My Account
          </Link>
          <Link
            href="/dashboard/resume"
            className="w-max px-2 pb-1 border-b text-white  hover:text-white/80 text-sm font-medium"
          >
            My Resumes
          </Link>
        </div>
      </main>
      <main className="mb-[100px] py-10 bg-[rgb(240,240,240)] px-10 max-[800px]:px-5 flex flex-col items-center gap-5">
        <p className="pb-5 w-full text-sm font-bold text-black/70">
          Your Resumes
        </p>
      </main>
    </main>
  );
}
