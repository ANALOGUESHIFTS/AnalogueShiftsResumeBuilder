export default function ProfessionalResumeTemplate({ data }) {
  return (
    <main className="font-jost hyphens-manual">
      <section className="p-3 mx-auto max-w-3xl sm:p-9 bg-white md:p-10 print:border-0 page print:max-w-letter print:max-h-letter print:mx-0 print:my-o xsm:p-8 print:bg-white md:max-w-letter md:h-letter lg:h-letter">
        <header className="inline-flex justify-between items-baseline mb-2 w-full align-top border-b-4 border-gray-300">
          <section className="block">
            <h1 className="mb-0 pb-2 pr-2 lg:pb-4 text-[20px] lg:text-[25px] font-bold text-gray-700">
              {data.contactData["First Name"].toUpperCase()}{" "}
              {data.contactData["Last Name"].toUpperCase()}
            </h1>

            <h2 className="m-0 ml-2 text-lg lg:text-xl font-semibold text-gray-700 leading-snugish">
              {data.contactData["Desired Job Title"]}
            </h2>

            <h3 className="m-0 mt-2 pb-3.5 ml-2 text-base font-semibold text-gray-500 leading-snugish">
              {data.contactData["City"] && data.contactData["City"] + ", "}
              {data.contactData["State / Province"] &&
                data.contactData["State / Province"] + ", "}
              {data.contactData["Country"] && data.contactData["Country"]}
            </h3>
          </section>

          <section
            className="justify-between px-3 mt-0 mb-5 text-4xl font-black leading-none text-white bg-gray-700 initials-container print:bg-black"
            style={{ paddingBottom: "1.5rem", paddingTop: "1.5rem" }}
          >
            <section className="text-center initial">
              {" "}
              {data.contactData["First Name"][0]}
            </section>
            {data.contactData["Last Name"] && (
              <section className="text-center initial">
                {" "}
                {data.contactData["Last Name"][0]}
              </section>
            )}
          </section>
        </header>

        <section className="col-gap-8 print:col-count-2 print:h-letter-col-full col-fill-balance md:col-count-2 md:h-letter-col-full">
          <section className="flex-col">
            <section className="pb-2 mt-4 mb-0 first:mt-0">
              <section className="break-inside-avoid">
                <section className="pb-4 mb-2 border-b-4 border-gray-300 break-inside-avoid">
                  <ul className="pr-7 list-inside">
                    {data.contactData["LinkedIn Url"] && (
                      <li className="mt-1 leading-normal  text-gray-500 transition duration-100 ease-in hover:text-gray-700 text-base print:">
                        <a
                          href={data.contactData["LinkedIn Url"]}
                          className="group"
                        >
                          <span className="mr-2 text-base font-semibold text-gray-700 leading-snugish">
                            LinkedIn:
                          </span>
                          Click Here
                          <span className="inline-block font-normal text-gray-500 transition duration-100 ease-in group-hover:text-gray-700 print:text-black print:">
                            ↗
                          </span>
                        </a>
                      </li>
                    )}

                    {data.contactData["Email"] && (
                      <li className="mt-1 leading-normal text-gray-500 transition duration-100 ease-in hover:text-gray-700 text-base">
                        <a
                          href={`mailto:${data.contactData["Email"]}`}
                          className="group"
                        >
                          <span className="mr-8 text-base font-semibold text-gray-700 leading-snugish">
                            Email:
                          </span>
                          {data.contactData["Email"]}
                          <span className="inline-block font-normal text-gray-500 transition duration-100 ease-in group-hover:text-gray-700 print:text-black">
                            ↗
                          </span>
                        </a>
                      </li>
                    )}
                    {data.contactData["Phone"] && (
                      <li className="mt-1 leading-normal text-gray-500 transition duration-100 ease-in hover:text-gray-700 text-base">
                        <a href={`tel:${data.contactData["Phone"]}`}>
                          <span className="mr-5 text-base font-semibold text-gray-700 leading-snugish">
                            Phone:
                          </span>
                          {data.contactData["Phone"]}
                        </a>
                      </li>
                    )}
                  </ul>
                </section>
              </section>
            </section>

            {data.summaryData.split(">")[1][0] !== "<" && (
              <section className=" pb-4 mt-0 border-b-4 border-gray-300 first:mt-0">
                <section className="break-inside-avoid">
                  <h2 className="mb-2 text-lg font-bold tracking-wide text-gray-700 print:font-normal">
                    SUMMARY
                  </h2>

                  <section className="mb-2 break-inside-avoid">
                    <span
                      className="mt-2 leading-normal text-gray-700 text-sm"
                      dangerouslySetInnerHTML={{ __html: data.summaryData }}
                    ></span>
                  </section>
                </section>
              </section>
            )}

            {data.educationData[0] && (
              <section className="pb-0 mt-4 border-b-4 border-gray-300 first:mt-0 break-inside-avoid">
                <section className="break-inside-avoid pb-6">
                  <h2 className="mb-2 text-lg font-bold tracking-wide text-gray-700 print:font-normal">
                    EDUCATION
                  </h2>

                  <div className="w-full flex flex-col gap-4">
                    {data.educationData.map((education) => {
                      return (
                        <section
                          key={crypto.randomUUID()}
                          className="mt-2 break-inside-avoid"
                        >
                          <header>
                            <h3 className="text-base font-semibold text-gray-700 leading-snugish">
                              {education.schoolName}
                            </h3>
                            <p className="leading-normal text-gray-500 text-sm">
                              {education.schoolLocation}
                            </p>
                            <p className="leading-normal text-gray-500 text-sm">
                              {education.degreeOfProgram} -{" "}
                              {education.fieldOfStudy}
                            </p>
                            <p className="leading-normal text-gray-500 text-sm">
                              {education.graduationMonth}{" "}
                              {education.graduationYear}
                            </p>
                          </header>
                          <div className="mt-2 text-gray-800 text-sm">
                            <p className="leading-normal text-gray-500 text-sm">
                              {education.additionalInfo}
                            </p>
                          </div>
                        </section>
                      );
                    })}
                  </div>
                </section>
              </section>
            )}

            {data.skillsData[0] && (
              <section className="py-6 mt-0 mb-4 border-b-4 border-gray-300 first:mt-0 break-inside-avoid">
                <section className="break-inside-avoid">
                  <h2 className="mb-2 text-lg font-bold tracking-wide text-gray-700 print:font-normal">
                    SKILLS
                  </h2>
                  <section className="mb-0 break-inside-avoid">
                    <section className="mt-1 last:pb-1">
                      <ul className="flex flex-wrap -mb-1 font-bold leading-relaxed text-base -mr-1.6">
                        {data.skillsData.map((skill) => (
                          <li
                            key={skill.id}
                            className="p-1.5 mb-1 leading-relaxed text-sm text-white bg-gray-800 mr-1.6 print:bg-white print:border-inset"
                          >
                            {skill.skill}
                          </li>
                        ))}
                      </ul>
                    </section>
                  </section>
                </section>
              </section>
            )}

            {data.experienceData[0] && (
              <section className=" pb-4 mt-4 border-b-4 border-gray-300 first:mt-0">
                <section className="break-inside-avoid">
                  <h2 className="mb-2 text-lg font-black tracking-wide text-gray-800 print:font-normal">
                    EXPERIENCE
                  </h2>

                  <div className="w-full flex flex-col gap-4">
                    {data.experienceData.map((experience) => {
                      return (
                        <section className="border-gray-300 break-inside-avoid">
                          <header>
                            <h3 className="font-semibold text-gray-800 text-base leading-snugish">
                              {experience.jobTitle}
                            </h3>
                            <p className="pl-1.5 font-medium text-gray-600 text-sm leading-snugish">
                              {experience.companyName}
                            </p>
                            <p className="text-sm leading-normal text-gray-500">
                              {experience.startMonth} {experience.startYear} -{" "}
                              {experience.currentlyWorkHere
                                ? "Present"
                                : `${experience.endMonth} ${experience.endYear}`}
                            </p>
                            <p className="text-sm leading-normal text-gray-500">
                              {experience.country}
                              {experience.state.trim().length > 0 &&
                                ", " + experience.state}
                              {experience.city.trim().length > 0 &&
                                ", " + experience.city}
                            </p>
                          </header>
                          <div className="pl-3 mt-3 font-normal text-gray-700 text-sm leading-snugish">
                            <p className="leading-normal text-gray-500 text-sm">
                              {experience.description}
                            </p>
                          </div>
                        </section>
                      );
                    })}
                  </div>
                </section>
              </section>
            )}
            {data.referencesData[0] && (
              <section className="pb-0 mt-4 border-b-4 border-gray-300 first:mt-0 break-inside-avoid">
                <section className="break-inside-avoid pb-6">
                  <h2 className="mb-2 text-lg font-bold tracking-wide text-gray-700 print:font-normal">
                    REFERENCES
                  </h2>

                  <div className="w-full flex flex-col gap-4">
                    {data.referencesData.map((reference) => {
                      return (
                        <section
                          key={crypto.randomUUID()}
                          className="mt-2 break-inside-avoid"
                        >
                          <header>
                            <h3 className="text-base font-semibold text-gray-700 leading-snugish">
                              {reference.firstName} {reference.lastName}
                            </h3>
                            <p className="leading-normal text-gray-500 text-base">
                              {reference.email}
                            </p>
                            <p className="leading-normal text-gray-500 text-base">
                              {reference.phone}
                            </p>
                            <p className="leading-normal text-gray-500 text-base">
                              {reference.positionTitle} -{" "}
                              {reference.companyName}
                            </p>
                            <p className="leading-normal text-gray-500 text-base">
                              {reference.relationshipToYou}
                            </p>
                          </header>
                        </section>
                      );
                    })}
                  </div>
                </section>
              </section>
            )}
            {data.certificationData[0] && (
              <section className="py-6 mt-0 mb-4 border-b-4 border-gray-300 first:mt-0 break-inside-avoid">
                <section className="break-inside-avoid">
                  <h2 className="mb-2 text-lg font-bold tracking-wide text-gray-700 print:font-normal">
                    CERTIFICATIONS
                  </h2>
                  <section className="mb-0 break-inside-avoid">
                    <section className="mt-1 last:pb-1">
                      <ul className="flex flex-wrap -mb-1 font-bold leading-relaxed text-md -mr-1.6">
                        {data.certificationData
                          .slice(0, data.certificationData.length - 1)
                          .map((certification) => (
                            <li
                              key={certification.id}
                              className="p-1.5 mb-1 leading-relaxed text-sm text-white bg-gray-800 mr-1.6 print:bg-white print:border-inset"
                            >
                              {certification.certification} {" |"}
                            </li>
                          ))}
                        <li className="p-1.5 mb-1 text-sm leading-relaxed text-white bg-gray-800 mr-1.6 print:bg-white print:border-inset">
                          {
                            data.certificationData[
                              data.certificationData.length - 1
                            ].certification
                          }
                        </li>
                      </ul>
                    </section>
                  </section>
                </section>
              </section>
            )}
            {data.finalizeData.awards[0] && (
              <section className="py-6 mt-0 mb-4 border-b-4 border-gray-300 first:mt-0 break-inside-avoid">
                <section className="break-inside-avoid">
                  <h2 className="mb-2 text-lg font-bold tracking-wide text-gray-700 print:font-normal">
                    AWARDS
                  </h2>
                  <section className="mb-0 break-inside-avoid">
                    <section className="mt-1 last:pb-1">
                      <ul className="flex flex-wrap -mb-1 font-bold leading-relaxed text-md -mr-1.6">
                        {data.finalizeData.awards
                          .slice(0, data.finalizeData.awards.length - 1)
                          .map((award) => (
                            <li
                              key={award.id}
                              className="p-1.5 text-sm mb-1 leading-relaxed text-white bg-gray-800 mr-1.6 print:bg-white print:border-inset"
                            >
                              {award.award} {" |"}
                            </li>
                          ))}
                        <li className="p-1.5 text-sm mb-1 leading-relaxed text-white bg-gray-800 mr-1.6 print:bg-white print:border-inset">
                          {
                            data.finalizeData.awards[
                              data.finalizeData.awards.length - 1
                            ].award
                          }
                        </li>
                      </ul>
                    </section>
                  </section>
                </section>
              </section>
            )}
            {data.finalizeData.publications[0] && (
              <section className="py-6 mt-0 mb-4 border-b-4 border-gray-300 first:mt-0 break-inside-avoid">
                <section className="break-inside-avoid">
                  <h2 className="mb-2 text-lg font-bold tracking-wide text-gray-700 print:font-normal">
                    PUBLICATIONS
                  </h2>
                  <section className="mb-0 break-inside-avoid">
                    <section className="mt-1 last:pb-1">
                      <ul className="flex flex-wrap -mb-1 font-bold leading-relaxed text-md -mr-1.6">
                        {data.finalizeData.publications
                          .slice(0, data.finalizeData.publications.length - 1)
                          .map((publication) => (
                            <li
                              key={publication.id}
                              className="p-1.5 text-sm mb-1 leading-relaxed text-white bg-gray-800 mr-1.6 print:bg-white print:border-inset"
                            >
                              {publication.publication} {" |"}
                            </li>
                          ))}
                        <li className="p-1.5 text-sm mb-1 leading-relaxed text-white bg-gray-800 mr-1.6 print:bg-white print:border-inset">
                          {
                            data.finalizeData.publications[
                              data.finalizeData.publications.length - 1
                            ].publication
                          }
                        </li>
                      </ul>
                    </section>
                  </section>
                </section>
              </section>
            )}
            {data.finalizeData.customDatas[0] && (
              <section className="py-6 mt-0 flex flex-col gap-4 mb-4 border-b-4 border-gray-300 first:mt-0 break-inside-avoid">
                {data.finalizeData.customDatas.map((custom) => {
                  return (
                    <section
                      key={crypto.randomUUID()}
                      className="break-inside-avoid"
                    >
                      <h2 className="mb-2 text-lg font-bold tracking-wide text-gray-700 print:font-normal">
                        {custom.name.toUpperCase()}
                      </h2>
                      <div className="pl-3 mt-3 font-normal text-gray-700 text-md leading-snugish">
                        <p className="leading-normal text-gray-500 text-sm">
                          {custom.description}
                        </p>
                      </div>
                    </section>
                  );
                })}
              </section>
            )}
          </section>
        </section>
      </section>
    </main>
  );
}
