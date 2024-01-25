"use client";
import { useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Account() {
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
          Welcome Back, {user?.name}!
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
            className="w-max px-2 border-b pb-1 text-white  hover:text-white/80 text-sm font-medium"
          >
            My Account
          </Link>
          <Link
            href="/dashboard/resume"
            className="w-max px-2 pb-1 text-white  hover:text-white/80 text-sm font-medium"
          >
            My Resumes
          </Link>
        </div>
      </main>
      <main className="mb-[100px] py-10 bg-[rgb(240,240,240)] px-10 max-[800px]:px-5 flex flex-col items-center gap-5">
        <p className="pb-5 text-xl font-bold text-black/80">
          Account Information
        </p>
        <section className="max-w-[90%] w-[500px] h-max bg-white shadow-2xl rounded-xl py-6 px-8 flex flex-col gap-4">
          <div className="w-full flex flex-col gap-1.5">
            <p className="text-sm font-medium text-black/90">Your ID</p>
            <div className="p-2.5 flex justify-center w-full border bg-white rounded-lg">
              <p className="text-sm font-semibold text-black/90 ">{user?.id}</p>
            </div>
          </div>
          <div className="w-full flex flex-col gap-1.5">
            <p className="text-sm font-medium text-black/90">Email</p>
            <div className="p-2.5 flex justify-center w-full border bg-white rounded-lg">
              <p className="text-sm font-semibold text-black/90 ">
                {user?.email}
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col gap-1.5">
            <p className="text-sm font-medium text-black/90">Name</p>
            <div className="p-2.5 flex justify-center w-full border bg-white rounded-lg">
              <p className="text-sm font-semibold text-black/90 ">
                {user?.name}
              </p>
            </div>
          </div>
          <p className="pt-3 text-2xl text-black/80 font-bold text-center">
            Plan Info
          </p>
        </section>
      </main>
    </main>
  );
}
