import Link from "next/link";
import Image from "next/image";

//Data
import { cvTemplates, cvNavLinks } from "./data";

export default function FreeCvTemplates() {
  return (
    <section className="w-full h-max relative">
      <nav className="sticky top-0 w-full bg-white h-max py-4 z-60 px-5 overflow-x-auto">
        <div className="flex gap-4 w-max">
          {cvNavLinks.map((data) => {
            return (
              <Link
                key={crypto.randomUUID()}
                href={data.path}
                className="py-2.5 bg-gray-200/80 hover:bg-black hover:text-white duration-300 w-max px-5 rounded-full text-sm font-semibold text-black/80"
              >
                {data.text}
              </Link>
            );
          })}
        </div>
      </nav>
      <div className="w-full pt-6 flex flex-col pb-[100px] gap-[100px] px-10 max-[800px]:px-5">
        {cvTemplates.map((data) => {
          return (
            <section
              key={crypto.randomUUID()}
              className="w-full border-b pb-[80px] flex justify-between h-max max-[929px]:flex-col max-[929px]:gap-5"
              id={data.id}
            >
              <div className="w-6/12  h-[500px] max-[929px]:w-full rounded-lg shadow-xl cursor-pointer duration-300 hover:translate-x-1 hover:translate-y-1 cv-template-box">
                <div className="w-full overflow-y-scroll scroll-hidden h-full rounded-lg shadow-xl -translate-x-2 -translate-y-2 duration-300 cv-template-img">
                  {data.template}
                </div>
              </div>
              <div className="w-6/12 pl-6 max-[929px]:w-full max-[929px]:pl-0 flex flex-col">
                <p className="text-[2rem] text-black/80 font-bold pb-5">
                  {data.name}
                </p>
                <p className="text-base text-black/80 font-medium pb-2.5">
                  Why should you use this template?
                </p>
                {data.whyShouldYouUseThisTemplate}
                <div className="w-full pt-6">
                  <div className="mt-4 bg-[#f8f9fb] p-3 w-full h-max flex flex-col gap-3 rounded-lg">
                    <p className="text-black/60 font-medium text-base pb-2 mb-2">
                      CV Builder
                    </p>
                    <p className="text-black/60 font-medium text-sm pb-6">
                      Use our software and create a CV with a premade template.
                      Let the Genius CV builder help you make your resume fast.
                    </p>
                    <Link
                      href="/resume-builder/app/how-to-start"
                      className="w-full bg-AnalogueShiftsTextColor/80 flex justify-center text-white font-semibold rounded-lg py-3"
                    >
                      Build My CV
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </section>
  );
}
