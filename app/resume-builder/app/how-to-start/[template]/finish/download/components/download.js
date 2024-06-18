"use client";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function DownloadResume() {
  const [data, setData] = useState(null);
  const router = useRouter();

  useEffect(() => {
    let storedData = JSON.parse(Cookies.get("analogueshifts"));
    if (!storedData) {
      router.push("/login");
    } else {
      const resumeData = localStorage.getItem("resumeInfo");
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
        <div className="w-full max-w-full overflow-x-hidden p-5 h-max flex lg:justify-center items-center bg-gray-300">
          {/* Render The User Resume */}
        </div>
      )}
    </>
  );
}
