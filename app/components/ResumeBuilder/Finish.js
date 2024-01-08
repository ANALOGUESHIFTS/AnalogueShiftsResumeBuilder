"use client";
import { useEffect, useState } from "react";
import AdvancedResumeTemplate from "../templates/resume/Advanced";
import Cookies from "js-cookie";

export default function FinishYourResume() {
  const [data, setData] = useState(null);
  const [selectedPaymentMenu, setSelectedPaymentMenu] = useState("14-day");

  const plans = [
    {
      planDuration: "14-day",
    },
    {
      planDuration: "Monthly",
    },
  ];

  useEffect(() => {
    const storedData = Cookies.get("userData");
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);
  return (
    <main className="pt-[100px] w-full flex flex-col items-center">
      <p className=" text-[2.2rem] max-w-[90%] w-[900px] px-5 text-center max-[900px]:text-xl font-extrabold text-black/80">
        Hey <span className="text-AnalogueShiftsTextColor">Promise</span>,
        upgrade now for Unlimited Access to all pro features!
      </p>
      <div className="w-full mt-8 lg:mt-3  flex flex-col lg:flex-row justify-between h-max min-h-[650px] ">
        <div className="relative w-full lg:w-[calc(50%-15px)]  h-[600px] ">
          <div className="lg:w-[65%] w-[90%] h-[600px] bg-AnalogueShiftsTextColor fancy-border-radius"></div>
          <div
            id="resume-box"
            className="h-[calc(100%-90px)] left-[20px] lg:left-[28%] absolute top-[45px] overflow-y-auto shadow-lg"
          >
            {data && <AdvancedResumeTemplate data={data} />}
          </div>
        </div>
        <div className=" lg:w-[calc(50%-15px)] w-full flex flex-col items-center lg:items-start gap-6 pt-12 pr-[20px]">
          {plans.map((planData) => {
            return (
              <div
                key={planData.planDuration}
                className={`lg:w-[65%] max-w-[90%] md:max-w-full rounded w-[600px] border-2 border-solid ${
                  selectedPaymentMenu === planData.planDuration
                    ? "h-auto border-black/70"
                    : "h-[60px] border-gray-300"
                }`}
              >
                <div
                  onClick={(e) => setSelectedPaymentMenu(planData.planDuration)}
                  className="h-[60px] cursor-pointer flex items-center justify-between px-5"
                >
                  <div></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
