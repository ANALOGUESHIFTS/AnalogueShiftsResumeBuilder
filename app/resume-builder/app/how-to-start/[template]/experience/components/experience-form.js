"use client";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import IdiomProof from "@/components/ui/idiom-proof";
import { years, months } from "@/utils/resume-builder/builder/experience";

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
    let storedData = localStorage.getItem("resumeInfo");
    if (storedData) {
      localStorage.setItem(
        "resumeInfo",
        JSON.stringify({
          ...JSON.parse(storedData),
          experienceData: experience,
        })
      );
    } else {
      localStorage.setItem(
        "resumeInfo",
        JSON.stringify({
          experienceData: experience,
        })
      );
    }
    router.push(`/resume-builder/app/how-to-start/${chosenTemplate}/education`);
  };

  // Go Back
  const handleGoBack = () => {
    router.push(`/resume-builder/app/how-to-start/${chosenTemplate}/contact`);
  };

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("resumeInfo"));
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
        This is going to be easy, we promise! Let&apos;s start with your most
        recent job.
      </p>

      <form
        onSubmit={addExperience}
        method="post"
        className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5"
      >
        <input
          type="text"
          onChange={(e) => setJobTitle(e.target.value)}
          className="px-4 py-3.5  rounded-xl border outline-AnalogueShiftsTextColor text-base text-black/70"
          value={jobTitle}
          placeholder="Job Title"
          required
        />
        <input
          type="text"
          onChange={(e) => setCompanyName(e.target.value)}
          className="px-4 py-3.5  rounded-xl border outline-AnalogueShiftsTextColor text-base text-black/70"
          value={companyName}
          placeholder="Company Name"
          required
        />
        <input
          type="text"
          onChange={(e) => setCountry(e.target.value)}
          className="px-4 py-3.5  rounded-xl border outline-AnalogueShiftsTextColor text-base text-black/70"
          value={country}
          placeholder="Country"
        />
        <input
          type="text"
          onChange={(e) => setState(e.target.value)}
          className="px-4 py-3.5  rounded-xl border outline-AnalogueShiftsTextColor text-base text-black/70"
          value={state}
          placeholder="State"
        />
        <input
          type="text"
          onChange={(e) => setCity(e.target.value)}
          className="px-4 py-3.5  rounded-xl border outline-AnalogueShiftsTextColor text-base text-black/70"
          value={city}
          placeholder="City"
        />

        <select
          onChange={(e) => setStartMonth(e.target.value)}
          value={startMonth}
          className="px-4 py-3.5  cursor-pointer  rounded-xl border outline-AnalogueShiftsTextColor text-base text-black/70"
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
          className="px-4 py-3.5  cursor-pointer  rounded-xl border outline-AnalogueShiftsTextColor text-base text-black/70"
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
              className="px-4 py-3.5  cursor-pointer  rounded-xl border outline-AnalogueShiftsTextColor text-base text-black/70"
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
              className="px-4 py-3.5  cursor-pointer  rounded-xl border outline-AnalogueShiftsTextColor text-base text-black/70"
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
        <div className="md:col-span-2 col-span-1 xl:col-span-3">
          <textarea
            placeholder="Job Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="px-4 w-full py-3.5  h-32 rounded-xl border outline-AnalogueShiftsTextColor text-base text-black/70"
          ></textarea>
        </div>
        <div
          onClick={() => setCurrentlyWorkHere((previous) => !previous)}
          className="w-full  flex items-center gap-2 cursor-pointer"
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
            className="px-8 bg-black/90  duration-300 hover:-translate-y-1 text-white font-semibold py-2.5 rounded-xl"
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
          className="px-12 max-[613px]:px-3 border  duration-300 hover:-translate-y-1 text-black/80 font-semibold py-3.5 rounded-xl"
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
          className="px-12 max-[613px]:px-3 bg-black/90  duration-300 hover:-translate-y-1 text-white font-semibold py-3.5 rounded-xl"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
