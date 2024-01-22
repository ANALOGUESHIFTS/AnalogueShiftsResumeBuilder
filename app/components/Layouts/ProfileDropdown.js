"use client";
import { useState } from "react";
import RightSidebar from "./RightSidebar";

export default function ProfileDropDown({ user }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative w-10 h-10 rounded-full cursor-pointer">
      <img
        onClick={() => setIsOpen(true)}
        src="https://via.placeholder.com/80"
        alt="Profile PlaceHolder"
        className="w-full h-full rounded-full"
      />
      {isOpen && (
        <RightSidebar
          user={user}
          close={() => setIsOpen(false)}
          logout={handleLogout}
        />
      )}
    </div>
  );
}
