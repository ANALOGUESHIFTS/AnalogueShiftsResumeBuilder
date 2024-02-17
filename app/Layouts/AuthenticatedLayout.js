"use client";
import { useEffect } from "react";
import AuthenticatedNavBar from "../components/LayoutComponents/AuthenticatedNavBar";
import Footer from "../components/LayoutComponents/Footer";

//Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Context
import { useAuth } from "../components/contexts/AuthContext";

import { useRouter } from "next/navigation";

export default function AuthenticatedLayout({ children }) {
  const router = useRouter();
  const { login } = useAuth();

  // Check If a user's session is still active
  useEffect(() => {
    let storedData = JSON.parse(localStorage.getItem("analogueshifts"));
    if (storedData) {
      login(storedData);
    } else {
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
