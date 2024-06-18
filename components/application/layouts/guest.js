"use client";
import { usePathname } from "next/navigation";
import NavBar from "../layout-components/navigation";
import Footer from "../layout-components/footer";

//Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function GuestLayout({ children }) {
  const pathname = usePathname();

  return (
    <main className="w-full overflow-x-hidden">
      <ToastContainer position="top-center" />
      {!pathname.endsWith("/finish/download") && <NavBar />}
      <div className="z-10">{children}</div>
      {!pathname.endsWith("/finish/download") && <Footer />}
    </main>
  );
}
