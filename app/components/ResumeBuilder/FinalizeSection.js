"use client";
import { useState } from "react";

export default function FinalizeSection({ submit, back, data }) {
  const [finalize, setFinalize] = useState(data ? data : {});
  const [awards, setAwards] = useState(data ? data.awards : []);
  const [customDatas, setCustomDatas] = useState(data ? data.customDatas : []);
  const [publications, setPublications] = useState(
    data ? data.publications : []
  );

  const updateAward = (id, newValue) => {
    setAwards((previous) =>
      previous.map((data) => {
        if (data.id !== id) {
          return data;
        } else {
          return { ...data, award: newValue };
        }
      })
    );
  };
  const updatePublication = (id, newValue) => {
    setPublications((previous) =>
      previous.map((data) => {
        if (data.id !== id) {
          return data;
        } else {
          return { ...data, publication: newValue };
        }
      })
    );
  };

  const updateCustomDataName = (id, newName) => {
    setCustomDatas((previous) =>
      previous.map((data) => {
        if (data.id !== id) {
          return data;
        } else {
          return { ...data, name: newName };
        }
      })
    );
  };

  const updateCustomDataDescription = (id, newValue) => {
    setCustomDatas((previous) =>
      previous.map((data) => {
        if (data.id !== id) {
          return data;
        } else {
          return { ...data, description: newValue };
        }
      })
    );
  };

  return (
    <div className="w-full flex flex-col">
      <p className="font-extrabold text-3xl text-black/80 pb-5">
        Want to add any additional sections?
      </p>

      <div className="w-full flex flex-col border-b pb-8">
        <p className="font-bold text-lg text-black/80 pl-5">Awards</p>
        {awards[0] && (
          <div className="w-full flex flex-col gap-5 pt-5">
            {awards.map((data, index) => {
              return (
                <div key={data.id} className="w-full relative h-14 ">
                  <input
                    value={data.award}
                    onChange={(e) => updateAward(data.id, e.target.value)}
                    placeholder={`Award #${index + 1}`}
                    className="w-full rounded-2xl bg-white outline-AnalogueShiftsTextColor pr-8 pl-4 max-h-14 py-4 border text-base text-black/80"
                  />
                  <button
                    onClick={() =>
                      setAwards((prev) =>
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
        )}

        <button
          onClick={() =>
            setAwards((previous) => [
              ...previous,
              { id: `award-${crypto.randomUUID()}`, award: "" },
            ])
          }
          className="mt-5 flex items-center gap-2 text-black/80 font-semibold text-base"
        >
          <i className="fa-solid fa-plus"></i>
          <p>Add {awards.length > 0 ? "another" : "an"} Award</p>
        </button>
      </div>

      <div className="w-full flex flex-col py-8 border-b">
        <p className="font-bold text-lg text-black/80 pl-5">Publications</p>
        {publications[0] && (
          <div className="w-full flex flex-col gap-5 pt-5">
            {publications.map((data, index) => {
              return (
                <div key={data.id} className="w-full relative h-14 ">
                  <input
                    value={data.publication}
                    onChange={(e) => updatePublication(data.id, e.target.value)}
                    placeholder={`Publication #${index + 1}`}
                    className="w-full rounded-2xl bg-white outline-AnalogueShiftsTextColor pr-8 pl-4 max-h-14 py-4 border text-base text-black/80"
                  />
                  <button
                    onClick={() =>
                      setPublications((prev) =>
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
        )}

        <button
          onClick={() =>
            setPublications((previous) => [
              ...previous,
              { id: `publication-${crypto.randomUUID()}`, publication: "" },
            ])
          }
          className="mt-5 flex items-center gap-2 text-black/80 font-semibold text-base"
        >
          <i className="fa-solid fa-plus"></i>
          <p>Add {publications.length > 0 ? "another" : "a"} Publication</p>
        </button>
      </div>

      <div className="w-full flex flex-col py-8">
        <p className="font-bold text-lg text-black/80 pl-5">
          Custom Information
        </p>
        {customDatas[0] && (
          <div className="w-full flex flex-col gap-5 pt-5">
            {customDatas.map((data, index) => {
              return (
                <div
                  key={data.id}
                  className="w-full flex flex-col gap-4 p-5 bg-gray-200/40 rounded-xl"
                >
                  <div className="w-full flex justify-between items-center">
                    <p className="text-black/80 font-semibold text-sm">
                      Custom Info #{index + 1}
                    </p>
                    <button
                      onClick={() =>
                        setCustomDatas((prev) =>
                          prev.filter((item) => item.id !== data.id)
                        )
                      }
                      className="mr-2"
                    >
                      <i className="fa-solid fa-trash text-black/60 text-sm"></i>
                    </button>
                  </div>
                  <input
                    value={data.name}
                    onChange={(e) =>
                      updateCustomDataName(data.id, e.target.value)
                    }
                    placeholder="Name"
                    className="w-full rounded-2xl bg-white outline-AnalogueShiftsTextColor px-4 max-h-14 py-2.5 border text-base text-black/80"
                  />
                  <textarea
                    value={data.description}
                    onChange={(e) =>
                      updateCustomDataDescription(data.id, e.target.value)
                    }
                    placeholder="Information"
                    className="w-full h-32 rounded-2xl bg-white outline-AnalogueShiftsTextColor px-4 py-2.5 border text-base text-black/80"
                  ></textarea>
                </div>
              );
            })}
          </div>
        )}

        <button
          onClick={() =>
            setCustomDatas((previous) => [
              ...previous,
              {
                id: `customData-${crypto.randomUUID()}`,
                name: "",
                description: "",
              },
            ])
          }
          className="mt-5 flex items-center gap-2 text-black/80 font-semibold text-base"
        >
          <i className="fa-solid fa-plus"></i>
          <p>
            Add {customDatas.length > 0 ? "another" : "a"} Custom Information
          </p>
        </button>
      </div>

      <div className="pt-7 flex gap-5 justify-between">
        <button
          onClick={back}
          type="button"
          className="px-12 max-[613px]:px-3 border max-[613px]:w-full duration-300 hover:-translate-y-1 text-black/80 font-semibold py-3.5 rounded-xl"
        >
          Go Back
        </button>
        <button
          onClick={() => submit(finalize)}
          type="button"
          className="px-12 max-[613px]:px-3 bg-black/90 max-[613px]:w-full duration-300 hover:-translate-y-1 text-white font-semibold py-3.5 rounded-xl"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
