"use client";
import { useEffect } from "react";

//Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function AuthenticationLayout({ children }) {
  const router = useRouter();

  // Check If a user's session is still active
  useEffect(() => {
    let storedData = Cookies.get("analogueshifts");
    if (storedData) {
      router.push("/dashboard/account");
    }
  }, []);

  return (
    <>
      <ToastContainer position="top-center" />
      {children}
    </>
  );
}
