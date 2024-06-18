import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn(inter.className)}>{children}</body>
      <Script
        src="https://kit.fontawesome.com/39a80cd06c.js"
        crossorigin="anonymous"
      />
    </html>
  );
}
