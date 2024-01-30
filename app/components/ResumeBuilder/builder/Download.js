"use client";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import AdvancedResumeTemplate from "../../templates/resume/Advanced";
import ProfessionalResumeTemplate from "../../templates/resume/Professional";

export default function DownloadResume() {
  const [data, setData] = useState(null);
  const router = useRouter();
  const templates = {
    advanced: <AdvancedResumeTemplate data={data ? data : {}} />,
    professional: <ProfessionalResumeTemplate data={data ? data : {}} />,
  };

  useEffect(() => {
    let storedData = JSON.parse(localStorage.getItem("analogueshifts"));
    if (!storedData) {
      router.push("/login");
    } else {
      const resumeData = Cookies.get("userData");
      if (resumeData) {
        setData(JSON.parse(resumeData));
      }
    }
  }, []);

  useEffect(() => {
    if (data) {
      window.print();
    }
  }, [data]);

  return (
    <>
      {data && (
        <div className="w-full h-max p-5 flex justify-center items-center bg-gray-300">
          {templates[data.template]}
        </div>
      )}
    </>
  );
}
