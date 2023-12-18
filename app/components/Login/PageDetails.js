"use client";
import ApplicationLogo from "../Layouts/ApplicationLogo";
import FacebookImage from "@/public/FacebookIcon.png";
import GoogleImage from "@/public/GoogleIcon.png";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPageDetails() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/login/login-confirmation");
  };

  return (
    <main className="w-screen overflow-y-auto h-[calc(100px+100vh)] overflow-x-hidden min-h-screen fixed top-0 left-0 bg-[#f0f0f0] z-80 flex flex-col items-center  gap-[70px] py-[70px]">
      <ApplicationLogo />
      <div className="max-w-[90%] w-[500px] rounded-xl h-max p-8 bg-white shadow-xl flex flex-col max-[500px]:p-4">
        <p className="text-black/70 text-2xl text-center font-extrabold pb-3">
          Login
        </p>
        <p className="text-gray-500/90 text-base text-center pb-5">
          We're happy to see you back!
        </p>
        <div className="w-full flex justify-between flex-wrap gap-y-3">
          <button className="w-[48%] max-[500px]:w-full h-9 border border-[#2553b4] rounded overflow-hidden flex">
            <div className="w-1/5 max-[500px]:w-[40px] h-full flex justify-center items-center bg-transparent">
              <Image
                src={FacebookImage}
                alt="FaceBook Imaage"
                className="w-6/12 h-6/12"
              />
            </div>
            <div className="w-4/5 max-[500px]:w-[calc(100%-40px)] h-full bg-[#2553b4] flex justify-center items-center">
              <p className="text-white text-xs font-medium">
                Sign in with Facebook
              </p>
            </div>
          </button>
          <button className="w-[48%] max-[500px]:w-full h-9 border border-[#4285f4] rounded overflow-hidden flex">
            <div className="w-1/5 max-[500px]:w-[40px] h-full flex justify-center items-center bg-transparent">
              <Image
                src={GoogleImage}
                alt="Google Imaage"
                className="w-6/12 h-6/12"
              />
            </div>
            <div className="w-4/5 max-[500px]:w-[calc(100%-40px)] h-full bg-[#4285f4] flex justify-center items-center">
              <p className="text-white text-xs font-medium">
                Sign in with Google
              </p>
            </div>
          </button>
        </div>
        <div className="w-full pt-5 flex justify-between items-center">
          <div className="w-[45%] border-b"></div>
          <p className="text-sm text-gray-500/90">or</p>
          <div className="w-[45%] border-b"></div>
        </div>
        <form
          onSubmit={handleSubmit}
          method="POST"
          className="w-full pt-5 flex flex-col"
        >
          <p className="text-base font-medium text-gray-500/90 pb-2">Email</p>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            className="w-full border rounded-md px-4 py-3.5 outline-none text-sm font-medium text-gray-500"
            required
          />
          <input
            type="submit"
            value="Continue"
            className="w-full rounded-md px-4 py-3.5 outline-none cursor-pointer mt-5 text-sm font-medium text-white bg-black/90 text-center"
          />
        </form>
      </div>
    </main>
  );
}
