"use client";
import { useEffect, useState } from "react";
import Tiptap from "../../Tiptap";
import Cookies from "js-cookie";

export default function SummarySection({ submit, back }) {
  const [summary, setSummary] = useState("");
  const [initialData, setInitialData] = useState("");

  useEffect(() => {
    const storedData = JSON.parse(Cookies.get("userData"));

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
        You're in the final stretch! We'll help you sell yourself to the hiring
        manager in a few short sentences.
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
          onClick={back}
          type="button"
          className="px-12 max-[613px]:px-3 border max-[613px]:w-full duration-300 hover:-translate-y-1 text-black/80 font-semibold py-3.5 rounded-xl"
        >
          Go Back
        </button>
        <button
          onClick={() => submit(summary)}
          type="button"
          className="px-12 max-[613px]:px-3 bg-black/90 max-[613px]:w-full duration-300 hover:-translate-y-1 text-white font-semibold py-3.5 rounded-xl"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
