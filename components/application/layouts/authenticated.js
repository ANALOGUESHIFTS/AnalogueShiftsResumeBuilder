"use client";
import { useEffect } from "react";
import AuthenticatedNavBar from "../layout-components/authenticated-navbar";
import Footer from "../layout-components/footer";
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
