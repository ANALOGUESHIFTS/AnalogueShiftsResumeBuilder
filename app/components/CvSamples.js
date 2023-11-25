import Link from "next/link";
import BlogIcon from "@/public/generate-bullet-point.svg";
import Image from "next/image";

export default function CvSamples() {
  const coverLetterLinksOne = [
    {
      title: "Academic",
      color: "#79b2f0",
      path: "/blog/cv-help/academic-cv",
    },

    {
      title: "Artist",
      color: "#FAE315",
      path: "/cv-examples/artist-cv",
    },
    {
      title: "Medical Assistant",
      color: "#ee7856",
      path: "/resume-samples/medical-assistant-resume-examples",
    },
    {
      title: "Artist",
      color: "#FAE315",
      path: "/cv-examples/artist-cv",
    },
    {
      title: "Academic",
      color: "#79b2f0",
      path: "/blog/cv-help/academic-cv",
    },

    {
      title: "Medical Assistant",
      color: "#ee7856",
      path: "/resume-samples/medical-assistant-resume-examples",
    },
  ];

  const coverLetterLinksTwo = [
    {
      title: "Nurse Practitional",
      color: "#79b2f0",
      path: "/resume-samples/nurse-practitioner-resume",
    },
    {
      title: "Pharmacist",
      color: "#ee7856",
      path: "/resume-samples/pharmacist-resume-example",
    },
    {
      title: "Physician Assistant",
      color: "#FAE315",
      path: "/resume-samples/physician-assistant-resume",
    },
    {
      title: "Pharmacist",
      color: "#ee7856",
      path: "/resume-samples/pharmacist-resume-example",
    },
    {
      title: "Nurse Practitional",
      color: "#79b2f0",
      path: "/resume-samples/nurse-practitioner-resume",
    },

    {
      title: "Physician Assistant",
      color: "#FAE315",
      path: "/resume-samples/physician-assistant-resume",
    },
  ];

  const coverLetterLinksThree = [
    {
      title: "Student",
      color: "#FAE315",
      path: "/blog/cv-help/cv-examples-for-students",
    },
    {
      title: "Research Assistant",
      color: "#79b2f0",
      path: "/cv-examples/research-assistant-cv",
    },
    {
      title: "Science",
      color: "#ee7856",
      path: "/cv-examples/science-cv",
    },
    {
      title: "Research Assistant",
      color: "#79b2f0",
      path: "/cv-examples/research-assistant-cv",
    },
    {
      title: "Student",
      color: "#FAE315",
      path: "/blog/cv-help/cv-examples-for-students",
    },

    {
      title: "Science",
      color: "#ee7856",
      path: "/cv-examples/science-cv",
    },
  ];

  const blogData = [
    {
      title: "What Is a CV and What Do You Include?",
      path: "/blog/cv-help/what-is-a-cv",
    },
    {
      title: "CV vs Resume: What's the difference?",
      path: "/blog/resume-help/cv-vs-resume",
    },
    {
      title: "CV vs Cover Letter: What are the differences?",
      path: "/blog/cv-help/cv-vs-cover-letter",
    },
    {
      title: "Curriculum Vitae (CV) Format: CV Templates & Formatting Tips",
      path: "/blog/cv-help/cv-format",
    },
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
    <div className="w-full h-[1400px] relative px-10 max-[992px]:h-max max-[992px]:flex max-[992px]:flex-col max-[992px]:px-5 max-[992px]:gap-6">
      <div className="sticky top-[150px] left-0 w-[45%] bg-white max-[992px]:items-center flex flex-col max-[992px]:static max-[992px]:w-full">
        <p className="py-5 text-[2.6rem] max-[992px]:text-center w-[80%] max-[900px]:w-[90%] max-[900px]:text-xl font-extrabold text-black/80">
          CV samples & writing support
        </p>
        <p className="text-black/60 max-[992px]:text-center w-[80%] max-[900px]:w-[90%]  font-normal pb-10 tracking-normal text-base">
          Not sure{" "}
          <Link
            className="text-AnalogueShiftsTextColor"
            href="/blog/cv-help/how-to-write-a-cv"
          >
            {" "}
            how to write a CV{" "}
          </Link>{" "}
          that gives you the best chance of landing the position you’re aiming
          for? Our CV examples and writing guides are a great place to start.
        </p>
        <Link
          href="/cv-maker#cv-examples"
          className="duration-300 max-[992px]:hidden w-max mb-6 text-lg font-semibold text-black/50 hover:translate-x-1 hover:text-black/70"
        >
          CV examples
        </Link>
        <Link
          href="/cv-maker#cv-help-writing-resources"
          className="duration-300 max-[992px]:hidden w-max text-lg font-semibold text-black/50 hover:translate-x-1 hover:text-black/70"
        >
          CV help (writing & resources)
        </Link>
      </div>
      <div className="w-6/12 h-full absolute right-0 top-0 max-[992px]:w-full max-[992px]:static">
        <div
          id="cv-examples"
          className="w-full h-[550px] mt-8 rounded-3xl bg-[#f8f9fb] p-7 flex flex-col mb-10"
        >
          <p className="py-5 text-[2rem]  max-[900px]:text-xl font-bold text-black/80">
            CV examples
          </p>
          <p className="text-black/70 font-normal pb-10 tracking-normal text-base">
            Whether you’re writing an{" "}
            <Link
              className="text-AnalogueShiftsTextColor"
              href="/blog/cv-help/academic-cv"
            >
              {" "}
              academic CV{" "}
            </Link>{" "}
            or a CV for a job, we have examples to provide you with ideas. Each
            CV sample on AnalogueShifts was carefully researched and designed,
            and then reviewed by certified CV-writing experts.
          </p>
          <div className="w-full h-[250px] flex flex-col gap-3">
            <div
              onMouseOver={() => handleMouseOver("cv-links-one")}
              onMouseOut={() => handleMouseOut("cv-links-one")}
              className="w-full overflow-x-hidden h-[60px] pt-2"
            >
              <div
                id="cv-links-one"
                className="moveFromRightToLeft w-max flex gap-4 "
              >
                {coverLetterLinksOne.map((data) => {
                  return (
                    <Link
                      key={() => Math.random() + data.title}
                      style={{ borderColor: data.color }}
                      href={data.path}
                      className={`py-2 px-6 text-black/75 duration-300 hover:scale-105 font-semibold text-sm rounded-full border`}
                    >
                      {data.title}
                    </Link>
                  );
                })}
              </div>
            </div>
            <div
              onMouseOver={() => handleMouseOver("cv-links-two")}
              onMouseOut={() => handleMouseOut("cv-links-two")}
              className="w-full overflow-x-hidden h-[60px] pt-3"
            >
              <div
                id="cv-links-two"
                className="moveFromLeftToRight w-max flex gap-4 "
              >
                {coverLetterLinksTwo.map((data) => {
                  return (
                    <Link
                      key={() => Math.random() + data.title}
                      style={{ borderColor: data.color }}
                      href={data.path}
                      className={`py-2 px-6 text-black/75 duration-300 hover:scale-105 font-semibold text-sm rounded-full border`}
                    >
                      {data.title}
                    </Link>
                  );
                })}
              </div>
            </div>
            <div
              onMouseOver={() => handleMouseOver("cv-links-three")}
              onMouseOut={() => handleMouseOut("cv-links-three")}
              className="w-full overflow-x-hidden h-[60px] pt-2"
            >
              <div
                id="cv-links-three"
                className="moveFromRightToLeft w-max flex gap-4 "
              >
                {coverLetterLinksThree.map((data) => {
                  return (
                    <Link
                      key={() => Math.random() + data.title + Math.random()}
                      style={{ borderColor: data.color }}
                      href={data.path}
                      className={`py-2 px-6 text-black/75 duration-300 hover:scale-105 font-semibold text-sm rounded-full border`}
                    >
                      {data.title}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="pt-3 flex justify-center">
            <Link
              href="/cv-examples"
              className="text-lg font-medium text-AnalogueShiftsTextColor underline"
            >
              View all CV examples
            </Link>
          </div>
        </div>
        <div
          id="cv-help-writing-resources"
          className="w-full h-max mt-8 rounded-3xl bg-[#f8f9fb] p-7 flex flex-col"
        >
          <p className="py-5 text-[2rem]  max-[900px]:text-xl font-bold text-black/80">
            CV help (writing & resources)
          </p>
          <p className="text-black/70 font-normal pb-10 tracking-normal text-base">
            Our CV Help blog provides information on everything from what to put
            on a CV to the finer details like CV formatting and fonts.
            Regardless of where you’re at in your job hunt, we have CV resources
            to make your life easier building your application.
          </p>
          <div className="flex flex-col gap-5">
            {blogData.map((data) => {
              return (
                <Link
                  key={() => Math.random() + data.title + Math.random()}
                  href={data.path}
                  className="w-full p-3 bg-white hover:shadow-2xl duration-300 rounded-lg shadow-xl flex gap-5 items-center"
                >
                  <div className="w-14 h-14 p-3 rounded-lg bg-AnalogueShiftsTextColor/40">
                    <Image src={BlogIcon} alt="Icon" />
                  </div>
                  <div className="pt-1.5 h-full flex flex-col justify-between">
                    <p className="text-black/50 font-bold text-sm">BLOG</p>
                    <p className="text-black/80 max-[992px]:text-sm font-medium text-base">
                      {data.title}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="pt-3 flex justify-center">
            <Link
              href="/blog/cover-letter-help"
              className="text-lg font-medium text-AnalogueShiftsTextColor underline"
            >
              Visit our blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
