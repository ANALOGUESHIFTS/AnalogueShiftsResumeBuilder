"use client";
import ApplicationLogo from "../Layouts/ApplicationLogo";
import GoogleImage from "@/public/GoogleIcon.png";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { useAuth } from "../contexts/AuthContext";
import { toast } from "react-toastify";
import LoadingComponent from "../LoadingComponent";
import Cookies from "js-cookie";

export default function RegisterPageDetails() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { user, login, logout } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirm_password) {
      toast.error("Error! Passwords doesn't match", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    //Start Loading
    setLoading(true);

    const url = process.env.NEXT_PUBLIC_BACKEND_URL + "/register";
    const axios = require("axios");

    let data = JSON.stringify({ email, password, confirm_password });
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: url,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        login(response.data[0].user);
        Cookies.set("userToken", response.data[0].token);
        setLoading(false);
        toast.success("Account Created Successful", {
          position: "top-right",
          autoClose: 3000,
        });
      })
      .catch((error) => {
        console.log(error);
        toast.error("Error! Please check your credentials", {
          position: "top-right",
          autoClose: 3000,
        });
        setLoading(false);
      });
  };

  return (
    <>
      {loading && <LoadingComponent />}
      <main className="w-full pb-12 pt-[100px] bg-[#f0f0f0] flex flex-col items-center justify-center  gap-[70px]">
        <ApplicationLogo />
        <div className="max-w-[90%] w-[500px] rounded-xl h-max p-8 bg-white shadow-xl flex flex-col max-[500px]:p-4">
          <p className="text-black/70 text-2xl text-center font-extrabold pb-3">
            Sign Up
          </p>
          <p className="text-gray-500/90 text-base text-center pb-5">
            Join us today by creating an account!
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
              placeholder="Create a Password"
              className="w-full mb-4 border rounded-md px-4 py-3.5 outline-none text-sm font-medium text-gray-500"
              required
            />
            <input
              value={confirm_password}
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="password"
              placeholder="Confirm Password"
              className="w-full border rounded-md px-4 py-3.5 outline-none text-sm font-medium text-gray-500"
              required
            />
            <div className="w-full flex justify-end gap-1 pt-2 pr-2">
              <p className="text-xs text-gray-400">Already have an account?</p>
              <Link href="/login" className="text-xs underline text-gray-400">
                Login
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
