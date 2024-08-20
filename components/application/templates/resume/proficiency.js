export default function ProficiencyTemplate ({ data }) {
    return (
        <div className="outline-none">
            <div class="relative flex min-h-screen flex-col overflow-hidden bg-white py-6 sm:py-12">
                <div>
                    <div className="text-left w-full border-gray-400 p-4">
                        <div>
                            <h1 className="uppercase text-4xl tracking-wide text-black-600 font-bold p-x-4 m-0">
                                {data.contactData["First Name"]} {data.contactData["Last Name"]}
                            </h1>
                        </div>
                        <div className="text-3xl tracking-wider text-red-950 font-bold m-0">
                            {data.contactData["Desired Job Title"]}
                        </div>
                        <div>
                            <ul className="grid grid-cols-3 gap-4">
                                <li>
                                    <p className="text-[2vw] md:text-sm">
                                        {data.contactData["Email"]}
                                    </p>
                                </li>
                                <li>{data.contactData["Phone"]}</li>
                                <li>{data.contactData["City"]}</li>
                                <li>
                                    {data.contactData["LinkedIn Url"]}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="m-4 grid grid-cols-12">
                        <div className="col-span-7">
                            <div>
                                <div>
                                    <p className="text-3xl font-bold mb-0">Work Experience</p>
                                    <hr className="border-y-black border-y-2" />
                                </div>
                                <div>
                                    {data.experienceData.map((experience) => (
                                        <div key={crypto.randomUUID()}>
                                            <p className="text-2xl  mt-0">
                                                {experience.jobTitle}
                                            </p>
                                            <h4 className="text-red-950 ">{experience.companyName}</h4>
                                            <ul className="grid grid-cols-3 gap-2">
                                                <li className="col-span-2">
                                                    {experience.startMonth} {experience.startYear} -{" "}
                                                    {experience.currentlyWorkHere ? "Present" : `${experience.endMonth} ${experience.endYear}`}
                                                </li>
                                                <li className="col-span-1">{experience.city}, {experience.state}</li>
                                            </ul>
                                            <ul className="list-disc ml-8">
                                                {experience.description.split('\n').map((desc, index) => (
                                                    <li key={index}>{desc}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div>
                            {data.referencesData.length > 0 && (
                                <div className="m-4">
                                    <p className="text-3xl font-bold mb-0">References</p>
                                    <hr className="border-y-black border-y-2" />
                                    <div className="grid grid-cols-2 gap-4 mt-4">
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
                            )}
                            </div>
                            <div>
                            {data.finalizeData.customDatas[0] && data.finalizeData.customDatas.map((custom, index) => (
                                <div key={index} className="m-4">
                                <p className="text-3xl font-bold mb-0">{custom.name}</p>
                                <hr className="border-y-black border-y-2" />
                                <p>{custom.description}</p>
                                </div>
                            ))}
                            </div>
                        </div>
                        <div className="col-span-5 p-2">
                            <div>
                                <p className="text-3xl font-bold mb-0">Career Objective</p>
                                <hr className="border-black border-y-2" />
                                {data.summaryData}
                            </div>
                            <div>
                                <p className="text-3xl font-bold mb-0">Education</p>
                                <hr className="border-black border-y-2" />
                                <p>
                                    {data.educationData.map((education) => (
                                        <div key={crypto.randomUUID()} className="flex flex-col gap-3">
                                            <p className="font-bold">{education.degreeOfProgram} - {education.fieldOfStudy}</p>
                                            <p className="text-red-950 font-bold">{education.schoolName}</p>
                                            <ul>
                                                <li>{education.graduationYear}</li>
                                                <li>{education.city}, {education.state}</li>
                                            </ul>
                                        </div>
                                    ))}
                                </p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold mb-0">Skills</p>
                                <hr className="border-black border-y-2" />
                                <ul className="list-disc ml-8 gap-3">
                                    {data.skillsData.map((skill) => (
                                        <li key={crypto.randomUUID()}>{skill.skill}</li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                {data.finalizeData.awards[0] && (
                                    <div>
                                    <p className="text-3xl font-bold mb-0">awards</p>
                                    <hr className="border-black border-y-2" />
                                    <ul className="list-disc ml-6">
                                        {data.finalizeData.awards.map((award, index) => (
                                        <li key={index}>{award.award}</li>
                                        ))}
                                    </ul>
                                    </div>
                                )}
                                </div>
                            <div>
                            {data.finalizeData.publications[0] && (
                                <div className="ml-3 mt-3">
                                <p className="text-3xl font-bold mb-0">publications</p>
                                <hr className="border-black border-y-2" />
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
            </div>
        </div>
    );
};

