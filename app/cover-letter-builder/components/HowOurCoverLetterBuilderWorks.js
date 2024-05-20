import Image from "next/image";
import BuilderAutomaticFormat from "@/public/images/builder-automatic-format.webp";
import BuilderAutomaticFormatIcon from "@/public/images/builder-automatic-format-icon.webp";
import ATSFriendly from "@/public/images/ats-friendly.webp";
import ATSFriendlyIcon from "@/public/images/ats-friendly-icon.webp";
import AIGeneratedExplanation from "@/public/images/AI-generated-explanation.webp";
import AIGeneratedExplanationIcon from "@/public/images/AI-generated-explanation-icon.webp";
import Link from "next/link";

export default function HowOurCoverLetterBuilderWorks() {
  return (
    <div className="w-full h-max flex flex-col gap-24 pb-10 pt-24 max-[897px]:pt-12">
      <div className="w-full flex justify-between max-[897px]:flex-col max-[897px]:gap-5">
        <div className="w-[50%] relative h-[310px] max-[897px]:w-[70%] max-[600px]:w-full">
          <div className="w-[60%] h-full bg-[#a5cdf6] rounded-lg"></div>
          <Image
            src={BuilderAutomaticFormat}
            alt="Builder Automatic Format Image"
            className="absolute right-0 bottom-6 w-[85%]"
          />
        </div>
        <div className="w-[40%] max-[897px]:w-full max-[897px]:px-5 h-[310px] pr-10 pt-6 flex flex-col gap-4">
          <Image src={BuilderAutomaticFormatIcon} alt="Icon" />
          <p className="text-black/80 font-bold text-lg">
            With a few clicks, our builder can create a complete cover letter
          </p>
          <p className="text-black/60 font-normal pb-10 tracking-normal text-base">
            Our cover letter maker generates complete sentences targeted at the
            job you want with a few clicks. Whether you&apos;ve got no work
            experience yet or are a veteran job seeker, our software makes
            building a cover letter easy.
          </p>
        </div>
      </div>
      <div className="w-full flex justify-between max-[897px]:flex-col max-[897px]:gap-5">
        <div className="w-[40%] move-down max-[897px]:w-full max-[897px]:px-5 max-[897px]:pt-0 h-[310px] pl-10 pt-6 flex flex-col gap-4">
          <Image src={ATSFriendlyIcon} alt="Icon" />
          <p className="text-black/80 font-bold text-lg">
            Get higher callback rates with HR-approved, ATS-friendly writing
          </p>
          <p className="text-black/60 font-normal pb-10 tracking-normal text-base">
            Everything from your{" "}
            <Link
              href="/blog/cover-letter-help/cover-letter-format"
              className="text-AnalogueShiftsTextColor"
            >
              cover letter’s format
            </Link>{" "}
            to each individual sentence is built according to HR best practices
            and guidelines. Easily bypass{" "}
            <Link
              className="text-AnalogueShiftsTextColor"
              href="/blog/resume-help/ats-resume"
            >
              Applicant Tracking Systems (ATS)
            </Link>{" "}
            and get called in for more interviews.
          </p>
        </div>
        <div className="move-up w-[50%]  relative h-[310px] max-[897px]:w-[70%] max-[600px]:w-full">
          <div className="w-[60%] absolute right-0 h-full bg-[#facbb3] rounded-lg"></div>
          <Image
            src={ATSFriendly}
            alt="ATS Friendly Image"
            className="absolute left-0 bottom-6 w-[85%]"
          />
        </div>
      </div>
      <div className="w-full flex justify-between max-[897px]:flex-col max-[897px]:gap-5">
        <div className="w-[50%] relative h-[310px] max-[897px]:w-[70%] max-[600px]:w-full">
          <div className="w-[60%] h-full bg-[#9cdeca] rounded-lg"></div>
          <Image
            src={AIGeneratedExplanation}
            alt="Builder Automatic Format Image"
            className="absolute right-0 bottom-6 w-[85%]"
          />
        </div>
        <div className="w-[40%] max-[897px]:w-full max-[897px]:px-5 h-[310px] pr-10 pt-6 flex flex-col gap-4">
          <Image src={AIGeneratedExplanationIcon} alt="Icon" />
          <p className="text-black/80 font-bold text-lg">
            Address potential concerns about your work history like a pro
          </p>
          <p className="text-black/60 font-normal pb-12 tracking-normal text-base">
            Whether you have employment gaps or were let go from a job, our
            cover letter builder software helps you explain any potential
            concerns hiring managers might have about your work history clearly
            and professionally.
          </p>
        </div>
      </div>
    </div>
  );
}
