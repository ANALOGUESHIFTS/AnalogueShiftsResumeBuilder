export default function CombinationTemplate ({ data }) {
  return (
    <div className="outline-none">
      <div class="relative flex min-h-screen flex-col overflow-hidden bg-white py-6 sm:py-12">
        <div class=" m-4">
          <div class="uppercase bg-blue-700 text-white text-center">
            <p class="p-4 pb-2 font-light text-4xl ">
              {data.contactData["First Name"]} {data.contactData["Last Name"]} 
            </p>
            <hr class="w-1/4 mx-auto"/>
            <p class="text-2xl font-light pb-4">{data.contactData["Desired Job Title"]}</p>
          </div>
          <div class="grid grid-cols-12">
            <div class="col-span-7">
              <div class="ml-3 mt-3">
                <div>
                  <p class="uppercase font-semibold text-blue-700">professional experience</p>
                  {data.experienceData.map((experience, index) => (
                    <div key={index}>
                      <div class="mt-4">
                        <p class="uppercase font-semibold">{experience.jobTitle}</p>
                        <p class="capitalize">{experience.startMonth} {experience.startYear} -{" "}
                        {experience.currentlyWorkHere ? "Present" : `${experience.endMonth} ${experience.endYear}`} | 
                        {experience.companyName} | {experience.city}, {experience.State}
                        </p>
                        <ul class="list-disc ml-7">
                          {experience.description.split('\n').map((desc, descIndex) => (
                          <li key={descIndex}>{desc}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
  
                </div>
                <div class="ml-3 mt-3">
                  <p class="uppercase text-blue-700 font-semibold mb-2">education</p>
                  {data.educationData.map((education, index) => (
                    <div key={index}>
                      <p class="uppercase"><b class="capitalize">{education.degreeOfProgram} in {education.fieldOfStudy}</b></p>
                      <p class="text-[14px] text-blue-700">{education.additionalInfo}</p>
                      <p class="text-[14px] capitalize">{education.schoolName}, {education.schoolLocation}</p>
                      <p class=" text-[14px] capitalize text-blue-700">{education.graduationMonth}, {education.graduationYear}</p>
                    </div>
                  ))}
                  
                </div>
                <div>
                  {data.finalizeData.customdatas[0] && data.finalizeData.customDatas.map((custom, index) => (
                    <div key={index} class="ml-3 mt-3">
                      <p class="uppercase text-blue-700 font-semibold mb-2">{custom.name}</p>
                      <p>{custom.description}</p>
                    </div>
                  ))}
                </div>
                <div>
                  {data.finalizeData.publications[0] && (
                    <div class="ml-3 mt-3">
                      <p class="uppercase text-blue-700 font-semibold mb-2">publications</p>
                      {data.finalizeData.publications.map((publications, index) => (
                        <div key={index}>
                          <p>{custom.description}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div class="col-span-5 bg-slate-200">
              <div class="ml-3 mt-3">
                <div>
                  <p class="uppercase text-blue-700 font-semibold">contact</p>
                  <ul class="ml-6 list-disc">
                  <li>{data.contactData["Phone"]}</li>
                  <li>{data.contactData["Email"]}</li>
                  <li>{data.contactData["City"]}, {data.contactData["State / Province"]}</li>
                  <li>{data.contactData["LinkedIn Url"]}</li>
                  </ul>
                </div>
                <div>
                  <p class="mt-4 mb-2 text-blue-700 font-semibold uppercase">career objective</p>
                  <p>{data.summaryData}</p>
                </div>
                <div>
                  {data.certificationData[0] && (
                    <div>
                      <p class="mt-4 mb-2 text-blue-700 font-semibold uppercase">certifications</p>
                      <ul class="list-disc ml-6">
                        {data.certificationData.map((certification) => (
                          <li key={certification.id}>{certification.certification}</li>
                        ))}
                      </ul>
                      
                    </div>
                  )}
                </div>
                <div>
                  <p class="mt-4 mb-2 text-blue-700 font-semibold uppercase">skills</p>
                  <ul class="list-disc ml-6">
                  {data.skillsData.map((skill, index) => (
                    <li key={index}>{skill.skill}</li>
                  ))}
                  </ul>
                </div>
                
                <div>
                  {data.finalizeData.awards[0] && (
                    <div>
                     <p class="mt-4 mb-2 text-blue-700 font-semibold uppercase">awards</p>
                     <ul class="list-disc ml-6">
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

