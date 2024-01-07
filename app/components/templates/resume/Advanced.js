export default function AdvancedResumeTemplate({ data }) {
  return (
    <div className="h-auto w-full px-8 pb-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <div className="w-full flex justify-between items-center mb-8">
          <div className="w-4/5 flex flex-col gap-1">
            <header
              style={{ fontFamily: "serif" }}
              className="text-4xl max-[600px]:text-2xl font-bold  text-blue-600"
            >
              {data.contactData["First Name"]} {data.contactData["Last Name"]}
            </header>
            <p
              style={{ fontFamily: "revert-layer" }}
              className="font-bold pl-4 text-xl text-black/90 max-[600px]:pl-2"
            >
              {data.contactData["Desired Job Title"]}
            </p>
          </div>
          <div className="w-1/5">
            {data.contactData.image && (
              <img
                src={URL.createObjectURL(data.contactData.image)}
                alt="Profile Image"
                className="w-auto h-auto"
              />
            )}
          </div>
        </div>

        <section className="mb-8">
          <h2
            style={{ fontFamily: "serif" }}
            className="text-2xl max-[600px]:text-xl font-bold mb-4 text-blue-600"
          >
            Contact Information
          </h2>
          <div className="pl-4 max-[600px]:pl-2">
            {" "}
            {data.contactData["Email"] && (
              <p
                style={{ fontFamily: "revert-layer" }}
                className="line-clamp-2 text-sm"
              >
                Email: {data.contactData["Email"]}
              </p>
            )}
            {data.contactData["Phone"] && (
              <p
                style={{ fontFamily: "revert-layer" }}
                className="line-clamp-2 text-sm"
              >
                Phone: {data.contactData["Phone"]}
              </p>
            )}
            {data.contactData["LinkedIn Url"] && (
              <p
                style={{ fontFamily: "revert-layer" }}
                className="line-clamp-2 text-sm"
              >
                LinkedIn:{" "}
                <a
                  target="_blank"
                  className="text-blue-600"
                  href={data.contactData["LinkedIn Url"]}
                >
                  {data.contactData["LinkedIn Url"]}
                </a>
              </p>
            )}
            {data.contactData["Country"] && (
              <p
                style={{ fontFamily: "revert-layer" }}
                className="line-clamp-2 text-sm"
              >
                Country: {data.contactData["Country"]}
              </p>
            )}
            {data.contactData["State / Province"] && (
              <p
                style={{ fontFamily: "revert-layer" }}
                className="line-clamp-2 text-sm"
              >
                State: {data.contactData["State / Province"]}
              </p>
            )}
            {data.contactData["City"] && (
              <p
                style={{ fontFamily: "revert-layer" }}
                className="line-clamp-2 text-sm"
              >
                City: {data.contactData["City"]}
              </p>
            )}
          </div>
        </section>

        {data.summaryData.split(">")[1][0] !== "<" && (
          <section className="mb-8">
            <h2
              style={{ fontFamily: "serif" }}
              className="text-2xl font-bold max-[600px]:text-xl mb-4 text-blue-600"
            >
              Summary
            </h2>
            <div
              dangerouslySetInnerHTML={{ __html: data.summaryData }}
              style={{ fontFamily: "revert-layer" }}
              className="text-gray-700 text-sm pl-4 max-[600px]:pl-2"
            ></div>
          </section>
        )}

        {data.skillsData.length > 0 && (
          <section className="mb-8">
            <h2
              style={{ fontFamily: "serif" }}
              className="text-2xl font-bold mb-4 max-[600px]:text-xl text-blue-600"
            >
              Skills
            </h2>
            <div className="flex flex-wrap gap-4 pl-4 max-[600px]:pl-2">
              {data.skillsData.map((skill) => {
                return (
                  <span
                    key={skill.id}
                    className="bg-blue-200 text-blue-800 px-2 py-1 rounded"
                  >
                    {skill.skill}
                  </span>
                );
              })}

              {/* Add more skills as needed */}
            </div>
          </section>
        )}

        {data.experienceData.length > 0 && (
          <section className="mb-8">
            <h2
              style={{ fontFamily: "serif" }}
              className="text-2xl font-bold mb-4 max-[600px]:text-xl text-blue-600"
            >
              Experience
            </h2>
            <div className="pl-4 max-[600px]:pl-2 flex flex-col gap-5">
              {data.experienceData.map((experience) => {
                return (
                  <div key={experience.title} className="">
                    <p
                      style={{ fontFamily: "revert-layer" }}
                      className="font-semibold text-base"
                    >
                      {experience.jobTitle}
                    </p>
                    <p
                      style={{ fontFamily: "revert-layer" }}
                      className="text-gray-700 pl-2 text-sm"
                    >
                      {experience.companyName}, {experience.startMonth}{" "}
                      {experience.startYear} -{" "}
                      {experience.currentlyWorkHere
                        ? "Present"
                        : `${experience.endMonth} ${experience.endYear}`}
                    </p>
                  </div>
                );
              })}
            </div>
            {/* Add more experience entries as needed */}
          </section>
        )}

        <section className="mb-8">
          <h2 className="text-2xl max-[600px]:text-xl font-bold mb-4 text-blue-600">
            Education
          </h2>
          <div className="mb-4">
            <p className="font-semibold">Degree in Computer Science</p>
            <p className="text-gray-700">
              University of XYZ, Graduation Year: 2022
            </p>
          </div>
          {/* Add more education entries as needed */}
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 max-[600px]:text-xl text-blue-600">
            Languages
          </h2>
          <p className="text-gray-700">
            English (Fluent), Spanish (Intermediate)
          </p>
          {/* Add more languages as needed */}
        </section>

        <section className="mb-8">
          <h2 className="text-2xl max-[600px]:text-xl font-bold mb-4 text-blue-600">
            References
          </h2>
          <p className="text-gray-700">Available upon request</p>
        </section>
      </div>
    </div>
  );
}
