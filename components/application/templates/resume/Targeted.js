export default function TargetedResume ({ data }) {
  return (
    <div className="outline-none">
       <div className="relative flex min-h-screen flex-col overflow-hidden bg-white py-6 sm:py-12">
          <div className="m-3">
            <div className="relative text-center uppercase text-3xl text-blue-400 font-light tracking-tighter font-sans border border-black pt-4 pb-7">
              <p>{data.contactData["First Name"]} {data.contactData["Last Name"]} </p>
            </div>
            <div className="bg-blue-400 absolute top-[120px] left-[110px] uppercase text-center text-white text-[20px] w-2/3 ">
              <p>{data.contactData["Desired Job Title"]}</p>
            </div>
            <div>
              <p className="text-center mt-4"><span className="pr-5">{data.contactData["Phone"]}</span> <span>{data.contactData["Email"]}</span></p>
                <p className="text-center"><span className="pr-5">{data.contactData["City"]}, {data.contactData["State / Province"]}</span> <span>{data.contactData["LinkedIn Url"]}</span></p>
            </div>
            <div className="grid grid-cols-12">
                <div className="col-span-7">
                    <p><span className="bg-blue-400 text-white pl-1 pr-1">professional profile</span>
                    <hr className="border-y-[1px] border-slate-400 ml-36 mr-5"/>
                    </p>
                    <div className="border-r-[2px] border-slate-400">
                      <p className="mr-3 mt-2">
                        {data.summaryData}
                      </p>
                    </div>
                </div>
                <div className="ml-2 col-span-5">
                    <p><span className="bg-blue-400 text-white pl-1 pr-1">education</span>
                    <hr className="border-y-[1px] border-slate-400 ml-20 mr-5"/>
                    </p>
                    {data.educationData.map((education, index) => (
                      <div key={index}>
                        <p className="mr-3 mt-2">{education.graduationYear}</p>
                        <p className="mr-3 mt-2 uppercase text-blue-400">{education.degreeOfProgram} in {education.fieldOfStudy}</p>
                        <p className="mr-3 mt-2">{education.schoolName}, {education.schoolLocation}</p>
                        <p className="mr-3 mt-2">{education.additionalInfo}</p>
                      </div>
                    ))}
                      
                </div>
              <div>
              </div>
            </div>
            <div className="mt-2">
              <p><span className="bg-blue-400 text-white pl-1 pr-1">professional experience</span>
                <hr className="border-y-[1px] border-slate-400 ml-[175px] mr-5"/>
                </p>
                {data.experienceData.map((experience, index) => (
                  <div key={index} className="grid grid-cols-12 mt-1">
                  <div className="col-span-4">
                    <p>{experience.startMonth} {experience.startYear} -{" "}
                    {experience.currentlyWorkHere ? "Present" : `${experience.endMonth} ${experience.endYear}`}</p>
                  </div>
                  <div className="col-span-8">
                    <p><span className="uppercase text-blue-400">{experience.jobTitle}</span> | <span>{experience.companyName}, {experience.city}, {experience.State}</span></p>
                    <ul className="list-disc ml-5">
                    {experience.description.split('\n').map((desc, descIndex) => (
                      <li key={descIndex}>{desc}</li>
                    ))}
                    </ul>
                  </div>
                </div>
                ))}
            </div>
            
            {data.referencesData.length > 0 && (
                <div className="mt-2">
                  <div>
                  <p><span className="bg-blue-400 text-white pl-1 pr-1">references</span><hr className="border-y-[1px] border-slate-400 ml-[83px] mr-5"/></p>
                  </div>
                  <div>
                    {data.referencesData.map((reference, index) => (
                      <div key={index} className="flex flex-col gap-2 ml-2">
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
              )}
              {data.certificationData.length > 0 && (
                <div className="mt-2">
                  <p><span className="bg-blue-400 text-white pl-1 pr-1">certificates</span><hr className="border-y-[1px] border-slate-400 ml-[85px] mr-5"/></p>
                  <ul className="list-disc ml-6">
                    {data.certificationData.map((certification) => (
                      <li key={certification.id}>{certification.certification}</li>
                    ))}
                  </ul>
                  
                </div>
              )}
              {data.finalizeData.awards.length > 0 && (
                <div className="mt-2">
                  <p><span className="bg-blue-400 text-white pl-1 pr-1">awards</span><hr className="border-y-[1px] border-slate-400 ml-[60px] mr-5"/></p>
                  <ul className="list-disc ml-6">
                    {data.finalizeData.awards.map((award, index) => (
                      <li key={index}>{award.award}</li>
                    ))}
                    </ul>
                </div>
              )}
            <div className="mt-2">
              <p><span className="bg-blue-400 text-white pl-1 pr-1">additional skills</span><hr className="border-y-[1px] border-slate-400 ml-[118px] mr-5"/></p>
              <ul className="list-disc ml-8 grid grid-cols-2">
                  {data.skillsData.map((skill, index) => (
                    <div>
                      <li key={index} className="mr-5">{skill.skill}</li>
                      <li key={index}>{skill.skill}</li>
                    </div>
                  ))}
              </ul>
            </div>
            {data.finalizeData.customDatas[0] && data.finalizeData.customDatas.map((custom, index) => (
              <div key={index} className="ml-3 mt-3">
                <p><span className="bg-blue-400 text-white pl-1 pr-1">{custom.name}</span><hr className="border-y-[1px] border-slate-400 ml-[60px] mr-5"/></p>
                <p>{custom.description}</p>
              </div>
            ))}
            {data.finalizeData.publications.length > 0 && (
              <div className="mt-2">
                <p><span className="bg-blue-400 text-white pl-1 pr-1">publication</span><hr className="border-y-[1px] border-slate-400 ml-[88px] mr-5"/></p>
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
  );
};

