import Link from "next/link";
import Image from "next/image";
import Background from "@/public/resumes-background.png";
import { resumeTemplates } from "@/app/components/resources/resume/data";
import GuestLayout from "@/app/Layouts/GuestLayout";

export default function HowToStartPage() {
  return (
    <GuestLayout>
      <div className="w-full h-max pt-[120px] bg-[#f3f8ff]">
        <p className="text-center px-5 text-black/80 font-extrabold text-3xl tracking-wide max-[600px]:text-2xl pb-6">
          Start by selecting a template
        </p>
        <div className="w-full flex gap-5 px-7 overflow-x-auto h-[600px]">
          {resumeTemplates.map((data) => {
            return (
              <div
                key={crypto.randomUUID()}
                className="relative h-max template-box w-[450px] max-w-full pb-2 rounded-lg bg-white shadow-xl"
              >
                <div className="w-full ">
                  <div className="w-full h-[500px] overflow-y-scroll scroll-hidden  duration-300 rounded-xl">
                    {data.templates[0].template}
                  </div>
                  <p className="text-center mt-3 py-2 border-t text-black/80 text-sm font-medium">
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
            );
          })}
        </div>
        <div className="w-full px-5">
          <Image src={Background} alt="Resume Background Image" />
        </div>
      </div>
    </GuestLayout>
  );
}
