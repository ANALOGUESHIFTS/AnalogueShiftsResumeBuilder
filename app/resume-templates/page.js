import Image from "next/image";
import HomeIcon from "@/public/house-icon.png";
import RightBracket from "@/public/right-bracket.png";
import Link from "next/link";
import ResumeTemplateOne from "@/public/template-two.webp";
import ResumeTemplateTwo from "@/public/resume-template-one.webp";
import ResumeTemplateThree from "@/public/resume-template-two.webp";
import FreeResumeTemplates from "../components/FreeResumeTemplates";
import FileIcon from "@/public/upload-file.png";
import Faqs from "../components/Faqs";
import ResumeFormat from "@/public/resume-format.webp";
import ResumeSummary from "@/public/resume-summary-hero.webp";
import CvVsResume from "@/public/resume-vs-cv.webp";
import UserOne from "@/public/corissa-peterson.jpg";
import UserTwo from "@/public/conrad-benz.jpg";

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
          <p className="text-black/50 font-medium text-sm">Resume Templates</p>
        </div>
        <div className="w-full flex flex-col items-center">
          <p className="pb-5 text-[2.6rem] w-[700px] max-[900px]:w-[90%] text-center max-[900px]:text-xl font-extrabold text-black/80">
            Resume Templates
          </p>
          <p className="text-black/60 w-[800px] max-[900px]:w-[90%] max-[1050px]:text-center font-normal pb-10 tracking-normal text-base text-center">
            Need a job? Our huge range of free resume templates can help. Simply
            choose your favorite, download directly to Word or open in Google
            Docs, and fill it out. We also provide a copy-paste template, and
            show you how to fill out your own resume template with an
            instructional video.
          </p>
          <div className="w-full flex max-[500px]:flex-col justify-center">
            <Link
              className="w-max max-[500px]:w-full px-8  flex justify-center bg-AnalogueShiftsTextColor/80 items-center hover:-translate-y-1 text-black/80 duration-300 hover:scale-105 font-medium text-sm py-3 rounded-lg"
              href="/resume-builder/app/how-to-start"
            >
              Build My Resume
            </Link>
          </div>
        </div>
      </main>
      <div className="w-full px-10 max-[800px]:px-5">
        <div className="w-full flex justify-center border-b ">
          <Link
            href="#"
            className="w-[112px] flex justify-center pb-5 text-AnalogueShiftsTextColor/80 border-b border-AnalogueShiftsTextColor/80 text-base font-medium"
          >
            Resume
          </Link>
          <Link
            href="/cover-letter-templates"
            className="w-max px-14 pb-5 text-black/60  hover:text-black/80 text-base font-medium"
          >
            Cover Letter
          </Link>
        </div>
        <section
          style={{ backgroundImage: "url(/pop-bg.svg)" }}
          className="mt-10 w-full h-max flex flex-col  bg-no-repeat"
        >
          <p className="pb-6 text-[2.6rem] w-full text-center max-[900px]:text-xl font-extrabold text-black/80">
            Use an AnalogueShifts Resume Template
          </p>
          <div className="w-full flex flex-wrap gap-x-4 gap-y-4">
            {resumeTemplates.map((data) => {
              return (
                <Link
                  key={crypto.randomUUID()}
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
            Free Resume Templates to Download
          </p>
        </div>
      </div>
      <FreeResumeTemplates />
      <div className="w-full h-max flex justify-center px-10 max-[800px]:px-5 pt-5">
        <div className="flex flex-col max-w-full w-[1000px] items-center">
          <p className="text-black/80 font-bold text-[2rem] pb-5">
            Free Copy-Paste Resume Template
          </p>
          <p className="text-black/70 tracking-wide text-center font-normal text-[15px] pb-5">
            Using a resume template makes it easy to create a professional
            application that follows{" "}
            <Link
              className="text-AnalogueShiftsTextColor/80"
              href="/blog/resume-help/resume-formatting"
            >
              standard resume formatting
            </Link>{" "}
            . Plus, templates are pre-formatted so you can quickly edit the
            content with your personal information. This is especially helpful
            when making multiple resumes to target a range of different job
            openings.
          </p>
          <p className="text-black/80 font-bold text-[1.7rem] pb-5">
            Text Template
          </p>
          <p className="text-black/70 tracking-wide text-center font-normal text-[15px]">
            Learning exactly{" "}
            <Link
              className="text-AnalogueShiftsTextColor/80"
              href="/blog/resume-help/how-to-write-a-resume"
            >
              how to make a resume
            </Link>{" "}
            will improve your chances of getting interviews in 2023 and beyond.
            Copy, paste, and fill in our blank resume template below to learn
            the fundamentals of writing your own resume so you’ll never be far
            from your next job offer.
          </p>
          <div className="w-full mt-7 h-max p-5 flex flex-col border border-dashed rounded-lg items-center">
            <p className="text-black/80 font-bold text-[1.8rem] pb-3">
              FIRST AND LAST NAME
            </p>
            <div className="w-full p-4 flex flex-col items-center gap-2 bg-[#fafbfc] mb-5">
              <p className="text-black/70 font-medium text-sm">
                <b>Email</b>: youremail@gmail.com
              </p>
              <p className="text-black/70 font-medium text-sm">
                <b>Phone</b>: 123 456 7890
              </p>

              <p className="text-black/70 font-medium text-sm">
                <b>Location</b>: City, State, Zip Code
              </p>
              <p className="text-black/70 font-medium text-sm">
                <b>Linkedin</b>: linkedin.com/in/yourprofile
              </p>
            </div>
            <p className="pb-4 font-medium text-lg pl-3 text-black/70 w-full">
              Resume Objective
            </p>
            <p className="px-5 text-sm text-black/60 font-medium pb-8">
              Motivated [industry name] professional with [# of years] years of
              on-the-job experience. Looking to apply my industry knowledge and
              relevant skill-set at [Company Name] as your newest [job title
              you’re applying for]. Capable employee comfortable with [relevant
              skill #1] and [relevant skill #2], aiming to help [Company Name]
              grow and reach its business objectives now and into the future.
            </p>
            <p className="pb-4 font-medium text-lg pl-3 text-black/70 w-full">
              Work Experience
            </p>
            <p className="px-5 text-sm w-full text-black/80 font-medium pb-2">
              Most Recent Job Title / Start Date – End Date
            </p>
            <p className="px-5 w-full text-[13px] text-black/60 font-medium pb-2">
              Company Name / City, State
            </p>
            <ul className="w-full flex flex-col gap-2 list-inside px-5 list-disc pb-5">
              <li className="text-sm text-black/60 font-medium">
                Write out a bulleted list of your accomplishments
              </li>
              <li className="text-sm text-black/60 font-medium">
                Use action verbs to start each bullet (like “organized” or
                “managed”)
              </li>
              <li className="text-sm text-black/60 font-medium">
                Add numbers to any bullet points you can to show your positive
                impact on the job
              </li>
            </ul>
            <p className="px-5 text-sm w-full text-black/80 font-medium pb-2">
              Previous Job Title / Start Date – End Date
            </p>
            <p className="px-5 w-full text-[13px] text-black/60 font-medium pb-2">
              Company Name / City, State
            </p>
            <ul className="w-full flex flex-col gap-2 list-inside px-5 list-disc pb-8">
              <li className="text-sm text-black/60 font-medium">
                List relevant accomplishments from an earlier job (usually
                whatever job you had before your most recent job)
              </li>
              <li className="text-sm text-black/60 font-medium">
                Use past tense verbs to describe your achievements and duties in
                the role if you don’t work here anymore
              </li>
            </ul>
            <p className="pb-4 font-medium text-lg pl-3 text-black/70 w-full">
              Educational Background
            </p>
            <p className="px-5 text-sm w-full text-black/80 font-medium pb-2">
              Degree Name / Major
            </p>
            <p className="px-5 w-full text-[13px] text-black/60 font-medium pb-2">
              University, Location / Start Date – End Date
            </p>
            <p className="px-5 w-full text-[13px] text-black/60 font-medium pb-8">
              Honors / GPA if 3.6 or higher
            </p>
            <p className="pb-4 font-medium text-lg pl-3 text-black/70 w-full">
              Skills and Certifications
            </p>
            <ul className="w-full flex flex-col gap-2 list-inside px-5 list-disc pb-8">
              <li className="text-sm text-black/60 font-medium">
                List skills and certifications related to the job you’re
                applying for
              </li>
              <li className="text-sm text-black/60 font-medium">
                Include hard skills (like languages, computer software, etc.)
                first
              </li>
              <li className="text-sm text-black/60 font-medium">
                Include soft skills (like team player or communication) only if
                you have space
              </li>
            </ul>
            <p className="pb-4 font-medium text-lg pl-3 text-black/70 w-full">
              Hobbies and Interests
            </p>
            <ul className="w-full flex flex-col gap-2 list-inside px-5 list-disc pb-8">
              <li className="text-sm text-black/60 font-medium">
                Interested in anything related to the job you want? Have any
                related hobbies? List them here
              </li>
              <li className="text-sm text-black/60 font-medium">
                These final details highlight your potential culture fit, may
                make you seem more interesting, and might be brought up during
                an interview
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full h-max flex py-10 flex-col px-10 max-[800px]:px-5 items-center">
        <p className="py-3 text-[2.6rem] w-[700px] max-[900px]:w-[90%] text-center max-[900px]:text-xl font-extrabold text-black/80">
          Ready to Improve Your Existing Resume?
        </p>
        <p className="text-black/60 w-[800px] max-[900px]:w-[90%] font-normal pb-10 tracking-normal text-base text-center">
          Having trouble getting attention from hiring managers and recruiters?
          It may be due to your resume. Upload your current resume into our
          software and we&lsquo;ll help you format it using one of our
          professional templates.
        </p>
        <div className="w-full h-max p-8 rounded-xl bg-white shadow-xl flex justify-between max-[887px]:flex-col max-[887px]:gap-5">
          <div className="w-[30%] max-[887px]:w-full rounded-lg shadow-xl p-1">
            <Image
              src={ResumeTemplateTwo}
              alt="Resume Template Image"
              className="w-full h-auto"
            />
          </div>
          <div className="w-[65%] max-[887px]:w-full max-[887px]:h-max max-[887px]:py-10 max-[887px]:px-3 flex flex-col justify-center items-center rounded-lg border border-dashed gap-3">
            <Image src={FileIcon} alt="Upload" className="w-[80px] h-auto" />
            <Link
              href="/resume-builder/app/how-to-start"
              className="px-8 py-3 rounded-lg border text-sm duration-300 hover:-translate-y-2 text-black/80 font-medium"
            >
              Upload a Resume
            </Link>
            <p className="text-black/50 font-medium text-sm">
              DOC, DOCX, PDF, HTML, RTF or TXT files upto 5MB
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-[500px] flex flex-col items-center bg-white justify-center p-5 max-[1200px]:h-max">
        <p className="text-black/50 text-center max-[1050px]:text-center font-bold tracking-wide text-[13px]">
          RESUME SAMPLE
        </p>
        <p className="py-5 text-[2.6rem] w-[700px] max-[900px]:w-[90%] text-center max-[900px]:text-xl font-extrabold text-black/80">
          Resume Templates In Action
        </p>
        <p className="text-black/60 w-[800px] max-[900px]:w-[90%] max-[1050px]:text-center font-normal pb-10 tracking-normal text-base text-center">
          Want to see what our various resume templates look like filled out?
          Check out our resume examples. Find samples in your industry to
          determine what template styles best suit the job you&lsquo;ve got your
          eye on.
        </p>
        <div className="w-full flex max-[500px]:flex-col justify-center pb-6">
          <Link
            className="w-max max-[500px]:w-full px-8  flex justify-center bg-AnalogueShiftsTextColor/80 items-center hover:-translate-y-1 text-black/80 duration-300 hover:scale-105 font-medium text-sm py-3 rounded-lg"
            href="/resume-samples"
          >
            View Resume Examples
          </Link>
        </div>
      </div>
      <Faqs />
      <div className="w-full h-max flex flex-col items-center bg-white justify-center p-5 ">
        <p className=" pb-8 text-[2.6rem] w-[700px] max-[900px]:w-[90%] text-center max-[900px]:text-xl font-extrabold text-black/80">
          Related Articles
        </p>
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
    </main>
  );
}
