export default function SimpleTemplate({ data }) {
  return (
    <div
      className="outline-none"
      contentEditable
      suppressContentEditableWarning
    >
      <div className="flex h-full w-[800px]">
        <div className="grid gap-16 bg-slate-700 text-white w-[30%] py-16 pl-5">
          <div className="flex flex-col gap-5">
            <p className="text-3xl font-semibold border-b pb-2">Contact</p>
            {data.contactData["Phone"] && (
              <div>
                <p className="text-lg font-semibold">Phone</p>
                <span className="text-xs">{data.contactData["Phone"]}</span>
              </div>
            )}

            <div>
              <p className="text-lg font-semibold">Email</p>
              <span className="text-xs">{data.contactData["Email"]}</span>
            </div>
            <div>
              <p className="text-lg font-semibold">Address</p>
              <span className="text-xs">
                {data.contactData["City"] && data.contactData["City"] + ", "}
                {data.contactData["State / Province"] &&
                  data.contactData["State / Province"] + ", "}
                {data.contactData["Country"] && data.contactData["Country"]}
              </span>
            </div>
          </div>
          {data.educationData[0] && (
            <div className="flex flex-col gap-5">
              <p className="text-3xl font-semibold border-b pb-2">Education</p>
              {data.educationData.map((education) => {
                return (
                  <div
                    key={crypto.randomUUID()}
                    className="flex flex-col gap-3"
                  >
                    <span className="text-xs">{education.graduationYear}</span>
                    <span className="text-xs font-semibold">
                      {education.degreeOfProgram} - {education.fieldOfStudy}
                    </span>
                    <span className="text-xs">{education.schoolName}</span>
                  </div>
                );
              })}
            </div>
          )}
          {data.skillsData[0] && (
            <div className="flex flex-col gap-5">
              <p className="text-3xl font-semibold border-b pb-2">Expertise</p>
              <div className="flex flex-col gap-3">
                {data.skillsData.map((skill) => {
                  return (
                    <p key={skill.id} className="text-xs font-semibold">
                      {skill.skill}
                    </p>
                  );
                })}
              </div>
            </div>
          )}
          {data.certificationData[0] && (
            <div className="flex flex-col gap-2">
              <p className="text-3xl font-semibold border-b pb-2">
                Certifications
              </p>
              <div className="flex flex-col gap-3">
                {data.certificationData.map((certification) => (
                  <p key={certification.id} className="text-xs font-semibold">
                    {certification.certification}
                  </p>
                ))}
              </div>
            </div>
          )}
          {data.finalizeData.awards[0] && (
            <div className="flex flex-col gap-2">
              <p className="text-3xl font-semibold border-b pb-2">Awards</p>
              <div className="flex flex-col gap-3">
                {data.finalizeData.awards.map((award) => (
                  <p key={award.id} className="text-xs font-semibold">
                    {award.award}
                  </p>
                ))}
              </div>
            </div>
          )}
          {data.finalizeData.publications[0] && (
            <div className="flex flex-col gap-2">
              <p className="text-3xl font-semibold border-b pb-2">
                Publications
              </p>
              <div className="flex flex-col gap-3">
                {data.finalizeData.publications.map((publication) => (
                  <p key={publication.id} className="text-xs font-semibold">
                    {publication.publication}
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="grid gap-5 bg-white w-[70%] p-16">
          <div className="flex flex-col gap-5">
            <p className="text-4xl pb-2 border-b">
              {data.contactData["First Name"]} {data.contactData["Last Name"]}
            </p>
            <div>
              <p className="text-3xl py-4">
                {data.contactData["Desired Job Title"]}
              </p>
              {data.summaryData.split(">")[1][0] !== "<" && (
                <span
                  dangerouslySetInnerHTML={{ __html: data.summaryData }}
                  className="text-xs text-gray-700 text-justify"
                ></span>
              )}
            </div>
          </div>
          {data.experienceData[0] && (
            <div className="flex flex-col gap-3">
              <p className="text-3xl pb-2 border-b">Experience</p>
              {data.experienceData.map((experience) => {
                return (
                  <div className="flex flex-col gap-3">
                    <span className="text-xl font-semibold text-gray-700">
                      {experience.startMonth} {experience.startYear} -{" "}
                      {experience.currentlyWorkHere
                        ? "Present"
                        : `${experience.endMonth} ${experience.endYear}`}
                    </span>
                    <span className="text-gray-700">
                      {experience.companyName} | {experience.country}
                      {experience.state.trim().length > 0 &&
                        ", " + experience.state}
                      {experience.city.trim().length > 0 &&
                        ", " + experience.city}
                    </span>
                    <span className="text-xl font-semibold text-gray-700">
                      {experience.jobTitle}
                    </span>
                    <span className="text-xs text-gray-700 text-justify">
                      {experience.description}
                    </span>
                  </div>
                );
              })}
            </div>
          )}
          {data.referencesData[0] && (
            <div>
              <p className="text-3xl pb-2 border-b">References</p>
              <div className="grid grid-cols-2 justify-between">
                {data.referencesData.map((reference) => {
                  return (
                    <div className="flex flex-col gap-3">
                      <span className="text-xl font-semibold text-gray-700">
                        {reference.firstName} {reference.lastName}
                      </span>
                      <span className="text-gray-700">
                        {reference.positionTitle} - {reference.companyName}
                      </span>
                      <span className="text-xs text-gray-700">
                        Phone:{reference.phone}
                      </span>
                      <span className="text-xs text-gray-700">
                        Email:{reference.email}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          {data.finalizeData.customDatas[0] &&
            data.finalizeData.customDatas.map((custom) => {
              return (
                <div>
                  <p className="text-3xl pb-2 mb-3 border-b">{custom.name}</p>
                  <span className="text-xs text-gray-700 text-justify">
                    {custom.description}
                  </span>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
