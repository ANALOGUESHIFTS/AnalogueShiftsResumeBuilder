"use client";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import IdiomProof from "@/app/components/LayoutComponents/IdiomProof";

let years = [
  2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012,
  2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000, 1999,
  1998, 1997, 1996, 1995, 1994, 1993, 1992, 1991, 1990, 1989, 1988, 1987, 1986,
  1985, 1984, 1983, 1982, 1981, 1980, 1979, 1978, 1977, 1976, 1975, 1974, 1973,
  1972, 1971, 1970, 1969, 1968, 1967, 1966, 1965, 1964, 1963, 1962, 1961, 1960,
  1959, 1958, 1957, 1956, 1955, 1954, 1953, 1952, 1951, 1950,
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

export default function Experience() {
  const router = useRouter();
  const pathname = usePathname();
  const chosenTemplate = pathname.split("/")[4];
  const [jobTitle, setJobTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [startMonth, setStartMonth] = useState("");
  const [description, setDescription] = useState("");
  const [startYear, setStartYear] = useState("");
  const [endMonth, setEndMonth] = useState("");
  const [endYear, setEndYear] = useState("");
  const [currentlyWorkHere, setCurrentlyWorkHere] = useState(false);
  const [experience, setExperience] = useState([]);
  const [open, setOpen] = useState(false);

  const addExperience = (e) => {
    e.preventDefault();
    const data = {
      title: `Experience ${experience.length + 1}`,
      jobTitle: jobTitle,
      companyName: companyName,
      country: country,
      state: state,
      city: city,
      description: description,
      startMonth: startMonth,
      endMonth: endMonth,
      startYear: startYear,
      endYear: endYear,
      currentlyWorkHere: currentlyWorkHere,
    };
    setExperience((previous) => [...previous, data]);
    setJobTitle("");
    setCompanyName("");
    setCountry("");
    setState("");
    setCity("");
    setStartMonth("");
    setEndMonth("");
    setEndYear("");
    setDescription("");
    setCurrentlyWorkHere(false);
  };

  // Continue
  const handleContinue = () => {
    let storedData = Cookies.get("userData");
    if (storedData) {
      Cookies.set(
        "userData",
        JSON.stringify({
          ...JSON.parse(storedData),
          experienceData: experience,
        }),
        { expires: 7 }
      );
    } else {
      Cookies.set(
        "userData",
        JSON.stringify({
          experienceData: experience,
        }),
        { expires: 7 }
      );
    }
    router.push(`/resume-builder/app/how-to-start/${chosenTemplate}/education`);
  };

  // Go Back
  const handleGoBack = () => {
    router.push(`/resume-builder/app/how-to-start/${chosenTemplate}/contact`);
  };

  useEffect(() => {
    const storedData = JSON.parse(Cookies.get("userData"));
    if (storedData && storedData.experienceData) {
      setExperience(storedData.experienceData);
    }
  }, []);

  return (
    <div className="w-full flex flex-col">
      <IdiomProof
        open={open}
        setOpen={setOpen}
        title="Confirm"
        msg={
          "You haven't added any Experience, Are you sure you want to proceed?"
        }
        handleAction={() => {
          setOpen(false);
          handleContinue();
        }}
      />
      <p className="font-extrabold text-3xl text-black/80 pb-5">Experience</p>
      <p className="text-base text-black/80 pb-6">
        This is going to be easy, we promise! Let's start with your most recent
        job.
      </p>

      <form
        onSubmit={addExperience}
        method="post"
        className="w-full flex flex-wrap gap-x-5 gap-y-5"
      >
        <input
          type="text"
          onChange={(e) => setJobTitle(e.target.value)}
          className="px-4 py-3.5 max-[613px]:w-full rounded-xl border outline-AnalogueShiftsTextColor text-base text-black/70"
          value={jobTitle}
          placeholder="Job Title"
          required
        />
        <input
          type="text"
          onChange={(e) => setCompanyName(e.target.value)}
          className="px-4 py-3.5 max-[613px]:w-full rounded-xl border outline-AnalogueShiftsTextColor text-base text-black/70"
          value={companyName}
          placeholder="Company Name"
          required
        />
        <input
          type="text"
          onChange={(e) => setCountry(e.target.value)}
          className="px-4 py-3.5 max-[613px]:w-full rounded-xl border outline-AnalogueShiftsTextColor text-base text-black/70"
          value={country}
          placeholder="Country"
        />
        <input
          type="text"
          onChange={(e) => setState(e.target.value)}
          className="px-4 py-3.5 max-[613px]:w-full rounded-xl border outline-AnalogueShiftsTextColor text-base text-black/70"
          value={state}
          placeholder="State"
        />
        <input
          type="text"
          onChange={(e) => setCity(e.target.value)}
          className="px-4 py-3.5 max-[613px]:w-full rounded-xl border outline-AnalogueShiftsTextColor text-base text-black/70"
          value={city}
          placeholder="City"
        />

        <select
          onChange={(e) => setStartMonth(e.target.value)}
          value={startMonth}
          className="px-4 py-3.5 w-64 cursor-pointer max-[613px]:w-full rounded-xl border outline-AnalogueShiftsTextColor text-base text-black/70"
          required
        >
          <option>Start Month</option>
          {months.map((month) => (
            <option value={month} key={month}>
              {month}
            </option>
          ))}
        </select>
        <select
          onChange={(e) => setStartYear(e.target.value)}
          value={startYear}
          className="px-4 py-3.5 w-64 cursor-pointer max-[613px]:w-full rounded-xl border outline-AnalogueShiftsTextColor text-base text-black/70"
          required
        >
          <option value="">Start Year</option>
          {years.map((year) => (
            <option value={year} key={crypto.randomUUID()}>
              {year}
            </option>
          ))}
        </select>
        {!currentlyWorkHere && (
          <>
            <select
              onChange={(e) => setEndMonth(e.target.value)}
              value={endMonth}
              className="px-4 py-3.5 w-64 cursor-pointer max-[613px]:w-full rounded-xl border outline-AnalogueShiftsTextColor text-base text-black/70"
              required
            >
              <option>End Month</option>
              {months.map((month) => (
                <option value={month} key={month}>
                  {month}
                </option>
              ))}
            </select>
            <select
              onChange={(e) => setEndYear(e.target.value)}
              value={endYear}
              className="px-4 py-3.5 w-64 cursor-pointer max-[613px]:w-full rounded-xl border outline-AnalogueShiftsTextColor text-base text-black/70"
              required
            >
              <option value="">End Year</option>
              {years.map((year) => (
                <option value={year} key={crypto.randomUUID()}>
                  {year}
                </option>
              ))}
            </select>
          </>
        )}
        <div className="w-full">
          <textarea
            placeholder="Job Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="px-4 py-3.5 max-[613px]:w-full w-[500px] h-32 rounded-xl border outline-AnalogueShiftsTextColor text-base text-black/70"
          ></textarea>
        </div>
        <div
          onClick={() => setCurrentlyWorkHere((previous) => !previous)}
          className="w-full flex items-center gap-2 cursor-pointer"
        >
          <input
            type="checkbox"
            value={currentlyWorkHere}
            onChange={(e) => setCurrentlyWorkHere(e.target.checked)}
            checked={currentlyWorkHere}
          />
          <p className="text-sm text-black/80">I currently work here</p>
        </div>
        <div className=" flex gap-5">
          <button
            type="submit"
            className="px-8 bg-black/90 max-[613px]:w-full duration-300 hover:-translate-y-1 text-white font-semibold py-2.5 rounded-xl"
          >
            Add Experience
          </button>
        </div>
      </form>
      {experience[0] && (
        <div className="pt-5 flex flex-col gap-5">
          {experience.map((data) => {
            return (
              <div
                key={data.title}
                className="w-full rounded-xl bg-white border items-center p-4 flex justify-between"
              >
                <div className="flex flex-col gap-1">
                  <p className="font-bold text-black/80 text-base">
                    {data.jobTitle}
                  </p>
                  <p className=" text-black/80 text-base">
                    {data.startMonth} {data.startYear} -{" "}
                    {data.currentlyWorkHere
                      ? "Present"
                      : `${data.endMonth} ${data.endYear}`}
                  </p>
                </div>
                <button
                  onClick={() =>
                    setExperience((prev) =>
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
          className="px-12 max-[613px]:px-3 border max-[613px]:w-full duration-300 hover:-translate-y-1 text-black/80 font-semibold py-3.5 rounded-xl"
        >
          Go Back
        </button>
        <button
          onClick={() => {
            if (experience[0]) {
              handleContinue();
            } else {
              setOpen(true);
            }
          }}
          type="button"
          className="px-12 max-[613px]:px-3 bg-black/90 max-[613px]:w-full duration-300 hover:-translate-y-1 text-white font-semibold py-3.5 rounded-xl"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
