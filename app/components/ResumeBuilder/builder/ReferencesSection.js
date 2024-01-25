"use client";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export default function ReferencesSection({ submit, back }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [positionTitle, setPositionTitle] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [relationshipToYou, setRelationshipToYou] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [references, setReferences] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      title: `Reference ${references.length + 1}`,
      firstName: firstName,
      lastName: lastName,
      positionTitle: positionTitle,
      email: email,
      phone: phone,
      relationshipToYou: relationshipToYou,
      companyName: companyName,
    };
    setReferences((previous) => [...previous, data]);
    setPositionTitle("");
    setCompanyName("");
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setRelationshipToYou("");
  };

  useEffect(() => {
    const storedData = JSON.parse(Cookies.get("userData"));
    console.log(storedData);
    if (storedData && storedData.referencesData) {
      setReferences(storedData.referencesData);
    }
  }, []);

  return (
    <div className="w-full flex flex-col">
      <p className="font-extrabold text-3xl text-black/80 pb-5">
        Add Reference
      </p>

      <form
        onSubmit={handleSubmit}
        method="post"
        className="w-full flex flex-wrap gap-x-5 gap-y-5"
      >
        <input
          type="text"
          onChange={(e) => setFirstName(e.target.value)}
          className="px-4 py-3.5 max-[613px]:w-full rounded-xl border outline-AnalogueShiftsTextColor text-base text-black/70"
          value={firstName}
          placeholder="First Name"
          required
        />
        <input
          type="text"
          onChange={(e) => setLastName(e.target.value)}
          className="px-4 py-3.5 max-[613px]:w-full rounded-xl border outline-AnalogueShiftsTextColor text-base text-black/70"
          value={lastName}
          placeholder="Last Name"
          required
        />
        <input
          type="text"
          onChange={(e) => setPositionTitle(e.target.value)}
          className="px-4 py-3.5 max-[613px]:w-full rounded-xl border outline-AnalogueShiftsTextColor text-base text-black/70"
          value={positionTitle}
          placeholder="Position Title"
          required
        />
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          className="px-4 py-3.5 max-[613px]:w-full rounded-xl border outline-AnalogueShiftsTextColor text-base text-black/70"
          value={email}
          placeholder="Email"
          required
        />
        <input
          type="text"
          onChange={(e) => setPhone(e.target.value)}
          className="px-4 py-3.5 max-[613px]:w-full rounded-xl border outline-AnalogueShiftsTextColor text-base text-black/70"
          value={phone}
          placeholder="Phone"
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
          onChange={(e) => setRelationshipToYou(e.target.value)}
          className="px-4 py-3.5 max-[613px]:w-full rounded-xl border outline-AnalogueShiftsTextColor text-base text-black/70"
          value={relationshipToYou}
          placeholder="Relationship To You"
          required
        />
        <div className="w-full flex gap-5">
          <button
            type="submit"
            className="px-8 bg-black/90 max-[613px]:w-full duration-300 hover:-translate-y-1 text-white font-semibold py-2.5 rounded-xl"
          >
            Add Reference
          </button>
        </div>
      </form>
      {references[0] && (
        <div className="pt-5 flex flex-col gap-5">
          {references.map((data) => {
            return (
              <div
                key={data.title}
                className="w-full rounded-xl bg-white border items-center p-4 flex justify-between"
              >
                <div className="flex flex-col gap-1">
                  <p className="font-bold text-black/80 text-base">
                    {data.firstName} {data.lastName}
                  </p>
                  <p className=" text-black/80 text-sm font-medium pl-2.5">
                    {data.positionTitle}
                  </p>
                  <p className=" text-black/80 text-sm font-medium pl-2.5">
                    {data.companyName}
                  </p>
                </div>
                <button
                  onClick={() =>
                    setReferences((prev) =>
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
          onClick={() => submit(references)}
          type="button"
          className="px-12 max-[613px]:px-3 bg-black/90 max-[613px]:w-full duration-300 hover:-translate-y-1 text-white font-semibold py-3.5 rounded-xl"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
