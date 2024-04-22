"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Cookies from "js-cookie";
import AuthenticatedLayout from "@/app/layouts/AuthenticatedLayout";
import { resumeTemplates } from "@/app/resources/resume/data";

export default function Resumes() {
  const [data, setData] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const resumeData = Cookies.get("userData");
    let storedData = Cookies.get("analogueshifts");
    if (resumeData) {
      setData(JSON.parse(resumeData));
    }
    if (storedData) {
      setUser(JSON.parse(Cookies.get("analogueshifts")));
    }
  }, []);
  return (
    <AuthenticatedLayout>
      <main className="w-full h-auto pt-[80px]">
        <main className="py-10 bg-[rgb(43,58,69)] px-10 max-[800px]:px-5">
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
          <div className="w-full flex flex-wrap gap-x-5 gap-y-5">
            {data && (
              <div className="h-max p-4 w-[450px] max-[1150px]:w-[calc(50%-16px)] max-[650px]:w-full bg-[#f8f9fb] rounded-lg resume-template-link">
                <div className="w-full h-[500px] max-[900px]:h-max relative template-img-box">
                  <div className="w-full h-full max-[900px]:h-max rounded-lg overflow-y-scroll scroll-hidden">
                    {resumeTemplates
                      .filter((item) => item.id === data.template)[0]
                      .component(data)}
                  </div>
                  <Link
                    href={`/resume-builder/app/how-to-start/${data.template}/finish`}
                    className="link-button absolute  opacity-0 translate-y-2 duration-300 bottom-4 left-4 w-[calc(100%-32px)] py-3 hover:bg-AnalogueShiftsTextColor/80 flex justify-center rounded-lg bg-AnalogueShiftsTextColor text-sm font-medium text-black/80"
                  >
                    View Resume
                  </Link>
                </div>
              </div>
            )}
          </div>
        </main>
      </main>
    </AuthenticatedLayout>
  );
}
