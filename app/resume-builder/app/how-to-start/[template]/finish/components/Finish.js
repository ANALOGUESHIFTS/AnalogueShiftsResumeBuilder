"use client";
import { useEffect, useState, useRef } from "react";
import { plans } from "@/utils/resume-builder/builder/finish";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import Link from "next/link";
import html2canvas from "html2canvas";
import resumeTemplates from "@/resources/resume-builder/resume-templates.json";
import GuestLayout from "@/components/application/layouts/guest";
import CheckoutForm from "./checkout-form";

export default function FinishYourResume() {
  const [data, setData] = useState(null);
  const [TemplateComponent, setTemplateComponent] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);
  const [selectedPaymentMenu, setSelectedPaymentMenu] = useState("14-day");
  const [user, setUser] = useState(null);
  const router = useRouter();
  const templateRef = useRef();
  const containerRef = useRef(); // Reference for the container to get its dimensions

  useEffect(() => {
    const storedResumeData = localStorage.getItem("resumeInfo");
    const authData = Cookies.get("analogueshifts");
    if (storedResumeData) {
      setData(JSON.parse(storedResumeData));
    }
    if (authData) {
      setUser(JSON.parse(authData));
    }
  }, []);

  useEffect(() => {
    if (data) {
      const templateEntry = resumeTemplates.find(template => template.id === data.template);
      if (templateEntry && templateEntry.linkToTemplate) {
        import(`@/components/application/templates/resume/${data.template}`).then(module => {
          const TemplateComponent = module.default;
          setTemplateComponent(() => TemplateComponent);
        }).catch(error => {
          console.error("Error importing template:", error);
        });
      } else {
        console.error("Template path not found for:", data.template);
      }
    }
  }, [data]);

  // Convert the rendered template to an image using html2canvas
  useEffect(() => {
    if (TemplateComponent && data) {
      html2canvas(templateRef.current).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        setImageSrc(imgData);
      }).catch(error => {
        console.error("Error generating image:", error);
      });
    }
  }, [TemplateComponent, data]);

  const handleContinueForFree = () => {
    if (!user) {
      router.push("/login");
    } else {
      router.push(
        `/resume-builder/app/how-to-start/${data.template}/finish/download`
      );
    }
  };

  return (
    <GuestLayout>
      <main className="pt-[100px] bg-[#f9fbfa] w-full flex flex-col items-center">
        <p className=" text-[2.2rem] max-w-[90%] w-[900px] px-5 text-center max-[900px]:text-xl font-extrabold text-black/80">
          Upgrade now for Unlimited Access to all pro features!
        </p>
        <div className="w-full mt-8 lg:mt-3 flex flex-col lg:flex-row justify-between h-max min-h-[650px]">
          <div className="relative w-full lg:w-[calc(50%-15px)] h-[600px]">
            <div className="lg:w-[65%] w-[90%] h-[600px] bg-AnalogueShiftsTextColor fancy-border-radius"></div>
            <div
              className="resume-box lg:w-[85%] w-[calc(100%-40px)] h-[calc(100%-90px)] left-[20px] lg:left-[15%] absolute top-[45px] overflow-hidden shadow-lg"
              ref={containerRef} // Reference for the container
            >
              {/* Watermark over entire image in diagonal */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage: "url('data:image/svg+xml;base64," + btoa(`
                    <svg xmlns='http://www.w3.org/2000/svg' width='800' height='800' viewBox='0 0 800 800'>
                      <text x='50%' y='50%' fill='rgba(0, 0, 0, 0.05)' font-size='60' text-anchor='middle' dominant-baseline='middle' transform='rotate(-45 400 400)'>
                        ANALOGUESHIFTS RESUME BUILDER
                      </text>
                    </svg>
                  `) + "')",
                  backgroundRepeat: "repeat",
                  backgroundSize: "400px 400px",
                }}
              />
              {/* Render Preview Of Resume With User Info */}
              {TemplateComponent && !imageSrc ? (
                <div
                  ref={templateRef}
                  className="relative"
                  style={{
                    height: "100%", // Make sure the template uses the full height of its container
                    width: "auto",  // The width is adjusted automatically
                    maxHeight: "100%", // Ensures the template won't overflow vertically
                    maxWidth: "100%",  // Ensures the template won't overflow horizontally
                    transform: `scale(${Math.min(
                      containerRef.current?.clientWidth / templateRef.current?.clientWidth,
                      containerRef.current?.clientHeight / templateRef.current?.clientHeight
                    ) || 1})`,
                    transformOrigin: "top left", // Ensures the scaling is done from the top-left corner
                  }}
                >
                  <TemplateComponent data={data} />
                </div>
              ) : (
                imageSrc ? (
                  <img
                    src={imageSrc}
                    alt="Resume Preview"
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <div>Loading...</div>
                )
              )}
            </div>
          </div>
          <div className=" lg:w-[calc(50%-15px)] w-full flex flex-col items-center lg:items-start gap-6 pt-12 pr-[20px]">
            {plans.map((planData) => {
              return (
                <div
                  key={planData.planDuration}
                  className={`lg:w-[65%] overflow-hidden max-w-[90%] md:max-w-full rounded w-[600px] border-2 border-solid ${
                    selectedPaymentMenu === planData.planDuration
                      ? "h-auto border-black/70"
                      : "h-[60px] border-gray-300"
                  }`}
                >
                  <div
                    onClick={() =>
                      setSelectedPaymentMenu(planData.planDuration)
                    }
                    className="h-[60px] cursor-pointer flex items-center justify-between px-4"
                  >
                    <div className="h-[38px] flex items-center gap-3">
                      <div
                        className={`w-[38px] h-[38px] rounded-full flex justify-center items-center ${
                          selectedPaymentMenu === planData.planDuration
                            ? "bg-AnalogueShiftsTextColor"
                            : "bg-transparent border-2"
                        }`}
                      >
                        {selectedPaymentMenu === planData.planDuration && (
                          <i className="fa-solid fa-check text-white text-xl"></i>
                        )}
                      </div>
                      <p className="font-extrabold text-base text-black/80">
                        {planData.title}
                      </p>
                    </div>
                    <p className="text-black/90 font-extrabold">
                      <span className="text-base">$</span>{" "}
                      <span className="text-3xl">{planData.price}</span>
                    </p>
                  </div>
                  <div className="w-full h-max border-t px-3.5 pt-3.5 pb-6">
                    <ul className="w-full flex flex-col gap-3 list-inside list-decimal">
                      {planData.perks.map((perk) => {
                        return (
                          <li
                            key={crypto.randomUUID()}
                            className="text-black/90 text-sm"
                          >
                            {perk}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              );
            })}

            <Link
              href="#checkout"
              className="lg:w-[65%] flex justify-center max-w-[90%] md:max-w-full w-[600px] py-2.5 hover:bg-AnalogueShiftsTextColor/70 rounded-full bg-AnalogueShiftsTextColor text-white text-base font-bold"
            >
              Continue
            </Link>
            {data && (
              <button
                onClick={handleContinueForFree}
                className="lg:w-[65%] flex justify-center max-w-[90%] md:max-w-full w-[600px] py-2.5 rounded-full border border-black/20 text-black/80 text-base font-bold"
              >
                Download For Free
              </button>
            )}
          </div>
        </div>
        <p className="pb-8 mt-8 text-[2.2rem] max-w-[90%] w-[900px] px-5 text-center max-[900px]:text-xl font-extrabold text-black/80">
          Secure your dream job with AnalogueShifts
        </p>

        {/* ----- Check out section ------ */}
        <CheckoutForm selectedPaymentMenu={selectedPaymentMenu} />
      </main>
    </GuestLayout>
  );
}
