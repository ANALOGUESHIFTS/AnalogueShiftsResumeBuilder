"use client";
import { useEffect } from "react";

//Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Context
import { useAuth } from "../components/contexts/AuthContext";

import { useRouter } from "next/navigation";

export default function AuthenticationLayout({ children }) {
  const router = useRouter();
  const { login } = useAuth();

  // Check If a user's session is still active
  useEffect(() => {
    let storedData = JSON.parse(localStorage.getItem("analogueshifts"));
    if (storedData) {
      login(storedData);
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
