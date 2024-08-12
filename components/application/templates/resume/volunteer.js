export default function VolunteerResume ({ data }) {
  return (
    <div className="outline-none">
      <div className="relative flex min-h-screen flex-col overflow-hidden bg-white py-6 sm:py-12">
        <div className="m-3">
          <div className="justify-center font-serif">
            <p className="capitalize text-center text-blue-800 text-3xl font-bold">
              {data.contactData["First Name"]} {data.contactData["Last Name"]}
            </p>
            <p className="uppercase text-center font-bold">
              {data.contactData["Desired Job Title"]}
            </p>
          </div>
          <div>
            <hr className="border-blue-950 mb-2"/>
            <ul className="text-center">
              <p>{data.contactData["Phone"]}</p>
              <p>{data.contactData["Email"]}</p>
              <p>{data.contactData["City"]}, {data.contactData["State / Province"]}</p>
              <p>{data.contactData["LinkedIn Url"]}</p>
            </ul>
            <hr className="border-blue-950 mt-2"/>
          </div>
          <div className="text-center mb-4">
            <p>
              <i>{data.summaryData}</i>
            </p>
          </div>
          <div className="mb-4">
            <p className="text-2xl font-serif uppercase text-blue-950 font-semibold">
              professional experience
            </p>
            <hr className="border-blue-950 mt-2"/>
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
          {data.referencesData.length > 0 && (
            <div className="mb-4">
              <div>
                <div>
                  <p className="text-2xl font-serif uppercase text-blue-950 font-semibold">reference</p>
                  <hr className="border-blue-950 mt-2"/>
                </div>
                <div>
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
          <div className="mb-4"> 
            <p className="text-2xl font-serif uppercase text-blue-950 font-semibold">
              education
            </p>
            <hr className="border-blue-950 mt-2"/>
              {data.educationData.map((education, index) => (
                <div key={index}>
                  <ul className="capitalize grid grid-cols-2 font-bold">
                    <li>{education.degreeOfProgram} - {education.fieldOfStudy}</li>
                    <li className="text-right">{education.schoolNmae}</li>
                  </ul>
                  <ul className="capitalize font-semibold grid grid-cols-2">
                    <li>{education.graduationYear}</li>
                    <li className="text-right">{education.schoolLocation}</li>
                  </ul>
                  <p>{education.additionalInfo}</p>
                </div>
              ))}
          </div>
          {data.certificationData.length > 0 && (
            <div class="mb-4">
              <p className="text-2xl font-serif uppercase text-blue-950 font-semibold">certifications</p>
              <hr className="border-blue-950 mt-2"/>
              <div>
                {data.certificationData.map((certification) => (
                  <p key={certification.id}>
                    {certification.certification}
                  </p>
                ))}
              </div>
            </div>
          )}
          <div>
            <p className="text-2xl font-serif uppercase text-blue-950 font-semibold">
              skills
            </p>
            <hr className="border-blue-950 mt-2"/>
            <ul className="list-disc ml-8">
              {data.skillsData.map((skill, index) => (
                <li key={index}>{skill.skill}</li>
              ))}
              </ul>
          </div>
          {data.finalizeData.awards.length > 0 && (
            <div>
              <p className="text-2xl font-serif uppercase text-blue-950 font-semibold">awards</p>
              <hr className="border-blue-950 mt-2"/>
              <ul className="list-disc ml-8">
                {data.finalizeData.awards.map((award, index) => (
                  <li key={index}>{award.award}</li>
                ))}
              </ul>
            </div>
          )}
          {data.finalizeData.customDatas.length > 0 && data.finalizeData.customDatas.map((custom, index) => (
            <div key={index}>
              <p className="text-2xl font-serif uppercase text-blue-950 font-semibold">{custom.name}</p>
              <hr className="border-blue-950 mt-2"/>
              <p>
                {custom.description}
              </p>
            </div>
          ))}
          {data.finalizeData.publications.length > 0 && (
            <div>
              <p className="text-2xl font-serif uppercase text-blue-950 font-semibold">publications</p>
              <hr className="border-blue-950 mt-2"/>
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
  );
};

