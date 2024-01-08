"use client";
import { useEffect } from "react";
import "../resume/Advanced.css";
import Link from "next/link";

export default function AdvancedResumeTemplate({ data }) {
  useEffect(() => console.log(data), []);

  return (
    <main className="main min-h-full font-normal text-[#222] text-sm leading-[26px] pb-[50px] m-0 p-0 box-border h-full">
      <div
        style={{ margin: "0px auto 0px" }}
        class="max-w-[700px] bg-white rounded-[3px] p-10"
      >
        <div class="mb-[30px]">
          <div class="text-[30px] flex gap-1 flex-wrap uppercase mb-[5px]">
            <span class="font-bold">{data.contactData["First Name"]}</span>
            <span class="font-light">{data.contactData["Last Name"]}</span>
          </div>
          <div class="mb-5">
            <span class="text-[#999] font-light">Email: </span>
            <span class="email-val">{data.contactData["Email"]}</span>
            <span class="h-2.5 inline-block underline mx-2.5 border-l-2 border-solid border-[#999]"></span>
            {data.contactData["Phone"] && (
              <>
                <span class="text-[#999] font-light">Phone: </span>
                <span class="phone-val">{data.contactData["Phone"]}</span>
                <span class="h-2.5 inline-block underline mx-2.5 border-l-2 border-solid border-[#999]"></span>
              </>
            )}

            {data.contactData["LinkedIn Url"] && (
              <>
                <span class="text-[#999] font-light">LinkedIn: </span>
                <Link
                  className="underline"
                  href={data.contactData["LinkedIn Url"]}
                >
                  {" "}
                  <span class="phone-val">Click Here</span>
                  <span class="h-2.5 inline-block underline mx-2.5 border-l-2 border-solid border-[#999]"></span>
                </Link>
              </>
            )}

            <>
              <span class="text-[#999] font-light">Location: </span>
              <span class="email-val">
                {data.contactData["City"] && data.contactData["City"] + ", "}
                {data.contactData["State / Province"] &&
                  data.contactData["State / Province"] + ", "}
                {data.contactData["Country"] && data.contactData["Country"]}
              </span>
            </>
          </div>

          <div class="about">
            <span class="font-bold inline-block mr-2.5 underline">
              {data.contactData["Desired Job Title"]}{" "}
            </span>
            <span
              class="desc"
              dangerouslySetInnerHTML={{ __html: data.summaryData }}
            ></span>
          </div>
        </div>
        <div class="leading-5">
          {data.experienceData[0] && (
            <div class="mb-10 last-of-type:mb-0 w-full h-auto">
              <div class="font-bold text-[#54afe4] tracking-[2px] uppercase mb-2.5">
                Experience
              </div>
              <div class="w-full flex flex-col gap-6">
                {data.experienceData.map((experience) => {
                  return (
                    <div
                      key={crypto.randomUUID()}
                      class="w-full flex justify-between"
                    >
                      <div class="w-[50%] flex flex-col">
                        <div class="font-bold">{experience.companyName}</div>
                        <div class="addr">
                          {experience.country}
                          {experience.state.trim().length > 0 &&
                            ", " + experience.state}
                          {experience.city.trim().length > 0 &&
                            ", " + experience.city}
                        </div>
                        <div class="duration">
                          {experience.startMonth} {experience.startYear} -{" "}
                          {experience.currentlyWorkHere
                            ? "Present"
                            : `${experience.endMonth} ${experience.endYear}`}
                        </div>
                      </div>
                      <div class="w-[45%]">
                        <div class="font-bold">{experience.jobTitle}</div>
                        <div class=" h-max">{experience.description}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          {data.educationData[0] && (
            <div class="mb-10 last-of-type:mb-0">
              <div class="font-bold text-[#54afe4] tracking-[2px] uppercase mb-2.5">
                Education
              </div>
              <div class="w-full flex flex-col gap-6">
                {data.educationData.map((education) => {
                  return (
                    <div
                      key={crypto.randomUUID()}
                      class="w-full flex justify-between"
                    >
                      <div class="w-[50%] flex flex-col">
                        <div class="font-bold">{education.schoolName}</div>
                        <div class="addr">{education.schoolLocation}</div>
                        <div class="duration">
                          {education.graduationMonth} {education.graduationYear}
                        </div>
                      </div>
                      <div class="w-[45%]">
                        <div class="font-bold">
                          {education.degreeOfProgram} - {education.fieldOfStudy}
                        </div>
                        <div class=" h-max">{education.additionalInfo}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          {data.referencesData[0] && (
            <div class="mb-10 last-of-type:mb-0">
              <div class="font-bold text-[#54afe4] tracking-[2px] uppercase mb-2.5">
                References
              </div>
              <div class="w-full flex flex-col gap-6">
                {data.referencesData.map((reference) => {
                  return (
                    <div
                      key={crypto.randomUUID()}
                      class="w-full flex justify-between"
                    >
                      <div class="w-[50%] flex flex-col">
                        <div class="font-bold">
                          {reference.firstName} {reference.lastName}
                        </div>
                        <div class="addr">{reference.email}</div>
                        <div class="duration">{reference.phone}</div>
                      </div>
                      <div class="w-[45%]">
                        <div class="font-bold">
                          {reference.positionTitle} - {reference.companyName}
                        </div>
                        <div class=" h-max">{reference.relationshipToYou}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          {data.skillsData[0] && (
            <div class="mb-10 last-of-type:mb-0">
              <div class="font-bold text-[#54afe4] tracking-[2px] uppercase mb-2.5">
                Skills
              </div>
              <div class="flex flex-wrap gap-x-2.5 gap-y-3.5">
                {data.skillsData.map((skill) => {
                  return (
                    <div key={skill.id} class="font-bold">
                      * {skill.skill}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          {data.finalizeData.awards[0] && (
            <div class="mb-10 last-of-type:mb-0">
              <div class="font-bold text-[#54afe4] tracking-[2px] uppercase mb-2.5">
                Awards
              </div>
              <div class="flex flex-wrap gap-x-2.5 gap-y-3.5">
                {data.finalizeData.awards.map((award) => {
                  return (
                    <div key={award.id} class="font-bold">
                      * {award.award}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          {data.finalizeData.publications[0] && (
            <div class="mb-10 last-of-type:mb-0">
              <div class="font-bold text-[#54afe4] tracking-[2px] uppercase mb-2.5">
                Publications
              </div>
              <div class="flex flex-wrap gap-x-2.5 gap-y-3.5">
                {data.finalizeData.publications.map((publication) => {
                  return (
                    <div key={publication.id} class="font-bold">
                      * {publication.publication}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          {data.certificationData[0] && (
            <div class="mb-10 last-of-type:mb-0">
              <div class="font-bold text-[#54afe4] tracking-[2px] uppercase mb-2.5">
                Certifications
              </div>
              <div class="flex flex-col gap-y-3.5">
                {data.certificationData.map((certification) => {
                  return (
                    <div key={certification.id} class="font-bold">
                      * {certification.certification}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          {data.finalizeData.customDatas[0] &&
            data.finalizeData.customDatas.map((custom) => {
              return (
                <div class="mb-10 last-of-type:mb-0">
                  <div class="font-bold text-[#54afe4] tracking-[2px] uppercase mb-2.5">
                    {custom.name}
                  </div>
                  <div class="text">{custom.description}</div>
                </div>
              );
            })}
        </div>
      </div>
    </main>
  );
}
