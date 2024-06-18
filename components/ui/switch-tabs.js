import Image from "next/image";
import FileImage from "@/public/images/file-icon.png";

export default function SwitchTabs({ selected, setSelected }) {
  return (
    <div className=" relative bg-gray-200/30 w-[250px] rounded-full h-[40px] p-1">
      <div
        style={{
          transform: `translateX(${selected === "Resume" ? "0px" : "100%"})`,
        }}
        className="w-6/12 h-full rounded-full duration-300 bg-white shadow-lg"
      ></div>
      <button
        onClick={() => setSelected("Resume")}
        className={`flex w-6/12 h-full justify-center gap-1.5 hover:text-black/90 font-medium items-center absolute left-0 top-0  text-xs ${
          selected === "Resume" ? "text-black/90" : "text-black/60"
        }`}
      >
        <Image
          src={FileImage}
          alt="File"
          className={`w-2.5 h-3 ${
            selected === "Resume" ? "opacity-100" : "opacity-60"
          }`}
        />
        Resume
      </button>
      <button
        onClick={() => setSelected("Cover Letter")}
        className={`flex w-6/12 h-full justify-center gap-1.5 font-medium hover:text-black/90 items-center absolute right-0 top-0 text-xs ${
          selected === "Cover Letter" ? "text-black/90" : "text-black/60"
        }`}
      >
        <Image
          src={FileImage}
          alt="File"
          className={`w-2.5 h-3 ${
            selected === "Cover Letter" ? "opacity-100" : "opacity-60"
          }`}
        />
        Cover Letter
      </button>
    </div>
  );
}
