"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import NavBar from "../components/LayoutComponents/NavBar";
import Footer from "../components/LayoutComponents/Footer";

//Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Context
import { useAuth } from "../components/contexts/AuthContext";

export default function GuestLayout({ children }) {
  const pathname = usePathname();
  const { user, login, logout } = useAuth();

  // Check If a user's session is still active
  useEffect(() => {
    let storedData = JSON.parse(localStorage.getItem("analogueshifts"));
    if (storedData) {
      login(storedData);
    }
  }, []);

  return (
    <>
      <ToastContainer position="top-center" />
      {!pathname.endsWith("/finish/download") && <NavBar />}
      {children}
      {!pathname.endsWith("/finish/download") && <Footer />}
    </>
  );
}
