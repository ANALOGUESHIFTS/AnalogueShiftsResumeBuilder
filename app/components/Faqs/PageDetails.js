"use client";
import Image from "next/image";
import HomeIcon from "@/public/house-icon.png";
import RightBracket from "@/public/right-bracket.png";
import Link from "next/link";
import { faqAndAnswers, faqNavLinks } from "./data";
import { useState } from "react";

export default function FaqPageDetails() {
  const [selected, setSelected] = useState("");
  return (
    <main className="w-full">
      <main className="w-full items-center h-max pt-[100px]   bg-white">
        <div className="flex px-10 max-[800px]:px-5 w-full gap-4 items-center pb-8">
          <Link href="/" className="flex gap-1.5 items-center">
            <Image src={HomeIcon} alt="Home Icon" className="w-7 h-7" />
            <p className="text-black/80 font-medium text-sm hover:underline">
              Home
            </p>
          </Link>
          <Image src={RightBracket} alt="Divider Icon" className="w-5 h-4" />
          <p className="text-black/50 font-medium text-sm">
            Frequently Asked Questions
          </p>
        </div>
        <div
          style={{ backgroundImage: "url(/faq-banner.svg)" }}
          className="w-full py-[100px] px-10 bg-cover max-[800px]:px-5 bg-no-repeat flex flex-col items-center"
        >
          <p className=" text-[2.6rem] w-[700px] max-[900px]:w-[90%] text-center max-[900px]:text-xl font-extrabold text-black/80">
            Frequently Asked Questions
          </p>
        </div>
      </main>
      <section className="w-full bg-[#fafbfc] relative h-max">
        <nav className="sticky bg-white top-0 w-full bg-transparent h-max py-4 z-60 px-5 overflow-x-auto">
          <div className="flex gap-4 w-max">
            {faqNavLinks.map((data) => {
              return (
                <Link
                  key={crypto.randomUUID()}
                  href={data.path}
                  className="py-2.5 hover:shadow-lg border hover:scale-105 duration-300 w-max px-5 rounded-full text-sm font-semibold text-black/80"
                >
                  {data.title}
                </Link>
              );
            })}
          </div>
        </nav>
        <div className="w-full px-10 max-[800px]:px-5 flex flex-col items-center gap-8 py-7">
          {faqAndAnswers.map((data, index) => {
            return (
              <div
                id={data.id}
                key={index}
                className="max-w-[90%] w-[52em] flex flex-col items-center gap-5"
              >
                <p className="text-center text-black/70 font-extrabold text-[28px]">
                  {data.name}
                </p>
                <div className="w-full flex flex-col gap-6">
                  {data.faqs.map((child) => {
                    return (
                      <div
                        key={child.question}
                        style={{
                          height: `${
                            selected === child.question ? "auto" : "72px"
                          }`,
                        }}
                        className={`w-full overflow-hidden bg-white rounded-lg border px-6 ${
                          selected === child.question
                            ? "shadow-xl"
                            : "shadow-none"
                        }`}
                      >
                        <div
                          onClick={() => {
                            if (selected === child.question) {
                              setSelected("");
                            } else {
                              setSelected(child.question);
                            }
                          }}
                          className="faq-box w-full h-[72px] flex justify-between items-center cursor-pointer"
                        >
                          <p className="w-[95%] text-base text-black/90 font-medium">
                            {child.question.length < 50
                              ? child.question
                              : child.question.slice(0, 50).concat("...")}
                          </p>
                          <button
                            className={`faq-plus w-5 h-5 rounded-full duration-300 flex justify-center items-center text-white font-semibold text-sm ${
                              selected === child.question
                                ? "bg-AnalogueShiftsTextColor"
                                : "bg-gray-300"
                            } ${
                              selected === child.question
                                ? "rotate-45"
                                : "rotate-0"
                            }`}
                          >
                            +
                          </button>
                        </div>
                        {child.answer}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
