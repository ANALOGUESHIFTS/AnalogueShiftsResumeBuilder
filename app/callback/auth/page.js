"use client"; // Mark the component as client-side

import { useRouter, useSearchParams } from "next/navigation"; // Next.js native hooks
import { useEffect } from "react"; // React's useEffect hook

export default function ValidateToken() {
  const searchParams = useSearchParams(); // Access query parameters
  const token = searchParams.get("token"); // Extract the token from the URL
  const router = useRouter(); // For programmatic navigation

  const setCookie = (name, value, days) => {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000); // Set cookie expiration time
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`; // Save the cookie
  };

  const getCookie = (name) => {
    const nameEQ = name + "=";
    const ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  };

  useEffect(() => {
    const handleValidation = async () => {
      if (token) {
        // Save the token as a cookie to be used later
        setCookie("authToken", token, 7); // Cookie expires in 7 days

        try {
          // Mock validation process
          const isValid = true; // Replace with actual validation logic

          if (isValid) {
            alert("Token validated successfully!"); // Notify the user of success

            // Redirect the user after validation
            setTimeout(() => {
              router.push("/"); // Redirect to the homepage or any route
            }, 1500); // Delay for user feedback
          } else {
            throw new Error("Token validation failed");
          }
        } catch (error) {
          alert("Token validation failed!"); // Notify the user of failure
          router.push("/"); // Redirect to the homepage or any route
        }
      } else {
        // If no token is found, redirect to the saved redirection link or default route
        let RedirectionLink = getCookie("RedirectionLink");
        router.push(RedirectionLink || "/"); // Redirect to the saved link or the homepage
      }
    };

    handleValidation(); // Execute the validation logic
  }, [token, router]); // Dependency array includes token and router

  return (
    <main className="w-full h-max py-28 flex justify-center items-center">
      <h2 className="text-tremor-brand-boulder900 font-medium text-base">
        Validating...
      </h2>
    </main>
  );
}
