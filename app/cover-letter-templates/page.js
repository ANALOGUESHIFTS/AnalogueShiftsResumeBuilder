import Image from "next/image";
import HomeIcon from "@/public/house-icon.png";
import RightBracket from "@/public/right-bracket.png";
import Link from "next/link";
import CoverLetterOne from "@/public/cover-letter-one.webp";
import CoverLetterTwo from "@/public/cover-letter-two.webp";
import CoverLetterThree from "@/public/cover-letter-three.webp";
import Faqs from "../components/Faqs";
import ResumeFormat from "@/public/resume-format.webp";
import ResumeSummary from "@/public/resume-summary-hero.webp";
import CvVsResume from "@/public/resume-vs-cv.webp";
import UserOne from "@/public/corissa-peterson.jpg";
import UserTwo from "@/public/conrad-benz.jpg";
import FreeCoverLetterTemplates from "../components/FreeCoverLetter";

export default function Page() {
  const resumeTemplates = [
    {
      image: CoverLetterOne,
      name: "Advanced",
      description:
        "Color helps highlights your contact information and skills sections on the “Advanced” resume template.",
      path: "/cover-letter-builder/app",
    },
    {
      image: CoverLetterTwo,
      name: "Clean",
      description:
        'The "Clean" resume template features a color bar on the left that still leaves room for your experience to take center stage.',
      path: "/cover-letter-builder/app",
    },
    {
      image: CoverLetterThree,
      name: "Corporate",
      description:
        "With its simple, bold design, the “Corporate” resume template is ideal for confident business professionals.",
      path: "/cover-letter-builder/app",
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
          <p className="text-black/50 font-medium text-sm">
            Cover Letter Templates
          </p>
        </div>
        <div className="w-full flex flex-col items-center">
          <p className="pb-5 text-[2.6rem] w-[700px] max-[900px]:w-[90%] text-center max-[900px]:text-xl font-extrabold text-black/80">
            Cover Letter Templates
          </p>
          <p className="text-black/60 w-[800px] max-[900px]:w-[90%] max-[1050px]:text-center font-normal pb-10 tracking-normal text-base text-center">
            Need a cover letter template? Download any of our 200+ free cover
            letter templates for Word, then fill out a copy-paste cover letter
            template to pair with your resume and complete your job application.
          </p>
          <div className="w-full flex max-[500px]:flex-col justify-center">
            <Link
              className="w-max max-[500px]:w-full px-8  flex justify-center bg-AnalogueShiftsTextColor/80 items-center hover:-translate-y-1 text-black/80 duration-300 hover:scale-105 font-medium text-sm py-3 rounded-lg"
              href="/cover-letter-builder/app"
            >
              Build My Cover Letter
            </Link>
          </div>
        </div>
      </main>
      <div className="w-full px-10 max-[800px]:px-5">
        <div className="w-full flex justify-center border-b ">
          <Link
            href="#"
            className="w-max px-14 pb-5 text-black/60  hover:text-black/80 text-base font-medium"
          >
            Resume
          </Link>
          <Link
            href="/cover-letter-templates"
            className="w-[112px] flex justify-center pb-5 text-AnalogueShiftsTextColor/80 border-b border-AnalogueShiftsTextColor/80 text-base font-medium"
          >
            Cover Letter
          </Link>
        </div>
        <section
          style={{ backgroundImage: "url(/pop-bg.svg)" }}
          className="mt-10 w-full h-max flex flex-col  bg-no-repeat"
        >
          <p className="pb-6 text-[2.6rem] w-full text-center max-[900px]:text-xl font-extrabold text-black/80">
            Use an AnalogueShifts Cover Letter Template
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
            How to Use a Cover Letter Template
          </p>
        </div>
      </div>
      <FreeCoverLetterTemplates />
      <div className="w-full h-max flex justify-center px-10 max-[800px]:px-5 pt-5">
        <div className="flex flex-col max-w-full w-[1000px] items-center">
          <p className="text-black/80 font-bold text-[2rem] pb-5">
            Free Copy-Paste Resume Template
          </p>
          <p className="text-black/70 tracking-wide text-center font-normal text-[15px] pb-5">
            You should use a cover letter template to create a professional
            application that follows the proper{" "}
            <Link
              className="text-AnalogueShiftsTextColor/80"
              href="/blog/cover-letter-help/cover-letter-format"
            >
              cover letter format
            </Link>{" "}
            . You can also use a template to quickly create multiple cover
            letters for different jobs.
          </p>
          <p className="text-black/70 tracking-wide text-center font-normal text-[15px] pb-5">
            Using a template is an easy way to include everything employers look
            for, but you should still make sure your cover letter is written in
            your voice.
          </p>
          <p className="text-black/80 font-bold text-[1.7rem] pb-5">
            Copy Paste Template to Use
          </p>
          <p className="text-black/70 tracking-wide text-center font-normal text-[15px]">
            Knowing{" "}
            <Link
              className="text-AnalogueShiftsTextColor/80"
              href="/blog/cover-letter-help/how-to-write-a-cover-letter"
            >
              how to write a cover letter
            </Link>{" "}
            involves understanding a cover letter’s structure. Follow the sample
            cover letter template below to easily write your own letter.
          </p>
          <div className="w-full mt-7 h-max p-8 flex flex-col shadow-xl border-t-2 border-t-black/80">
            <ul className="w-full flex flex-col gap-2 list-inside pb-5">
              <li className="text-base text-black/60 font-medium">Your Name</li>
              <li className="text-base text-black/60 font-medium">
                Street Address
              </li>
              <li className="text-base text-black/60 font-medium">
                City and Zip Code
              </li>
              <li className="text-base text-black/60 font-medium">
                Your Phone Number
              </li>
            </ul>
            <p className="text-base text-black/60 font-medium pb-5">
              Today’s Date
            </p>
            <ul className="w-full flex flex-col gap-2 list-inside pb-5">
              <li className="text-base text-black/60 font-medium">
                Addressee’s/Hiring Manager’s Name
              </li>
              <li className="text-base text-black/60 font-medium">Job Title</li>
              <li className="text-base text-black/60 font-medium">
                Organization/Company Name
              </li>
              <li className="text-base text-black/60 font-medium">
                Street Address
              </li>
              <li className="text-base text-black/60 font-medium">
                City and Zip Code
              </li>
            </ul>
            <p className="text-base text-black/60 font-medium pb-5">
              Dear Name,
            </p>
            <p className="text-base text-black/60 font-medium pb-5">
              <b>Opening paragraph</b>: State who you are, say where you found
              the job listing, and explain why you’re interested in the
              position.
            </p>
            <p className="text-base text-black/60 font-medium pb-5">
              <b>Body paragraph</b>: Give an overview of your previous job
              experience, skills, qualifications, and accomplishments. Don’t
              repeat your resume. Explain what makes you a unique candidate and
              how you can help the company meet its goals. Use numbers to back
              up your claims.
            </p>
            <p className="text-base text-black/60 font-medium pb-5">
              <b>Closing paragraph</b>: State that you’d like to schedule an
              interview and provide your contact information. Say you’ll be in
              touch within a week if you don’t hear back. Finish by thanking the
              employer for their time and consideration.
            </p>
            <p className="text-base text-black/60 font-medium pb-5">
              Warm regards,
            </p>
            <p className="text-base text-black/60 font-medium pb-5">
              Your Name
            </p>
          </div>
          <p className="text-black/70 tracking-wide text-center font-normal text-[15px] pt-8 pb-5">
            Make sure you include all the sections in your cover letter sample
            and write detailed body paragraphs about your expertise. Hiring
            managers often read your cover letter before your resume, so it’s
            important to sell yourself and your skills.
          </p>
          <p className="text-black/80 font-bold text-[2rem] pb-5">
            Which cover letter template should you use?
          </p>
          <p className="text-black/70 tracking-wide text-center font-normal text-[15px] pb-5">
            You should use a cover letter template that matches your job and
            experience level. A modern template suits creative roles, but a
            professional template is best for experienced candidates.
          </p>
          <p className="text-black/70 tracking-wide text-center font-normal text-[15px] pb-5">
            If you’re not sure which is the best cover letter template for you,
            a basic or simple template is a good choice for any application.
          </p>
          <p className="text-black/70 tracking-wide text-center font-normal text-[15px] pb-5">
            Need a cover letter template for a specific job? View our{" "}
            <Link
              className="text-AnalogueShiftsTextColor/80"
              href="/cover-letter-examples"
            >
              cover letter examples
            </Link>{" "}
            to find a cover letter written for your industry.
          </p>
        </div>
      </div>

      <div className="w-full h-[500px] flex flex-col items-center bg-white justify-center p-5 max-[1200px]:h-max">
        <p className="text-black/50 text-center max-[1050px]:text-center font-bold tracking-wide text-[13px]">
          COVER LETTER SAMPLE
        </p>
        <p className="py-5 text-[2.6rem] w-[700px] max-[900px]:w-[90%] text-center max-[900px]:text-xl font-extrabold text-black/80">
          See our cover letters in action
        </p>
        <p className="text-black/60 w-[800px] max-[900px]:w-[90%] max-[1050px]:text-center font-normal pb-10 tracking-normal text-base text-center">
          Read through our professional cover letter examples for inspiration
          when writing your own cover letter. Each sample was approved by a
          professional career expert from our team, and uses a free cover letter
          template.
        </p>
        <div className="w-full flex max-[500px]:flex-col justify-center pb-6">
          <Link
            className="w-max max-[500px]:w-full px-8  flex justify-center bg-AnalogueShiftsTextColor/80 items-center hover:-translate-y-1 text-black/80 duration-300 hover:scale-105 font-medium text-sm py-3 rounded-lg"
            href="/cover-letter-examples"
          >
            Browse More Examples
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
