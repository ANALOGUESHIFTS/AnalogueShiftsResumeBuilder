import Link from "next/link";
import Image from "next/image";
import Background from "@/public/resumes-background.png";

export default function HowToStartPageDetails() {
  return (
    <div className="w-full h-max pt-[120px] bg-[#f3f8ff]">
      <p className="text-center px-5 text-black/80 font-extrabold text-3xl tracking-wide max-[600px]:text-2xl pb-6">
        Start by selecting a template
      </p>
      <div className="w-full px-5 flex justify-center">
        <Link
          href="/resume-templates"
          className="max-w-[90%] hover:border-black/90 hover:shadow-xl gap-2.5 w-[570px] bg-white h-[170px] rounded-lg border mb-6 p-5 flex justify-center items-center flex-col"
        >
          <p className="text-black/80 font-bold text-lg">
            Select A Resume Template
          </p>
          <p className="text-black/80 text-base">
            To get started, select a resume template
          </p>
        </Link>
      </div>
      <div className="w-full px-5">
        <Image src={Background} alt="Resume Background Image" />
      </div>
    </div>
  );
}
