export default function CareerChangeResume ({ data }) {
  return (
    <div className="outline-none">
      <div className="relative flex min-h-screen flex-col overflow-hidden bg-white py-6 sm:py-12">
        <div class="m-3">
          <div>
            <p class="capitalize font-bold text-3xl">{data.contactData["First Name"]} {data.contactData["Last Name"]}</p>
            <p class="capitalize text-blue-500 font-bold text-[20px]">{data.contactData["Desired Job Title"]}</p>
            <p>
              <b class="pr-3 pl-1 font-normal bg-blue-200 rounded-lg">{data.contactData["Phone"]}</b>
              <b class="pr-3 pl-1 font-normal bg-blue-200 rounded-lg">{data.contactData["Email"]}</b>
              <b class="pr-3 pl-1 font-normal bg-blue-200 rounded-lg">{data.contactData["City"]}</b>
              <br/>
              <b class="pr-3 pl-1 font-normal bg-blue-200 rounded-lg">{data.contactData["State / Province"]}</b>
              <b class="pr-3 pl-1 font-normal bg-blue-200 rounded-lg">{data.contactData["LinkedIn Url"]}</b>
            </p>
          </div>
          <div class="mt-3">
            <p class="uppercase font-bold">career objective</p>
            <hr class="w-36 border-y-[1.5px] border-blue-300 mb-2"/>
            <p>
              {data.summaryData}
            </p>
          </div>
          <div class="mt-3">
            <p class="uppercase font-bold">professional experience</p>
            <hr class="w-52 border-y-[1.5px] border-blue-300 mb-2"/>
            <div>
              {data.experienceData.map((experience, index) => (
                <div key={index} class="mb-2">
                  <p class="font-bold capitalize">{experience.companyName} | {experience.city},{experience.state} {experience.country}</p>
                  <p><b class="capitalize text-blue-500 font-semibold">{experience.jobTitle}</b> | {experience.startMonth} {experience.startYear} -{" "}
                  {experience.currentlyWorkHere ? "Present" : `${experience.endMonth} ${experience.endYear}`}</p>
                  <ul class="list-disc ml-8">
                  {experience.description.split('\n').map((desc, descIndex) => (
                    <li key={descIndex}>{desc}</li>
                  ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div class="mb-2">
            <p class="uppercase font-bold">education</p>
            <hr class="border-y-[1.5px] border-blue-400 w-24 mb-2"/>
            {data.educationData.map((education, index) => (
              <div key={index}>
                <p class="font-bold"><b class="">{education.degreeOfProgram} - {education.fieldOfStudy}</b> {education.city}, {education.state}</p>
                <p><b class="font-normal text-blue-500">{education.schoolName}</b> , {education.graduationYear}</p>
                <p>{education.additionalInfo}</p>
              </div>
            ))}
          </div>
          <div>
            <p class="uppercase font-bold">skills</p>
            <hr class="border-y-[1.5px] border-blue-400 w-14 mb-2"/>
            <div>
              {data.skillsData.map((skill, index) => (
                <b key={index} class="font-normal pl-1 pr-1 ml-2 rounded-lg bg-blue-300">{skill.skill}</b>
              ))}
            </div>
            <div class="mt-2">
              {data.finalizeData.awards.length > 0 && (
                <div>
                  <p class="uppercase font-bold">awards</p>
                  <hr class="border-y-[1.5px] border-blue-400 w-16 mb-2"/>
                  <div>
                    {data.finalizeData.awards.map((award, index) => (
                      <b key={index} class="font-normal pl-1 pr-1 ml-2 rounded-lg bg-blue-300">{award.award}</b>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div>
              {data.certificationData.length > 0 && (
                <div class="mt-2">
                  <p class="uppercase font-bold">certifications</p>
                  <hr class="border-y-[1.5px] border-blue-400 w-32 mb-2"/>
                  <div>
                    {data.certificationData.map((certification) => (
                      <p key={certification.id}>
                        {certification.certification}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div class="mt-2">
              {data.finalizeData.customDatas.length > 0 && data.finalizeData.customDatas.map((custom, index) => (
                <div key={index}>
                  <p class="uppercase font-bold">{custom.name}</p>
                  <hr class="border-y-[1.5px] border-blue-400 mb-2"/>
                  <p>
                    {custom.description}
                  </p>
                </div>
              ))}
            </div>
            {data.finalizeData.publications.length > 0 && (
            <div class="mt-2">
              <p class="uppercase font-bold">awards</p>
              <hr class="border-y-[1.5px] border-blue-400 mb-2"/>
              <ul className="list-disc ml-8">
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
  );
};

