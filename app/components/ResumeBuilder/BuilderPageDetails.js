"use client";
import { useRouter } from "next/navigation";
import InfoScreen from "./InfoScreen";

export default function BuilderPageDetails({ templateID }) {
  const router = useRouter();
  return (
    <div className="w-full h-max pt-[100px] bg-[#f3f8ff] overflow-x-hidden">
      <InfoScreen
        template={templateID}
        done={() => {
          router.push(`/resume-builder/app/how-to-start/${templateID}/finish`);
        }}
      />
    </div>
  );
}
