"use client";
import { useState } from "react";
import ColorBox from "./ColorBox";
import StepOne from "@/public/step1.webp";
import StepTwo from "@/public/step2.webp";
import StepThree from "@/public/step3.webp";
import ImageBox from "./ImageBox";
import LoadingProgress from "./LoadingProgress";

export default function CustomSlides() {
  const [selected, setSelected] = useState("Step 01");

  const steps = [
    {
      title: "Step 01",
      color: "linear-gradient(101.17deg, #60A4EF 0%, #A5CDF6 100%)",
    },
    {
      title: "Step 02",
      color: "linear-gradient(101.17deg, #EE8652 0%, #FACBB3 100%)",
    },
    {
      title: "Step 03",
      color: "linear-gradient(101.17deg, #4AB690 0%, #9CDECA 100%)",
    },
  ];

  const inspectColor = () => {
    if (selected === "Step 01") return "#4b94ea";
    if (selected === "Step 02") return "#ea723c";
    if (selected === "Step 03") return "#2ca482";
  };

  const handleFull = () => {
    if (selected === "Step 01") setSelected("Step 02");
    if (selected === "Step 02") setSelected("Step 03");
    if (selected === "Step 03") setSelected("Step 01");
  };

  return (
    <div className="w-full h-[600px] z-30 relative flex items-center max-[1002px]:h-auto pl-20 max-[1002px]:px-3.5 max-[1002px]:pt-[700px] max-[900px]:pt-[600px] max-[700px]:pt-[500px] max-[400px]:pt-[300px] max-[500px]:pt-[400px] max-[1002px]:pb-7">
      <div className="color-box absolute z-10 top-0 right-0 h-full w-[350px]">
        {selected === "Step 01" && <ColorBox color={steps[0].color} />}
        {selected === "Step 02" && <ColorBox color={steps[1].color} />}
        {selected === "Step 03" && <ColorBox color={steps[2].color} />}
      </div>
      <div className="img-box absolute z-20  top-[50px] right-[50px] h-[calc(100%-100px)] w-[600px]">
        {selected === "Step 01" && <ImageBox img={StepOne} title={"Step 01"} />}
        {selected === "Step 02" && <ImageBox img={StepTwo} title={"Step 02"} />}
        {selected === "Step 03" && (
          <ImageBox img={StepThree} title={"Step 03"} />
        )}
      </div>
      <div className="flex flex-col gap-14 w-[45%] max-[1002px]:w-full">
        <div className="w-full flex items-center gap-1">
          <p className="w-1/5 max-[500px]:w-[100px] text-[#e6e9ec] text-[64px] font-black leading-[76px]">
            {selected === "Step 01" && "01"}
            {selected === "Step 02" && "02"}
            {selected === "Step 03" && "03"}
          </p>
          <div className="w-4/5 max-[500px]:w-[calc(100%-53px)] flex flex-col gap-2.5">
            <p
              style={{ color: inspectColor() }}
              className="text-xl font-semibold text-[1.6rem]"
            >
              {selected === "Step 01" && "Use AI to write your resume"}
              {selected === "Step 02" && "Pick a template"}
              {selected === "Step 03" && "Download your resume"}
            </p>
            <p className="text-sm text-black tracking-wide">
              {selected === "Step 01" &&
                "In a few clicks, generate a resume summary and pre-written bullet points that showcase your qualifications and skill set."}
              {selected === "Step 02" &&
                "See how your resume looks using different templates. Choose the template that fits the job you want and best suits your personality."}
              {selected === "Step 03" &&
                "Save your newly built resume as a PDF, Word Doc, or TXT file directly to your browser. You’re now ready to start applying for jobs!"}
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col gap-5">
          <div className="w-full">
            {selected === "Step 01" && (
              <LoadingProgress bg={steps[0].color} full={handleFull} />
            )}
            {selected === "Step 02" && (
              <LoadingProgress bg={steps[1].color} full={handleFull} />
            )}
            {selected === "Step 03" && (
              <LoadingProgress bg={steps[2].color} full={handleFull} />
            )}
          </div>
          <div className="w-full flex justify-between">
            {steps.map((data) => {
              return (
                <button
                  key={crypto.randomUUID()}
                  onClick={() => setSelected(data.title)}
                  style={{
                    background: `${
                      selected === data.title ? data.color : "transparent"
                    }`,
                  }}
                  className="w-[32%] hover:text-black/90 text-black/70 font-semibold flex justify-center py-2 rounded text-sm border"
                >
                  {data.title}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
