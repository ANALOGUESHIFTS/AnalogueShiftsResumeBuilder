import Link from "next/link";
import Image from "next/image";

import RightArrow from "@/public/images/right-arrow-icon.png";
import { levelUpLinks } from "@/app/resources/data";

export default function LevelUpJobHunt() {
  return (
    <div className="w-full h-[850px] flex flex-col items-center bg-white justify-center p-5 max-[1200px]:h-max">
      <p className="text-black/50 text-center max-[1050px]:text-center font-bold tracking-wide text-[13px]">
        LEVEL UP YOUR JOB HUNT
      </p>
      <p className="py-5 text-[2.6rem] w-[750px] max-[900px]:w-[90%] text-center max-[900px]:text-xl font-extrabold text-black/80">
        Construct an application that garners more job offers
      </p>
      <p className="text-black/60 w-[700px] max-[900px]:w-[90%] max-[1050px]:text-center font-normal pb-10 tracking-normal text-base text-center">
        Unlocking more interviews and securing superior job offers is just a few
        steps away, and it all begins with your resume. Here's how to make your
        application stand out today:
      </p>
      <div className="w-full flex justify-between flex-wrap gap-y-5">
        {levelUpLinks.map((data) => {
          return (
            <Link
              key={crypto.randomUUID()}
              href={data.path}
              className="w-[23%] h-[400px] card-box max-[1174px]:w-[31%] max-[843px]:w-[45%] max-[556px]:w-full"
            >
              <p
                id={"num" + data.number}
                className="card-box-num w-full text-center text-[#e6e9ec] duration-300 translate-y-[30px] text-[64px] font-black leading-[76px]"
              >
                {data.number}
              </p>
              <div className="absolute w-[23%] max-[556px]:w-[calc(100%-40px)] max-[843px]:w-[45%] max-[1174px]:w-[31%] h-max rounded-3xl shadow-xl bg-white p-5">
                <div className="w-full h-[200px] flex flex-col justify-between pb-4">
                  <div className="w-[70px] bg-AnalogueShiftsTextColor/30 h-[70px] flex justify-center items-center shape-box">
                    <Image
                      src={data.icon}
                      alt="Icon"
                      className="w-[60%] h-[60%]"
                    />
                  </div>
                  <p className="text-base tracking-wide text-black/70 font-medium ">
                    {data.title}
                  </p>
                  <p className="text-sm tracking-wide text-black/60 font-medium ">
                    {data.description}
                  </p>
                </div>
                <div
                  style={{ backgroundColor: data.color }}
                  className="w-full h-[60px] rounded-full p-4 flex justify-between items-center"
                >
                  <p className="text-white font-medium text-sm w-[80%]">
                    {data.linkText}
                  </p>
                  <div className="w-8 h-8 flex justify-center items-center bg-white rounded-full">
                    <Image src={RightArrow} alt="" className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
