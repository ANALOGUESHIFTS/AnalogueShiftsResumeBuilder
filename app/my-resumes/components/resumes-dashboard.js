"use client";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export default function Resumes() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    let authSession = Cookies.get("analogueshifts");

    if (authSession) {
      setUser(JSON.parse(authSession));
    }
  }, []);
  return (
    <main className="w-full h-auto pt-[80px]">
      <main className="py-10 bg-[rgb(43,58,69)] px-10 max-[800px]:px-5">
        <p className="pb-5 text-base font-semibold text-white">
          Welcome Back, {user?.user?.first_name}!
        </p>
        <p className="pb-10 font-bold text-white text-xl">
          Edit and Download Professional resumes to get your dream Job!
        </p>
      </main>
      <main className="mb-[100px] py-10 bg-[rgb(240,240,240)] px-10 max-[800px]:px-5 flex flex-col items-center gap-5">
        <p className="pb-5 w-full text-sm font-bold text-black/70">
          Your Resumes
        </p>
        {/* Display The user's Resumes */}
      </main>
    </main>
  );
}