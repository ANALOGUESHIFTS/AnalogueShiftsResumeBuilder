export default function FederalResume ({ data }) {
  return (
    <div className="outline-none">
      <div className="relative flex min-h-screen flex-col overflow-hidden bg-white py-6 sm:py-12">
        <div class="m-3">
          <div class="text-center p-8 pt-8 pb-8 bg-orange-500">
            <p class="text-3xl font-bold text-white uppercase">{data.contactData["First Name"]} {data.contactData["Last Name"]}</p>
            <p class="uppercase font-thin text-white tracking-wider">{data.contactData["Desired Job Title"]}</p>
          </div>
          <div class="grid grid-cols-12 mt-3">
            <div class="col-span-8 border-r-[3px]">
              <p class="uppercase font-bold tracking-tighter">Career objective</p>
              <p class="mt-2 mr-[3px]">{data.summaryData}</p>
            </div>
            <div class="col-span-4 ml-8">
              <ul class="list-disc">
                <li>{data.contactData["Phone"]}</li>
                <li>{data.contactData["Email"]}</li>
                <li>{data.contactData["City"]}</li>
                <li>{data.contactData["State / Province"]}</li>
                <li>{data.contactData["LinkedIn Url"]}</li>
              </ul>
            </div>
          </div>
          <div class="mt-3">
            <p class="font-bold uppercase tracking-tighter">professional experience</p>
            {data.experienceData.map((experience, index) => (
              <div key={index}>
                <p class="mt-3 capitalize text-orange-500 font-bold">{experience.jobTitle}</p>
                <p>
                  <span class="capitalize">{experience.startMonth} {experience.startYear} -{" "}
                  {experience.currentlyWorkHere ? "Present" : `${experience.endMonth} ${experience.endYear}`}</span> | 
                  <span class="capitalize">{experience.companyName} {experience.city}, {experience.State}</span>
                </p>
                <ul class="list-disc ml-8">
                {experience.description.split('\n').map((desc, descIndex) => (
                  <li key={descIndex}>{desc}</li>
                ))}
                </ul>
              </div>
            ))}
          </div>
          <div class="mt-3">
            <p class="uppercase font-bold tracking-tighter">education</p>
            {data.educationData.map((education, index) => (
              <div key={index}>
                <p class="mt-4">
                  <span class="font-semibold capitalize text-orange-500 ">{education.degreeOfProgram}, {education.fieldOfStudy}</span>
                  <br/>
                  <span>{education.graduationMonth}, {education.graduationYear} | {education.schoolName}, {education.schoolLocation}</span>
                  <br/>
                  <span>{education.additionalInfo}</span>
                </p>
              </div>
            ))}
            
            
          </div>
          <div class="mt-3">
            <p class="uppercase font-bold tracking-tighter">skills</p>
            <ul class="list-disc ml-8">
              {data.skillsData.map((skill, index) => (
                <li key={index}>{skill.skill}</li>
              ))}
           </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

