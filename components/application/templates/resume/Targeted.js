export default function TargetedResume ({ data }) {
  return (
    <div className="outline-none">
      <div className="flex h-full w-full lg:w-[800px] max-w-full">
        {/* Left Panel */}
        <div className="grid gap-16 bg-slate-700 text-white w-[40%] py-16 px-3 md:px-5">
          {/* Contact Section */}
          <div className="flex flex-col gap-5">
            <p className="text-[3vw] md:text-xl font-semibold border-b pb-2">
              Contact
            </p>
            {data.contactData["Phone"] && (
              <div>
                <p className="text-[3vw] md:text-xl font-semibold">Phone</p>
                <span className="text-[2vw] md:text-sm">
                  {data.contactData["Phone"]}
                </span>
              </div>
            )}
            <div>
              <p className="text-[3vw] md:text-xl font-semibold">Email</p>
              <span className="text-[2vw] md:text-sm">
                {data.contactData["Email"]}
              </span>
            </div>
            <div>
              <p className="text-[3vw] md:text-xl font-semibold">Address</p>
              <span className="text-[2vw] md:text-sm">
                {data.contactData["City"] && data.contactData["City"] + ", "}
                {data.contactData["State / Province"] &&
                  data.contactData["State / Province"] + ", "}
                {data.contactData["Country"] && data.contactData["Country"]}
              </span>
            </div>
          </div>
          {/* Education Section */}
          {data.educationData[0] && (
            <div className="flex flex-col gap-5">
              <p className="text-[3vw] md:text-xl font-semibold border-b pb-2">
                Education
              </p>
              {data.educationData.map((education) => (
                <div key={crypto.randomUUID()} className="flex flex-col gap-3">
                  <span className="text-[2vw] md:text-sm">
                    {education.graduationYear}
                  </span>
                  <span className="text-[2vw] md:text-sm font-semibold">
                    {education.degreeOfProgram} - {education.fieldOfStudy}
                  </span>
                  <span className="text-[2vw] md:text-sm">
                    {education.schoolName}
                  </span>
                </div>
              ))}
            </div>
          )}
          {/* Skills Section */}
          {data.skillsData[0] && (
            <div className="flex flex-col gap-5">
              <p className="text-[3vw] md:text-xl font-semibold border-b pb-2">
                Expertise
              </p>
              <div className="flex flex-col gap-3">
                {data.skillsData.map((skill) => (
                  <p
                    key={skill.id}
                    className="text-[2vw] md:text-sm font-semibold"
                  >
                    {skill.skill}
                  </p>
                ))}
              </div>
            </div>
          )}
          {/* Certifications Section */}
          {data.certificationData[0] && (
            <div className="flex flex-col gap-2">
              <p className="text-[3vw] md:text-xl font-semibold border-b pb-2">
                Certifications
              </p>
              <div className="flex flex-col gap-3">
                {data.certificationData.map((certification) => (
                  <p
                    key={certification.id}
                    className="text-[2vw] md:text-sm font-semibold"
                  >
                    {certification.certification}
                  </p>
                ))}
              </div>
            </div>
          )}
          {/* Awards Section */}
          {data.finalizeData.awards[0] && (
            <div className="flex flex-col gap-2">
              <p className="text-[3vw] md:text-xl font-semibold border-b pb-2">
                Awards
              </p>
              <div className="flex flex-col gap-3">
                {data.finalizeData.awards.map((award) => (
                  <p
                    key={award.id}
                    className="text-[2vw] md:text-sm font-semibold"
                  >
                    {award.award}
                  </p>
                ))}
              </div>
            </div>
          )}
          {/* Publications Section */}
          {data.finalizeData.publications[0] && (
            <div className="flex flex-col gap-2">
              <p className="text-[3vw] md:text-xl font-semibold border-b pb-2">
                Publications
              </p>
              <div className="flex flex-col gap-3">
                {data.finalizeData.publications.map((publication) => (
                  <p
                    key={publication.id}
                    className="text-[2vw] md:text-sm font-semibold"
                  >
                    {publication.publication}
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>
        {/* Right Panel */}
        <div className="grid gap-5 bg-white w-[60%] py-16 px-5 md:px-16">
          <div className="flex flex-col gap-5">
            {/* Name and Job Title Section */}
            <p className="text-[4vw] md:text-base pb-2 border-b">
              {data.contactData["First Name"]} {data.contactData["Last Name"]}
            </p>
            <div>
              <p className="text-[3vw] md:text-xl py-4">
                {data.contactData["Desired Job Title"]}
              </p>
              {/* Summary Section */}
              {data.summaryData.split(">")[1][0] !== "<" && (
                <span
                  dangerouslySetInnerHTML={{ __html: data.summaryData }}
                  className="text-[2vw] md:text-sm text-gray-700 text-justify"
                ></span>
              )}
            </div>
          </div>
          {/* Experience Section */}
          {data.experienceData[0] && (
            <div className="flex flex-col gap-3">
              <p className="text-[3vw] md:text-xl pb-2 border-b">Experience</p>
              {data.experienceData.map((experience) => (
                <div className="flex flex-col gap-3" key={crypto.randomUUID()}>
                  <span className="text-[2.5vw] md:text-sm font-semibold text-gray-700">
                    {experience.startMonth} {experience.startYear} -{" "}
                    {experience.currentlyWorkHere
                      ? "Present"
                      : `${experience.endMonth} ${experience.endYear}`}
                  </span>
                  <span className="text-gray-700 text-[2.5vw] md:text-sm">
                    {experience.companyName} | {experience.country}
                    {experience.state.trim().length > 0 &&
                      `, ${experience.state}`}
                    {experience.city.trim().length > 0 &&
                      `, ${experience.city}`}
                  </span>
                  <span className="text-[2.5vw] md:text-sm font-semibold text-gray-700">
                    {experience.jobTitle}
                  </span>
                  <span className="text-[2vw] md:text-sm text-gray-700 text-justify">
                    {experience.description}
                  </span>
                </div>
              ))}
            </div>
          )}
          {/* References Section */}
          {data.referencesData[0] && (
            <div>
              <p className="text-[3vw] md:text-xl pb-2 border-b">References</p>
              <div className="grid grid-cols-2 justify-between">
                {data.referencesData.map((reference) => (
                  <div
                    className="flex flex-col gap-3"
                    key={crypto.randomUUID()}
                  >
                    <span className="text-[2.5vw] md:text-sm font-semibold text-gray-700">
                      {reference.firstName} {reference.lastName}
                    </span>
                    <span className="text-gray-700 text-[2.5vw] md:text-sm">
                      {reference.positionTitle} - {reference.companyName}
                    </span>
                    <span className="text-[2vw] md:text-sm text-gray-700">
                      Phone: {reference.phone}
                    </span>
                    <span className="text-[2vw] md:text-sm text-gray-700">
                      Email: {reference.email}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
          {/* Custom Data Section */}
          {data.finalizeData.customDatas[0] && (
            <div>
              {data.finalizeData.customDatas.map((custom) => (
                <div key={crypto.randomUUID()}>
                  <p className="text-[3vw] md:text-xl pb-2 mb-3 border-b">
                    {custom.name}
                  </p>
                  <span className="text-[2vw] md:text-sm text-gray-700 text-justify">
                    {custom.description}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

