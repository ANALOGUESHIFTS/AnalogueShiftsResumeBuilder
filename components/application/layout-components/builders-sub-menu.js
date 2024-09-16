"use client";
import { useState, useEffect } from "react";
import FileImage from "@/public/images/file-icon.png";
import RightArrowImage from "@/public/images/right-arrow-icon.png";
import PhoneIcon from "@/public/images/phone-icon.png";

//Data
import apps from "@/resources/navigation/apps.json";

import Link from "next/link";
import Image from "next/image";

export default function BuildersSubMenu() {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => setOpacity(1), []);

  return (
    <div
      style={{ opacity: opacity }}
      className="absolute duration-500 top-[70px] -left-6 w-screen h-[450px] bg-white"
    >
      <div className="w-full p-8 flex justify-between border-b">
        {apps.map((link) => {
          return (
            <Link
              key={crypto.randomUUID()}
              href={link.path}
              className="w-[32%] h-[350px] bg-white duration-500 hover:shadow-2xl rounded-xl p-5 builders-link-box"
            >
              <div className="w-full flex justify-between pb-5">
                <div className="flex items-center gap-2">
                  <Image
                    src={FileImage}
                    alt="File Icon"
                    className="w-3.5 h-4 opacity-60"
                  />
                  <p className="relative text-black/90 font-medium text-[13px] tracking-wider">
                    {link.name}
                    <span className="absolute left-0 bottom-0 w-0 border-b border-black/70 border-solid duration-500 custom-line"></span>
                  </p>
                </div>
                <div className="duration-500 opacity-0 right-arrow">
                  <Image
                    src={RightArrowImage}
                    alt="Arrow"
                    className="w-3 h-3 opacity-60 "
                  />
                </div>
              </div>
              <div className="w-full h-[200px] mb-5">
                <Image
                  src={link.image}
                  alt="Image"
                  width={300}
                  height={300}
                  className="w-full h-full rounded-lg"
                />
              </div>
              <p className="w-full text-sm font-normal text-black/60 tracking-normal">
                {link.subTitle}
              </p>
            </Link>
          );
        })}
      </div>
      <div className="py-2 w-full flex justify-center items-center gap-2">
        <Image
          src={PhoneIcon}
          alt="Phone Icon"
          className="w-4 h-4 opacity-70"
        />
        <p className=" text-[13px] font-normal text-black/60 tracking-normal">
          Monday to Friday, 8AM – 12AM (Midnight) and Saturdays and Sundays,
          10AM – 6PM EDT +234806708343
        </p>
      </div>
    </div>
  );
}
