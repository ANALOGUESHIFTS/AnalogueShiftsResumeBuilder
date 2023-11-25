import Link from "next/link";
import Image from "next/image";
import HomeIcon from "@/public/house-icon.png";
import RightBracket from "@/public/right-bracket.png";
import ResumeTemplateOne from "@/public/template-two.webp";
import ResumeTemplateTwo from "@/public/resume-template-one.webp";
import ResumeTemplateThree from "@/public/resume-template-two.webp";
import UserOne from "@/public/corissa-peterson.jpg";
import UserTwo from "@/public/conrad-benz.jpg";
import ResumeFormat from "@/public/resume-format.webp";
import ResumeSummary from "@/public/resume-summary-hero.webp";
import CvVsResume from "@/public/resume-vs-cv.webp";
import Faqs from "../components/Faqs";
import FreeCvTemplates from "../components/FreeCvTemplates";

export default function Page() {
  const resumeTemplates = [
    {
      image: ResumeTemplateOne,
      name: "Advanced",
      description:
        "Color helps highlights your contact information and skills sections on the “Advanced” resume template.",
      path: "/resume-builder/app/how-to-start/resume-01",
    },
    {
      image: ResumeTemplateTwo,
      name: "Clean",
      description:
        'The "Clean" resume template features a color bar on the left that still leaves room for your experience to take center stage.',
      path: "/resume-builder/app/how-to-start/resume-02",
    },
    {
      image: ResumeTemplateThree,
      name: "Corporate",
      description:
        "With its simple, bold design, the “Corporate” resume template is ideal for confident business professionals.",
      path: "/resume-builder/app/how-to-start/resume-03",
    },
  ];
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
    <main className="w-full h-auto">
      <main className="w-full items-center h-max py-[100px] px-10 max-[800px]:px-5  bg-white">
        <div className="flex w-full gap-4 items-center pb-8">
          <Link href="/" className="flex gap-1.5 items-center">
            <Image src={HomeIcon} alt="Home Icon" className="w-7 h-7" />
            <p className="text-black/80 font-medium text-sm hover:underline">
              Home
            </p>
          </Link>
          <Image src={RightBracket} alt="Divider Icon" className="w-5 h-4" />
          <p className="text-black/50 font-medium text-sm">CV Templates</p>
        </div>
        <div className="w-full flex flex-col items-center">
          <p className="pb-5 text-[2.6rem] w-[700px] max-[900px]:w-[90%] text-center max-[900px]:text-xl font-extrabold text-black/80">
            CV Templates
          </p>
          <p className="text-black/60 w-[800px] max-[900px]:w-[90%] max-[1050px]:text-center font-normal pb-10 tracking-normal text-base text-center">
            Pick one of the CV templates below to{" "}
            <Link
              href="/cv-maker"
              className="text-AnalogueShiftsTextColor/80 hover:underline"
            >
              make your own professional CV
            </Link>{" "}
            in under 12 minutes. Alternatively, download a free CV template for
            Word or Google Docs, use a copy-paste CV template, or learn what
            your CV should include using a{" "}
            <Link
              href="/cv-examples"
              className="text-AnalogueShiftsTextColor/80 hover:underline"
            >
              CV example
            </Link>{" "}
            from your industry.
          </p>
          <div className="w-full flex max-[500px]:flex-col justify-center">
            <Link
              className="w-max max-[500px]:w-full px-8  flex justify-center bg-AnalogueShiftsTextColor/80 items-center hover:-translate-y-1 text-black/80 duration-300 hover:scale-105 font-medium text-sm py-3 rounded-lg"
              href="/resume-builder/app/how-to-start"
            >
              Build My CV
            </Link>
          </div>
        </div>
      </main>
      <div className="w-full px-10 max-[800px]:px-5">
        <section
          style={{ backgroundImage: "url(/pop-bg.svg)" }}
          className="mt-10 w-full h-max flex flex-col  bg-no-repeat"
        >
          <p className="pb-6 text-[2.6rem] w-full text-center max-[900px]:text-xl font-extrabold text-black/80">
            Use an AnalogueShifts CV Template
          </p>
          <div className="w-full flex flex-wrap gap-x-4 gap-y-4">
            {resumeTemplates.map((data) => {
              return (
                <Link
                  key={() => Math.random() * Math.random()}
                  href={data.path}
                  className="h-max p-4 w-[calc(33.3%-16px)] max-[1150px]:w-[calc(50%-16px)] max-[650px]:w-full bg-[#f8f9fb] rounded-lg resume-template-link"
                >
                  <div className="w-full h-[500px] max-[900px]:h-max relative template-img-box">
                    <Image
                      src={data.image}
                      alt="Template Image"
                      className="w-full h-full max-[900px]:h-max rounded-lg"
                    />
                    <button className="absolute  opacity-0 translate-y-2 duration-300 bottom-4 left-4 w-[calc(100%-32px)] py-3 hover:bg-AnalogueShiftsTextColor/80 flex justify-center rounded-lg bg-AnalogueShiftsTextColor text-sm font-medium text-black/80">
                      Use Template
                    </button>
                  </div>
                  <div className="w-full pl-2 h-[120px]">
                    <p className="pt-6 text-base text-black/90 font-medium pb-2">
                      {data.name}
                    </p>
                    <p className="text-black/60 font-medium text-sm">
                      {data.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
        <div className="w-full  h-max py-[60px] flex justify-center">
          <p className="pb-5 text-[2.6rem] w-[700px] max-[900px]:w-[90%] text-center max-[900px]:text-xl font-extrabold text-black/80">
            Free CV Templates to Download
          </p>
        </div>
      </div>
      <FreeCvTemplates />
      <Faqs />
      <div className="w-full h-max flex flex-col items-center bg-white justify-center p-5 ">
        <p className=" pb-8 text-[2.6rem] w-[700px] max-[900px]:w-[90%] text-center max-[900px]:text-xl font-extrabold text-black/80">
          Related Articles
        </p>
        <div className="w-full flex justify-between flex-wrap gap-y-5">
          {blogData.map((data) => {
            return (
              <Link
                key={() => Math.random() * Math.random()}
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
    </main>
  );
}
