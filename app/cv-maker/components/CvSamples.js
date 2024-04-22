import Link from "next/link";
import BlogIcon from "@/public/images/generate-bullet-point.svg";
import Image from "next/image";
import { cvNavLinks } from "@/app/resources/cv/data";
import { cvBlogData } from "../data";

export default function CvSamples() {
  const handleMouseOver = (id) => {
    let elem = document.getElementById(id);
    elem.classList.add("pauseAnimation");
  };
  const handleMouseOut = (id) => {
    let elem = document.getElementById(id);
    elem.classList.remove("pauseAnimation");
  };

  return (
    <div className="w-full h-[1400px] relative px-10 max-[992px]:h-max max-[992px]:flex max-[992px]:flex-col max-[992px]:px-5 max-[992px]:gap-6">
      <div className="sticky top-[150px] left-0 w-[45%] bg-white max-[992px]:items-center flex flex-col max-[992px]:static max-[992px]:w-full">
        <p className="py-5 text-[2.6rem] max-[992px]:text-center w-[80%] max-[900px]:w-[90%] max-[900px]:text-xl font-extrabold text-black/80">
          CV samples & writing support
        </p>
        <p className="text-black/60 max-[992px]:text-center w-[80%] max-[900px]:w-[90%]  font-normal pb-10 tracking-normal text-base">
          Not sure{" "}
          <Link className="text-AnalogueShiftsTextColor" href="/blog">
            {" "}
            how to write a CV{" "}
          </Link>{" "}
          that gives you the best chance of landing the position you’re aiming
          for? Our CV examples and writing guides are a great place to start.
        </p>
        <Link
          href="/cv-maker#cv-examples"
          className="duration-300 max-[992px]:hidden w-max mb-6 text-lg font-semibold text-black/50 hover:translate-x-1 hover:text-black/70"
        >
          CV examples
        </Link>
        <Link
          href="/cv-maker#cv-help-writing-resources"
          className="duration-300 max-[992px]:hidden w-max text-lg font-semibold text-black/50 hover:translate-x-1 hover:text-black/70"
        >
          CV help (writing & resources)
        </Link>
      </div>
      <div className="w-6/12 h-full absolute right-0 top-0 max-[992px]:w-full max-[992px]:static">
        <div
          id="cv-examples"
          className="w-full h-max mt-8 rounded-3xl bg-[#f8f9fb] p-7 flex flex-col mb-10"
        >
          <p className="py-5 text-[2rem]  max-[900px]:text-xl font-bold text-black/80">
            CV examples
          </p>
          <p className="text-black/70 font-normal pb-10 tracking-normal text-base">
            Whether you’re writing an academic CV or a CV for a job, we have
            examples to provide you with ideas. Each CV sample on AnalogueShifts
            was carefully researched and designed, and then reviewed by
            certified CV-writing experts.
          </p>
          <div className="w-full h-max flex flex-col gap-3">
            <div
              onMouseOver={() => handleMouseOver("cv-links-one")}
              onMouseOut={() => handleMouseOut("cv-links-one")}
              className="w-full overflow-x-hidden h-[60px] pt-2"
            >
              <div
                id="cv-links-one"
                className="moveFromRightToLeft w-max flex gap-4 "
              >
                {cvNavLinks.map((data) => {
                  return (
                    <Link
                      key={crypto.randomUUID()}
                      style={{ borderColor: data.color }}
                      href={data.path}
                      className={`py-2 px-6 text-black/75 duration-300 hover:scale-105 font-semibold text-sm rounded-full border`}
                    >
                      {data.title}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="pt-3 flex justify-center">
            <Link
              href="/cv-examples"
              className="text-lg font-medium text-AnalogueShiftsTextColor underline"
            >
              View all CV examples
            </Link>
          </div>
        </div>
        <div
          id="cv-help-writing-resources"
          className="w-full h-max mt-8 rounded-3xl bg-[#f8f9fb] p-7 flex flex-col"
        >
          <p className="py-5 text-[2rem]  max-[900px]:text-xl font-bold text-black/80">
            CV help (writing & resources)
          </p>
          <p className="text-black/70 font-normal pb-10 tracking-normal text-base">
            Our CV Help blog provides information on everything from what to put
            on a CV to the finer details like CV formatting and fonts.
            Regardless of where you’re at in your job hunt, we have CV resources
            to make your life easier building your application.
          </p>
          <div className="flex flex-col gap-5">
            {cvBlogData.map((data) => {
              return (
                <Link
                  key={crypto.randomUUID()}
                  href={data.path}
                  className="w-full p-3 bg-white hover:shadow-2xl duration-300 rounded-lg shadow-xl flex gap-5 items-center"
                >
                  <div className="w-14 h-14 p-3 rounded-lg bg-AnalogueShiftsTextColor/40">
                    <Image src={BlogIcon} alt="Icon" />
                  </div>
                  <div className="pt-1.5 h-full flex flex-col justify-between">
                    <p className="text-black/50 font-bold text-sm">BLOG</p>
                    <p className="text-black/80 max-[992px]:text-sm font-medium text-base">
                      {data.title}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="pt-3 flex justify-center">
            <Link
              href="/blog/cover-letter-help"
              className="text-lg font-medium text-AnalogueShiftsTextColor underline"
            >
              Visit our blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
