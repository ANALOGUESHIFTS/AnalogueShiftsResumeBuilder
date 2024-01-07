"use client";
import { useState } from "react";
import BasicQuestion from "./BasicQuestions";
import InfoScreen from "./InfoScreen";
import AdvancedResumeTemplate from "../templates/resume/Advanced";

export default function BuilderPageDetails({ templateID }) {
  const [data, setData] = useState(null);
  const [isInfoScreen, setIsInfoScreen] = useState(true);
  return (
    <div className="w-full h-max pt-[120px] bg-[#f3f8ff] overflow-x-hidden">
      {/*selectedScreen === "BasicQuestion" && (
        <BasicQuestion
          submit={(data) => {
            setSelectedScreen("");
            setBasicQuestionData(data);
            setSelectedScreen("Info");
          }}
        />
        )*/}
      {isInfoScreen && (
        <InfoScreen
          done={(data) => {
            setData(data);
            setIsInfoScreen(false);
          }}
        />
      )}
      {data && (
        <div className="w-full">
          <AdvancedResumeTemplate data={data} />
        </div>
      )}
    </div>
  );
}
