"use client";
import { useEffect } from "react";
import Footer from "../layout-components/footer";
import Cookies from "js-cookie";
import { usePathname } from "next/navigation";
import { useAuth } from "@/hooks/auth";
import { useUser } from "@/contexts/user";
import NavBar from "../layout-components/navigation";

export default function AuthenticatedLayout({ children }) {
  const token = Cookies.get("analogueshifts");
  const pathname = usePathname();
  const { getUser } = useAuth();
  const { user } = useUser();

  // Check If a user's session is still active
  useEffect(() => {
    // Redirect To Login if User is not Authenticated
    if (!user && !token) {
      Cookies.set("RedirectionLink", pathname);
      window.location.href = "https://auth.analogueshifts.app?app=main";

      return null;
    } else if (!user && token) {
      //    Fetch User
      getUser({ setLoading: (v) => {}, layout: "authenticated" });
    }
  }, []);

  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}
