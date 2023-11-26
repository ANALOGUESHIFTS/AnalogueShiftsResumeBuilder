"use client";
import { useEffect, useState } from "react";
import SearchIcon from "@/public/search-icon.png";
import Image from "next/image";
import Link from "next/link";

const searchData = [
  {
    name: "Account Manager Resume",
    path: "/resume-samples/account-manager-resume-example",
  },
  {
    name: "Accounts Receivable Resume",
    path: "/resume-samples/accounts-receivable-resume",
  },
  {
    name: "Tax Intern Resume",
    path: "/resume-samples/tax-intern-resume",
  },
  {
    name: "Debt Collector Resume",
    path: "/resume-samples/debt-collector-resume",
  },
  {
    name: "BookKeeper Resume",
    path: "/resume-samples/bookkeeper-resume-example",
  },
  {
    name: "Finance Resume",
    path: "/resume-samples/finance-resume",
  },
  {
    name: "Loan Processor",
    path: "/resume-samples/loan-processor-resume",
  },
  {
    name: "Bank Teller Resume",
    path: "/resume-samples/bank-teller-resume-example",
  },
  {
    name: "Acting Resume",
    path: "/resume-samples/acting-resume-example",
  },
  {
    name: "Artist Resume",
    path: "/resume-samples/artist-resume-example",
  },
  {
    name: "Dance Resume",
    path: "/resume-samples/dance-resume",
  },
  {
    name: "Model Resume",
    path: "/resume-samples/model-resume",
  },
  {
    name: "Producer Resume",
    path: "/resume-samples/producer-resume",
  },
  {
    name: "Event Planner Resume",
    path: "/resume-samples/event-planner-resume-example",
  },
];

export default function ResumeSampleSearch({ cancel }) {
  const [searchValue, setSearchValue] = useState("");
  const [initialData, setInitialData] = useState(searchData);

  useEffect(() => {
    if (searchValue.length < 2) {
      setInitialData(searchData);
    } else {
      setInitialData(
        searchData.filter((v) => {
          return v.name.toLowerCase().includes(searchValue.toLocaleLowerCase());
        })
      );
    }
  }, [searchValue]);

  return (
    <section className="fixed top-0 left-0 w-screen h-screen bg-black/10 z-70 pt-10 flex flex-col items-center gap-4">
      <div
        className="absolute top-0 left-0 w-full h-full bg-transparent z-70"
        onClick={cancel}
      ></div>
      <div className="w-[1000px] z-80 max-w-[90%] h-max bg-white overflow-hidden rounded-lg border flex items-center pl-3">
        <Image
          className="cursor-pointer w-5 h-5 mr-3 opacity-70"
          src={SearchIcon}
          alt="Search Icon"
        />
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search job title (e.g. 'Engineer')"
          className="text font-normal w-[calc(100%-28px)] py-3.5 outline-none border-none text-black/40 text-[15px]"
        />
      </div>
      <div className="w-[1000px] z-80 max-w-[90%] h-[300px] bg-white overflow-y-scroll rounded-lg border flex items-center py-4 px-10 max-[800px]:px-5 flex-col">
        {initialData.map((data) => {
          return (
            <Link
              key={crypto.randomUUID()}
              href={data.path}
              className="w-full py-3 border-b text-base font-medium text-black/60 hover:text-AnalogueShiftsTextColor/70"
            >
              {data.name}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
