"use client";
import { useState, useEffect } from "react";

export default function LoadingProgress({ full, bg }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(100);
    const myTimeout = setTimeout(() => {
      full();
    }, 5000);
    return () => {
      clearTimeout(myTimeout);
    };
  }, []);
  return (
    <div className="w-full h-[2px] bg-[#e6e9ec] rounded-lg">
      <div
        style={{ width: `${width}%`, background: bg, transition: "5s" }}
        className="h-full rounded-lg"
      ></div>
    </div>
  );
}
