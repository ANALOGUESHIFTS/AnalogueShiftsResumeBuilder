import Image from "next/image";
import JobDescriptionImage from "@/public/images/Job-description.webp";
import ListBlue from "@/public/images/list_blue.svg";
import AutomaticFormat from "@/public/images/automatic-format.webp";
import GridIcon from "@/public/images/layout-fluid_orange.svg";
import BuilderDownload from "@/public/images/Builder-download.webp";
import DownloadIcon from "@/public/images/inbox-in_green.svg";
import CritiqueExpert from "@/public/images/critique-expert.webp";
import Badge from "@/public/images/badge_pink.svg";

import Link from "next/link";

export default function HowOurCvBuilderWorks() {
  return (
    <div className="w-full h-max flex flex-col gap-24 pb-10 pt-24 max-[897px]:pt-12">
      <div className="w-full flex justify-between max-[897px]:flex-col max-[897px]:gap-5">
        <div className="w-[50%] relative h-[310px] max-[897px]:w-[70%] max-[600px]:w-full">
          <div className="w-[60%] h-full bg-[#a5cdf6] rounded-lg"></div>
          <Image
            src={JobDescriptionImage}
            alt="Builder Automatic Format Image"
            className="absolute right-0 bottom-6 w-[85%]"
          />
        </div>
        <div className="w-[40%] max-[897px]:w-full max-[897px]:px-5 h-[310px] pr-10 pt-6 flex flex-col gap-4">
          <Image src={ListBlue} alt="Icon" />
          <p className="text-black/80 font-bold text-lg">
            Pick from 50,000+ job description bullet points
          </p>
          <p className="text-black/60 font-normal pb-10 tracking-normal text-base">
            Our online CV builder software generates thousands of perfectly
            written experience bullet points that span every major industry.
            Just point and click to instantly place the work duties you
            performed onto your CV, and voila! You have a perfectly formatted
            bullet point.
          </p>
        </div>
      </div>
      <div className="w-full flex justify-between max-[897px]:flex-col max-[897px]:gap-5">
        <div className="w-[40%] move-down max-[897px]:w-full max-[897px]:px-5 max-[897px]:pt-0 h-[310px] pl-10 pt-6 flex flex-col gap-4">
          <Image src={GridIcon} alt="Icon" />
          <p className="text-black/80 font-bold text-lg">
            Format your CV effortlessly
          </p>
          <p className="text-black/60 font-normal pb-10 tracking-normal text-base">
            Avoid hours of online research and time spent adjusting margins in
            Microsoft Word and let our CV builder format your CV for you. We
            help you automatically format and fill out each CV section
            step-by-step — you just need to fill in the blanks. With our online
            CV maker, you can create a curriculum vitae that showcases your
            greatest strengths and unique professional and educational
            experiences.
          </p>
        </div>
        <div className="move-up w-[50%]  relative h-[310px] max-[897px]:w-[70%] max-[600px]:w-full">
          <div className="w-[60%] absolute right-0 h-full bg-[#facbb3] rounded-lg"></div>
          <Image
            src={AutomaticFormat}
            alt="ATS Friendly Image"
            className="absolute left-0 bottom-6 w-[85%]"
          />
        </div>
      </div>
      <div className="w-full flex justify-between max-[897px]:flex-col max-[897px]:gap-5">
        <div className="w-[50%] relative h-[310px] max-[897px]:w-[70%] max-[600px]:w-full">
          <div className="w-[60%] h-full bg-[#9cdeca] rounded-lg"></div>
          <Image
            src={BuilderDownload}
            alt="Builder Automatic Format Image"
            className="absolute right-0 bottom-6 w-[85%]"
          />
        </div>
        <div className="w-[40%] max-[897px]:w-full max-[897px]:px-5 h-[310px] pr-10 pt-6 flex flex-col gap-4">
          <Image src={DownloadIcon} alt="Icon" />
          <p className="text-black/80 font-bold text-lg">
            Download your CV to MS Word and PDF
          </p>
          <p className="text-black/60 font-normal pb-12 tracking-normal text-base">
            Instantly download your completed CV as a Microsoft Word document or
            PDF file. Our professional CV templates are Applicant Tracking
            System friendly (and won’t be rejected by HR software), giving you a
            competitive edge. Send and track your job applications within our CV
            creator to stay organized while job hunting.
          </p>
        </div>
      </div>
      <div className="w-full flex justify-between max-[897px]:flex-col max-[897px]:gap-5">
        <div className="w-[40%] move-down max-[897px]:w-full max-[897px]:px-5 max-[897px]:pt-0 h-[310px] pl-10 pt-6 flex flex-col gap-4">
          <Image src={Badge} alt="Icon" />
          <p className="text-black/80 font-bold text-lg">
            Get a free CV critique from an expert
          </p>
          <p className="text-black/60 font-normal pb-10 tracking-normal text-base">
            We want to help you get more interviews, and ultimately the job
            you’re aiming for. After creating your CV, try our exclusive “Ask an
            Expert” service, featuring a real-time 1-on-1 Certified Professional
            Resume & CV Expert (CPRW). Our online CPRW will review your CV for
            accuracy and clarity, and provide clear recommendations for how to
            improve your CV — dramatically increasing your interview call-back
            rates.
          </p>
        </div>
        <div className="move-up w-[50%]  relative h-[310px] max-[897px]:w-[70%] max-[600px]:w-full">
          <div className="w-[60%] absolute right-0 h-full bg-[#facbb3] rounded-lg"></div>
          <Image
            src={CritiqueExpert}
            alt="ATS Friendly Image"
            className="absolute left-0 bottom-6 w-[85%]"
          />
        </div>
      </div>
    </div>
  );
}
