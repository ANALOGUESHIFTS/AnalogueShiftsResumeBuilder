"use client";
import sections from "@/resources/resume-builder/builder/sections.json";
import { usePathname } from "next/navigation";

export default function BuilderLayout({ children }) {
  const pathname = usePathname();

  return (
    <section className="w-full z-10 flex h-max min-h-[100dvh] bg-[#f3f8ff] pt-[100px]  px-6 pb-8">
      <aside className="w-[250px]  max-[930px]:hidden h-[calc(100dvh-150px)] sticky top-[100px] left-0 bg-white rounded-2xl p-5 flex flex-col gap-1">
        {sections.map((section) => {
          return (
            <div
              key={section.section}
              className={`w-full rounded-xl px-5 py-2.5 cursor-not-allowed ${
                pathname.endsWith(section.section.toLowerCase())
                  ? "bg-AnalogueShiftsTextColor"
                  : "bg-transparent"
              }`}
            >
              <p
                className={`text-sm font-medium flex items-center gap-2 ${
                  pathname.endsWith(section.section.toLowerCase())
                    ? "text-white"
                    : "text-black/40"
                }`}
              >
                <i className={section.icon}></i>
                {section.section}
              </p>
            </div>
          );
        })}
      </aside>
      <section className="w-[calc(100%-250px)] max-[930px]:px-0 max-[930px]:w-full h-max pl-14 pr-8">
        {children}
      </section>
    </section>
  );
}
