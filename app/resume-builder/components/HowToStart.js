"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Background from "@/public/resumes-background.png";
import { resumeTemplates } from "@/app/components/resources/resume/data";
import GuestLayout from "@/app/Layouts/GuestLayout";
// Splide JS
import "@splidejs/react-splide/css";
import { SplideSlide, Splide } from "@splidejs/react-splide";

export default function HowToStartPage() {
  const [perPage, setPerPage] = useState(1);

  // Handle OnResize
  const handleResize = () => {
    if (window.innerWidth <= 500) {
      setPerPage(1);
    } else if (window.innerWidth > 500 && window.innerWidth < 1000) {
      setPerPage(2);
    } else {
      setPerPage(3);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <GuestLayout>
      <div className="w-full h-max pt-[120px] bg-[#f3f8ff]">
        <p className="text-center px-5 text-black/80 font-extrabold text-3xl tracking-wide max-[600px]:text-2xl pb-6">
          Start by selecting a template
        </p>
        <Splide
          aria-label="Templates"
          className="w-full h-max px-10"
          options={{
            perPage: perPage,
          }}
        >
          {resumeTemplates.map((data) => {
            return (
              <SplideSlide
                className="w-full  items-center flex justify-center pb-14"
                key={crypto.randomUUID()}
              >
                <div className="relative mx-3 h-max template-box  max-w-full pb-2 rounded-lg bg-white">
                  <div className="w-full">
                    <div className="w-full h-max scroll-hidden rounded-t-xl  duration-300">
                      <Image
                        src={data.templates[0].templateImage}
                        alt="Template Image"
                        className="rounded-t-xl mx-auto w-max"
                      />
                    </div>
                    <p className="text-center py-2 border-t text-black/80 text-sm font-medium">
                      {data.name}
                    </p>
                  </div>
                  <Link
                    className="template-link w-max absolute opacity-0  bottom-[20%] left-[25%] px-8 flex hover:scale-105 justify-center bg-AnalogueShiftsTextColor/80 items-center duration-300 text-black/80 font-medium text-sm py-3 rounded-lg"
                    href={`/resume-builder/app/how-to-start/${data.id}`}
                  >
                    Use This Template
                  </Link>
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
        <div className="w-full px-5">
          <Image src={Background} alt="Resume Background Image" />
        </div>
      </div>
    </GuestLayout>
  );
}
