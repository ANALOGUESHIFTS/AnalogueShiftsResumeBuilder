import Link from "next/link";

export default function HowToCreateAResume() {
  return (
    <div className="w-full h-[500px] flex flex-col items-center bg-white justify-center p-5 max-[500px]:h-max">
      <p className="text-black/50 text-center max-[1050px]:text-center font-bold tracking-wide text-[13px]">
        BUILD YOUR RESUME
      </p>
      <p className="py-5 text-[2.6rem] max-[900px]:w-[90%] text-center max-[900px]:text-xl font-extrabold text-black/80">
        How to create a resume in 3 steps
      </p>
      <p className="text-black/60 w-[800px] max-[900px]:w-[90%] max-[1050px]:text-center font-normal pb-10 tracking-normal text-base text-center">
        Putting together a complete job application has never been easier. Make
        a resume with a proven AI resume builder, and then quickly generate a
        matching cover letter. In minutes you&apos;ll be ready to apply for your
        next job.
      </p>
      <div className="w-full flex max-[500px]:flex-col justify-center gap-5 items-center">
        <Link
          className="w-max max-[500px]:w-full px-8  flex justify-center bg-AnalogueShiftsTextColor/80 items-center hover:-translate-y-1 text-black/80 duration-300 hover:scale-105 font-medium text-sm py-3 rounded-lg"
          href="/resume-builder/app/how-to-start"
        >
          Make a Resume Now
        </Link>
        <Link
          className="w-max px-8 max-[500px]:w-full  flex justify-center border border-black/70 items-center hover:-translate-y-1 text-black/80 duration-300 hover:scale-105 font-medium text-sm py-3 rounded-lg"
          href=""
        >
          Create a Cover Letter
        </Link>
      </div>
    </div>
  );
}
