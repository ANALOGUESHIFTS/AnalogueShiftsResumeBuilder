"use client";
import { useState, useEffect } from "react";

import Link from "next/link";
import BriefCaseIcon from "@/public/briefcase-icon.svg";
import Image from "next/image";
import ViewTemplateModal from "@/app/components/ViewTemplateModal";

//Data
import {
  resumeNavLinks,
  resumeTemplates,
} from "../../components/resources/resume/data";

export default function FreeResumeTemplates() {
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
          builder="Resume"
          data={dataToView}
          closeModal={() => {
            setModal(false);
            setDataToView(null);
          }}
        />
      )}
      <section className="w-full h-max relative">
        <nav className=" w-full bg-white h-max py-4 z-60 px-5 overflow-x-auto">
          <div className="flex gap-4 w-max">
            {resumeNavLinks.map((data) => {
              return (
                <Link
                  key={crypto.randomUUID()}
                  style={{ border: `1px solid #4b94ea` }}
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
          {resumeTemplates.map((data) => {
            return (
              <section
                key={crypto.randomUUID()}
                className="w-full"
                id={data.id}
              >
                <div
                  style={{ backgroundColor: "#e4f0fe" }}
                  className="w-full h-max px-10 pt-10 pb-[120px] flex flex-col"
                >
                  <p
                    style={{ color: "#4b94ea" }}
                    className="text-sm font-medium"
                  >
                    RESUME TEMPLATE
                  </p>
                  <div className="flex py-3.5 gap-3.5 items-center">
                    <div className="w-14 h-14 rounded-lg bg-white shadow-xl flex justify-center items-center">
                      <Image
                        src={BriefCaseIcon}
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
                  <div className="h-max w-[calc(33.3%-16px)] max-[1150px]:w-[calc(50%-16px)] max-[650px]:w-full rounded-lg resume-template-link resume-template-link2">
                    <div className="w-full h-max max-[900px]:h-max relative template-img-box">
                      <Image src={data.templateImage} alt="Resume Image" />
                      <div className="absolute  opacity-0 translate-y-2 duration-300 bottom-4 left-4 w-[calc(100%-32px)] flex flex-col gap-3 button-row">
                        <Link
                          href={data.path}
                          className="w-full py-3 hover:bg-AnalogueShiftsTextColor/80 flex justify-center rounded-lg bg-AnalogueShiftsTextColor text-sm font-medium text-black/80"
                        >
                          Build My Resume
                        </Link>
                        <button
                          onClick={() => setDataToView(data)}
                          style={{ borderColor: "#4b94ea" }}
                          className="w-full border hover:bg-white/80 py-3 flex justify-center rounded-lg bg-white text-sm font-medium text-black/80"
                        >
                          View Template
                        </button>
                      </div>
                    </div>
                    <div className="w-full pl-2 h-[120px]">
                      <p className="pt-6 text-base text-black/90 font-medium pb-2">
                        {data.name}
                      </p>
                      <p className="text-black/60 font-medium text-sm">
                        {data.description}
                      </p>
                    </div>
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
