export default function ConsultingResume ({ data }) {
  return (
    <div className="outline-none">
      <div className="relative flex min-h-screen flex-col overflow-hidden bg-white py-6 sm:py-12">
        <div>
          <div className="justify-center font-serif">
            <p className="capitalize text-center text-blue-800 text-3xl font-bold">
              {data.contactData["First Name"]} {data.contactData["Last Name"]}
            </p>
            <p className="uppercase text-center font-bold">
              {data.contactData["Desired Job Title"]}
            </p>
            <br/>
          </div>
          <div>
            <hr className="border-blue-900 mb-2"/>
            <ul className="grid grid-cols-3 text-center">
              <li>{data.contactData["Phone"]}</li>
              <li>{data.contactData["Email"]}</li>
              <li>{data.contactData["CCty"]}</li>
              <li>{data.contactData["State / Province"]}</li>
              <li>{data.contactData["LinkedIn Url"]}</li>
            </ul>
            <hr className="border-blue-900 mt-2"/>
          </div>
          <div className="text-center mb-4">
            <p>
              {data.summaryData}
            </p>
          </div>
          <div className="mb-4">
            <p className="text-2xl font-serif uppercase text-blue-900 font-semibold">
              professional experience
            </p>
            <hr className="border-blue-900 mt-2"/>
            <div>
              {data.experienceData.map((experience, index) => (
                <div key={index}>
                  <ul className="capitalize grid grid-cols-2 font-bold">
                  <li>{experience.companyName}</li>
                  <li className="text-right"></li>
                </ul>
                <ul className="capitalize font-semibold grid grid-cols-2">
                  <li>{experience.jobTitle}</li>
                  <li className="text-right">{experience.startMonth} {experience.startYear} -{" "}
                  {experience.currentlyWorkHere ? "Present" : `${experience.endMonth} ${experience.endYear}`}</li>
                </ul>
                <ul className="list-disc ml-8">
                  {experience.description.split('\n').map((desc, descIndex) => (
                  <li key={descIndex}>{desc}</li>
                  ))}
                </ul>
                </div>
              ))}
              
            </div>
          </div>
          <div className="mb-4"> 
            <p className="text-2xl font-serif uppercase text-blue-900 font-semibold">
              education
            </p>
            <hr className="border-blue-900 mt-2"/>
              {data.educationData.map((education, index) => (
                <div key={index}>
                  <ul className="capitalize grid grid-cols-2 font-bold">
                    <li>{education.degreeOfProgram} - {education.fieldOfStudy}</li>
                    <li className="text-right">{education.schoolName}</li>
                  </ul>
                  <ul className="capitalize font-semibold grid grid-cols-2">
                    <li>{education.graduationYear}</li>
                    <li className="text-right">{education.city}, {education.state}</li>
                  </ul>
                  <p>{education.additionalInfo}</p>
                </div>
              ))}
                
          </div>
          <div className="mt-2">
            {data.finalizeData.awards[0] && (
              <div>
                 <p className="text-2xl font-serif uppercase text-blue-900 font-semibold">
                    awards
                  </p>
                  <hr className="border-blue-900 mt-2"/>
                  <ul className="capitalize grid grid-cols-2 list-disc ml-8">
                    {data.finalizeData.awards.map((award, index) => (
                      <li key={index}>{award.award}</li>
                    ))}
                  </ul>
              </div>
            )}
          </div>
          <div className="mt-2">
            {data.certificationData[0] && (
              <div>
                <p className="text-2xl font-serif uppercase text-blue-900 font-semibold">
                    certificates
                  </p>
                  <hr className="border-blue-900 mt-2"/>
                  <ul className="capitalize grid grid-cols-2 list-disc ml-8">
                  {data.certificationData.map((certification) => (
                    <li key={certification.id}>{certification.certification}</li>
                  ))}
                  </ul>
              </div>
            )}
          </div>
          <div className="mt-2">
            {data.finalizeData.customDatas[0] && data.finalizeData.customDatas.map((custom, index) => (
              <div key={index}>
                <p className="text-2xl font-serif uppercase text-blue-900 font-semibold">
                  {custom.name}
                </p>
                <hr class="border-y-[1.5px] border-blue-400 mb-2"/>
                <p>
                  {custom.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-2">
            <p className="text-2xl font-serif uppercase text-blue-900 font-semibold">
              skills
            </p>
            <hr className="border-blue-900 mt-2"/>
            <ul className="capitalize grid grid-cols-2 list-disc ml-8">
              {data.skillsData.map((skill, index) => (
                <li key={index}>{skill.skill}</li>
              ))}
              </ul>
          </div>
          <div className="mt-2">
            {data.finalizeData.publications[0] && (
              <div className="mt-2">
                <p className="text-2xl font-serif uppercase text-blue-900 font-semibold">
                  publications
                </p>
                <hr className="border-blue-900 mt-2"/>
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

    </div>
  );
};

