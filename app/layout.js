"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/Layouts/NavBar";
import Footer from "./components/Layouts/Footer";
import Script from "next/script";
import { usePathname } from "next/navigation";

//Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//CContext
import { AuthProvider } from "./components/contexts/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <ToastContainer position="top-center" />
          {!pathname.endsWith("/finish/download") && <NavBar />}
          {children}
          {!pathname.endsWith("/finish/download") && <Footer />}
        </AuthProvider>
      </body>
      <Script
        src="https://kit.fontawesome.com/39a80cd06c.js"
        crossorigin="anonymous"
      />
    </html>
  );
}

// toast.error(err.message, {
//   position: "top-right",
//   autoClose: 3000,
// });
