"use client";
import { useState, useEffect } from "react";
import { axiosBlog } from "@/app/lib/axios";
import LoadingComponent from "../LoadingComponent";
import ResumeTemplateSection from "./resume-templates";
import Examples from "./examples";
import HowToCreateAResume from "./how-to-create";
import CustomSlides from "./custom-slides";
import GuidesAndAdvice from "./guides-and-advice";
import LevelUpJobHunt from "./level-up-job-hunt";
import Experts from "./experts";
import Faqs from "../faqs";
import ReadyToMakeResume from "./ready-to-make-resume";
import Landing from "./Landing";
import GuestLayout from "../layouts/guest";

export default function ResumeBuilderPage() {
  const [blogData, setBlogData] = useState("");
  const [loading, setLoading] = useState(false);

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
        //
        setLoading(false);
      });
  }, []);

  return (
    <GuestLayout>
      {loading && <LoadingComponent />}
      <main className="w-full h-auto bg-white">
        <Landing />
        <ResumeTemplateSection />
        <Examples />
        <HowToCreateAResume />
        <CustomSlides />
        <GuidesAndAdvice blogData={blogData} />
        <LevelUpJobHunt />
        <Experts />
        <Faqs />
        <ReadyToMakeResume />
      </main>
    </GuestLayout>
  );
}
