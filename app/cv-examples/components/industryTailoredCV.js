import Link from "next/link";
import Image from "next/image";
import {
  cvSamplesLinks,
  cvSamplesData,
} from "@/app/components/resources/cv/data";
import SearchIcon from "@/public/search-icon.png";
import RightArrow from "@/public/right-arrow-icon.png";
import SideBarImage from "@/public/sidebar-image.svg";

export default function IndustryTailoredCV() {
  return (
    <>
      {" "}
      <section className="py-[100px] bg-[#fafbfc] h-max w-full  flex flex-col items-center">
        <p className="text-black/50 px-5 pb-1 text-center max-[1050px]:text-center font-bold tracking-wide text-[13px]">
          Industry-Tailored CV
        </p>
        <p className="pb-6 text-[2.6rem] px-5 w-full text-center max-[900px]:text-xl font-extrabold text-black/80">
          Industry-Specific CV Samples
        </p>
        <p className="text-black/60 px-5 w-[800px] max-[900px]:w-[90%] max-[1050px]:text-center font-normal pb-10 tracking-normal text-base text-center">
          Crafting a CV for a specific job? Explore one of the largest
          collections of industry-specific CV examples on the internet.
        </p>
        <div className="w-full px-10 max-[800px]:px-5 z-60 py-5 sticky top-0 left-0 bg-[#fafbfc]"></div>
        <div className="w-full pt-10 relative flex justify-between px-10 max-[800px]:px-5 max-[974px]:flex-col max-[974px]:gap-8">
          <div className="w-[30%] max-[974px]:w-full flex flex-col gap-5">
            <div
              id="Categories"
              className="w-full h-max bg-white rounded-lg shadow-2xl p-3"
            >
              <p className="py-2 text-[1.3rem] px-3 w-full max-[900px]:text-2xl font-bold text-black/80">
                Categories
              </p>
              <div className="w-full max-[974px]:flex-row max-[540px]:flex-col max-[974px]:flex-wrap max-[974px]:gap-y-1.5 max-[974px]:gap-x-0 flex flex-col gap-1.5">
                {cvSamplesLinks.map((data) => {
                  return (
                    <Link
                      key={crypto.randomUUID()}
                      href={data.path}
                      className="w-full max-[974px]:w-6/12 max-[540px]:w-full px-3 py-2 text-base font-medium text-black/60 hover:bg-black/10 rounded-lg"
                    >
                      {data.name}
                    </Link>
                  );
                })}
              </div>
            </div>
            <Link
              href="#Categories"
              className="w-full max-[974px]:hidden rounded-lg border border-black/70 bg-white flex justify-center py-3 duration-300 hover:bg-transparent hover:-translate-y-1 text-base font-medium text-black/60 items-center gap-3"
            >
              Back to Categories
              <Image
                src={RightArrow}
                alt="Right Arrow"
                className="w-4 h-4 rotate-[-90deg] opacity-70"
              />
            </Link>
            <div className="w-full max-[974px]:hidden h-max sticky top-[130px] bg-white rounded-lg shadow-2xl p-5 gap-4 flex flex-col justify-center">
              <Image src={SideBarImage} alt="Side Bar Image" />
              <p className="text-center font-medium text-base text-black/60 leading-7">
                Craft a winning resume in just 12 minutes with our resume
                builder. Choose a resume template, input your information, and
                let our software take care of the rest.
              </p>
              <Link
                href="/cover-letter-builder/app"
                className="w-full rounded-lg bg-AnalogueShiftsTextColor flex justify-center py-3 duration-300 hover:-translate-y-1 text-base font-medium text-black/60"
              >
                Build My Cv Now
              </Link>
            </div>
          </div>
          <div className="w-[65%] max-[974px]:w-full h-max flex flex-col gap-8">
            {cvSamplesData.map((data) => {
              return (
                <div
                  key={crypto.randomUUID()}
                  id={data.id}
                  className="w-full h-max rounded-xl overflow-hidden border"
                >
                  <div
                    style={{ backgroundColor: data.background }}
                    className="w-full h-max p-5 flex flex-col"
                  >
                    <p className="text-black/70 text-xl font-bold pb-5">
                      {data.name}
                    </p>
                    <p className="text-black/60 text-base font-[500]">
                      {data.description}
                    </p>
                  </div>
                  <div className="w-full overflow-y-scroll scroll-hidden h-[500px] py-6 px-3 bg-white">
                    {data.template}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
