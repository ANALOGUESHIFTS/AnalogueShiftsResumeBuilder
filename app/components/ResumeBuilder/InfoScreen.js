"use client";

import { useState } from "react";
import ContactSection from "./ContactSection";

export default function InfoScreen() {
  const [selectedSection, setSelectedSection] = useState("Contact");
  const [userData, setUserData] = useState({});
  const navSections = [
    {
      section: "Contact",
      icon: "fa-solid fa-address-book text-xs",
    },
    {
      section: "Experience",
      icon: "fa-solid fa-hammer text-xs",
    },
    {
      section: "Education",
      icon: "fa-solid fa-book text-xs",
    },
    {
      section: "Certifications",
      icon: "fa-solid fa-award text-xs",
    },
    {
      section: "Skills",
      icon: "fa-solid fa-kitchen-set text-xs",
    },
    {
      section: "Summary",
      icon: "fa-regular fa-flag text-xs",
    },
    {
      section: "References",
      icon: "fa-solid fa-link text-xs",
    },
    {
      section: "Finalize",
      icon: "fa-regular fa-flag text-xs",
    },
  ];

  return (
    <section className="w-full flex h-max min-h-screen bg-[#f3f8ff] px-6 pb-8">
      <aside className="w-[250px] max-[930px]:hidden h-[calc(100dvh-150px)] sticky top-[100px] bg-white rounded-2xl p-5 flex flex-col gap-1">
        {navSections.map((section) => {
          return (
            <div
              key={section.section}
              className={`w-full rounded-xl px-5 py-2.5 cursor-not-allowed ${
                selectedSection === section.section
                  ? "bg-AnalogueShiftsTextColor"
                  : "bg-transparent"
              }`}
            >
              <p
                className={`text-sm font-medium flex items-center gap-2 ${
                  selectedSection === section.section
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
      <section className="w-[calc(100%-250px)] max-[930px]:pl-5 max-[930px]:pr-5 max-[930px]:w-full h-max pl-14 pr-8">
        {selectedSection === "Contact" && (
          <ContactSection
            submit={(data) => {
              setUserData((prev) => {
                return { ...prev, data };
              });
              console.log(data);
            }}
          />
        )}
      </section>
    </section>
  );
}
