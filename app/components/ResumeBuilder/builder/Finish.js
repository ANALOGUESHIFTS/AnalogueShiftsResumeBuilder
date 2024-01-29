"use client";
import { useEffect, useState } from "react";
import AdvancedResumeTemplate from "../../templates/resume/Advanced";
import { plans, years, months } from "./data";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import Link from "next/link";
import Image from "next/image";

//Card Logos
import MasterCard from "@/public/master-card.svg";
import VisaCard from "@/public/visa-card.svg";
import AmericanExpress from "@/public/american-express.svg";
import ProfessionalResumeTemplate from "../../templates/resume/Professional";

import { useAuth } from "../../contexts/AuthContext";

export default function FinishYourResume() {
  const [data, setData] = useState(null);
  const [selectedPaymentMenu, setSelectedPaymentMenu] = useState("14-day");
  const { user } = useAuth();
  const router = useRouter();
  const cardLogos = [VisaCard, MasterCard, AmericanExpress];
  const templates = {
    advanced: <AdvancedResumeTemplate data={data ? data : {}} />,
    professional: <ProfessionalResumeTemplate data={data ? data : {}} />,
  };

  useEffect(() => {
    const storedData = Cookies.get("userData");

    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  const handleContinueForFree = () => {
    if (!user) {
      router.push("/login");
    } else {
      router.push(
        `/resume-builder/app/how-to-start/${data.template}/finish/download`
      );
    }
  };

  return (
    <main className="pt-[100px] bg-[#f9fbfa] w-full flex flex-col items-center">
      <p className=" text-[2.2rem] max-w-[90%] w-[900px] px-5 text-center max-[900px]:text-xl font-extrabold text-black/80">
        Hey <span className="text-AnalogueShiftsTextColor">Promise</span>,
        upgrade now for Unlimited Access to all pro features!
      </p>
      <div className="w-full mt-8 lg:mt-3  flex flex-col lg:flex-row justify-between h-max min-h-[650px] ">
        <div className="relative w-full lg:w-[calc(50%-15px)]  h-[600px] ">
          <div className="lg:w-[65%] w-[90%] h-[600px] bg-AnalogueShiftsTextColor fancy-border-radius"></div>
          <div className="resume-box h-[calc(100%-90px)] left-[20px] lg:left-[28%] absolute top-[45px] overflow-y-auto shadow-lg">
            {data && templates[data.template]}
          </div>
        </div>
        <div className=" lg:w-[calc(50%-15px)] w-full flex flex-col items-center lg:items-start gap-6 pt-12 pr-[20px]">
          {plans.map((planData) => {
            return (
              <div
                key={planData.planDuration}
                className={`lg:w-[65%] overflow-hidden max-w-[90%] md:max-w-full rounded w-[600px] border-2 border-solid ${
                  selectedPaymentMenu === planData.planDuration
                    ? "h-auto border-black/70"
                    : "h-[60px] border-gray-300"
                }`}
              >
                <div
                  onClick={() => setSelectedPaymentMenu(planData.planDuration)}
                  className="h-[60px] cursor-pointer flex items-center justify-between px-4"
                >
                  <div className="h-[38px] flex items-center gap-3">
                    <div
                      className={`w-[38px] h-[38px] rounded-full flex justify-center items-center ${
                        selectedPaymentMenu === planData.planDuration
                          ? "bg-AnalogueShiftsTextColor"
                          : "bg-transparent border-2"
                      }`}
                    >
                      {selectedPaymentMenu === planData.planDuration && (
                        <i className="fa-solid fa-check text-white text-xl"></i>
                      )}
                    </div>
                    <p className="font-extrabold text-base text-black/80">
                      {planData.title}
                    </p>
                  </div>
                  <p className="text-black/90 font-extrabold">
                    <span className="text-base">$</span>{" "}
                    <span className="text-3xl">{planData.price}</span>
                  </p>
                </div>
                <div className="w-full h-max border-t px-3.5 pt-3.5 pb-6">
                  <ul className="w-full flex flex-col gap-3 list-inside list-decimal">
                    {planData.perks.map((perk) => {
                      return (
                        <li
                          key={crypto.randomUUID()}
                          className="text-black/90 text-sm"
                        >
                          {perk}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })}

          <Link
            href="#checkout"
            className="lg:w-[65%] flex justify-center max-w-[90%] md:max-w-full w-[600px] py-2.5 hover:bg-AnalogueShiftsTextColor/70 rounded-full bg-AnalogueShiftsTextColor text-white text-base font-bold"
          >
            Continue
          </Link>
          {data && (
            <button
              onClick={handleContinueForFree}
              className="lg:w-[65%] flex justify-center max-w-[90%] md:max-w-full w-[600px] py-2.5  rounded-full border border-black/20 text-black/80 text-base font-bold"
            >
              Download For Free
            </button>
          )}
        </div>
      </div>
      <p className="pb-8 mt-8 text-[2.2rem] max-w-[90%] w-[900px] px-5 text-center max-[900px]:text-xl font-extrabold text-black/80">
        Secure your dream job with AnalogueShifts
      </p>
      <div
        id="checkout"
        className="w-full px-5 md:px-10 lg:px-[10%] pb-8 lg:mt-3 flex flex-col gap-y-5 lg:flex-row justify-between h-max"
      >
        <div className=" w-full lg:w-[35%] flex flex-col">
          <p className="font-bold text-xl text-black/80">
            Money Back Guarantee
          </p>
          <p className="pt-2.5 text-base text-black/80">
            If you are not fully satisfied within the 14 day trial period,
            simply let us know and we will happily process a full refund.
          </p>
        </div>
        <div className=" lg:w-[calc(65%-40px)] w-full">
          <div className="w-full h-max rounded bg-white border-2 border-solid border-black/80">
            <div className="w-full border-b py-3.5 px-5 lg:px-5 flex justify-between">
              <p className="font-bold text-xl text-black/80">
                Total Due: ${selectedPaymentMenu === "Monthly" ? 7 : 2}
              </p>
              <div className="flex gap-2">
                {cardLogos.map((logo) => (
                  <Image src={logo} alt="Card Logo" />
                ))}
              </div>
            </div>
            <form className="p-3 lg:p-5 flex flex-col gap-3 lg:gap-4">
              <div className="w-full flex justify-between">
                <input
                  placeholder="Card Number"
                  maxLength={19}
                  type="text"
                  className="outline-1 w-[calc(70%-12px)] border text-base text-black/80 outline-AnalogueShiftsTextColor rounded px-3 py-3"
                  required
                />
                <input
                  placeholder="CVV"
                  maxLength={4}
                  type="text"
                  className="outline-1 w-[30%] border text-base text-black/80 outline-AnalogueShiftsTextColor rounded px-3 py-3"
                  required
                />
              </div>
              <input
                placeholder="Name On Card"
                type="text"
                className="outline-1 w-full border text-base text-black/80 outline-AnalogueShiftsTextColor rounded px-3 py-3"
                required
              />
              <div className="w-full flex justify-between">
                <select
                  className="outline-1 w-[calc(50%-6px)] border text-base text-black/80 outline-AnalogueShiftsTextColor rounded px-3 py-3"
                  required
                >
                  <option value="">Month</option>
                  {months.map((month) => (
                    <option key={crypto.randomUUID()} value={month}>
                      {month}
                    </option>
                  ))}
                </select>
                <select
                  className="outline-1 w-[calc(50%-6px)] border text-base text-black/80 outline-AnalogueShiftsTextColor rounded px-3 py-3"
                  required
                >
                  <option value="">Year</option>
                  {years.map((year) => (
                    <option key={crypto.randomUUID()} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
              <p className="text-xs text-black/60">
                By clicking "Get My Resume" you agree to be charged $
                {selectedPaymentMenu === "Monthly" ? 7 : 2} now and accept our
                Terms of Use and Privacy Policy.
              </p>
              <button
                href="#checkout"
                className="w-full mt-4 mb-6 flex justify-center md:max-w-full py-2.5 hover:bg-AnalogueShiftsTextColor/70 rounded-full bg-AnalogueShiftsTextColor text-white text-base font-bold"
              >
                Get My Resume
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
