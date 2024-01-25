"use client";
import { useState } from "react";
import Image from "next/image";
import Background from "@/public/resumes-background.png";
export default function BasicQuestion({ submit }) {
  const [data, setData] = useState({});

  const [question, setQuestion] = useState({
    label: "Experience",
    question: "How much experience do you have?",
    description:
      "This will help us recommend the best resume templates for your experience level.",
    options: [
      "No Experience",
      "3 years or less",
      "3-5 years",
      "5-10 years",
      "10+ years",
    ],
  });

  const handleChange = (value) => {
    if (question.label === "Experience") {
      setData((prev) => {
        return { ...prev, Experience: value };
      });
      setQuestion({
        label: "Level Of Education",
        question: "What's your highest level of education?",
        description:
          "This will help us recommend the best resume templates for your experience level.",
        options: ["High School", "College / University", "Other"],
      });
    } else if (question.label === "Level Of Education") {
      setData((prev) => {
        return { ...prev, ["Level Of Education"]: value };
      });
      setQuestion({
        label: "Graduate",
        question: `Did you graduate from ${value}?`,
        description:
          "This will help us recommend the best resume templates for your experience level.",
        options: ["Yes", "Still Enrolled", "No"],
      });
    } else if (question.label === "Graduate") {
      submit({ ...data, Graduate: value });
    }
  };

  return (
    <>
      <p className="text-center px-5 text-black/80 font-extrabold text-3xl tracking-wide max-[600px]:text-2xl pb-4">
        {question.question}
      </p>
      <p className="text-black/80 font-medium text-center px-5 text-lg pb-6">
        {question.description}
      </p>
      <div className="w-full px-12 max-[600px]:px-5 flex justify-center gap-3.5 flex-wrap">
        {question.options.map((data) => (
          <div
            onClick={() => handleChange(data)}
            key={data}
            className="max-w-[90%] hover:border-black/90 hover:shadow-xl w-[300px] bg-white cursor-pointer h-[110px] rounded-lg border p-5 flex justify-center items-center"
          >
            <p className="text-black/80 font-bold text-lg">{data}</p>
          </div>
        ))}
      </div>
      <div className="w-full px-5">
        <Image src={Background} alt="Resume Background Image" />
      </div>
    </>
  );
}
