"use client";
import { useEffect, useState } from "react";
import RightSidebar from "./RightSidebar";
import { usePathname } from "next/navigation";

export default function ProfileDropDown({ user, logout }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleLogout = () => {
    setIsOpen(false);
    logout();
  };

  useEffect(() => setIsOpen(false), [pathname]);

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
