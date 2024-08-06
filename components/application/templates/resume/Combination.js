export default function CombinationTemplate ({ data }) {
  return (
    <div className="outline-none">
      <div className="relative flex min-h-screen flex-col overflow-hidden bg-white py-6 sm:py-12">
        <div className=" m-4">
          <div className="uppercase bg-blue-700 text-white text-center">
            <p className="p-4 pb-2 font-light text-4xl ">
              {data.contactData["First Name"]} {data.contactData["Last Name"]} 
            </p>
            <hr className="w-1/4 mx-auto"/>
            <p className="text-2xl font-light pb-4">{data.contactData["Desired Job Title"]}</p>
          </div>
          <div className="grid grid-cols-12">
            <div className="col-span-7">
              <div className="ml-3 mt-3">
                <div>
                  <p className="uppercase font-semibold text-blue-700">professional experience</p>
                  {data.experienceData.map((experience, index) => (
                    <div key={index}>
                      <div className="mt-4">
                        <p className="uppercase font-semibold">{experience.jobTitle}</p>
                        <p className="capitalize">{experience.startMonth} {experience.startYear} -{" "}
                        {experience.currentlyWorkHere ? "Present" : `${experience.endMonth} ${experience.endYear}`} | 
                        {experience.companyName} | {experience.city}, {experience.State}
                        </p>
                        <ul className="list-disc ml-7">
                          {experience.description.split('\n').map((desc, descIndex) => (
                          <li key={descIndex}>{desc}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
  
                </div>
                <div className="ml-3 mt-3">
                  <p className="uppercase text-blue-700 font-semibold mb-2">education</p>
                  {data.educationData.map((education, index) => (
                    <div key={index}>
                      <p className="uppercase"><b className="capitalize">{education.degreeOfProgram} in {education.fieldOfStudy}</b></p>
                      <p className="text-[14px] text-blue-700">{education.additionalInfo}</p>
                      <p className="text-[14px] capitalize">{education.schoolName}, {education.schoolLocation}</p>
                      <p className=" text-[14px] capitalize text-blue-700">{education.graduationMonth}, {education.graduationYear}</p>
                    </div>
                  ))}
                  
                </div>
                <div>
                  {data.finalizeData.customDatas[0] && data.finalizeData.customDatas.map((custom, index) => (
                    <div key={index} className="ml-3 mt-3">
                      <p className="uppercase text-blue-700 font-semibold mb-2">{custom.name}</p>
                      <p>{custom.description}</p>
                    </div>
                  ))}
                </div>
                <div>
                  {data.finalizeData.publications.length > 0 && (
                    <div className="ml-3 mt-3">
                      <p className="uppercase text-blue-700 font-semibold mb-2">publications</p>
                      {data.finalizeData.publications.map((publications, index) => (
                        <div key={index}>
                          <p>{publications.publications}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="col-span-5 bg-slate-200">
              <div className="ml-3 mt-3">
                <div>
                  <p className="uppercase text-blue-700 font-semibold">contact</p>
                  <ul className="ml-6 list-disc">
                  <li>{data.contactData["Phone"]}</li>
                  <li>{data.contactData["Email"]}</li>
                  <li>{data.contactData["City"]}, {data.contactData["State / Province"]}</li>
                  <li className="text-wrap">{data.contactData["LinkedIn Url"]}</li>
                  </ul>
                </div>
                <div>
                  <p className="mt-4 mb-2 text-blue-700 font-semibold uppercase">career objective</p>
                  <p>{data.summaryData}</p>
                </div>
                <div>
                  {data.certificationData[0] && (
                    <div>
                      <p className="mt-4 mb-2 text-blue-700 font-semibold uppercase">certifications</p>
                      <ul className="list-disc ml-6">
                        {data.certificationData.map((certification) => (
                          <li key={certification.id}>{certification.certification}</li>
                        ))}
                      </ul>
                      
                    </div>
                  )}
                </div>
                <div>
                  <p className="mt-4 mb-2 text-blue-700 font-semibold uppercase">skills</p>
                  <ul className="list-disc ml-6">
                  {data.skillsData.map((skill, index) => (
                    <li key={index}>{skill.skill}</li>
                  ))}
                  </ul>
                </div>
                
                <div>
                  {data.finalizeData.awards[0] && (
                    <div>
                     <p className="mt-4 mb-2 text-blue-700 font-semibold uppercase">awards</p>
                     <ul className="list-disc ml-6">
                        {data.finalizeData.awards.map((award, index) => (
                          <li key={index}>{award.award}</li>
                        ))}
                       </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

