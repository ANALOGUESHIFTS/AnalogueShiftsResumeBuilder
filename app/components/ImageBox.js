"use client";
import { useState, useEffect } from "react";

import Image from "next/image";

export default function ImageBox({ img, title }) {
  const [imgPos, setImgPos] = useState(title === "Step 01" ? 100 : -100);
  useEffect(() => setImgPos(0), []);
  return (
    <div className="w-full h-full overflow-hidden">
      <Image
        style={{ transform: `translateX(${imgPos}%)` }}
        src={img}
        alt="Image"
        className="w-full duration-300 object-contain h-full rounded-lg"
      />
    </div>
  );
}
