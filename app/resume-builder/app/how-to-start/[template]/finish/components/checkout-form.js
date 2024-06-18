import Image from "next/image";
import { years, months } from "@/utils/resume-builder/builder/finish";

//Card Logos
import MasterCard from "@/public/images/master-card.svg";
import VisaCard from "@/public/images/visa-card.svg";
import AmericanExpress from "@/public/images/american-express.svg";

export default function CheckoutForm({ selectedPaymentMenu }) {
  const cardLogos = [VisaCard, MasterCard, AmericanExpress];
  return (
    <div
      id="checkout"
      className="w-full px-5 md:px-10 lg:px-[10%] pb-8 lg:mt-3 flex flex-col gap-y-5 lg:flex-row justify-between h-max"
    >
      <div className=" w-full lg:w-[35%] flex flex-col">
        <p className="font-bold text-xl text-black/80">Money Back Guarantee</p>
        <p className="pt-2.5 text-base text-black/80">
          If you are not fully satisfied within the 14 day trial period, simply
          let us know and we will happily process a full refund.
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
                <Image key={crypto.randomUUID()} src={logo} alt="Card Logo" />
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
              By clicking &quot;Get My Resume&quot; you agree to be charged $
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
  );
}
