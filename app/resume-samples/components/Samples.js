import Link from "next/link";
import Image from "next/image";
import RightArrow from "@/public/images/right-arrow-icon.png";
import SideBarImage from "@/public/images/sidebar-image.svg";
import {
  resumeSampleLinks,
  resumeSampleData,
} from "@/app/resources/resume/data";

export default function SamplesSection() {
  return (
    <>
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
              {resumeSampleLinks.map((data) => {
                return (
                  <Link
                    key={crypto.randomUUID()}
                    href={data.path}
                    className="w-full max-[974px]:w-6/12 max-[540px]:w-full px-3 py-2 text-base font-medium text-black/60 hover:bg-black/10 rounded-lg"
                  >
                    {data.title}
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
              Craft a winning resume in just 12 minutes with our resume builder.
              Choose a resume template, input your information, and let our
              software take care of the rest.
            </p>
            <Link
              href="/resume-builder/app/how-to-start"
              className="w-full rounded-lg bg-AnalogueShiftsTextColor flex justify-center py-3 duration-300 hover:-translate-y-1 text-base font-medium text-black/60"
            >
              Build My Resume Now
            </Link>
          </div>
        </div>
        <div className="w-[65%] max-[974px]:w-full h-max flex flex-col gap-8">
          {resumeSampleData.map((data) => {
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
                <div className="w-full py-6 px-3 bg-white flex flex-col gap-8">
                  {data.samples.map((child) => {
                    return (
                      <div key={crypto.randomUUID()} className="w-full">
                        <p className="w-full pb-2 mb-3.5 border-b text-base font-medium text-black/70">
                          {child.name}
                        </p>
                        <div className="w-full flex justify-between max-[540px]:flex-col max-[540px]:gap-5 pl-4">
                          <div className="w-3/5 max-[540px]:w-full h-max rounded-lg">
                            <Image src={child.template} alt="Template" />
                          </div>
                          <div className="w-[74%] max-[540px]:w-full max-[540px]:pt-0 max-[540px]:flex-col pt-6 h-max flex flex-wrap gap-y-2.5">
                            {child.relatedLinks.map((link) => {
                              return (
                                <Link
                                  key={crypto.randomUUID()}
                                  href={link.path}
                                  className="w-6/12 flex max-[540px]:pl-2 max-[540px]:w-full items-center gap-2"
                                >
                                  <div
                                    style={{ backgroundColor: data.color }}
                                    className="w-1.5 h-1.5 rounded-full"
                                  ></div>
                                  <p className="text-sm font-medium text-black/50 hover:text-black/60">
                                    {link.name}
                                  </p>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
