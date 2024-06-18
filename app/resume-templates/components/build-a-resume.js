import SimpleResumeTemplateImage from "@/public/images/resume-images/simple-resume.jpg";
import FileIcon from "@/public/images/upload-file.png";
import Image from "next/image";
import Link from "next/link";

export default function ReadyToBuildResume() {
  return (
    <>
      <div className="w-full h-max flex py-10 flex-col px-10 max-[800px]:px-5 items-center">
        <p className="py-3 text-[2.6rem] w-[700px] max-[900px]:w-[90%] text-center max-[900px]:text-xl font-extrabold text-black/80">
          Ready to Build an amazing Resume?
        </p>
        <p className="text-black/60 w-[800px] max-[900px]:w-[90%] font-normal pb-10 tracking-normal text-base text-center">
          Having trouble getting attention from hiring managers and recruiters?
          It may be due to your resume. Upload your current resume into our
          software and we&lsquo;ll help you format it using one of our
          professional templates.
        </p>
        <div className="w-full h-max p-8 rounded-xl bg-white shadow-xl flex justify-between max-[887px]:flex-col max-[887px]:gap-5">
          <div className="w-[30%] h-max max-[887px]:w-full rounded-lg overflow-y-scroll scroll-hidden p-1">
            <Image src={SimpleResumeTemplateImage} alt="Resume Template" />
          </div>
          <div className="w-[65%] max-[887px]:w-full max-[887px]:h-max max-[887px]:py-10 max-[887px]:px-3 flex flex-col justify-center items-center rounded-lg border border-dashed gap-3">
            <Image src={FileIcon} alt="Upload" className="w-[80px] h-auto" />
            <Link
              href="/resume-builder/app/how-to-start"
              className="px-8 py-3 rounded-lg border text-sm duration-300 hover:-translate-y-2 text-black/80 font-medium"
            >
              Build a Resume
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full h-[500px] flex flex-col items-center bg-white justify-center p-5 max-[1200px]:h-max">
        <p className="text-black/50 text-center max-[1050px]:text-center font-bold tracking-wide text-[13px]">
          RESUME SAMPLE
        </p>
        <p className="py-5 text-[2.6rem] w-[700px] max-[900px]:w-[90%] text-center max-[900px]:text-xl font-extrabold text-black/80">
          Resume Templates In Action
        </p>
        <p className="text-black/60 w-[800px] max-[900px]:w-[90%] max-[1050px]:text-center font-normal pb-10 tracking-normal text-base text-center">
          Want to see what our various resume templates look like filled out?
          Check out our resume examples. Find samples in your industry to
          determine what template styles best suit the job you&lsquo;ve got your
          eye on.
        </p>
        <div className="w-full flex max-[500px]:flex-col justify-center pb-6">
          <Link
            className="w-max max-[500px]:w-full px-8  flex justify-center bg-AnalogueShiftsTextColor/80 items-center hover:-translate-y-1 text-black/80 duration-300 hover:scale-105 font-medium text-sm py-3 rounded-lg"
            href="/resume-samples"
          >
            View Resume Examples
          </Link>
        </div>
      </div>
    </>
  );
}
