import React from "react";

const RemoteResume = ({ data }) => {
  return (
    <div className="outline-none">
      <div className="relative flex min-h-screen flex-col overflow-hidden bg-white py-6 sm:py-12">
        <div class="m-3">
          <div class="grid grid-cols-12 mb-1">
            <div class="col-span-4">
              <p class="uppercase text-3xl font-bold">
              {data.contactData["First Name"]} {data.contactData["Last Name"]}
              </p>
            </div>
            <div class="col-span-8">
              <hr class="border-y-[1.5px] border-black mb-3"/>
              <p class=" font-bold">
              {data.contactData["First Name"]} {data.contactData["Last Name"]}
              </p>
              <p>{data.contactData["City"]}, {data.contactData["State / Province"]}</p>
            </div>
          </div>
          <div class="mb-5">
            <div class="grid grid-cols-12">
              <div class="col-span-4">
                <p class="uppercase font-bold text-red-500">{data.contactData["Desired Job Title"]}</p>
              </div>
              <div class="col-span-8 text-red-500">
                <p class=" font-bold">{data.contactData["Phone"]}</p>
                <p>{data.contactData["Email"]}</p>
                <p>{data.contactData["LinkedIn"]}</p>
              </div>
            </div>
          </div>
          <div class="mb-5">
            <div class="grid grid-cols-12">
              <div class="col-span-4">
                <hr class="w-1/12 border-black"/>
                <p class="uppercase font-bold">career objective </p>
              </div>
              <div class="col-span-8">
                <hr class="border-y-[1.5px] border-black mb-3"/>
                <p>{data.summaryData}</p>
              </div>
            </div>
          </div>
          <div class="mb-5">
            <div class="grid grid-cols-12">
              <div class="col-span-4">
                <hr class="w-1/12 border-black"/>
                <p class="uppercase font-bold">skills </p>
              </div>
              <div class="col-span-8">
                <hr class="border-y-[1.5px] border-black mb-3"/>
                <p>{data.skillsData.map((skill, index) => (
                <i>{skill.skill}, </i>
                ))}</p>
              </div>
            </div>
          </div>
          <div class="mb-5">
            <div class="grid grid-cols-12">
              <div class="col-span-4">
                <hr class="w-1/12 border-black"/>
                <p class="uppercase font-bold">experience</p>
              </div>
              <div class="col-span-8">
                <hr class="border-y-[1.5px] border-black mb-3"/>
                {data.experienceData.map((experience, index) => (
                  <div key={index}>
                  <p class="capitalize font-bold">{experience.companyName}, {experience.jobTitle}</p>
                  <p>{experience.startMonth} {experience.startYear} -{" "}
                  {experience.currentlyWorkHere ? "Present" : `${experience.endMonth} ${experience.endYear}`} | {experience.city}, {experience.State}</p>
                  <ul class="list-disc ml-6">
                  {experience.description.split('\n').map((desc, descIndex) => (
                    <li key={descIndex}>{desc}</li>
                  ))}
                  </ul>
                </div>
                ))}
              </div>
            </div>
          </div>
          <div class="mb-5">
            <div class="grid grid-cols-12">
              <div class="col-span-4">
                <hr class="w-1/12 border-black"/>
                <p class="uppercase font-bold">education</p>
              </div>
              <div class="col-span-8">
                <hr class="border-y-[1.5px] border-black mb-3"/>
                {data.educationData.map((education, index) => (
                  <div key={index}>
                    <p class=" font-bold">{education.schoolName} | {education.degreeOfProgram} in {education.fieldOfStudy}</p>
                    <p>{education.graduationYear} | {education.schoolLocation}</p>
                    <p>{education.additionalInfo}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemoteResume;
