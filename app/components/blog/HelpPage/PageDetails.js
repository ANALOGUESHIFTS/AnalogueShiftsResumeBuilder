"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import HomeIcon from "@/public/house-icon.png";
import RightBracket from "@/public/right-bracket.png";
import SearchIcon from "@/public/search-icon.png";
import { blogData, icoLinks, navLinks } from "../data";
export default function BlogHelpPageDetails({ helpPage }) {
  const pathname = usePathname();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    switch (helpPage) {
      case "career-advice":
        setTitle("Career Advice");
        setDescription(
          "Career advice from certified experts. Whether you’re out of work and looking to build upon your next career path or simply better your current working conditions, we’re here to support you on your path."
        );
        break;
      case "cover-letter-help":
        setTitle("Cover Letter Help");
        setDescription("");
        break;
      case "cv-help":
        setTitle("CV Help");
        setDescription(
          "CV help, advice, and examples to help job seekers in the US and abroad create job-winning CVs"
        );
        break;
      case "interview":
        setTitle("Interview");
        setDescription(
          "Have an interview coming up? The articles below provide the resources and tips you need to ace it."
        );
        break;
      case "job-hunting":
        setTitle("Job Hunting");
        setDescription(
          "Need help getting your job hunt started? Our job-hunting resources, guides, and expert advice are at your disposal."
        );
        break;
      case "resume-help":
        setTitle("Resume Help");
        setDescription(
          "Need help making a resume? Our “Resume Help” hub has everything you could ever need — from huge step-by-step guides to expert advice and tips for each detail of resume writing and formatting."
        );
        break;
      default:
        setTitle("The Genius Career Blog");
        break;
    }
  }, [helpPage]);
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
          <Link href="/blog" className="flex gap-1.5 items-center">
            <p className="text-black/80 font-medium text-sm hover:underline">
              Blog
            </p>
          </Link>
          <Image src={RightBracket} alt="Divider Icon" className="w-5 h-4" />
          <p className="text-black/50 font-medium text-sm">{title}</p>
        </div>
        <div className="w-full flex flex-col items-center">
          <p className="pb-5 text-[2.6rem] w-[700px] max-[900px]:w-[90%] text-center max-[900px]:text-xl font-extrabold text-black/80">
            {title}
          </p>
          <p className="text-black/60 w-[800px] max-[900px]:w-[90%] max-[1050px]:text-center font-normal pb-10 tracking-normal text-base text-center">
            {description}
          </p>
        </div>
      </main>
      <div className="w-full bg-[#2b3a45] flex flex-col items-center py-[60px] px-10 max-[800px]:px-5 ">
        <p className="pb-8 text-[2.6rem] w-[700px] max-[900px]:w-[90%] text-center max-[900px]:text-xl font-extrabold text-white">
          Our Library of Job Resources
        </p>
        <div className="w-[1000px] max-w-full gap-x-5 flex flex-wrap gap-y-5 justify-center">
          {icoLinks.map((data) => {
            return (
              <Link
                key={crypto.randomUUID()}
                href={data.path}
                className="w-[230px] h-[230px] hover:bg-AnalogueShiftsTextColor rounded-xl shadow-xl bg-white p-4 flex flex-col items-center justify-center"
              >
                <Image src={data.image} alt="" className="w-10" />
                <p className="py-2 text-center text-black/80 font-medium text-base">
                  {data.title}
                </p>
                <p className="text-black/60 text-sm font-medium text-center">
                  {data.description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="w-full px-10 max-[800px]:px-5 py-10">
        <div className="w-full overflow-x-auto">
          <div className="w-max min-w-full flex justify-center border-b ">
            {navLinks.map((link) => {
              return (
                <Link
                  key={crypto.randomUUID()}
                  href={link.path}
                  className={`w-max px-5 flex justify-center pb-5  text-base font-medium ${
                    pathname === link.path
                      ? "text-AnalogueShiftsTextColor/80"
                      : "text-black/60"
                  } ${
                    pathname === link.path ? "border-b" : "border-none"
                  } border-AnalogueShiftsTextColor/80`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="w-full py-10">
          <div className="w-full h-max overflow-hidden bg-white rounded-lg border flex items-center pl-3">
            <Image
              className="cursor-pointer w-5 h-5 mr-3 opacity-70"
              src={SearchIcon}
              alt="Search Icon"
            />
            <input
              placeholder="Search job title (e.g. 'Engineer')"
              className="text font-normal w-[calc(100%-28px)] py-3.5 outline-none border-none text-black/40 text-[15px]"
            />
          </div>
        </div>
        <div className="w-full h-max flex flex-col items-center bg-white justify-center p-5 ">
          <p className=" pb-8 text-[2.6rem] w-[700px] max-[900px]:w-[90%] text-center max-[900px]:text-xl font-extrabold text-black/80">
            Related Articles
          </p>
          <div className="w-full flex justify-between flex-wrap gap-y-5">
            {blogData
              .filter((data) => data.category.includes(helpPage))
              .map((data) => {
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
      </div>
    </main>
  );
}
