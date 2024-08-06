export default function RemoteResume ({ data }) {
  return (
    <div className="outline-none">
      <div className="relative flex min-h-screen flex-col overflow-hidden bg-white py-6 sm:py-12">
        <div className="m-3">
          <div className="grid grid-cols-12 mb-1">
            <div className="col-span-4">
              <p className="uppercase text-3xl font-bold">
              {data.contactData["First Name"]} {data.contactData["Last Name"]}
              </p>
            </div>
            <div className="col-span-8">
              <hr className="border-y-[1.5px] border-black mb-3"/>
              <p className=" font-bold">
              {data.contactData["First Name"]} {data.contactData["Last Name"]}
              </p>
              <p>{data.contactData["City"]}, {data.contactData["State / Province"]}</p>
            </div>
          </div>
          <div className="mb-5">
            <div className="grid grid-cols-12">
              <div className="col-span-4">
                <p className="uppercase font-bold text-red-500">{data.contactData["Desired Job Title"]}</p>
              </div>
              <div className="col-span-8 text-red-500">
                <p className=" font-bold">{data.contactData["Phone"]}</p>
                <p>{data.contactData["Email"]}</p>
                <p>{data.contactData["LinkedIn"]}</p>
              </div>
            </div>
          </div>
          <div className="mb-5">
            <div className="grid grid-cols-12">
              <div className="col-span-4">
                <hr className="w-1/12 border-black"/>
                <p className="uppercase font-bold">career objective </p>
              </div>
              <div className="col-span-8">
                <hr className="border-y-[1.5px] border-black mb-3"/>
                <p>{data.summaryData}</p>
              </div>
            </div>
          </div>
          <div className="mb-5">
            <div className="grid grid-cols-12">
              <div className="col-span-4">
                <hr className="w-1/12 border-black"/>
                <p className="uppercase font-bold">skills </p>
              </div>
              <div className="col-span-8">
                <hr className="border-y-[1.5px] border-black mb-3"/>
                <p>{data.skillsData.map((skill, index) => (
                <i key={index}>{skill.skill}, </i>
                ))}</p>
              </div>
            </div>
          </div>
          <div className="mb-5">
            <div className="grid grid-cols-12">
              <div className="col-span-4">
                <hr className="w-1/12 border-black"/>
                <p className="uppercase font-bold">experience</p>
              </div>
              <div className="col-span-8">
                <hr className="border-y-[1.5px] border-black mb-3"/>
                {data.experienceData.map((experience, index) => (
                  <div key={index}>
                    <p className="capitalize font-bold">{experience.companyName}, {experience.jobTitle}</p>
                    <p>{experience.startMonth} {experience.startYear} -{" "}
                    {experience.currentlyWorkHere ? "Present" : `${experience.endMonth} ${experience.endYear}`} | {experience.city}, {experience.State}</p>
                    <ul className="list-disc ml-6">
                    {experience.description.split('\n').map((desc, descIndex) => (
                      <li key={descIndex}>{desc}</li>
                    ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mb-5">
            <div className="grid grid-cols-12">
              <div className="col-span-4">
                <hr className="w-1/12 border-black"/>
                <p className="uppercase font-bold">education</p>
              </div>
              <div className="col-span-8">
                <hr className="border-y-[1.5px] border-black mb-3"/>
                {data.educationData.map((education, index) => (
                  <div key={index}>
                    <p className=" font-bold">{education.schoolName} | {education.degreeOfProgram} in {education.fieldOfStudy}</p>
                    <p>{education.graduationYear} | {education.schoolLocation}</p>
                    <p>{education.additionalInfo}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {data.certificationData.length > 0 && (
             <div className="mb-5">
                <div className="grid grid-cols-12">
                  <div className="col-span-4">
                    <hr className="w-1/12 border-black"/>
                    <p className="uppercase font-bold">certificates</p>
                  </div>
                  <div className="col-span-8">
                    <hr className="border-y-[1.5px] border-black mb-3"/>
                    <ul className="list-disc ml-6">
                        {data.certificationData.map((certification) => (
                          <li key={certification.id}>{certification.certification}</li>
                        ))}
                    </ul>
                  </div>
                </div>
             </div>
          )}
          {data.referencesData.length > 0 && (
            <div className="mb-5">
              <div className="grid grid-cols-12">
                <div className="col-span-4">
                  <hr className="w-1/12 border-black"/>
                  <p className="uppercase font-bold">reference</p>
                </div>
                <div className="col-span-8">
                  <hr className="border-y-[1.5px] border-black mb-3"/>
                  {data.referencesData.map((reference, index) => (
                    <div key={index} className="flex flex-col gap-2">
                      <p className="font-semibold">
                          {reference.firstName} {reference.lastName}
                      </p>
                      <p>
                          {reference.positionTitle} - {reference.companyName}
                      </p>
                      <p>
                          Phone: {reference.phone}
                      </p>
                      <p>
                          Email: {reference.email}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          {data.finalizeData.awards.length > 0 && (
            <div className="mb-5">
              <div className="grid grid-cols-12">
                <div className="col-span-4">
                  <hr className="w-1/12 border-black"/>
                  <p className="uppercase font-bold">awards</p>
                </div>
                <div className="col-span-8">
                  <hr className="border-y-[1.5px] border-black mb-3"/>
                  <ul className="list-disc ml-6">
                    {data.finalizeData.awards.map((award, index) => (
                      <li key={index}>{award.award}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}
          {data.finalizeData.customDatas.length > 0 && data.finalizeData.customDatas.map((custom, index) => (
            <div key={index} className="mb-5">
              <div className="grid grid-cols-12">
                <div className="col-span-4">
                  <hr className="w-1/12 border-black"/>
                  <p className="uppercase font-bold">{custom.name}</p>
                </div>
                <div className="col-span-8">
                  <hr className="border-y-[1.5px] border-black mb-3"/>
                  <p>{custom.description}</p>
                </div>
              </div>
            </div>
          ))}
          {data.finalizeData.publications.length > 0 && (
            <div className="grid grid-cols-12">
              <div className="col-span-4">
                <hr className="w-1/12 border-black"/>
                <p className="uppercase font-bold">publications</p>
              </div>
              <div className="col-span-8">
                <hr className="border-y-[1.5px] border-black mb-3"/>
                {data.finalizeData.publications.map((publications, index) => (
                  <div key={index}>
                    <p>{publications.publications}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
