import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { cn } from "@/lib/utils";

import { UserProvider } from "@/contexts/user";
import { ToastProvider } from "@/contexts/toast";
import ToastMessage from "@/components/application/toast-message";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-NYZLS7SHM5"
        ></Script>
        <Script id="gtag-init" strategy="afterInteractive">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-NYZLS7SHM5');
            `}
        </Script>
      </head>
      <body className={cn(inter.className)}>
        {" "}
        <UserProvider>
          <ToastProvider>
            <ToastMessage />
            {children}
          </ToastProvider>
        </UserProvider>
      </body>
      <Script
        src="https://kit.fontawesome.com/39a80cd06c.js"
        crossorigin="anonymous"
      />
    </html>
  );
}
