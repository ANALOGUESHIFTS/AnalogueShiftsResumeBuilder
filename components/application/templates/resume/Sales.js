export default function SalesResume ({ data }) {
  return (
    <div className="outline-none">
      <div class="relative flex min-h-screen flex-col overflow-hidden bg-white py-6 sm:py-12">
        <div class="grid grid-cols-12">
          {/*right panel*/}
          <div class="col-span-4 bg-slate-200 ml-1">
            {/*top right panel*/}
            <div class="bg-slate-300 ml-1">
              <div class="ml-3 mr-2 justify-center">
                <br/>
                <p class=" capitalize font-bold text-3xl text-blue-500 mt-5">
                  {data.contactData["First Name"]} {data.contactData["Last Name"]}
                </p>
                <p class="font-bold text-blue-500 capitalize mt-1">
                  {data.contactData["Desired Job Title"]}
                </p>
                <p class="mt-5">
                  <b class="text-blue-500 uppercase">Contact</b>
                  <ul class="ml-8 list-disc mb-7">
                  <li>{data.contactData["Phone"]}</li>
                  <li>{data.contactData["Email"]}</li>
                  <li>{data.contactData["City"]}</li>
                  <li>{data.contactData["State / Province"]}</li>
                  <li>{data.contactData["LinkedIn Url"]}</li>
                  </ul>
                  <br/>
                </p>
              </div>
            </div>
            {/*bottom left panel*/}
            <div class="bg-slate-200 ml-1">
              <div class="ml-3 mr-2">
                <p>
                  <b class="uppercase text-blue-500">career objective</b>
                  <p class="mt-3">
                    {data.summaryData}
                  </p>
                </p>
                <div>
                  <p class="uppercase mt-4 font-bold text-blue-500">education</p>
                  <div>
                    {data.educationData.map((education, index) => (
                      <div key={index}>
                        <p class="mt-2">{education.graduationYear}</p>
                        <p class="capitalize font-bold text-[14px] text-blue-500">{education.degreeOfProgram} - {education.fieldOfStudy}</p>
                        <p>{education.schoolName} | {education.schoolLocation}</p>
                        <p>{education.additionalInfo}</p>
                      </div>
                    ))}
                  </div>
                </div>
                {data.certificationData.length > 0 && (
                  <div>
                    <p class="uppercase mt-4 font-bold text-blue-500">certificates</p>
                    <ul className="list-disc ml-8">
                      {data.certificationData.map((certification) => (
                        <li key={certification.id}>{certification.certification}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {data.finalizeData.awards[0] && (
                  <div>
                  <p class="uppercase mt-4 font-bold text-blue-500">awards</p>
                  <ul className="list-disc ml-8">
                      {data.finalizeData.awards.map((award, index) => (
                      <li key={index}>{award.award}</li>
                      ))}
                  </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/*right panel*/}
          <div class="col-span-8">
            <div class="ml-3 mr-2">
              <div>
                <p class="text-[20px] font-bold text-blue-500 uppercase mb-2">
                professional experience 
                </p>
                <div>
                  {data.experienceData.map((experience,index) => (
                    <div key={index}>
                    <p>{experience.startMonth} {experience.startYear} -{" "}
                    {experience.currentlyWorkHere ? "Present" : `${experience.endMonth} ${experience.endYear}`}</p>
                    <p class="catitalize text-blue-500 font-bold">{experience.jobTitle}</p>
                    <p>{experience.companyName} | {experience.city}, {experience.state}</p>
                    <ul class="list-disc ml-8">
                    {experience.description.split('\n').map((desc, descIndex) => (
                      <li key={descIndex}>{desc}</li>
                    ))}
                    </ul>
                  </div>
                  ))}
                </div>
              </div>
              {data.referencesData.length > 0 && (
                <div>
                  <p class="text-[20px] font-bold text-blue-500 uppercase mb-2">reference</p>
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
              )}
              <div>
                <p class="text-[20px] font-bold text-blue-500 uppercase mb-2">
                  skills
                </p>
                <ul class="ml-8 list-disc">
                {data.skillsData.map((skill, index) => (
                  <li key={index}>{skill.skill}</li>
                ))}
                </ul>
              </div>
              {data.finalizeData.customDatas[0] && data.finalizeData.customDatas.map((custom, index) => (
                <div key={index} className="ml-3 mt-3">
                  <p class="text-[20px] font-bold text-blue-500 uppercase mb-2">{custom.name}</p>
                  <p>{custom.description}</p>
                </div>
              ))}
              {data.finalizeData.publications.length > 0 && (
                <div>
                  <p class="text-[20px] font-bold text-blue-500 uppercase mb-2">publications</p>
                  <ul class="ml-8 list-disc">
                    {data.finalizeData.publications.map((publications, index) => (
                        <li key={index}>{publications.publications}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

