"use client";
import { useState } from "react";
import Image from "next/image";
import Background from "@/public/resumes-background.png";
import BasicQuestion from "./BasicQuestions";

export default function BuilderPageDetails({ templateID }) {
  const [selectedScreen, setSelectedScreen] = useState("BasicQuestion");
  const [basicQuestionData, setBasicQuestionData] = useState();
  return (
    <div className="w-full h-max pt-[120px] bg-[#f3f8ff]">
      {selectedScreen === "BasicQuestion" && (
        <BasicQuestion
          submit={(data) => {
            setSelectedScreen("");
            setBasicQuestionData(data);
            console.log(data);
          }}
        />
      )}
    </div>
  );
}
