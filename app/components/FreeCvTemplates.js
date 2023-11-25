import Link from "next/link";
import Image from "next/image";
import TemplateOne from "@/public/cv-template-one.jpg";
import TemplateTwo from "@/public/cv-template-two.webp";
import TemplateThree from "@/public/cv-template-three.jpg";

export default function FreeCvTemplates() {
  const links = [
    {
      text: "Pro",
      path: "/cv-templates#pro",
    },
    {
      text: "Business",
      path: "/cv-templates#business",
    },
    {
      text: "Emory",
      path: "/cv-templates#emory",
    },
    {
      text: "European",
      path: "/cv-templates#european",
    },
    {
      text: "Graduate",
      path: "/cv-templates#graduate",
    },
    {
      text: "Harvard",
      path: "/cv-templates#harvard",
    },
    {
      text: "Research",
      path: "/cv-templates#research",
    },
    {
      text: "Writer",
      path: "/cv-templates#writer",
    },
  ];

  const ResumeTemplates = [
    {
      id: "pro",
      image: TemplateOne,
      name: "Pro",
      whyShouldYouUseThisTemplate: (
        <p className="text-sm font-medium text-black/60">
          The Pro CV template is simple yet formal, making it the ideal CV
          design for anyone writing academic CVs, like an{" "}
          <Link
            href="/resume-samples/adjunct-professor-resume"
            className="text-AnalogueShiftsTextColor/80 hover:underline"
          >
            adjunct professor CV
          </Link>
          , or a{" "}
          <Link
            href="/resume-samples/college-professor-resume"
            className="text-AnalogueShiftsTextColor/80 hover:underline"
          >
            college professor CV
          </Link>
          .
        </p>
      ),
      linkToDocs:
        "https://docs.google.com/document/d/12g0F4ESCnkDvVUQ0anq7BOk1lqIHYyZY/copy",
      theMatchingCoverLetter:
        "/cover-letter-templates/cv-cover-letter-template#pro",
    },
    {
      id: "business",
      image: TemplateTwo,
      name: "Business",
      whyShouldYouUseThisTemplate: (
        <p className="text-sm font-medium text-black/60">
          The Business CV template was designed for leadership roles because of
          its skillful blend of traditional formality and modern aesthetics. Try
          this template if you’re writing a{" "}
          <Link
            href="/resume-samples/principal-resume"
            className="text-AnalogueShiftsTextColor/80 hover:underline"
          >
            principal CV
          </Link>
          ,{" "}
          <Link
            href="/blog/resume-help/federal-resume-example"
            className="text-AnalogueShiftsTextColor/80 hover:underline"
          >
            federal CV
          </Link>
          , or{" "}
          <Link
            href="/resume-samples/lawyer-resume-example"
            className="text-AnalogueShiftsTextColor/80 hover:underline"
          >
            lawyer CV
          </Link>
        </p>
      ),
      linkToDocs:
        "https://docs.google.com/document/d/1RvND5IuFwweYFulG3hOdEVwi3IqhfITN/copy",
      theMatchingCoverLetter:
        "/cover-letter-templates/cv-cover-letter-template#business",
    },
    {
      id: "emory",
      image: TemplateThree,
      name: "Emory",
      whyShouldYouUseThisTemplate: (
        <p className="text-sm font-medium text-black/60">
          This classic CV design makes it a versatile option and a great choice
          for students, academics, scientists, or medical professionals. Use
          this CV template if you’re writing a{" "}
          <Link
            href="/resume-samples/teacher-resume-examples"
            className="text-AnalogueShiftsTextColor/80 hover:underline"
          >
            teacher CV
          </Link>
          , or{" "}
          <Link
            href="/cv-examples#nurse"
            className="text-AnalogueShiftsTextColor/80 hover:underline"
          >
            nurse CV
          </Link>
        </p>
      ),
      linkToDocs:
        "https://docs.google.com/document/d/12scwbgacOQSNIdwy-wlLzeQXllPZ7GYA/copy",
      theMatchingCoverLetter:
        "/cover-letter-templates/cv-cover-letter-template#emory",
    },
  ];

  return (
    <section className="w-full h-max relative">
      <nav className="sticky top-0 w-full bg-white h-max py-4 z-60 px-5 overflow-x-auto">
        <div className="flex gap-4 w-max">
          {links.map((data) => {
            return (
              <Link
                key={() => Math.random() + data.text + Math.random()}
                href={data.path}
                className="py-2.5 bg-gray-200/80 hover:bg-black hover:text-white duration-300 w-max px-5 rounded-full text-sm font-semibold text-black/80"
              >
                {data.text}
              </Link>
            );
          })}
        </div>
      </nav>
      <div className="w-full pt-6 flex flex-col pb-[100px] gap-[100px] px-10 max-[800px]:px-5">
        {ResumeTemplates.map((data) => {
          return (
            <section
              key={() => Math.random() + data.id + Math.random()}
              className="w-full border-b pb-[80px] flex justify-between h-max max-[929px]:flex-col max-[929px]:gap-5"
              id={data.id}
            >
              <div className="w-6/12 max-[929px]:w-full rounded-lg shadow-xl cursor-pointer duration-300 hover:translate-x-1 hover:translate-y-1 cv-template-box">
                <Image
                  src={data.image}
                  alt="Image"
                  className="w-full rounded-lg shadow-xl -translate-x-2 -translate-y-2 duration-300 cv-template-img"
                />
              </div>
              <div className="w-6/12 pl-6 max-[929px]:w-full max-[929px]:pl-0 flex flex-col">
                <p className="text-[2rem] text-black/80 font-bold pb-5">
                  {data.name}
                </p>
                <p className="text-base text-black/80 font-medium pb-2.5">
                  Why should you use this template?
                </p>
                {data.whyShouldYouUseThisTemplate}
                <div className="w-full pt-6">
                  <div className="w-full rounded-lg border p-3 mb-5">
                    <p className="text-black/60 font-medium text-base pb-2 border-b mb-2">
                      How to access this template
                    </p>
                    <Link
                      href={data.linkToDocs}
                      className=" hover:underline  pb-3 text-black/60 font-medium text-sm"
                    >
                      Google Docs
                    </Link>
                    <br />
                    <Link
                      href={data.theMatchingCoverLetter}
                      className=" hover:underline  text-black/60 font-medium text-sm"
                    >
                      Get The Matching Cover Letter
                    </Link>
                  </div>
                  <div className="mt-4 bg-[#f8f9fb] p-3 w-full h-max flex flex-col gap-3 rounded-lg">
                    <p className="text-black/60 font-medium text-base pb-2 mb-2">
                      CV Builder
                    </p>
                    <p className="text-black/60 font-medium text-sm pb-6">
                      Use our software and create a CV with a premade template.
                      Let the Genius CV builder help you make your resume fast.
                    </p>
                    <Link
                      href="/resume-builder/app/how-to-start"
                      className="w-full bg-AnalogueShiftsTextColor/80 flex justify-center text-white font-semibold rounded-lg py-3"
                    >
                      Build MyCV
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </section>
  );
}
