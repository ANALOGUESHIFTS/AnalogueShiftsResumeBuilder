"use client";
import { useState } from "react";

let years = [
  1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1958, 1959, 1960, 1961, 1962,
  1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975,
  1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988,
  1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001,
  2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014,
  2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027,
  2028, 2029, 2030,
];
let months = [
  "January",
  "Febuary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function EducationSection({ submit, back, data }) {
  const [schoolName, setSchoolName] = useState("");
  const [schoolLocation, setSchoolLocation] = useState("");
  const [degreeOfProgram, setDegreeOfProgram] = useState("");
  const [fieldOfStudy, setFieldOfStudy] = useState("");
  const [graduationMonth, setGraduationMonth] = useState("");
  const [graduationYear, setGraduationYear] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [education, setEducation] = useState(data ? data : []);

  const handleSubmit = (e) => {
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

  return (
    <div className="w-full flex flex-col">
      <p className="font-extrabold text-3xl text-black/80 pb-5">Education</p>
      <p className="text-base text-black/80 pb-6">
        Great job! You're onto the next section. Where did you attend college or
        university?
      </p>

      <form
        onSubmit={handleSubmit}
        method="post"
        className="w-full flex flex-wrap gap-x-5 gap-y-5"
      >
        <input
          type="text"
          onChange={(e) => setSchoolName(e.target.value)}
          className="px-4 py-3.5 max-[613px]:w-full rounded-xl border outline-AnalogueShiftsTextColor text-base text-black/70"
          value={schoolName}
          placeholder="School Name"
          required
        />
        <input
          type="text"
          onChange={(e) => setSchoolLocation(e.target.value)}
          className="px-4 py-3.5 max-[613px]:w-full rounded-xl border outline-AnalogueShiftsTextColor text-base text-black/70"
          value={schoolLocation}
          placeholder="School Location"
          required
        />
        <input
          type="text"
          onChange={(e) => setDegreeOfProgram(e.target.value)}
          className="px-4 py-3.5 max-[613px]:w-full rounded-xl border outline-AnalogueShiftsTextColor text-base text-black/70"
          value={degreeOfProgram}
          placeholder="Degree Of Program"
        />
        <input
          type="text"
          onChange={(e) => setFieldOfStudy(e.target.value)}
          className="px-4 py-3.5 max-[613px]:w-full rounded-xl border outline-AnalogueShiftsTextColor text-base text-black/70"
          value={fieldOfStudy}
          placeholder="Field Of Study"
        />

        <select
          onChange={(e) => setGraduationMonth(e.target.value)}
          value={graduationMonth}
          className="px-4 py-3.5 w-64 cursor-pointer max-[613px]:w-full rounded-xl border outline-AnalogueShiftsTextColor text-base text-black/70"
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
          className="px-4 py-3.5 w-64 cursor-pointer max-[613px]:w-full rounded-xl border outline-AnalogueShiftsTextColor text-base text-black/70"
          required
        >
          <option value="">Graduation Year</option>
          {years.map((year) => (
            <option value={year} key={year}>
              {year}
            </option>
          ))}
        </select>

        <div className="w-full">
          <textarea
            placeholder="Additional Info"
            value={additionalInfo}
            onChange={(e) => setAdditionalInfo(e.target.value)}
            className="px-4 py-3.5 max-[613px]:w-full w-[500px] h-32 rounded-xl border outline-AnalogueShiftsTextColor text-base text-black/70"
          ></textarea>
        </div>

        <div className=" flex gap-5">
          <button
            type="submit"
            className="px-8 bg-black/90 max-[613px]:w-full duration-300 hover:-translate-y-1 text-white font-semibold py-2.5 rounded-xl"
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
          onClick={back}
          type="button"
          className="px-12 max-[613px]:px-3 border max-[613px]:w-full duration-300 hover:-translate-y-1 text-black/80 font-semibold py-3.5 rounded-xl"
        >
          Go Back
        </button>
        <button
          onClick={() => submit(education)}
          type="button"
          className="px-12 max-[613px]:px-3 bg-black/90 max-[613px]:w-full duration-300 hover:-translate-y-1 text-white font-semibold py-3.5 rounded-xl"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
