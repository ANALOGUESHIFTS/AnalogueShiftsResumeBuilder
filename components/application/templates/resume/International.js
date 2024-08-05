export default function InternationalTemplate ({ data }) {
  return (
    <div className="outline-none">
      <div className="relative flex min-h-screen flex-col overflow-hidden bg-white py-6 sm:py-12">
        <div className="m-4 grid gap-4 grid-cols-12">
          {/* Left panel */}
          <div className="col-span-4 bg-yellow-600 p-4">
            <div>
              <p className="uppercase text-2xl tracking-tighter text-black-600 mb-4">
                {data.contactData["First Name"]} {data.contactData["Last Name"]}
              </p>
            </div>
            <div className="uppercase">
              {data.contactData["Desired Job Title"]}
            </div>
            <div>
              <ul className="list-disc ml-6 m-3">
                <li className="mb-2">{data.contactData["Phone"]}</li>
                <li className="mb-2">{data.contactData["Email"]}</li>
                <li className="mb-2">{data.contactData["LinkedIn Url"]}</li>
                <li className="mb-2">{data.contactData["City"]}</li>
                <li className="mb-2">{data.contactData["State / Province"]}</li>
              </ul>
            </div>
            <div className="mt-8">
              <p className="font-semibold uppercase">Education</p>
              <hr className="border-black" />
              <div className="mt-8">
                {data.educationData.map((education, index) => (
                  <div key={index} className="flex flex-col gap-3">
                    <p>{education.degreeOfProgram} - {education.fieldOfStudy}</p>
                    <p className="font-bold">{education.schoolName}</p>
                    {education.graduationYear}<br />
                    {education.city}, {education.state}
                  </div>
                ))}
              </div>
              <div>
                <p className="uppercase font-semibold mt-8">Relevant Skills</p>
                <hr className="border-black" />
                <ul className="list-disc ml-8">
                  {data.skillsData.map((skill, index) => (
                    <li key={index}>{skill.skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* Right panel */}
          <div className="col-span-8">
            <div className="m-4">
              <p className="uppercase font-semibold">Career Objective</p>
              <hr className="border-black" />
              <div className="mt-6">
                {data.summaryData}
              </div>
            </div>
            <div className="m-4 mt-8">
              <p className="uppercase font-semibold">Professional Experience</p>
              <hr className="border-black" />
              <div>
                {data.experienceData.map((experience, index) => (
                  <div key={index} className="mt-4">
                    <p className="capitalize font-bold">{experience.jobTitle}</p>
                    <p>
                      {experience.startMonth} {experience.startYear} -{" "}
                      {experience.currentlyWorkHere ? "Present" : `${experience.endMonth} ${experience.endYear}`}
                      <br />
                      {experience.city}, {experience.state}
                    </p>
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
              <div className="m-4">
                <p className="uppercase font-semibold">References</p>
                <hr className="border-black" />
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
          </div>
        </div>
      </div>
    </div>
  );
};

