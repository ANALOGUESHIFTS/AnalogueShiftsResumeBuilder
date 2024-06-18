import Link from "next/link";
import Image from "next/image";
import perks from "@/resources/cv-maker/perks.json";
import resumeTemplates from "@/resources/resume-builder/resume-templates.json";
import ResumeList from "@/components/application/resume-list";

export default function Services() {
  return (
    <>
      <main className="w-full bg-white box-border items-center h-[900px] max-[1150px]:pt-[280px] max-[986px]:pt-[180px] max-[800px]:pt-[100px] max-[600px]:pt-[260px] max-[450px]:pt-[200px] max-[1150px]:h-max relative pt-[380px] px-5 flex flex-col">
        <div className="w-full px-10 max-[600px]:px-0 h-auto flex flex-wrap gap-x-10 gap-y-10">
          {perks.map((data) => {
            return (
              <div
                key={crypto.randomUUID()}
                className="w-[calc(33.3%-40px)] flex flex-col gap-5 max-[1000px]:w-[calc(50%-40px)] max-[700px]:w-full max-[700px]:items-center"
              >
                <div className="w-[70px] h-[70px] flex justify-center items-center bg-AnalogueShiftsTextColor/40 shape-box">
                  <Image
                    src={data.image}
                    alt="Icon"
                    width={30}
                    height={30}
                    className="w-[60%] h-[60%]"
                  />
                </div>
                <p className="text-black/80 font-bold text-lg pl-2">
                  {data.title}
                </p>
                <p className="text-black/60 max-[1050px]:text-center font-normal tracking-normal text-base pl-2">
                  {data.subTitle}
                </p>
              </div>
            );
          })}
        </div>
      </main>
      <main className="w-full h-max pt-10 flex flex-col items-center bg-white relative">
        <p className="py-5 text-[2.6rem] max-[900px]:w-[90%] text-center max-[900px]:text-xl font-extrabold text-black/80">
          Our best CV templates
        </p>
        <p className="text-black/60 w-[700px] max-[900px]:w-[90%] max-[1050px]:text-center font-normal pb-10 tracking-normal text-base text-center">
          Select from our array of HR-approved, professional CV templates.
        </p>

        <Link
          className="w-max px-8 mb-10 flex justify-center border-black/40 border hover:border-black/70 items-center duration-300 hover:-translate-y-1 text-black/80 font-medium text-sm py-3 rounded-lg"
          href="/resume-builder/app/how-to-start"
        >
          Build My CV Now
        </Link>

        <ResumeList data={resumeTemplates.slice(0, 2)} />
      </main>
    </>
  );
}
