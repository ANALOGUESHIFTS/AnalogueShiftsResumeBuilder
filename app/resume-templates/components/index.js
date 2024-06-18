"use client";
import { useState, useEffect } from "react";
import LoadingComponent from "@/components/application/LoadingComponent";
import FreeResumeTemplates from "./free-resume-templates";
import Faqs from "@/components/application/faqs";
import MasonryGrid from "@/components/application/mansory-grid";
import { axiosBlog } from "@/app/lib/axios";
import GuestLayout from "@/components/application/layouts/guest";
import Landing from "./landing";
import ReadyToBuildResume from "./build-a-resume";

export default function ResumeTemplatesPage() {
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
        <FreeResumeTemplates />
        <ReadyToBuildResume />
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
