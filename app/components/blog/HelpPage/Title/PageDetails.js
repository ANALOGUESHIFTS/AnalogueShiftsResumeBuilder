"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { blogData } from "../../data";
export default function BlogTitlePageDetails({ title }) {
  const item = blogData.filter((data) => data.slug === title)[0];
  return (
    <main className="w-full h-auto">
      <main
        style={{ backgroundColor: item.color }}
        className="w-full items-center h-max py-[70px] mt-[80px] px-10 max-[800px]:px-5  bg-white"
      >
        <div className="flex w-full gap-4 items-center pb-7">
          <Link href="/" className="flex gap-1.5 items-center">
            <i className="fa-solid fa-house text-white text-xs"></i>
            <p className="text-white font-medium text-sm hover:underline">
              Home
            </p>
          </Link>
          <i className="fa-solid fa-chevron-right text-white text-xs"></i>
          <Link href="/blog" className="flex gap-1.5 items-center">
            <p className="text-white font-medium text-sm hover:underline">
              Blog
            </p>
          </Link>
          <i className="fa-solid fa-chevron-right text-white text-xs"></i>
          <Link
            href={`/blog/${item.category[0]}`}
            className="flex gap-1.5 items-center"
          >
            <p className="text-white font-medium text-sm hover:underline">
              {item.category[0]}
            </p>
          </Link>
          <i className="fa-solid fa-chevron-right text-white text-xs"></i>
          <p className="text-white/70 font-medium text-sm">{item.title}</p>
        </div>
        <div className="w-full bg-white p-7 h-max flex flex-col items-center shadow-lg rounded-2xl">
          <p className="text-black/90 font-extrabold text-4xl pt-3 pb-2 max-[900px]:text-3xl max-[500px]:text-xl">
            {item.title}
          </p>
          <p className="text-black/60 text-sm">
            Written by{" "}
            <Link href="https://www.analogueshifts.com" className="underline">
              AnalogueShifts
            </Link>
          </p>
          <div className="bg-gray-200/70 p-2.5 rounded-lg flex items-center mt-3 gap-2">
            <i className="fa-solid fa-calendar text-black/80 text-xs"></i>
            <p className="text-black/80 font-medium text-xs">
              December 16, 2023
            </p>
          </div>
        </div>
      </main>
    </main>
  );
}
