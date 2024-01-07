"use client";

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

export default function InfoScreen({ done }) {
  const [selectedSection, setSelectedSection] = useState("Contact");
  const [isdone, setIsDone] = useState(false);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    if (isdone) {
      done(userData);
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
              setUserData((prev) => {
                return { ...prev, contactData: data };
              });
              setSelectedSection("Experience");
            }}
            data={userData.contactData ? userData.contactData : null}
          />
        )}
        {selectedSection === "Experience" && (
          <ExperienceSection
            back={() => setSelectedSection("Contact")}
            submit={(data) => {
              setUserData((prev) => {
                return { ...prev, experienceData: data };
              });
              setSelectedSection("Education");
            }}
            data={userData.experienceData ? userData.experienceData : null}
          />
        )}
        {selectedSection === "Education" && (
          <EducationSection
            back={() => setSelectedSection("Experience")}
            submit={(data) => {
              setUserData((prev) => {
                return { ...prev, educationData: data };
              });
              setSelectedSection("Certifications");
            }}
            data={userData.educationData ? userData.educationData : null}
          />
        )}
        {selectedSection === "Certifications" && (
          <CertificationSection
            back={() => setSelectedSection("Education")}
            submit={(data) => {
              setUserData((prev) => {
                return { ...prev, certificationData: data };
              });
              setSelectedSection("Skills");
            }}
            data={
              userData.certificationData ? userData.certificationData : null
            }
          />
        )}
        {selectedSection === "Skills" && (
          <SkillsSection
            back={() => setSelectedSection("Certifications")}
            submit={(data) => {
              setUserData((prev) => {
                return { ...prev, skillsData: data };
              });
              setSelectedSection("Summary");
            }}
            data={userData.skillsData ? userData.skillsData : null}
          />
        )}
        {selectedSection === "Summary" && (
          <SummarySection
            back={() => setSelectedSection("Skills")}
            submit={(data) => {
              setUserData((prev) => {
                return { ...prev, summaryData: data };
              });
              setSelectedSection("References");
            }}
            data={userData.summaryData ? userData.summaryData : null}
          />
        )}
        {selectedSection === "References" && (
          <ReferencesSection
            back={() => setSelectedSection("Summary")}
            submit={(data) => {
              setUserData((prev) => {
                return { ...prev, referencesData: data };
              });
              setSelectedSection("Finalize");
            }}
            data={userData.referencesData ? userData.referencesData : null}
          />
        )}
        {selectedSection === "Finalize" && (
          <FinalizeSection
            back={() => setSelectedSection("References")}
            submit={(data) => {
              setUserData((prev) => {
                return { ...prev, finalizeData: data };
              });
              setIsDone(true);
            }}
            data={userData.finalizeData ? userData.finalizeData : null}
          />
        )}
      </section>
    </section>
  );
}
