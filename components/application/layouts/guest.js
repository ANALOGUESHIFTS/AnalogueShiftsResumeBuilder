"use client";
import { usePathname } from "next/navigation";
import NavBar from "../layout-components/navigation";
import Footer from "../layout-components/footer";
import { useUser } from "@/contexts/user";
import { useAuth } from "@/hooks/auth";
import Cookies from "js-cookie";
import { useEffect } from "react";

export default function GuestLayout({ children }) {
  const pathname = usePathname();
  const { user } = useUser();
  const { getUser } = useAuth();
  const token = Cookies.get("analogueshifts");

  useEffect(() => {
    if (user === null && token) {
      //    Fetch User
      getUser({ setLoading: (v) => {}, layout: "guest" });
    }
  }, []);

  return (
    <main className="w-full overflow-x-hidden">
      {!pathname.endsWith("/finish/download") && <NavBar />}
      <div className="z-10">{children}</div>
      {!pathname.endsWith("/finish/download") && <Footer />}
    </main>
  );
}
