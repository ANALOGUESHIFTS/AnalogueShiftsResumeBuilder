"use client";
import { useEffect } from "react";
import AuthenticatedNavBar from "../layout-components/AuthenticatedNavBar";
import Footer from "../layout-components/Footer";
import Cookies from "js-cookie";

//Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useRouter } from "next/navigation";

export default function AuthenticatedLayout({ children }) {
  const router = useRouter();

  // Check If a user's session is still active
  useEffect(() => {
    let storedData = Cookies.get("analogueshifts");
    if (!storedData) {
      router.push("/login");
    }
  }, []);

  return (
    <>
      <ToastContainer position="top-center" />
      <AuthenticatedNavBar />
      {children}
      <Footer />
    </>
  );
}
