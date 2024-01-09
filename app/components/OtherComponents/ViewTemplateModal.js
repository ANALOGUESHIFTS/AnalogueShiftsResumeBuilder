import XMark from "@/public/x-mark.png";
import Image from "next/image";
import Link from "next/link";

export default function ViewTemplateModal({ data, closeModal, builder }) {
  return (
    <div className="fixed top-0 left-0 max-[552px]:px-0 max-[552px]:py-0  bg-black/10 z-70 overflow-y-auto w-screen h-screen px-20 py-8 max-[972px]:px-10 max-[691px]:px-7">
      <button
        onClick={closeModal}
        className="fixed right-5 top-5 z-80 w-8 h-8 rounded-full bg-black/60 flex justify-center items-center"
      >
        <Image src={XMark} alt="Close Icon" className="w-6/12 h-6/12" />
      </button>
      <div className="w-full h-max min-h-screen max-[552px]:rounded-none bg-white rounded-2xl p-8 max-[552px]:p-5">
        <div className="w-full h-max min-h-screen flex justify-between max-[691px]:flex-col max-[691px]:gap-5">
          <div className="w-6/12 max-[691px]:w-full max-h-screen overflow-y-scroll scroll-hidden rounded-xl shadow-xl">
            {data.template}
          </div>
          <div className="w-6/12 max-[691px]:w-full h-screen overflow-y-auto pl-8 max-[552px]:pl-0 remove-scrollbar">
            <Link
              href={data.linkToThisTemplate}
              style={{
                color: data.color,
              }}
              className="hover:underline text-sm font-medium rounded"
            >
              {data.name}
            </Link>
            <p className="text-black/70 font-bold text-[2rem] pb-4 pt-2">
              {data.name}
            </p>
            <p className="text-black/80 font-medium text-base pb-2.5">
              Why it&apos;s called the &quot;{data.name}&quot;
            </p>
            <p className="text-sm font-medium text-black/60 pb-4">
              {data.whyIsItCalled}
            </p>
            <p className="text-black/80 font-medium text-base pb-2.5">
              Why should you use it?
            </p>
            <p className="text-sm font-medium text-black/60 pb-4">
              {data.whyShouldYouUseIt}
            </p>
            <div className="w-full pt-6">
              <div className="mt-4 bg-[#f8f9fb] p-3 w-full h-max flex flex-col gap-3 rounded-lg">
                <p className="text-black/60 font-medium text-base pb-2 mb-2">
                  {builder} Builder
                </p>
                <p className="text-black/60 font-medium text-sm">
                  {builder === "Resume" &&
                    " Use our software and create a resume with a premade template. Let the Genius resume builder help you make your resume fast."}
                  {builder === "Cover Letter" &&
                    "Use our software and create a cover letter with a premade template. Let the Genius cover letter generator help you make your cover letter in minutes."}
                </p>
                <Link
                  href={data.path}
                  style={{ backgroundColor: data.color }}
                  className="w-full flex justify-center text-white font-semibold rounded py-3"
                >
                  Build My {builder}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
