import Link from "next/link";
import Image from "next/image";

import ResumeFormat from "@/public/resume-format.webp";
import ResumeSummary from "@/public/resume-summary-hero.webp";
import CvVsResume from "@/public/resume-vs-cv.webp";
import UserOne from "@/public/corissa-peterson.jpg";
import UserTwo from "@/public/conrad-benz.jpg";

export default function GuidesAndAdvice() {
  const blogData = [
    {
      path: "/blog/resume-help/resume-format",
      image: ResumeFormat,
      title: "The Best Resume Format for 2023",
      description:
        "From the gold-standard format to variations that help you highlight your top qualifications, we’ll teach you how to format your resume like a pro.",
      userImage: UserOne,
      userName: "Corissa Peterson",
      date: "November 18 2023",
      color: "#4b94ea",
    },
    {
      path: "/blog/resume-help/resume-summary",
      image: ResumeSummary,
      title: "Professional Resume Summary Examples",
      description:
        "Your professional resume summary quickly shows employers you have the experience needed to do the job. Learn how to write one with our examples and tips.",
      userImage: UserTwo,
      userName: "Conrad Benz",
      date: "November 19 2023",
      color: "#ea723c",
    },
    {
      path: "/blog/resume-help/cv-vs-resume",
      image: CvVsResume,
      title: "CV vs Resume: What’s the Difference?",
      description:
        "The difference between a CV and a resume depends on the country and context. We explain further, and provide clear definitions of both.",
      userImage: UserTwo,
      userName: "Conrad Benz",
      date: "November 19 2023",
      color: "#2ca482",
    },
  ];

  return (
    <div className="w-full h-[1070px] flex flex-col items-center bg-white justify-center p-5 max-[1200px]:h-max">
      <p className="text-black/50 text-center max-[1050px]:text-center font-bold tracking-wide text-[13px]">
        EXPERT GUIDES & ADVICE
      </p>
      <p className="py-5 text-[2.6rem] w-[700px] max-[900px]:w-[90%] text-center max-[900px]:text-xl font-extrabold text-black/80">
        Read guides to improve your resume
      </p>
      <p className="text-black/60 w-[800px] max-[900px]:w-[90%] max-[1050px]:text-center font-normal pb-10 tracking-normal text-base text-center">
        Whether you’re new to job hunting, changing fields, or looking to land a
        higher-paying gig, we’ll teach you how to build a resume that earns more
        interviews.
      </p>
      <div className="w-full flex max-[500px]:flex-col justify-center pb-6">
        <Link
          className="w-max max-[500px]:w-full px-8  flex justify-center bg-AnalogueShiftsTextColor/80 items-center hover:-translate-y-1 text-black/80 duration-300 hover:scale-105 font-medium text-sm py-3 rounded-lg"
          href="/resume-builder/blog"
        >
          Visit Our Blog
        </Link>
      </div>
      <div className="w-full flex justify-between flex-wrap gap-y-5">
        {blogData.map((data) => {
          return (
            <Link
              key={crypto.randomUUID()}
              href={data.path}
              className="w-[31%] h-[570px] max-[1000px]:w-[48%] max-[600px]:w-full overflow-hidden rounded-2xl shadow-xl flex flex-col blog-box"
            >
              <div className="w-full h-6/12 overflow-hidden">
                <Image
                  src={data.image}
                  alt="Image"
                  className="duration-300 blog-img"
                />
              </div>
              <div className="w-full h-6/12  p-3.5">
                <div className="flex flex-col pb-5 max-[500px]:h-[220px] w-full justify-between h-[200px]">
                  <p
                    style={{ color: data.color }}
                    className="text-sm font-medium"
                  >
                    RESMUE HELP
                  </p>
                  <p className="font-bold text-black/70 text-xl">
                    {data.title}
                  </p>
                  <p className="text-black/60 text-sm tracking-wide">
                    {data.description}
                  </p>
                </div>
                <div className="flex w-full h-[50px] gap-4">
                  <Image
                    src={data.userImage}
                    alt=""
                    className="w-[50px] h-[50px] rounded-full"
                  />
                  <div className="h-full py-1 flex flex-col justify-between">
                    <p className="text-sm text-black/80 font-medium">
                      {data.userName}
                    </p>
                    <p className="text-xs text-black/60 font-medium">
                      {data.date}
                    </p>
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
