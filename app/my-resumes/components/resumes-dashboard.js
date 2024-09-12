"use client";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export default function Resumes() {
  const [user, setUser] = useState(null); // State to store user information
  const [loading, setLoading] = useState(true); // State to manage loading status

  useEffect(() => {
    const authToken = Cookies.get("analogueshifts"); // Retrieve the stored token

    if (authToken) {
      // If token exists, fetch user data from the API
      fetchUserData(authToken);
    } else {
      setLoading(false); // No token, stop loading
    }
  }, []);

  const fetchUserData = async (token) => {
    try {
      const res = await fetch("https://api.analogueshifts.app/api/user", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`, // Pass the token in the Authorization header
        },
      });

      if (!res.ok) throw new Error("Failed to fetch user information");

      const data = await res.json();
      setUser(data); // Store the user details in state
    } catch (error) {
      console.error("Error fetching user data:", error.message);
    } finally {
      setLoading(false); // Stop loading after the fetch is complete
    }
  };

  console.log(fetchUserData)

  if (loading) {
    return <p>Loading...</p>; // Display loading state
  }

  return (
    <main className="w-full h-auto pt-[80px]">
      <main className="py-10 bg-[rgb(43,58,69)] px-10 max-[800px]:px-5">
        <p className="pb-5 text-base font-semibold text-white">
          Welcome Back, {user?.first_name || "User"}!
        </p>
        <p className="pb-10 font-bold text-white text-xl">
          Edit and Download Professional resumes to get your dream Job!
        </p>
      </main>
      <main className="mb-[100px] py-10 bg-[rgb(240,240,240)] px-10 max-[800px]:px-5 flex flex-col items-center gap-5">
        <p className="pb-5 w-full text-sm font-bold text-black/70">
          Your Resumes
        </p>
        {/* Display The user's Resumes */}
      </main>
    </main>
  );
}
