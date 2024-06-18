"use client";
import { useEffect, useState } from "react";
import Tiptap from "@/components/application/Tiptap";
import { useRouter, usePathname } from "next/navigation";

export default function Summary() {
  const router = useRouter();
  const pathname = usePathname();
  const chosenTemplate = pathname.split("/")[4];
  const [summary, setSummary] = useState("");
  const [initialData, setInitialData] = useState("");

  // Continue
  const handleContinue = () => {
    let storedData = localStorage.getItem("resumeInfo");
    if (storedData) {
      localStorage.setItem(
        "resumeInfo",
        JSON.stringify({
          ...JSON.parse(storedData),
          summaryData: summary,
        })
      );
    } else {
      localStorage.setItem(
        "resumeInfo",
        JSON.stringify({
          summaryData: summary,
        })
      );
    }
    router.push(
      `/resume-builder/app/how-to-start/${chosenTemplate}/references`
    );
  };

  // Go Back
  const handleGoBack = () => {
    router.push(`/resume-builder/app/how-to-start/${chosenTemplate}/skills`);
  };

  // Checking for Stored Summary Data
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("resumeInfo"));
    if (storedData.summaryData) {
      setInitialData(storedData.summaryData);
    } else {
      setInitialData("<p></p>");
    }
  }, []);

  return (
    <div className="w-full flex flex-col">
      <p className="font-extrabold text-3xl text-black/80 pb-5">
        Professional Summary
      </p>
      <p className="text-base text-black/80 pb-6">
        You&apos;re in the final stretch! We&apos;ll help you sell yourself to
        the hiring manager in a few short sentences.
      </p>

      {initialData.length > 0 && (
        <div className="w-full bg-white rounded-xl border pb-3 h-[340px] overflow-y-auto relative">
          <Tiptap
            changed={(data) => setSummary(data)}
            initialData={initialData}
          />
        </div>
      )}

      <div className="pt-7 flex gap-5 justify-between">
        <button
          onClick={handleGoBack}
          type="button"
          className="px-12 max-[613px]:px-3 border max-[613px]:w-full duration-300 hover:-translate-y-1 text-black/80 font-semibold py-3.5 rounded-xl"
        >
          Go Back
        </button>
        <button
          onClick={handleContinue}
          type="button"
          className="px-12 max-[613px]:px-3 bg-black/90 max-[613px]:w-full duration-300 hover:-translate-y-1 text-white font-semibold py-3.5 rounded-xl"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
