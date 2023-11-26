import Link from "next/link";
import Image from "next/image";

import RightArrow from "@/public/right-arrow-icon.png";
import PickAResumeTemplate from "@/public/pick-a-resume-template.svg";
import CustomizeEachSection from "@/public/generate-bullet-point.svg";
import EmphasizeYourSkills from "@/public/emphasize-your-skill.svg";
import AttachACoverLetter from "@/public/attach-cover-letter.svg";

export default function LevelUpJobHunt() {
  const levelUpLinks = [
    {
      path: "/resume-templates/professional-templates",
      number: "01",
      color: "#4b94ea",
      icon: PickAResumeTemplate,
      title: "Pick A Resume Template",
      description:
        "With a good resume template, you don't need to worry about details like formatting.",
      linkText: "Get a professional template",
    },
    {
      path: "/blog/resume-help/how-to-write-a-resume",
      number: "02",
      color: "#ea723c",
      icon: CustomizeEachSection,
      title: "Customize Each Section",
      description:
        "Fill in your personal information and write about your work experience.",
      linkText: "Learn how to write a resume",
    },
    {
      path: "/blog/resume-help/skills-for-resume",
      number: "03",
      color: "#2ca482",
      icon: EmphasizeYourSkills,
      title: "Emphasize Your Skills",
      description:
        "Take skills from the job advertisement, then tie them into your resume.",
      linkText: "Pick skills for your resume",
    },
    {
      path: "/blog/cover-letter-help/how-to-write-a-cover-letter",
      number: "04",
      color: "#f892bc",
      icon: AttachACoverLetter,
      title: "Attach A Cover Letter",
      description:
        "A resume will get you the job, but a cover letter will get your foot in the door.",
      linkText: "Write a winning cover letter",
    },
  ];
  return (
    <div className="w-full h-[850px] flex flex-col items-center bg-white justify-center p-5 max-[1200px]:h-max">
      <p className="text-black/50 text-center max-[1050px]:text-center font-bold tracking-wide text-[13px]">
        LEVEL UP YOUR JOB HUNT
      </p>
      <p className="py-5 text-[2.6rem] w-[750px] max-[900px]:w-[90%] text-center max-[900px]:text-xl font-extrabold text-black/80">
        Build an application that gets more job offers
      </p>
      <p className="text-black/60 w-[700px] max-[900px]:w-[90%] max-[1050px]:text-center font-normal pb-10 tracking-normal text-base text-center">
        Landing more interviews and earning better job offers is only a few
        steps away, and it all starts with your resume. Here&apos;s how to make
        your application stand out today:
      </p>
      <div className="w-full flex justify-between flex-wrap gap-y-5">
        {levelUpLinks.map((data) => {
          return (
            <Link
              key={crypto.randomUUID()}
              href={data.path}
              className="w-[23%] h-[400px] card-box max-[1174px]:w-[31%] max-[843px]:w-[45%] max-[556px]:w-full"
            >
              <p
                id={"num" + data.number}
                className="card-box-num w-full text-center text-[#e6e9ec] duration-300 translate-y-[30px] text-[64px] font-black leading-[76px]"
              >
                {data.number}
              </p>
              <div className="absolute w-[23%] max-[556px]:w-[calc(100%-40px)] max-[843px]:w-[45%] max-[1174px]:w-[31%] h-max rounded-3xl shadow-xl bg-white p-5">
                <div className="w-full h-[200px] flex flex-col justify-between pb-4">
                  <div className="w-[70px] bg-AnalogueShiftsTextColor/30 h-[70px] flex justify-center items-center shape-box">
                    <Image
                      src={data.icon}
                      alt="Icon"
                      className="w-[60%] h-[60%]"
                    />
                  </div>
                  <p className="text-base tracking-wide text-black/70 font-medium ">
                    {data.title}
                  </p>
                  <p className="text-sm tracking-wide text-black/60 font-medium ">
                    {data.description}
                  </p>
                </div>
                <div
                  style={{ backgroundColor: data.color }}
                  className="w-full h-[60px] rounded-full p-4 flex justify-between items-center"
                >
                  <p className="text-white font-medium text-sm w-[80%]">
                    {data.linkText}
                  </p>
                  <div className="w-8 h-8 flex justify-center items-center bg-white rounded-full">
                    <Image src={RightArrow} alt="" className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
