"use client";
import { useState, useEffect } from "react";
import LoadingComponent from "../LoadingComponent";
import Image from "next/image";
import HomeIcon from "@/public/house-icon.png";
import RightBracket from "@/public/right-bracket.png";
import Link from "next/link";
import { coverLetterTemplates } from "./data";
import Faqs from "../OtherComponents/Faqs";
import FreeCoverLetterTemplates from "../OtherComponents/FreeCoverLetter";
import MasonryGrid from "../blog/MansoryGrid";
import { axiosBlog } from "@/app/lib/axios";
export default function CoverLetterTemplatesPageDetails() {
  const [loading, setLoading] = useState(false);
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    setLoading(true);
    axiosBlog
      .get("/posts")
      .then((res) => {
        const data = res.data;
        setBlogData(data.slice(0, 3));
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading && <LoadingComponent />}
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
              In search of a cover letter template? Download any of our 200+
              free cover letter templates for Word, then fill out a copy-paste
              cover letter template to complement your resume and finalize your
              job application.
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
            {coverLetterTemplates[0] && (
              <p className="pb-6 text-[2.6rem] w-full text-center max-[900px]:text-xl font-extrabold text-black/80">
                Use an AnalogueShifts Cover Letter Template
              </p>
            )}
            <div className="w-full flex flex-wrap gap-x-4 gap-y-4">
              {coverLetterTemplates.map((data) => {
                return (
                  <div
                    key={crypto.randomUUID()}
                    href={data.path}
                    className="h-max p-4 w-[450px] max-[1150px]:w-[calc(50%-16px)] max-[650px]:w-full bg-[#f8f9fb] rounded-lg resume-template-link"
                  >
                    <div className="w-full h-[500px] max-[900px]:h-max relative template-img-box">
                      <div className="w-full h-full max-[900px]:h-max rounded-lg overflow-y-scroll scroll-hidden">
                        {data.template}
                      </div>
                      <Link
                        href={data.path}
                        className="link-button absolute  opacity-0 translate-y-2 duration-300 bottom-4 left-4 w-[calc(100%-32px)] py-3 hover:bg-AnalogueShiftsTextColor/80 flex justify-center rounded-lg bg-AnalogueShiftsTextColor text-sm font-medium text-black/80"
                      >
                        Use Template
                      </Link>
                    </div>
                    <div className="w-full pl-2 h-[120px]">
                      <p className="pt-6 text-base text-black/90 font-medium pb-2">
                        {data.name}
                      </p>
                      <p className="text-black/60 font-medium text-sm">
                        {data.description}
                      </p>
                    </div>
                  </div>
                );
              })}
              {!coverLetterTemplates[0] && (
                <div className="w-full flex justify-center py-5">
                  <p className="text-lg font-semibold text-black/70">
                    No Template Available At The Moment
                  </p>
                </div>
              )}
            </div>
          </section>
          {coverLetterTemplates[0] && (
            <div className="w-full  h-max py-[60px] flex justify-center">
              <p className="pb-5 text-[2.6rem] w-[700px] max-[900px]:w-[90%] text-center max-[900px]:text-xl font-extrabold text-black/80">
                How to Use a Cover Letter Template
              </p>
            </div>
          )}
        </div>
        {coverLetterTemplates[0] && <FreeCoverLetterTemplates />}
        {/*
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
              Using a template is an easy way to include everything employers
              look for, but you should still make sure your cover letter is
              written in your voice.
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
              involves understanding a cover letter’s structure. Follow the
              sample cover letter template below to easily write your own
              letter.
            </p>
            <div className="w-full mt-7 h-max p-8 flex flex-col shadow-xl border-t-2 border-t-black/80">
              <ul className="w-full flex flex-col gap-2 list-inside pb-5">
                <li className="text-base text-black/60 font-medium">
                  Your Name
                </li>
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
                <li className="text-base text-black/60 font-medium">
                  Job Title
                </li>
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
                repeat your resume. Explain what makes you a unique candidate
                and how you can help the company meet its goals. Use numbers to
                back up your claims.
              </p>
              <p className="text-base text-black/60 font-medium pb-5">
                <b>Closing paragraph</b>: State that you’d like to schedule an
                interview and provide your contact information. Say you’ll be in
                touch within a week if you don’t hear back. Finish by thanking
                the employer for their time and consideration.
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
              If you’re not sure which is the best cover letter template for
              you, a basic or simple template is a good choice for any
              application.
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
        */}

        <div className="w-full h-[500px] flex flex-col items-center bg-white justify-center p-5 max-[1200px]:h-max">
          <p className="text-black/50 text-center max-[1050px]:text-center font-bold tracking-wide text-[13px]">
            COVER LETTER SAMPLE
          </p>
          <p className="py-5 text-[2.6rem] w-[700px] max-[900px]:w-[90%] text-center max-[900px]:text-xl font-extrabold text-black/80">
            See our cover letters in action
          </p>
          <p className="text-black/60 w-[800px] max-[900px]:w-[90%] max-[1050px]:text-center font-normal pb-10 tracking-normal text-base text-center">
            Browse through our professional cover letter examples for
            inspiration when composing your own cover letter. Each sample has
            been approved by a professional career expert from our team and
            utilizes a free cover letter template.
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
          {blogData[0] && <MasonryGrid posts={blogData} />}
        </div>
      </main>
    </>
  );
}
