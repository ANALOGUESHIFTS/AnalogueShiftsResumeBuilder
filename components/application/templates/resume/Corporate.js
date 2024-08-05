export default function CorporateResume({ data }) {
  return (
    <div className="outline-none">
      <div className="relative flex min-h-screen flex-col overflow-hidden bg-white py-6 sm:py-12">
        <div class="m-3 font-serif">
          <div>
            <p class="font-bold text-3xl uppercase text-blue-600">{data.contactData["First Name"]} {data.contactData["Last Name"]}</p>
            <p class="font-bold uppercase">{data.contactData["Desired Job Title"]}</p>
            <hr class="w-4/5 border-y-[1.3px] border-slate-300"/>
            <p>
              <span>{data.contactData["Phone"]} | </span>
              <span>{data.contactData["Email"]} | </span>
              <span>{data.contactData["City"]}, {data.contactData["State / Province"]} | </span>
              <span>{data.contactData["LinkedIn Url"]}</span>
            </p>
          </div>
          <div class="mt-3">
            <p class="font-bold text-[18px] uppercase text-blue-600 mb-2">career objective</p>
            <p>{data.summaryData}</p>
          </div>
          <div>
            <p class="mt-3 font-bold uppercase text-blue-600">professional experience</p>
            {data.experienceData.map((experience, index) => (
              <div key={index}>
                <div class=" ml-1 border-l-2 border-slate-400">
                  <div class="ml-2">
                    <p><span class="font-bold">{experience.jobTitle}</span>, {experience.companyName}</p>
                    <ul class="grid grid-cols-2">
                      <li>{experience.city}, {experience.State}</li>
                      <li class="text-right">{experience.startMonth} {experience.startYear} -{" "}
                      {experience.currentlyWorkHere ? "Present" : `${experience.endMonth} ${experience.endYear}`}</li>
                    </ul>
                    <ul class="grid grid-cols-2 list-disc ml-4">
                      {experience.description.split('\n').map((desc, descIndex) => (
                          <li key={descIndex} class="mr-[2px]">{desc}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
           </div>
          
          
            <div>
              <p class="mt-3 font-bold uppercase text-blue-600">education</p>
              <div class=" ml-1 border-l-2 border-slate-400">
                {data.educationData.map((education, index) => (
                  <div key={index}>
                    <p class="ml-3">
                      <span class="uppercase">{education.degreeOfProgram} in {education.fieldOfStudy}</span>
                      <div class="ml-3">
                        <ul class="grid grid-cols-2">
                          <li><span class="capitalize text-blue-600">{education.schoolName}</span> {education.schoolLocation}</li>
                          <li class="text-right">{education.graduationMonth}, {education.graduationYear}</li>
                        </ul>
                      </div>
                    </p>
                  </div>
                ))}
                
              </div>
            </div>
            <div>
              <p class="mt-3 font-bold uppercase text-blue-600">skills</p>
              <div class=" ml-1 border-l-2 border-slate-400">
                <ul class="ml-8 grid grid-cols-2 list-disc w-[600px]">
                {data.skillsData.map((skill, index) => (
                    <li key={index} class="mr-[2px]">{skill.skill}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              {data.certificationData[0] && (
                <div>
                  <p class="mt-3 font-bold uppercase text-blue-600">certifications</p>
                  <div class=" ml-1 border-l-2 border-slate-400">
                      {data.certificationData.map((certification) => (
                        <span key={certification.id} class="font-semibold ml-2">{certification.certification}</span>
                      ))}
                  </div>
                </div>
              )}
            </div>
            <div>
              {data.finalizeData.awards[0] && (
                <div>
                  <p class="mt-3 font-bold uppercase text-blue-600">awards</p>
                  <div class=" ml-1 border-l-2 border-slate-400">
                    <ul class="ml-8 grid grid-cols-2 list-disc w-[600px]">
                    {data.finalizeData.awards.map((award, index) => (
                      <li key={index} class="mr-[2px]">{award.award}</li>
                    ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
            <div>
              {data.finalizeData.publications[0] && (
                <div>
                <p class="mt-3 font-bold uppercase text-blue-600">publication</p>
                <div class=" ml-1 border-l-2 border-slate-400">
                  {data.finalizeData.publications.map((publication) => (
                    <p key={publication.id} class="italic ml-2">{publication.publication}</p>
                  ))}
                </div>
                </div>
              )}
            </div>
          </div>
        </div>
    </div>
  );
};

