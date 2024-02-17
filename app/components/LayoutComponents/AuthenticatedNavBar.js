"use client";
import React, { useState } from "react";
import Link from "next/link";
import ApplicationLogo from "./ApplicationLogo";
import ProfileDropDown from "./ProfileMenu";

// Components
import IdiomProof from "./IdiomProof";
import { useAuth } from "../contexts/AuthContext";

export default function AuthenticatedNavBar() {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);

  function handleLogout() {
    localStorage.removeItem("analogueshifts");
    window.location.href = "/login";
  }

  return (
    <>
      {/* Log Out Idiom Proof */}
      <IdiomProof
        open={open}
        setOpen={setOpen}
        title="Log Out"
        msg={
          " Are you sure you want to Sign out of your account? You can always sign in anytime tou want"
        }
        handleAction={() => {
          setOpen(false);
          handleLogout();
        }}
      />

      {/* Guest Nav Bar */}
      <nav className="w-full z-70">
        <div
          style={{ boxShadow: "1px 1px 50px rgba(0,0,0,0.1)" }}
          className="w-[calc(100%-12px)] z-80 h-16 backdrop-filter backdrop-blur-sm top-1.5 left-1.5 fixed rounded-full px-7 flex justify-between items-center"
        >
          <div className="flex items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="https://analogueshifts.com" target="_blank">
                <ApplicationLogo className="block h-10 w-auto fill-current text-gray-600" />
              </Link>
            </div>
          </div>

          <ProfileDropDown logout={() => setOpen(true)} user={user} />
        </div>
      </nav>
    </>
  );
}
