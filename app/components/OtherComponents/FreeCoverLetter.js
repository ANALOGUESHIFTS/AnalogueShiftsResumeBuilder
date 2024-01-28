"use client";
import { useState, useEffect } from "react";

import Link from "next/link";
import RightArrow from "@/public/right-arrow-icon.png";
import Image from "next/image";
import ViewTemplateModal from "./ViewTemplateModal";

//Data
import {
  coverLetterTemplates,
  coverLetterNavLinks,
} from "../resources/cover-letter/data";

export default function FreeCoverLetterTemplates() {
  const [dataToView, setDataToView] = useState(null);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (dataToView) {
      setModal(true);
    }
  }, [dataToView]);

  return (
    <>
      {modal && (
        <ViewTemplateModal
          data={dataToView}
          builder="Cover Letter"
          closeModal={() => {
            setModal(false);
            setDataToView(null);
          }}
        />
      )}
      <section className="w-full h-max relative">
        <nav className="sticky top-0 w-full bg-white h-max py-4 z-60 px-5 overflow-x-auto">
          <div className="flex gap-4 w-max">
            {coverLetterNavLinks.map((data) => {
              return (
                <Link
                  key={crypto.randomUUID()}
                  style={{ border: `1px solid ${data.color}` }}
                  href={data.path}
                  className="py-2.5 hover:scale-105 duration-300 w-max px-5 rounded-full text-sm font-semibold text-black/80"
                >
                  {data.name}
                </Link>
              );
            })}
          </div>
        </nav>
        <div className="w-full pt-6 flex flex-col pb-[100px] gap-[100px]">
          {coverLetterTemplates.map((data) => {
            return (
              <section
                key={crypto.randomUUID()}
                className="w-full"
                id={data.id}
              >
                <div
                  style={{ backgroundColor: data.background }}
                  className="w-full h-max px-10 pt-10 pb-[120px] flex flex-col"
                >
                  <p
                    style={{ color: data.color }}
                    className="text-sm font-medium"
                  >
                    COVER LETTER TEMPLATE
                  </p>
                  <div className="flex py-3.5 gap-3.5 items-center">
                    <div className="w-14 h-14 rounded-lg bg-white shadow-xl flex justify-center items-center">
                      <Image
                        src={data.icon}
                        alt="Icon"
                        className="w-[50%] h-[50%]"
                      />
                    </div>
                    <p className=" text-[2.5rem] max-[900px]:text-xl font-bold text-black/80">
                      {data.name}
                    </p>
                  </div>
                  <p className="text-black/60 font-medium text-sm w-[900px] max-w-full">
                    {data.description}
                  </p>
                </div>
                <div className="w-full px-10 max-[800px]:px-5 flex flex-wrap gap-x-4 gap-y-4 translate-y-[-90px]">
                  {data.templates.map((template) => {
                    return (
                      <div
                        key={crypto.randomUUID()}
                        className="h-max w-[calc(33.3%-16px)] max-[1150px]:w-[calc(50%-16px)] max-[650px]:w-full rounded-lg resume-template-link resume-template-link2"
                      >
                        <div className="w-full h-[500px] max-[900px]:h-max relative template-img-box">
                          <div className="w-full overflow-y-scroll scroll-hidden h-full max-[900px]:h-max rounded-lg">
                            {template.template}
                          </div>
                          <div className="absolute  opacity-0 translate-y-2 duration-300 bottom-4 left-4 w-[calc(100%-32px)] flex flex-col gap-3 button-row">
                            <Link
                              href={template.path}
                              className="w-full py-3 hover:bg-AnalogueShiftsTextColor/80 flex justify-center rounded-lg bg-AnalogueShiftsTextColor text-sm font-medium text-black/80"
                            >
                              Build My Cover Letter
                            </Link>
                            <button
                              onClick={() => setDataToView(template)}
                              style={{ borderColor: data.color }}
                              className="w-full border hover:bg-white/80 py-3 flex justify-center rounded-lg bg-white text-sm font-medium text-black/80"
                            >
                              View Template
                            </button>
                          </div>
                        </div>
                        <div className="w-full pl-2 h-[120px]">
                          <p className="pt-6 text-base text-black/90 font-medium pb-2">
                            {template.name}
                          </p>
                          <p className="text-black/60 font-medium text-sm">
                            {template.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="px-10 max-[800px]:px-5 w-full pt-2">
                  <div className="w-full flex justify-between items-center p-3.5 rounded-lg border flex-wrap gap-x-5 gap-y-5">
                    <Link
                      className="text-black/70 font-semibold text-sm flex items-center gap-2"
                      href={data.theMatchingResumeLink}
                    >
                      Get The Matching Resume
                      <Image
                        src={RightArrow}
                        alt="Icon"
                        className="w-4 h-4 opacity-70"
                      />
                    </Link>
                    <Link
                      style={{ backgroundColor: data.color }}
                      className="text-white font-semibold text-sm px-6 py-2.5 rounded-lg"
                      href={data.linkToTemplate}
                    >
                      View More Templates
                    </Link>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </section>
    </>
  );
}
