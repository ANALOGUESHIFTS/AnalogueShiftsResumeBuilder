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
          <div class="mb-4">
            <p class="text-red-500 text-2xl font-bold uppercase">awards</p>
            <p>additional information </p>
          </div>
        </div>
      </div>
    </div>
  );
};

