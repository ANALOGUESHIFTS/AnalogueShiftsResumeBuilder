"use client";
import { useState, useEffect } from "react";
import { axiosBlog } from "@/app/lib/axios";
import LoadingComponent from "../components/LoadingComponent";
import ResumeTemplateSection from "./ResumeTemplateSection";
import Examples from "./Examples";
import HowToCreateAResume from "./HowToCreateAResume";
import CustomSlides from "./CustomSlides";
import GuidesAndAdvice from "./GuidesAndAdvice";
import LevelUpJobHunt from "./LevelUpJobHunt";
import Experts from "./Experts";
import Faqs from "../components/Faqs";
import ReadyToMakeResume from "./ReadyToMakeResume";
import Landing from "./Landing";
import GuestLayout from "../layouts/GuestLayout";

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
