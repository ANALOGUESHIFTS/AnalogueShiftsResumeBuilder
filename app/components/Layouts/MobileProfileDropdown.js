"use client";
import Link from "next/link";
import { useState } from "react";

export default function MobileProfileDropdown({ user, logout }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full cursor-pointer pr-3 flex justify-between items-center"
      >
        <div className="w-[95%] flex items-center gap-2 pb-3 border-b">
          <div className="w-9 h-9 rounded-full bg-gray-200 flex justify-center items-center">
            <p className="text-base font-semibold text-black/60">
              {user.email[0].toUpperCase()}
            </p>
          </div>
          <p className="text-xs font-medium text-black/70">{user.email}</p>
        </div>

        <i
          className={`fas fa-angle-right duration-300 ${
            isOpen ? "rotate-90" : "rotate-0"
          }`}
        ></i>
      </div>
      {isOpen && (
        <div className="pt-3 flex flex-col">
          <Link
            href="/dashboard"
            className="w-full py-1.5 rounded-lg px-3 hover:bg-black/10 text-[13px] font-medium text-black/70 text-start"
          >
            Dashboard
          </Link>
          <Link
            href="/dashboard/account"
            className="w-full py-1.5 rounded-lg px-3 hover:bg-black/10 text-[13px] font-medium text-black/70 text-start"
          >
            My Account
          </Link>
          <Link
            href="/dashboard/resume"
            className="w-full py-1.5 rounded-lg px-3 hover:bg-black/10 text-[13px] font-medium text-black/70 text-start"
          >
            My Resumes
          </Link>
          <button
            onClick={logout}
            className="w-full py-1.5 rounded-lg px-3 hover:bg-black/10 text-[13px] font-medium text-black/70 text-start"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}
