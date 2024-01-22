"use client";
import ApplicationLogo from "../Layouts/ApplicationLogo";
import GoogleImage from "@/public/GoogleIcon.png";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "../contexts/AuthContext";
import LoadingComponent from "../LoadingComponent";
import { toast } from "react-toastify";

export default function LoginPageDetails() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { user, login, logout } = useAuth();
  // const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = process.env.NEXT_PUBLIC_BACKEND_URL + "/login";
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", "Bearer 2");

    var raw = JSON.stringify({ email, password });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
      headers: {
        "X-Requested-With": "XMLHttpRequest",
      },
      withCredentials: true,
      withXSRFToken: true,
    };

    //Start Loading
    setLoading(true);

    try {
      const response = await fetch(url, requestOptions);

      if (response.ok) {
        console.log(response);
        setLoading(false);
        toast.success("Login Successful", {
          position: "top-right",
          autoClose: 3000,
        });
      } else {
        toast.error("Error! Please check your credentials", {
          position: "top-right",
          autoClose: 3000,
        });
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.error("Error during login:", error);
      toast.error(error.message, {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <>
      {loading && <LoadingComponent />}
      <main className="w-full pb-12 pt-[100px] bg-[#f0f0f0] flex flex-col items-center justify-center  gap-[70px]">
        <ApplicationLogo />
        <div className="max-w-[90%] w-[500px] rounded-xl h-max p-8 bg-white shadow-xl flex flex-col max-[500px]:p-4">
          <p className="text-black/70 text-2xl text-center font-extrabold pb-3">
            Login
          </p>
          <p className="text-gray-500/90 text-base text-center pb-5">
            We're happy to see you back!
          </p>
          <div className="w-full flex justify-center gap-y-3">
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
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter Email"
              className="w-full border mb-4 rounded-md px-4 py-3.5 outline-none text-sm font-medium text-gray-500"
              required
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter Password"
              className="w-full border rounded-md px-4 py-3.5 outline-none text-sm font-medium text-gray-500"
              required
            />
            <div className="w-full flex justify-end gap-1 pt-2 pr-2">
              <p className="text-xs text-gray-400">Don't have an account?</p>
              <Link
                href="/register"
                className="text-xs underline text-gray-400"
              >
                Sign Up
              </Link>
            </div>
            <input
              type="submit"
              value="Continue"
              className="w-full rounded-md px-4 py-3.5 outline-none cursor-pointer mt-5 text-sm font-medium text-white bg-black/90 text-center"
            />
          </form>
        </div>
      </main>
    </>
  );
}
