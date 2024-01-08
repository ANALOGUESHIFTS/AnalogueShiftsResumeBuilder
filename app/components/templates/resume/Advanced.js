"use client";
import { useEffect } from "react";
import "../resume/Advanced.css";
import Link from "next/link";

export default function AdvancedResumeTemplate({ data }) {
  useEffect(() => console.log(data), []);

  return (
    <main className="main">
      <div class="box">
        <div class="header">
          <div class="full-name">
            <span class="first-name">{data.contactData["First Name"]}</span>
            <span class="last-name">{data.contactData["Last Name"]}</span>
          </div>
          <div class="contact-info">
            <span class="email">Email: </span>
            <span class="email-val">{data.contactData["Email"]}</span>
            <span class="separator"></span>
            {data.contactData["Phone"] && (
              <>
                <span class="phone">Phone: </span>
                <span class="phone-val">{data.contactData["Phone"]}</span>
              </>
            )}
            <span class="separator"></span>
            {data.contactData["LinkedIn Url"] && (
              <>
                <span class="phone">LinkedIn: </span>
                <Link
                  className="underline"
                  href={data.contactData["LinkedIn Url"]}
                >
                  {" "}
                  <span class="phone-val">Click Here</span>
                </Link>
              </>
            )}
            <span class="separator"></span>
            <>
              <span class="phone">Location: </span>
              <span class="email-val">
                {data.contactData["City"] && data.contactData["City"] + ", "}
                {data.contactData["State / Province"] &&
                  data.contactData["State / Province"] + ", "}
                {data.contactData["Country"] && data.contactData["Country"]}
              </span>
            </>
          </div>

          <div class="about">
            <span class="position">
              {data.contactData["Desired Job Title"]}{" "}
            </span>
            <span
              class="desc"
              dangerouslySetInnerHTML={{ __html: data.summaryData }}
            ></span>
          </div>
        </div>
        <div class="details">
          {data.experienceData[0] && (
            <div class="section w-full h-auto">
              <div class="section__title">Experience</div>
              <div class="w-full flex flex-col gap-6">
                {data.experienceData.map((experience) => {
                  return (
                    <div
                      key={crypto.randomUUID()}
                      class="w-full flex justify-between"
                    >
                      <div class="w-[50%] flex flex-col">
                        <div class="name">{experience.companyName}</div>
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
                        <div class="name">{experience.jobTitle}</div>
                        <div class=" h-max">{experience.description}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          {data.educationData[0] && (
            <div class="section">
              <div class="section__title">Education</div>
              <div class="w-full flex flex-col gap-6">
                {data.educationData.map((education) => {
                  return (
                    <div
                      key={crypto.randomUUID()}
                      class="w-full flex justify-between"
                    >
                      <div class="w-[50%] flex flex-col">
                        <div class="name">{education.schoolName}</div>
                        <div class="addr">{education.schoolLocation}</div>
                        <div class="duration">
                          {education.graduationMonth} {education.graduationYear}
                        </div>
                      </div>
                      <div class="w-[45%]">
                        <div class="name">
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
            <div class="section">
              <div class="section__title">References</div>
              <div class="w-full flex flex-col gap-6">
                {data.referencesData.map((reference) => {
                  return (
                    <div
                      key={crypto.randomUUID()}
                      class="w-full flex justify-between"
                    >
                      <div class="w-[50%] flex flex-col">
                        <div class="name">
                          {reference.firstName} {reference.lastName}
                        </div>
                        <div class="addr">{reference.email}</div>
                        <div class="duration">{reference.phone}</div>
                      </div>
                      <div class="w-[45%]">
                        <div class="name">
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
            <div class="section">
              <div class="section__title">Skills</div>
              <div class="flex flex-wrap gap-x-2.5 gap-y-3.5">
                {data.skillsData.map((skill) => {
                  return (
                    <div key={skill.id} class="name">
                      * {skill.skill}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          {data.finalizeData.awards[0] && (
            <div class="section">
              <div class="section__title">Awards</div>
              <div class="flex flex-wrap gap-x-2.5 gap-y-3.5">
                {data.finalizeData.awards.map((award) => {
                  return (
                    <div key={award.id} class="name">
                      * {award.award}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          {data.finalizeData.publications[0] && (
            <div class="section">
              <div class="section__title">Publications</div>
              <div class="flex flex-wrap gap-x-2.5 gap-y-3.5">
                {data.finalizeData.publications.map((publication) => {
                  return (
                    <div key={publication.id} class="name">
                      * {publication.publication}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          {data.certificationData[0] && (
            <div class="section">
              <div class="section__title">Certifications</div>
              <div class="flex flex-col gap-y-3.5">
                {data.certificationData.map((certification) => {
                  return (
                    <div key={certification.id} class="name">
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
                <div class="section">
                  <div class="section__title">{custom.name}</div>
                  <div class="text">{custom.description}</div>
                </div>
              );
            })}
        </div>
      </div>
    </main>
  );
}
