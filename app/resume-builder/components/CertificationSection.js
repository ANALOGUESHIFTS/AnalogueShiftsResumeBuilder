"use client";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import IdiomProof from "@/app/components/layout-components/IdiomProof";

export default function Certification() {
  const router = useRouter();
  const pathname = usePathname();
  const chosenTemplate = pathname.split("/")[4];
  const [open, setOpen] = useState(false);
  const [certification, setCertification] = useState([
    { id: `certification-${crypto.randomUUID()}`, certification: "" },
  ]);

  // Updating A certicate Value
  const updateCertification = (id, newValue) => {
    setCertification((previous) =>
      previous.map((data) => {
        if (data.id !== id) {
          return data;
        } else {
          return { ...data, certification: newValue };
        }
      })
    );
  };

  // Continue
  const handleContinue = () => {
    let storedData = Cookies.get("userData");
    if (storedData) {
      Cookies.set(
        "userData",
        JSON.stringify({
          ...JSON.parse(storedData),
          certificationData: certification,
        }),
        { expires: 7 }
      );
    } else {
      Cookies.set(
        "userData",
        JSON.stringify({
          certificationData: certification,
        }),
        { expires: 7 }
      );
    }
    router.push(`/resume-builder/app/how-to-start/${chosenTemplate}/skills`);
  };

  // Go Back
  const handleGoBack = () => {
    router.push(`/resume-builder/app/how-to-start/${chosenTemplate}/education`);
  };

  // Checking For stored Certificates
  useEffect(() => {
    const storedData = JSON.parse(Cookies.get("userData"));
    if (storedData && storedData.certificationData) {
      setCertification(storedData.certificationData);
    }
  }, []);

  return (
    <div className="w-full flex flex-col">
      <IdiomProof
        open={open}
        setOpen={setOpen}
        title="Confirm"
        msg={
          "You haven't added any Certificate, Are you sure you want to proceed?"
        }
        handleAction={() => {
          setOpen(false);
          handleContinue();
        }}
      />
      <p className="font-extrabold text-3xl text-black/80 pb-5">
        Certifications and licenses
      </p>
      <p className="text-base text-black/80 pb-6">
        If the job requires you to have a certain certifications or licenses,
        this is where you should list them.
      </p>

      <div className="w-full flex flex-col gap-5">
        {certification.map((data, index) => {
          return (
            <div key={data.id} className="w-full relative h-14 ">
              <input
                value={data.certification}
                onChange={(e) => updateCertification(data.id, e.target.value)}
                placeholder={`License or Certification #${index + 1}`}
                className="w-full rounded-2xl bg-white outline-AnalogueShiftsTextColor pr-8 pl-4 max-h-14 py-4 border text-base text-black/80"
              />
              <button
                onClick={() =>
                  setCertification((prev) =>
                    prev.filter((item) => item.id !== data.id)
                  )
                }
                className="absolute top-[30%] right-5"
              >
                <i className="fa-solid fa-trash text-black/60 text-base"></i>
              </button>
            </div>
          );
        })}
      </div>

      <button
        onClick={() =>
          setCertification((previous) => [
            ...previous,
            { id: `certification-${crypto.randomUUID()}`, certification: "" },
          ])
        }
        className="mt-6 flex items-center gap-2 text-black/80 font-semibold text-base"
      >
        <i className="fa-solid fa-plus"></i>
        <p>Add another license or certificate</p>
      </button>

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
            if (certification[0]) {
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
