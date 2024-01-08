"use client";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import ContactSection from "./ContactSection";
import ExperienceSection from "./ExperienceSection";
import EducationSection from "./EducationSection";
import CertificationSection from "./CertificationSection";
import SkillsSection from "./SkillsSection";
import SummarySection from "./SummarySection";
import ReferencesSection from "./ReferencesSection";
import FinalizeSection from "./FinalizeSection";
import { navSections } from "./data";

export default function InfoScreen({ done, template }) {
  const [selectedSection, setSelectedSection] = useState("Contact");
  const [isdone, setIsDone] = useState(false);

  useEffect(() => {
    if (isdone) {
      done();
    }
  }, [isdone]);

  return (
    <section className="w-full flex h-max min-h-screen bg-[#f3f8ff] px-6 pb-8">
      <aside className="w-[250px] max-[930px]:hidden h-[calc(100dvh-150px)] sticky top-0 bg-white rounded-2xl p-5 flex flex-col gap-1">
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
      <section className="w-[calc(100%-250px)] max-[930px]:pl-0 max-[930px]:pr-0 max-[930px]:w-full h-max pl-14 pr-8">
        {selectedSection === "Contact" && (
          <ContactSection
            submit={(data) => {
              let storedData = Cookies.get("userData");
              if (storedData) {
                Cookies.set(
                  "userData",
                  JSON.stringify({
                    ...JSON.parse(storedData),
                    contactData: data,
                  }),
                  { expires: 7 }
                );
              } else {
                Cookies.set(
                  "userData",
                  JSON.stringify({
                    contactData: data,
                  }),
                  { expires: 7 }
                );
              }

              setSelectedSection("Experience");
            }}
          />
        )}
        {selectedSection === "Experience" && (
          <ExperienceSection
            back={() => setSelectedSection("Contact")}
            submit={(data) => {
              Cookies.set(
                "userData",
                JSON.stringify({
                  ...JSON.parse(Cookies.get("userData")),
                  experienceData: data,
                }),
                { expires: 7 }
              );
              setSelectedSection("Education");
            }}
          />
        )}
        {selectedSection === "Education" && (
          <EducationSection
            back={() => setSelectedSection("Experience")}
            submit={(data) => {
              Cookies.set(
                "userData",
                JSON.stringify({
                  ...JSON.parse(Cookies.get("userData")),
                  educationData: data,
                }),
                { expires: 7 }
              );
              setSelectedSection("Certifications");
            }}
          />
        )}
        {selectedSection === "Certifications" && (
          <CertificationSection
            back={() => setSelectedSection("Education")}
            submit={(data) => {
              Cookies.set(
                "userData",
                JSON.stringify({
                  ...JSON.parse(Cookies.get("userData")),
                  certificationData: data,
                }),
                { expires: 7 }
              );
              setSelectedSection("Skills");
            }}
          />
        )}
        {selectedSection === "Skills" && (
          <SkillsSection
            back={() => setSelectedSection("Certifications")}
            submit={(data) => {
              Cookies.set(
                "userData",
                JSON.stringify({
                  ...JSON.parse(Cookies.get("userData")),
                  skillsData: data,
                }),
                { expires: 7 }
              );
              setSelectedSection("Summary");
            }}
          />
        )}
        {selectedSection === "Summary" && (
          <SummarySection
            back={() => setSelectedSection("Skills")}
            submit={(data) => {
              Cookies.set(
                "userData",
                JSON.stringify({
                  ...JSON.parse(Cookies.get("userData")),
                  summaryData: data,
                }),
                { expires: 7 }
              );
              setSelectedSection("References");
            }}
          />
        )}
        {selectedSection === "References" && (
          <ReferencesSection
            back={() => setSelectedSection("Summary")}
            submit={(data) => {
              Cookies.set(
                "userData",
                JSON.stringify({
                  ...JSON.parse(Cookies.get("userData")),
                  referencesData: data,
                }),
                { expires: 7 }
              );
              setSelectedSection("Finalize");
            }}
          />
        )}
        {selectedSection === "Finalize" && (
          <FinalizeSection
            back={() => setSelectedSection("References")}
            submit={(data) => {
              Cookies.set(
                "userData",
                JSON.stringify({
                  ...JSON.parse(Cookies.get("userData")),
                  finalizeData: data,
                  template: template,
                }),
                { expires: 7 }
              );
              setIsDone(true);
            }}
          />
        )}
      </section>
    </section>
  );
}
