export default function InternshipResume ({ data }) {
  return (
    <div className="outline-none">
      <div class="relative flex min-h-screen flex-col overflow-hidden bg-white py-6 sm:py-12">
        <div class="ml-4">
          <div>
            <p class="font-bold text-red-500"> Hello </p>
            <p>I am <b class="capitalize mb-3">{data.contactData["First Name"]} {data.contactData["Last Name"]}</b></p>
            <p>{data.contactData["City"]} {data.contactData["State"]} {data.contactData["Country"]}</p>
            <p>{data.contactData["Phone"]}</p>
            <p>{data.contactData["Email"]}</p>
          </div>
          <div class="mb-4">
            <p class="uppercase mt-4 text-2xl font-bold text-red-500 mb-2">skills</p>
            <p>{data.skillsData.map((skill, index) => (
                <i key={index}>{skill.skill}, </i>
              ))}</p>
          </div>
          <div>
            <p class="text-red-500 text-2xl font-bold uppercase">career objective</p>
            <p>{data.summaryData}</p>
          </div>
          <div class="mb-4">
            <p class="text-red-500 text-2xl font-bold uppercase">experience</p>
            {data.experienceData.map((experience, index) => (
              <div key={index}>
              <p>{experience.startMonth} {experience.startYear} -{" "}
              {experience.currentlyWorkHere ? "Present" : `${experience.endMonth} ${experience.endYear}`}</p>
              <p class="capitalize"><b>{experience.companyName}| {experience.city}, {experience.State}</b> - <i>{experience.jobTitle}</i></p>
              <ul class="list-disc ml-8">
              {experience.description.split('\n').map((desc, descIndex) => (
                  <li key={descIndex}>{desc}</li>
                  ))}
              </ul>
              </div>
            ))}
          </div>
          <div>
            {data.certificationData[0] && (
              <div class="mb-4">
                <p class="text-red-500 text-2xl font-bold uppercase">certificates</p>
                <ul className="list-disc ml-6">
                  {data.certificationData.map((certification) => (
                    <li key={certification.id}>{certification.certification}</li>
                  ))}
                </ul>
                
              </div>
            )}
          </div>
          <div class="mb-4">
            <p class="text-red-500 text-2xl font-bold uppercase">education</p>
            {data.educationData.map((education, index) => (
              <div key={index}>
              <p>{education.graduationMonth}{education.graduationYear}</p>
              <p class="capitalize"><b>{education.schoolName}, {education.schoolLocation}</b> - <i>{education.degreeOfProgram}</i></p>
              <p>{education.additionalInfo}</p>
            </div>
            ))}
          </div>
          <div>
            {data.finalizeData.awards[0] && (
              <div class="mb-4">
                <p class="text-red-500 text-2xl font-bold uppercase">awards</p>
                <ul className="list-disc ml-6">
                  {data.finalizeData.awards.map((award, index) => (
                    <li key={index}>{award.award}</li>
                  ))}
                  </ul>
              </div>
            )}
          </div>
          {data.referencesData.length > 0 && (
              <div className="mb-4">
                <p class="text-red-500 text-2xl font-bold uppercase">References</p>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  {data.referencesData.map((reference, index) => (
                    <div key={index} className="flex flex-col gap-2">
                      <span className="text-gray-700 font-semibold">
                        {reference.firstName} {reference.lastName}
                      </span>
                      <span className="text-gray-700">
                        {reference.positionTitle} - {reference.companyName}
                      </span>
                      <span className="text-gray-700">
                        Phone: {reference.phone}
                      </span>
                      <span className="text-gray-700">
                        Email: {reference.email}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          <div>
            {data.finalizeData.customDatas[0] && data.finalizeData.customDatas.map((custom, index) => (
              <div key={index} className="mb-4">
                <p class="text-red-500 text-2xl font-bold uppercase">{custom.name}</p>
                <p>{custom.description}</p>
              </div>
            ))}
          </div>
          <div>
            {data.finalizeData.publications[0] && (
              <div className="mb-4">
                <p class="text-red-500 text-2xl font-bold uppercase">publications</p>
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

