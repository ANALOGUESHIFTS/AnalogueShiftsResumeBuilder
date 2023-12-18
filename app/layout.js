import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/Layouts/NavBar";
import Footer from "./components/Layouts/Footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AnalogueShifts Resume Builder",
  description: "The best Resume Builder",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
      <Script
        src="https://kit.fontawesome.com/39a80cd06c.js"
        crossorigin="anonymous"
      />
    </html>
  );
}
