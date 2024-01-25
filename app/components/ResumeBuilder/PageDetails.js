"use client";
import { useState, useEffect } from "react";
import { axiosBlog } from "@/app/lib/axios";
import LoadingComponent from "../LoadingComponent";
import ResumeTemplateSection from "../OtherComponents/ResumeTemplateSection";
import Examples from "../OtherComponents/Examples";
import HowToCreateAResume from "../OtherComponents/HowToCreateAResume";
import CustomSlides from "../OtherComponents/CustomSlides";
import GuidesAndAdvice from "../OtherComponents/GuidesAndAdvice";
import LevelUpJobHunt from "../OtherComponents/LevelUpJobHunt";
import Experts from "../OtherComponents/Experts";
import Faqs from "../OtherComponents/Faqs";
import ReadyToMakeResume from "../OtherComponents/ReadyToMakeResume";

import Landing from "./Landing";

export default function ResumeBuilderPageDetails() {
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
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <>
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
    </>
  );
}
