import Image from "next/image";
import SalesForceLogo from "@/public/salesforce-logo.svg";
import NewYorkLogo from "@/public/new-york-post-logo.svg";
import MSNBC from "@/public/msnbc-logo.svg";
import FOX from "@/public/fox-logo.svg";
import Entrepreneur from "@/public/entrepreneur-logo.svg";
import Zendesk from "@/public/zendesk-logo.svg";

export default function Experts() {
  const logos = [
    SalesForceLogo,
    NewYorkLogo,
    MSNBC,
    FOX,
    Entrepreneur,
    Zendesk,
  ];

  const handleMouseOver = (id) => {
    let elem = document.getElementById(id);
    elem.classList.add("pauseAnimation");
  };
  const handleMouseOut = (id) => {
    let elem = document.getElementById(id);
    elem.classList.remove("pauseAnimation");
  };

  return (
    <div className="w-full py-8 h-max px-10 max-[500px]:px-4">
      <div className="w-full h-max rounded-2xl bg-[#f8f9fb] p-7 flex flex-col items-center">
        <p className="py-5 text-[2rem] w-[750px] max-[900px]:w-[90%] text-center max-[900px]:text-xl font-bold text-black/80">
          Our experts have been cited in top publications around the world
        </p>
        <p className="text-black/60 w-[800px] max-[900px]:w-[90%] max-[1050px]:text-center font-normal pb-10 tracking-normal text-base text-center">
          All our authors are authorities in job hunting, interviewing, and
          resume writing. Some of the publications that have cited our experts
          include:
        </p>
        <div
          onMouseOver={() => handleMouseOver("logo-box")}
          onMouseOut={() => handleMouseOut("logo-box")}
          className="w-full overflow-hidden mb-5"
        >
          <div id="logo-box" className="moveFromRightToLeft w-max flex gap-4">
            {logos.map((logo) => {
              return (
                <div
                  key={crypto.randomUUID()}
                  className=" w-[200px] h-[80px] border flex justify-center items-center border-dashed rounded-lg border-gray-300"
                >
                  <Image src={logo} alt="Logo" />
                </div>
              );
            })}
          </div>
        </div>
        <div
          onMouseOver={() => handleMouseOver("logo-box2")}
          onMouseOut={() => handleMouseOut("logo-box2")}
          className="w-full overflow-hidden "
        >
          <div
            id="logo-box2"
            className="moveFromLeftToRight translate-x-[-100%] w-max flex gap-4"
            key={crypto.randomUUID()}
          >
            {logos.map((logo) => {
              return (
                <div
                  key={crypto.randomUUID()}
                  className=" w-[200px] h-[80px] border flex justify-center items-center border-dashed rounded-lg border-gray-300"
                >
                  <Image src={logo} alt="Logo" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
