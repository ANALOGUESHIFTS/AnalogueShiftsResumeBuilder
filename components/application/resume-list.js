import Image from "next/image";
import Link from "next/link";

export default function ResumeList({ data }) {
  return (
    <div className="w-full flex flex-wrap items-center gap-x-4 gap-y-4">
      {data.map((item) => {
        return (
          <div
            key={crypto.randomUUID()}
            className="h-max p-4 w-[450px] max-w-full bg-[#f8f9fb] rounded-lg resume-template-link"
          >
            <div className="w-full h-[500px] max-[900px]:h-max relative template-img-box">
              <div className="w-full h-full rounded-lg overflow-y-scroll scroll-hidden">
                <Image
                  className="h-max max-h-[500px] w-max mx-auto rounded-lg object-fit"
                  src={item.templateImage}
                  width={400}
                  height={400}
                  alt="Resume Template"
                />
              </div>
              <Link
                href={item.path}
                className="link-button absolute  opacity-0 translate-y-2 duration-300 bottom-4 left-4 w-[calc(100%-32px)] py-3 hover:bg-AnalogueShiftsTextColor/80 flex justify-center rounded-lg bg-AnalogueShiftsTextColor text-sm font-medium text-black/80"
              >
                Use Template
              </Link>
            </div>
            <div className="w-full pl-2 h-max">
              <p className="pt-6 text-base text-black/90 font-medium pb-2">
                {item.name}
              </p>
              <p className="text-black/60 font-medium text-sm">
                {item?.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
