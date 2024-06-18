"use client";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import Link from "next/link";

// Components
import IdiomProof from "../../ui/idiom-proof";
import ApplicationLogo from "./application-logo";
import ProfileDropDown from "./profile-menu";
import LoadingComponent from "../LoadingComponent";

export default function AuthenticatedNavBar() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let storedData = Cookies.get("analogueshifts");
    if (storedData) {
      setUser(JSON.parse(Cookies.get("analogueshifts")));
    }
  }, []);

  async function handleLogout() {
    const axios = require("axios");
    const url = process.env.NEXT_PUBLIC_BACKEND_URL + "/logout";
    let config = {
      method: "POST",
      url: url,
      headers: {
        Authorization: "Bearer " + user.token,
      },
    };
    setLoading(true);

    axios
      .request(config)
      .then((res) => {
        Cookies.remove("analogueshifts");
        window.location.href = "/login";
      })
      .catch((error) => {
        setLoading(false);
        toast.error(error.message, {
          position: "top-right",
          autoClose: 3000,
        });
      });
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

      {loading && <LoadingComponent />}

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
