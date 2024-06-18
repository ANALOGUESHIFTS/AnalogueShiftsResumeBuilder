"use client";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import IdiomProof from "@/components/ui/idiom-proof";
import { years, months } from "@/utils/resume-builder/builder/education";

export default function Education() {
  const router = useRouter();
  const pathname = usePathname();
  const chosenTemplate = pathname.split("/")[4];
  const [open, setOpen] = useState(false);
  const [schoolName, setSchoolName] = useState("");
  const [schoolLocation, setSchoolLocation] = useState("");
  const [degreeOfProgram, setDegreeOfProgram] = useState("");
  const [fieldOfStudy, setFieldOfStudy] = useState("");
  const [graduationMonth, setGraduationMonth] = useState("");
  const [graduationYear, setGraduationYear] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [education, setEducation] = useState([]);

  // Add Education
  const addEducation = (e) => {
    e.preventDefault();
    const data = {
      title: `Education ${education.length + 1}`,
      schoolName: schoolName,
      schoolLocation: schoolLocation,
      degreeOfProgram: degreeOfProgram,
      fieldOfStudy: fieldOfStudy,
      graduationMonth,
      graduationMonth,
      graduationYear: graduationYear,
      additionalInfo: additionalInfo,
    };
    setEducation((previous) => [...previous, data]);
    setSchoolName("");
    setSchoolLocation("");
    setDegreeOfProgram("");
    setFieldOfStudy("");
    setGraduationMonth("");
    setGraduationYear("");
    setAdditionalInfo("");
  };

  // Continue
  const handleContinue = () => {
    let storedData = localStorage.getItem("resumeInfo");
    if (storedData) {
      localStorage.setItem(
        "resumeInfo",
        JSON.stringify({
          ...JSON.parse(storedData),
          educationData: education,
        })
      );
    } else {
      localStorage.setItem(
        "resumeInfo",
        JSON.stringify({
          educationData: education,
        })
      );
    }
    router.push(
      `/resume-builder/app/how-to-start/${chosenTemplate}/certifications`
    );
  };

  // Go Back
  const handleGoBack = () => {
    router.push(
      `/resume-builder/app/how-to-start/${chosenTemplate}/experience`
    );
  };

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("resumeInfo"));
    if (storedData && storedData.educationData) {
      setEducation(storedData.educationData);
    }
  }, []);

  return (
    <div className="w-full flex flex-col">
      <IdiomProof
        open={open}
        setOpen={setOpen}
        title="Confirm"
        msg={
          "You haven't added any Education, Are you sure you want to proceed?"
        }
        handleAction={() => {
          setOpen(false);
          handleContinue();
        }}
      />
      <p className="font-extrabold text-3xl text-black/80 pb-5">Education</p>
      <p className="text-base text-black/80 pb-6">
        Great job! You&apos;re onto the next section. Where did you attend
        college or university?
      </p>

      <form
        onSubmit={addEducation}
        method="post"
        className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5"
      >
        <input
          type="text"
          onChange={(e) => setSchoolName(e.target.value)}
          className="px-4 py-3.5  rounded-xl border outline-AnalogueShiftsTextColor text-base text-black/70"
          value={schoolName}
          placeholder="School Name"
          required
        />
        <input
          type="text"
          onChange={(e) => setSchoolLocation(e.target.value)}
          className="px-4 py-3.5  rounded-xl border outline-AnalogueShiftsTextColor text-base text-black/70"
          value={schoolLocation}
          placeholder="School Location"
          required
        />
        <input
          type="text"
          onChange={(e) => setDegreeOfProgram(e.target.value)}
          className="px-4 py-3.5  rounded-xl border outline-AnalogueShiftsTextColor text-base text-black/70"
          value={degreeOfProgram}
          placeholder="Degree Of Program"
        />
        <input
          type="text"
          onChange={(e) => setFieldOfStudy(e.target.value)}
          className="px-4 py-3.5  rounded-xl border outline-AnalogueShiftsTextColor text-base text-black/70"
          value={fieldOfStudy}
          placeholder="Field Of Study"
        />

        <select
          onChange={(e) => setGraduationMonth(e.target.value)}
          value={graduationMonth}
          className="px-4 py-3.5  cursor-pointer  rounded-xl border outline-AnalogueShiftsTextColor text-base text-black/70"
          required
        >
          <option value="">Graduation Month</option>
          {months.map((month) => (
            <option value={month} key={month}>
              {month}
            </option>
          ))}
        </select>
        <select
          onChange={(e) => setGraduationYear(e.target.value)}
          value={graduationYear}
          className="px-4 py-3.5  cursor-pointer  rounded-xl border outline-AnalogueShiftsTextColor text-base text-black/70"
          required
        >
          <option value="">Graduation Year</option>
          {years.map((year) => (
            <option value={year} key={year}>
              {year}
            </option>
          ))}
        </select>

        <div className="md:col-span-2 col-span-1 xl:col-span-3">
          <textarea
            placeholder="Additional Info"
            value={additionalInfo}
            onChange={(e) => setAdditionalInfo(e.target.value)}
            className="px-4 py-3.5 w-full h-32 rounded-xl border outline-AnalogueShiftsTextColor text-base text-black/70"
          ></textarea>
        </div>

        <div className=" flex gap-5">
          <button
            type="submit"
            className="px-8 bg-black/90  duration-300 hover:-translate-y-1 text-white font-semibold py-2.5 rounded-xl"
          >
            Add Education
          </button>
        </div>
      </form>
      {education[0] && (
        <div className="pt-5 flex flex-col gap-5">
          {education.map((data) => {
            return (
              <div
                key={data.title}
                className="w-full rounded-xl bg-white border items-center p-4 flex justify-between"
              >
                <div className="flex flex-col gap-1">
                  <p className="font-bold text-black/80 text-base">
                    {data.degreeOfProgram}
                  </p>
                  <p className=" text-black/80 text-base">
                    {data.graduationMonth} {data.graduationYear}
                  </p>
                </div>
                <button
                  onClick={() =>
                    setEducation((prev) =>
                      prev.filter((item) => item.title !== data.title)
                    )
                  }
                  className="w-10 h-10 rounded-full bg-slate-800 flex justify-center items-center"
                >
                  <i className="fa-solid fa-trash text-white text-sm"></i>
                </button>
              </div>
            );
          })}
        </div>
      )}
      <div className="pt-7 flex gap-5 justify-between">
        <button
          onClick={handleGoBack}
          type="button"
          className="px-12 max-[613px]:px-3 border  duration-300 hover:-translate-y-1 text-black/80 font-semibold py-3.5 rounded-xl"
        >
          Go Back
        </button>
        <button
          onClick={() => {
            if (education[0]) {
              handleContinue();
            } else {
              setOpen(true);
            }
          }}
          type="button"
          className="px-12 max-[613px]:px-3 bg-black/90  duration-300 hover:-translate-y-1 text-white font-semibold py-3.5 rounded-xl"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
