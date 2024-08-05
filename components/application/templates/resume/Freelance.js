import React from "react";

const FreelanceResume = ({ data }) => {
  return (
    <div className="outline-none">
      <div className="relative flex min-h-screen flex-col overflow-hidden bg-white py-6 sm:py-12">
        <div class="m-3">
          <div>
            <p class="text-center text-3xl font-bold font-serif text-amber-800">{data.contactData["First Name"]} {data.contactData["Last Name"]}</p>
            <p class="font-bold capitalize text-center text-2xl font-serif">{data.contactData["Desired Job Title"]}</p>
            <p class="text-center bg-amber-700 pt-2 pb-2 font-serif">{data.contactData["City"]}, {data.contactData["State / Province"]} | {data.contactData["Phone"]} | {data.contactData["Email"]} | {data.contactData["LinkedIn"]} </p>
          </div>
          <div class="grid grid-cols-12 mt-3">
            <div class="col-span-4 text-amber-700 font-bold uppercase">
              <p>career objective</p>
            </div>
            <div class="col-span-8 ml-4">
              {data.summaryData}
            </div>
          </div>
          <div class="grid grid-cols-12 mt-2">
            <div class="col-span-4 text-amber-700 font-bold uppercase mr-[2px]">
              Professional experience 
            </div>
            <div class="col-span-8">
              {data.experienceData.map((experience, index) => (
                <div key={index} >
                  <div>
                    <ul class="grid grid-cols-2 border-l-[4px] border-amber-700 pl-4">
                    <li class="font-bold text-amber-700 capitalize">{experience.jobTitle}</li>
                    <li>{experience.startMonth} {experience.startYear} -{" "}
                    {experience.currentlyWorkHere ? "Present" : `${experience.endMonth} ${experience.endYear}`}</li>
                    <li>{experience.companyName} | {experience.city}, {experience.State}</li>
                  </ul>
                  <ul class="border-l-[2px] list-disc list-inside list pl-4">
                  {experience.description.split('\n').map((desc, descIndex) => (
                    <li key={descIndex}>{desc}</li>
                  ))}
                  </ul>
                  </div>
              </div>
              ))}
            </div>
          </div>
          <div class="grid grid-cols-12 mt-2">
            <div class="col-span-4 text-amber-700 font-bold uppercase">
              education
            </div>
            {data.educationData.map((education, index) => (
              <div class="col-span-8 ml-4">
                <p class="grid grid-cols-2">
                  <span class="font-bold text-amber-700 capitalize">{education.degreeOfProgram} in {education.fieldOfStudy}</span>
                  <span class="text-right">{education.graduationMonth}, {education.graduationYear}</span>
                </p>
                <p>{education.schoolName}, {education.schoolLocation}</p>
                <p class="italic">{education.additionalInfo}</p>
              </div>
            ))}
            
          </div>
          <div class="grid grid-cols-12 mt-2">
            <div class="col-span-4 text-amber-700 font-bold uppercase">
              skills
            </div>
            <div class="col-span-8 ml-4">
              <ul class="list-disc ml-5">
              {data.skillsData.map((skill, index) => (
                <li key={index}>{skill.skill}</li>
              ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreelanceResume;
