import Link from "next/link";
import BlogIcon from "@/public/images/generate-bullet-point.svg";
import Image from "next/image";
import coverLetterExamples from "@/resources/cover-letter-builder/samples-links.json";
import blog from "@/resources/cover-letter-builder/blog.json";

import {
  handleMouseOver,
  handleMouseOut,
} from "@/utils/cover-letter/cover-letter-samples.js";

export default function CoverLetterSamples() {
  return (
    <div className="w-full h-[1400px] relative px-10 max-[992px]:h-max max-[992px]:flex max-[992px]:flex-col max-[992px]:px-5 max-[992px]:gap-6">
      <div className="sticky top-[150px] left-0 w-[45%] bg-white max-[992px]:items-center flex flex-col max-[992px]:static max-[992px]:w-full">
        <p className="py-5 text-[2.6rem] max-[992px]:text-center w-[80%] max-[900px]:w-[90%] max-[900px]:text-xl font-extrabold text-black/80">
          Samples & other cover letter resources
        </p>
        <p className="text-black/60 max-[992px]:text-center w-[80%] max-[900px]:w-[90%]  font-normal pb-10 tracking-normal text-base">
          Not sure{" "}
          <Link
            className="text-AnalogueShiftsTextColor"
            href="/blog/cover-letter-help/how-to-write-a-cover-letter"
          >
            {" "}
            how to write a cover letter{" "}
          </Link>{" "}
          that best highlights your qualifications and interests? Start by
          checking out cover letter examples written by candidates who applied
          for similar jobs.
        </p>
        <Link
          href="/cover-letter-builder#cover-letter-samples"
          className="duration-300 max-[992px]:hidden w-max mb-6 text-lg font-semibold text-black/50 hover:translate-x-1 hover:text-black/70"
        >
          Cover letter samples
        </Link>
        <Link
          href="/cover-letter-builder#cover-letter-help"
          className="duration-300 max-[992px]:hidden w-max text-lg font-semibold text-black/50 hover:translate-x-1 hover:text-black/70"
        >
          Cover letter help
        </Link>
      </div>
      <div className="w-6/12 h-full absolute right-0 top-0 max-[992px]:w-full max-[992px]:static">
        <div
          id="cover-letter-samples"
          className="w-full h-max mt-8 rounded-3xl bg-[#f8f9fb] p-7 flex flex-col mb-10"
        >
          <p className="py-5 text-[2rem]  max-[900px]:text-xl font-bold text-black/80">
            Cover letter samples
          </p>
          <p className="text-black/70 font-normal pb-10 tracking-normal text-base">
            We offer 170+ industry and situation-specific cover letter samples
            across our website. Each example was written by a professional in
            their field, and then reviewed by our in-house team of
            CPRW-certified career experts.
          </p>
          <div className="w-full h-max flex flex-col gap-3">
            <div
              onMouseOver={() => handleMouseOver("cover-links-one")}
              onMouseOut={() => handleMouseOut("cover-links-one")}
              className="w-full overflow-x-hidden h-[60px] pt-2"
            >
              <div
                id="cover-links-one"
                className="moveFromRightToLeft w-max flex gap-4 "
              >
                {coverLetterExamples.map((data) => {
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
              href="/cover-letter-examples"
              className="text-lg font-medium text-AnalogueShiftsTextColor underline"
            >
              View all cover letter examples
            </Link>
          </div>
        </div>
        <div
          id="cover-letter-help"
          className="w-full h-max mt-8 rounded-3xl bg-[#f8f9fb] p-7 flex flex-col"
        >
          <p className="py-5 text-[2rem]  max-[900px]:text-xl font-bold text-black/80">
            Cover letter help
          </p>
          <p className="text-black/70 font-normal pb-10 tracking-normal text-base">
            Our &quot;Cover Letter Help&quot; blog covers everything from what
            to include in a cover letter to the finer details like spacing and
            margins and the best cover letter fonts. Regardless of your
            background or the type of job you want, we have cover letter writing
            guides and samples to simplify the application process for you.
          </p>
          <div className="flex flex-col gap-5">
            {blog.map((data) => {
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
              href="/blog"
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
