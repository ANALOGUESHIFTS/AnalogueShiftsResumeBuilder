import "../resume/Advanced.css";
import Link from "next/link";

export default function AdvancedResumeTemplate({ data }) {
  return (
    <main className="main min-h-full font-normal text-[#222] text-sm leading-[26px] pb-[50px] m-0 p-0 box-border h-full">
      <div
        style={{ margin: "0px auto 0px" }}
        className="max-w-[700px] bg-white rounded-[3px] p-10"
      >
        <div className="mb-[30px]">
          <div className="text-[18px] lg:text-[20px] flex gap-2 flex-wrap uppercase mb-[5px]">
            <span className="font-bold">{data.contactData["First Name"]}</span>
            <span className="font-light">{data.contactData["Last Name"]}</span>
          </div>
          <div className="mb-5">
            <span className="text-[#999] font-light">Email: </span>
            <span className="email-val">{data.contactData["Email"]}</span>
            <span className="h-2.5 inline-block underline mx-2.5 border-l-2 border-solid border-[#999]"></span>
            {data.contactData["Phone"] && (
              <>
                <span className="text-[#999] font-light">Phone: </span>
                <span className="phone-val">{data.contactData["Phone"]}</span>
                <span className="h-2.5 inline-block underline mx-2.5 border-l-2 border-solid border-[#999]"></span>
              </>
            )}

            {data.contactData["LinkedIn Url"] && (
              <>
                <span className="text-[#999] font-light">LinkedIn: </span>
                <Link
                  className="underline"
                  href={data.contactData["LinkedIn Url"]}
                >
                  {" "}
                  <span className="phone-val">Click Here</span>
                  <span className="h-2.5 inline-block underline mx-2.5 border-l-2 border-solid border-[#999]"></span>
                </Link>
              </>
            )}

            <>
              <span className="text-[#999] font-light">Location: </span>
              <span className="email-val">
                {data.contactData["City"] && data.contactData["City"] + ", "}
                {data.contactData["State / Province"] &&
                  data.contactData["State / Province"] + ", "}
                {data.contactData["Country"] && data.contactData["Country"]}
              </span>
            </>
          </div>
          {data.summaryData.split(">")[1][0] !== "<" && (
            <div className="about">
              <span className="font-bold inline-block mr-2.5 underline">
                {data.contactData["Desired Job Title"]}{" "}
              </span>
              <span
                className="desc"
                dangerouslySetInnerHTML={{ __html: data.summaryData }}
              ></span>
            </div>
          )}
        </div>
        <div className="leading-5">
          {data.experienceData[0] && (
            <div className="mb-10 last-of-type:mb-0 w-full h-auto">
              <div className="font-bold text-[#54afe4] tracking-wide uppercase mb-2.5">
                Experience
              </div>
              <div className="w-full flex flex-col gap-6">
                {data.experienceData.map((experience) => {
                  return (
                    <div
                      key={crypto.randomUUID()}
                      className="w-full flex flex-col"
                    >
                      <div className="w-full flex flex-col">
                        <div className="font-bold">
                          {experience.companyName} - {experience.jobTitle}
                        </div>
                        <div className="addr">
                          {experience.country}
                          {experience.state.trim().length > 0 &&
                            ", " + experience.state}
                          {experience.city.trim().length > 0 &&
                            ", " + experience.city}
                        </div>
                        <div className="duration">
                          {experience.startMonth} {experience.startYear} -{" "}
                          {experience.currentlyWorkHere
                            ? "Present"
                            : `${experience.endMonth} ${experience.endYear}`}
                        </div>
                      </div>
                      <div className="w-full pt-3">
                        <div className=" h-max">{experience.description}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          {data.educationData[0] && (
            <div className="mb-10 last-of-type:mb-0">
              <div className="font-bold text-[#54afe4] tracking-wide uppercase mb-2.5">
                Education
              </div>
              <div className="w-full flex flex-col gap-6">
                {data.educationData.map((education) => {
                  return (
                    <div
                      key={crypto.randomUUID()}
                      className="w-full flex flex-col"
                    >
                      <div className="w-full flex flex-col">
                        <div className="font-bold">
                          {education.schoolName} | {education.degreeOfProgram} -{" "}
                          {education.fieldOfStudy}
                        </div>
                        <div className="addr">{education.schoolLocation}</div>
                        <div className="duration">
                          {education.graduationMonth} {education.graduationYear}
                        </div>
                      </div>
                      <div className="w-full pt-3">
                        <div className=" h-max">{education.additionalInfo}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          {data.referencesData[0] && (
            <div className="mb-10 last-of-type:mb-0">
              <div className="font-bold text-[#54afe4] tracking-wide uppercase mb-2.5">
                References
              </div>
              <div className="w-full flex flex-col gap-6">
                {data.referencesData.map((reference) => {
                  return (
                    <div
                      key={crypto.randomUUID()}
                      className="w-full flex justify-between"
                    >
                      <div className="w-[50%] flex flex-col">
                        <div className="font-bold">
                          {reference.firstName} {reference.lastName}
                        </div>
                        <div className="addr">{reference.email}</div>
                        <div className="duration">{reference.phone}</div>
                      </div>
                      <div className="w-[45%]">
                        <div className="font-bold">
                          {reference.positionTitle} - {reference.companyName}
                        </div>
                        <div className=" h-max">
                          {reference.relationshipToYou}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          {data.skillsData[0] && (
            <div className="mb-10 last-of-type:mb-0">
              <div className="font-bold text-[#54afe4] tracking-wide uppercase mb-2.5">
                Skills
              </div>
              <div className="flex flex-wrap gap-x-2.5 gap-y-3.5">
                {data.skillsData.map((skill) => {
                  return (
                    <div key={skill.id} className="font-bold">
                      * {skill.skill}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          {data.finalizeData.awards[0] && (
            <div className="mb-10 last-of-type:mb-0">
              <div className="font-bold text-[#54afe4] tracking-wide uppercase mb-2.5">
                Awards
              </div>
              <div className="flex flex-wrap gap-x-2.5 gap-y-3.5">
                {data.finalizeData.awards.map((award) => {
                  return (
                    <div key={award.id} className="font-bold">
                      * {award.award}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          {data.finalizeData.publications[0] && (
            <div className="mb-10 last-of-type:mb-0">
              <div className="font-bold text-[#54afe4] tracking-wide uppercase mb-2.5">
                Publications
              </div>
              <div className="flex flex-wrap gap-x-2.5 gap-y-3.5">
                {data.finalizeData.publications.map((publication) => {
                  return (
                    <div key={publication.id} className="font-bold">
                      * {publication.publication}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          {data.certificationData[0] && (
            <div className="mb-10 last-of-type:mb-0">
              <div className="font-bold text-[#54afe4] tracking-wide uppercase mb-2.5">
                Certifications
              </div>
              <div className="flex flex-col gap-y-3.5">
                {data.certificationData.map((certification) => {
                  return (
                    <div key={certification.id} className="font-bold">
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
                <div className="mb-10 last-of-type:mb-0">
                  <div className="font-bold text-[#54afe4] tracking-wide uppercase mb-2.5">
                    {custom.name}
                  </div>
                  <div className="text">{custom.description}</div>
                </div>
              );
            })}
        </div>
      </div>
    </main>
  );
}
