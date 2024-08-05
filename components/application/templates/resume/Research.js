import React from "react";

const ResearchResume = ({ data }) => {
  return (
    <div className="outline-none">
      <div className="relative flex min-h-screen flex-col overflow-hidden bg-white py-6 sm:py-12">
        <div className="m-3">
          <hr className="border-blue-300 border-y-4" />
          <div className="grid grid-cols-12">
            <div className="col-span-6 bg-blue-600 text-left p-4">
              <p className="capitalize text-2xl tracking-normal mb-1 mt-4">
                {data.contactData["First Name"]} {data.contactData["Last Name"]}
              </p>
              <p>
                {data.contactData["Desired Job Title"]}
              </p>
            </div>
            <div className="col-span-6 text-right p-4">
              <p><b>Phone number </b>{data.contactData["Phone"]}</p>
              <p><b>Email </b>{data.contactData["Email"]}</p>
              <p><b>Address </b>
              <span className="text-[2vw] md:text-sm">
                {data.contactData["City"] && data.contactData["City"] + ", "}
                {data.contactData["State / Province"] &&
                  data.contactData["State / Province"] + ", "}
                {data.contactData["Country"] && data.contactData["Country"]}
              </span>
              </p>
              <p><b>LinkedIn </b>{data.contactData["LinkedIn"]}</p>
            </div>
          </div>
          <hr className="border-blue-300 border-y-4" />
          <div className="">
            <p className="mt-4">
              <b className="uppercase text-2xl font-serif">career objective</b>
              <p className="mt-4 mb-4">
                {data.summaryData}
              </p>
            </p>
          </div>
          <div>
            <p>
            <b className="uppercase text-2xl font-serif">professional experience</b>
            </p>
            {data.experienceData.map((experience, index) => (
            <p>
              <p className="capitalize font-serif font-bold mt-2">
                {experience.companyName}
              </p>
              <p className="font-semibold">
                {experience.city}, {experience.state}
              </p>
              <ul className="gap-2">
                  <li>{experience.jobTitle}, {experience.startMonth} {experience.startYear} -{" "}
                  {experience.currentlyWorkHere ? "Present" : `${experience.endMonth} ${experience.endYear}`}</li>
              </ul>
              <ul className="list-disc ml-8 mb-4">
              {experience.description.split('\n').map((desc, descIndex) => (
                <li key={descIndex}>{desc}</li>
              ))}
              </ul>
            </p>
            ))}
          </div>
          <div>
          <p className="uppercase text-2xl font-bold font-serif mb-1">
                  Education
          </p>
            {data.educationData.map((education, index) => (
              <div key={index} className="flex flex-col">
                <p className="uppercase font-serif font-semibold"> {education.degreeOfProgram} ({education.fieldOfStudy}) - {education.schoolName}</p>
                <div>
                  <div className="capitalize">
                  {education.city}, {education.state} | {education.graduationYear}
                  </div>
                  <div>
                    {education.additionalInfo}
                  </div>
                  </div>
                </div>
            ))}
          </div>
          <div>
            <p className="uppercase text-2xl font-serif font-bold mt-3">skills</p>
            <ul className="list-disc grid grid-cols-2 ml-8">
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

export default ResearchResume;
