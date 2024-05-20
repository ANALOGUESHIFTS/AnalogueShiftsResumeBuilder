import Image from "next/image";
import Link from "next/link";
import HeroBg from "@/public/images/hero-image.png";

export default function Landing() {
  return (
    <>
      <main className="w-full curvy-box box-border items-center h-[800px] max-[600px]:h-[620px] relative pt-[150px] px-5 flex flex-col">
        <p className="text-black/50 text-center max-[1050px]:text-center font-bold tracking-wide text-[13px]">
          ONLINE COVER LETTER GENERATOR
        </p>
        <p className="py-5 text-[2.6rem] w-[700px] max-[900px]:w-[90%] text-center max-[900px]:text-xl font-extrabold text-black/80">
          Craft the perfect cover letter.
        </p>
        <p className="text-black/60 w-[800px] max-[900px]:w-[90%] max-[1050px]:text-center font-normal pb-10 tracking-normal text-base text-center">
          Crafting a compelling cover letter requires time and effort. Our
          AI-powered cover letter generator simplifies the process, enabling you
          to build a customized cover letter that enhances your chances of
          securing an interview.
        </p>
        <div className="w-full flex justify-center">
          <Link
            className="w-max px-8  flex justify-center bg-AnalogueShiftsTextColor/80 items-center hover:-translate-y-1 text-black/80 duration-300 hover:scale-105 font-medium text-sm py-3 rounded-lg"
            href=""
          >
            Build My Cover Letter
          </Link>
        </div>
      </main>
      <div className="w-full absolute px-5 top-[480px] left-0 z-30 max-[600px]:top-[520px] flex justify-center">
        <Image src={HeroBg} alt="Hero Background" className="" />
      </div>
    </>
  );
}
