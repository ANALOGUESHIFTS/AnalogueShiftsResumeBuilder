"use client";
import { useState, useEffect } from "react";
import LoadingComponent from "../../components/LoadingComponent";
import Link from "next/link";
import { coverLetterTemplates } from "@/app/resources/cover-letter/data";
import Faqs from "@/app/components/Faqs";
import FreeCoverLetterTemplates from "./FreeCoverLetter";
import MasonryGrid from "@/app/components/MansoryGrid";
import { axiosBlog } from "@/app/lib/axios";
import GuestLayout from "@/app/components/layouts/GuestLayout";
import Landing from "./Landing";

export default function CoverLetterTemplatesPage() {
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
        setLoading(false);
      });
  }, []);

  return (
    <GuestLayout>
      {loading && <LoadingComponent />}
      <main className="w-full h-auto">
        <Landing />
        {coverLetterTemplates[0] && <FreeCoverLetterTemplates />}

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
    </GuestLayout>
  );
}
