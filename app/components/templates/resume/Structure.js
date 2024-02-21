import React from 'react';

const Structure = ({ data }) => {
  return (
    <div className="outline-none">
      <div className="flex h-full w-full lg:w-[800px] max-w-full">
        {/* Left Panel */}
        <div className="grid gap-16 bg-slate-700 text-white w-[40%] py-16 px-3 md:px-5">
          {/* Contact Section */}
          <div className="flex flex-col gap-5">
            <p className="text-[3vw] md:text-xl font-semibold border-b pb-2">Contact</p>
            {data.contactData["Phone"] && (
              <div>
                <p className="text-[3vw] md:text-xl font-semibold">Phone</p>
                <span className="text-[2vw] md:text-sm">{data.contactData["Phone"]}</span>
              </div>
            )}
            <div>
              <p className="text-[3vw] md:text-xl font-semibold">Email</p>
              <span className="text-[2vw] md:text-sm">{data.contactData["Email"]}</span>
            </div>
            <div>
              <p className="text-[3vw] md:text-xl font-semibold">Address</p>
              <span className="text-[2vw] md:text-sm">
                {data.contactData["City"] && data.contactData["City"] + ", "}
                {data.contactData["State / Province"] && data.contactData["State / Province"] + ", "}
                {data.contactData["Country"] && data.contactData["Country"]}
              </span>
            </div>
          </div>
          {/* Education Section */}
          {data.educationData[0] && (
            <div className="flex flex-col gap-5">
              <p className="text-[3vw] md:text-xl font-semibold border-b pb-2">Education</p>
              {data.educationData.map((education) => (
                <div key={crypto.randomUUID()} className="flex flex-col gap-3">
                  <span className="text-[2vw] md:text-sm">{education.graduationYear}</span>
                  <span className="text-[2vw] md:text-sm font-semibold">
                    {education.degreeOfProgram} - {education.fieldOfStudy}
                  </span>
                  <span className="text-[2vw] md:text-sm">{education.schoolName}</span>
                </div>
              ))}
            </div>
          )}
          {/* Expertise Section */}
          {/* Certifications Section */}
          {/* Awards Section */}
          {/* Publications Section */}
        </div>
        {/* Right Panel */}
        <div className="grid gap-5 bg-white w-[60%] py-16 px-5 md:px-16">
          {/* Personal Info Section */}
          {/* Experience Section */}
          {/* References Section */}
          {/* Custom Data Section */}
        </div>
      </div>
    </div>
  );
}

export default Structure;
