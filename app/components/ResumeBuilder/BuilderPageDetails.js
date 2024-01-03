"use client";
import { useState } from "react";
import BasicQuestion from "./BasicQuestions";
import InfoScreen from "./InfoScreen";

export default function BuilderPageDetails({ templateID }) {
  const [selectedScreen, setSelectedScreen] = useState("BasicQuestion");
  const [basicQuestionData, setBasicQuestionData] = useState();
  return (
    <div className="w-full h-max pt-[120px] bg-[#f3f8ff] overflow-x-hidden">
      {selectedScreen === "BasicQuestion" && (
        <BasicQuestion
          submit={(data) => {
            setSelectedScreen("");
            setBasicQuestionData(data);
            setSelectedScreen("Info");
          }}
        />
      )}
      {selectedScreen === "Info" && <InfoScreen />}
    </div>
  );
}
