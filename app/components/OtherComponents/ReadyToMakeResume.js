import Link from "next/link";

export default function ReadyToMakeResume() {
  return (
    <div className="w-full h-[500px] px-10 max-[500px]:px-4 pb-[50px]">
      <div className="w-full h-[450px] rounded-3xl bg-white shadow-2xl p-7 flex justify-center flex-col items-center">
        <p className="py-3 text-[2.6rem] w-[700px] max-[900px]:w-[90%] text-center max-[900px]:text-xl font-extrabold text-black/80">
          Ready to start making your resume?
        </p>
        <p className="text-black/60 w-[800px] max-[900px]:w-[90%] max-[1050px]:text-center font-normal pb-10 tracking-normal text-base text-center">
          Don&lsquo;t allow your resume to hinder your job prospects. Our
          builder software assists you in creating a resume that accentuates
          your qualifications and secures more interviews
        </p>
        <div className="w-full flex max-[500px]:flex-col justify-center pb-6">
          <Link
            className="w-max max-[500px]:w-full px-8  flex justify-center bg-AnalogueShiftsTextColor/80 items-center hover:-translate-y-1 text-black/80 duration-300 hover:scale-105 font-medium text-sm py-3 rounded-lg"
            href="/resume-builder/app/how-to-start"
          >
            Try Our Builder
          </Link>
        </div>
      </div>
    </div>
  );
}
