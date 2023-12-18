import ApplicationLogo from "@/app/components/Layouts/ApplicationLogo";
import Graphic from "@/public/auth-confirm-graphic.svg";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className="w-full overflow-y-auto overflow-x-hidden min-h-screen py-5  absolute top-0 left-0 bg-[#f0f0f0] z-80 flex flex-col items-center justify-center gap-[70px]">
      <ApplicationLogo />
      <div className="max-w-[90%] w-[600px] rounded-xl h-max max-[500px]:p-4 p-8 bg-white shadow-xl flex flex-col items-center">
        <Image src={Graphic} alt="Auth Image" className="mb-5" />
        <p className="text-black/70 text-3xl text-center font-extrabold pb-3">
          Check your inbox!
        </p>
        <p className="text-gray-500/90 text-base text-center pb-5">
          We just emailed a confirmation link to "". Click the link, and you'll
          be signed in. Didn't recieve an email? Be sure to check your spam/junk
          folder.
        </p>
        <div className="w-full flex justify-center items-center gap-1">
          <p className="text-gray-500/90 text-sm">Didn't receive a link?</p>
          <Link className="text-gray-500/90 text-sm underline" href="">
            Contact support
          </Link>
        </div>
      </div>
    </main>
  );
}
