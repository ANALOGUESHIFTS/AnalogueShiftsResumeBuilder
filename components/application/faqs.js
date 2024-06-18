"use client";
import { useState } from "react";
import Link from "next/link";
import faqs from "@/resources/resume-builder/faqs.json";

export default function Faqs() {
  const [selected, setSelected] = useState("");

  return (
    <div className="w-full h-max bg-white py-[80px] flex flex-col gap-5 items-center px-5">
      <p className="py-3 text-[2.6rem] w-[700px] max-[900px]:w-[90%] text-center max-[900px]:text-xl font-extrabold text-black/80">
        Frequently Asked Questions
      </p>
      {faqs.map((data) => {
        return (
          <div
            key={crypto.randomUUID()}
            style={{
              height: `${selected === data.question ? "auto" : "72px"}`,
            }}
            className={`w-[900px] overflow-hidden max-w-[100%] rounded-lg border px-6 ${
              selected === data.question ? "shadow-xl" : "shadow-none"
            }`}
          >
            <div
              onClick={() => {
                if (selected === data.question) {
                  setSelected("");
                } else {
                  setSelected(data.question);
                }
              }}
              className="faq-box w-full h-[72px] flex justify-between items-center cursor-pointer"
            >
              <p className="w-[95%] text-base text-black/90 font-medium">
                {data.question}
              </p>
              <button
                className={`faq-plus w-5 h-5 rounded-full duration-300 flex justify-center items-center text-white font-semibold text-sm ${
                  selected === data.question
                    ? "bg-AnalogueShiftsTextColor"
                    : "bg-gray-300"
                } ${selected === data.question ? "rotate-45" : "rotate-0"}`}
              >
                +
              </button>
            </div>
            <div className="pb-5 w-full border-t pt-5 border-AnalogueShiftsTextColor">
              <p className="text-sm tracking-wide text-black/70 ">
                {" "}
                {data.answer}
              </p>
            </div>
          </div>
        );
      })}
      <p className="text-sm tracking-wide text-black/70 text-center">
        More questions?{" "}
        <Link href="/faq" className="text-AnalogueShiftsTextColor">
          Visit our FAQ library
        </Link>{" "}
        .
      </p>
    </div>
  );
}
