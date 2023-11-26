"use client";
import { useState, useEffect } from "react";

import Link from "next/link";
import BriefCaseIcon from "@/public/briefcase-icon.svg";
import Cube from "@/public/cube.svg";
import Bulb from "@/public/bulb.svg";
import Smile from "@/public/smile.svg";
import RightArrow from "@/public/right-arrow-icon.png";
import ResumeTemplateOne from "@/public/template-two.webp";
import ResumeTemplateTwo from "@/public/resume-template-one.webp";
import ResumeTemplateThree from "@/public/resume-template-two.webp";
import Image from "next/image";
import ViewTemplateModal from "./ViewTemplateModal";

export default function FreeResumeTemplates() {
  const [dataToView, setDataToView] = useState(null);
  const [modal, setModal] = useState(false);
  const links = [
    {
      text: "Professional",
      color: "#4b94ea",
      path: "/resume-templates#professional",
    },
    {
      text: "Modern",
      color: "#ea723c",
      path: "/resume-templates#modern",
    },
    {
      text: "Creative",
      color: "#2ca482",
      path: "/resume-templates#creative",
    },
    {
      text: "Simple",
      color: "#f892bc",
      path: "/resume-templates#simple",
    },
    {
      text: "Google Docs",
      color: "#FAE315",
      path: "/resume-templates#google-docs",
    },
    {
      text: "Picture",
      color: "#4b94ea",
      path: "/resume-templates#picture",
    },
    {
      text: "CV",
      color: "#ea723c",
      path: "/resume-templates#cv",
    },
    {
      text: "Microsoft Word",
      color: "#2ca482",
      path: "/resume-templates#microsoft-word",
    },
  ];

  const ResumeTemplates = [
    {
      theMatchingCoverLetterLink:
        "/cover-letter-templates/professional-templates",
      linkToTemplate: "/resume-templates/professional-templates",
      id: "professional",
      color: "#4b94ea",
      background: "#e4f0fe",
      icon: BriefCaseIcon,
      name: "Professional Templates",
      description:
        "Our professional resume templates are perfect for any job seeker. They’re easy to read, organized neatly, and have just enough color to capture the attention of busy hiring managers.",
      templates: [
        {
          color: "#4b94ea",
          path: "/resume-builder/app/how-to-start/resume-01",
          image: ResumeTemplateOne,
          name: "Minimalist",
          linkToThisTemplate:
            "/resume-templates/professional-templates#minimalist",
          description:
            "Our “Minimalist” resume template is easy for readers to digest with its clean font and subtle color accents.",
          linkToDocs:
            "https://docs.google.com/document/d/1Z-69p-Awwqk7f3LG8yEzCqHUVKFdKdP5/copy",
          whyIsItCalled:
            "True to its name, the Minimalist has a no-nonsense and straightforward design. Its subtle color accent gives it a slight pop of personality but avoids detracting from the meat of the resume — the resume objective and professional experience section.",
          whyShouldYouUseIt:
            "The Minimalist's simple layout and design make it suitable for a wide range of positions. Moreover, its lack of visual complexity makes it easy to format. Use this design if you don't have the time or desire to customize and rearrange your resume's sections.",
          formatAndStylingDetails: {
            majorFeatures: [
              "Colored name header, contact icons, and skill meters",
              "Left-hand column with sections for contact info, education, skills, and awards",
            ],
            textDetails: [
              "Name/Header Font: Raleway",
              "Content Font:&nbsp;Calibri",
              "Name Font Size: 35pt",
              "Header Font Size: 12pt",
              "Job Description Font Size: 11pt",
            ],
          },
        },
        {
          color: "#4b94ea",
          path: "/resume-builder/app/how-to-start/resume-02",
          image: ResumeTemplateTwo,
          name: "Cosmopolitan",
          linkToThisTemplate:
            "/resume-templates/professional-templates#cosmopolitan",
          description:
            "The “Cosmopolitan” resume template features a sophisticated header with pastel color options. Stylish and clean.",
          linkToDocs:
            "https://docs.google.com/document/d/18zVdyg0VImIdneFw2GFekxLHY0bO4YVF/copy",
          whyIsItCalled:
            "The Cosmopolitan's stately design has a simple but refined layout. Instead of overwhelming readers, its subdued coloring makes the template easy to read and pleasant to look at. It also draws subtle attention to the candidate's name -- the only completely uppercase header in the resume.",
          whyShouldYouUseIt:
            "Professional and sleek, this template can be adapted to suit positions in all kinds of industries, from art to education to sales.",
          formatAndStylingDetails: {
            majorFeatures: [
              "Two-column layout",
              "White space balanced between neat color blocks",
            ],
            textDetails: [
              "Name/Header Font: Raleway",
              "Content Font:&nbsp;Calibri",
              "Name Font Size: 35pt",
              "Header Font Size: 12pt",
              "Job Description Font Size: 11pt",
            ],
          },
        },
        {
          color: "#4b94ea",
          path: "/resume-builder/app/how-to-start/resume-03",
          image: ResumeTemplateThree,
          name: "Executive",
          linkToThisTemplate:
            "/resume-templates/professional-templates#executive",
          description:
            "Perfect for managers, the “Executive” template’s timeline graphic highlights your experience section above all.",
          linkToDocs:
            "https://docs.google.com/document/d/1PjUVkj-uGQKSr_oU5uU-rmflaQGIlHs3/copy",
          whyIsItCalled:
            "The Executive template is the Bentley of the professional resumes. No other resume comes close to the refined and stylish format of the executive. Other templates can’t stand up to the exclusive feel that the Executive template gives off. The sophistication of the alignments and the use of vertical and horizontal line breaks have no equal in the resume world.",
          whyShouldYouUseIt:
            "The Executive is for anyone who wants to impress their potential employers with a crisp and well-laid out format. This is a favorite of veteran professionals who are looking to upgrade their resume. The Executive works best with applicants who are looking for the ultimate consolidation of their extensive experience.",
          formatAndStylingDetails: {
            majorFeatures: [
              "Contact details imprinted in white into a black bar",
              "Headings featured on the left side of the resume with a vertical double bar for separation",
            ],
            textDetails: [
              "Name/Header Font: Raleway",
              "Content Font:&nbsp;Calibri",
              "Name Font Size: 35pt",
              "Header Font Size: 12pt",
              "Job Description Font Size: 11pt",
            ],
          },
        },
      ],
    },
    {
      theMatchingCoverLetterLink: "/cover-letter-templates/modern-templates",
      linkToTemplate: "/resume-templates/modern-templates",
      id: "modern",
      color: "#ea723c",
      background: "#fdf1eb",
      icon: Cube,
      name: "Modern Templates",
      description:
        "Our modern resume template collection embraces the new while paying tribute to the traditional. If you’re looking for a fresh resume design that organizes your qualifications to help you stand out, use one of our modern templates in your job search.",
      templates: [
        {
          color: "#ea723c",
          path: "/resume-builder/app/how-to-start/resume-01",
          image: ResumeTemplateOne,
          name: "Minimalist",
          linkToThisTemplate:
            "/resume-templates/professional-templates#minimalist",
          description:
            "Our “Minimalist” resume template is easy for readers to digest with its clean font and subtle color accents.",
          linkToDocs:
            "https://docs.google.com/document/d/1Z-69p-Awwqk7f3LG8yEzCqHUVKFdKdP5/copy",
          whyIsItCalled:
            "True to its name, the Minimalist has a no-nonsense and straightforward design. Its subtle color accent gives it a slight pop of personality but avoids detracting from the meat of the resume — the resume objective and professional experience section.",
          whyShouldYouUseIt:
            "The Minimalist's simple layout and design make it suitable for a wide range of positions. Moreover, its lack of visual complexity makes it easy to format. Use this design if you don't have the time or desire to customize and rearrange your resume's sections.",
          formatAndStylingDetails: {
            majorFeatures: [
              "Colored name header, contact icons, and skill meters",
              "Left-hand column with sections for contact info, education, skills, and awards",
            ],
            textDetails: [
              "Name/Header Font: Raleway",
              "Content Font:&nbsp;Calibri",
              "Name Font Size: 35pt",
              "Header Font Size: 12pt",
              "Job Description Font Size: 11pt",
            ],
          },
        },
        {
          color: "#ea723c",
          path: "/resume-builder/app/how-to-start/resume-02",
          image: ResumeTemplateTwo,
          name: "Cosmopolitan",
          linkToThisTemplate:
            "/resume-templates/professional-templates#cosmopolitan",
          description:
            "The “Cosmopolitan” resume template features a sophisticated header with pastel color options. Stylish and clean.",
          linkToDocs:
            "https://docs.google.com/document/d/18zVdyg0VImIdneFw2GFekxLHY0bO4YVF/copy",
          whyIsItCalled:
            "The Cosmopolitan's stately design has a simple but refined layout. Instead of overwhelming readers, its subdued coloring makes the template easy to read and pleasant to look at. It also draws subtle attention to the candidate's name -- the only completely uppercase header in the resume.",
          whyShouldYouUseIt:
            "Professional and sleek, this template can be adapted to suit positions in all kinds of industries, from art to education to sales.",
          formatAndStylingDetails: {
            majorFeatures: [
              "Two-column layout",
              "White space balanced between neat color blocks",
            ],
            textDetails: [
              "Name/Header Font: Raleway",
              "Content Font:&nbsp;Calibri",
              "Name Font Size: 35pt",
              "Header Font Size: 12pt",
              "Job Description Font Size: 11pt",
            ],
          },
        },
        {
          color: "#ea723c",
          path: "/resume-builder/app/how-to-start/resume-03",
          image: ResumeTemplateThree,
          name: "Executive",
          linkToThisTemplate:
            "/resume-templates/professional-templates#executive",
          description:
            "Perfect for managers, the “Executive” template’s timeline graphic highlights your experience section above all.",
          linkToDocs:
            "https://docs.google.com/document/d/1PjUVkj-uGQKSr_oU5uU-rmflaQGIlHs3/copy",
          whyIsItCalled:
            "The Executive template is the Bentley of the professional resumes. No other resume comes close to the refined and stylish format of the executive. Other templates can’t stand up to the exclusive feel that the Executive template gives off. The sophistication of the alignments and the use of vertical and horizontal line breaks have no equal in the resume world.",
          whyShouldYouUseIt:
            "The Executive is for anyone who wants to impress their potential employers with a crisp and well-laid out format. This is a favorite of veteran professionals who are looking to upgrade their resume. The Executive works best with applicants who are looking for the ultimate consolidation of their extensive experience.",
          formatAndStylingDetails: {
            majorFeatures: [
              "Contact details imprinted in white into a black bar",
              "Headings featured on the left side of the resume with a vertical double bar for separation",
            ],
            textDetails: [
              "Name/Header Font: Raleway",
              "Content Font:&nbsp;Calibri",
              "Name Font Size: 35pt",
              "Header Font Size: 12pt",
              "Job Description Font Size: 11pt",
            ],
          },
        },
      ],
    },
    {
      theMatchingCoverLetterLink: "/cover-letter-templates/creative-templates",
      linkToTemplate: "/resume-templates/creative-templates",
      id: "creative",
      color: "#2ca482",
      background: "#f0faf5",
      icon: Bulb,
      name: "Creative Templates",
      description:
        "Looking for work in a visual field like design, fashion, or advertising? Apply for your next job with your favorite of our creative resume templates. Simply download the resume template zip file — which includes six different color variations for Microsoft Word — and fill it out with your own information.",
      templates: [
        {
          color: "#2ca482",
          path: "/resume-builder/app/how-to-start/resume-01",
          image: ResumeTemplateOne,
          name: "Minimalist",
          linkToThisTemplate:
            "/resume-templates/professional-templates#minimalist",
          description:
            "Our “Minimalist” resume template is easy for readers to digest with its clean font and subtle color accents.",
          linkToDocs:
            "https://docs.google.com/document/d/1Z-69p-Awwqk7f3LG8yEzCqHUVKFdKdP5/copy",
          whyIsItCalled:
            "True to its name, the Minimalist has a no-nonsense and straightforward design. Its subtle color accent gives it a slight pop of personality but avoids detracting from the meat of the resume — the resume objective and professional experience section.",
          whyShouldYouUseIt:
            "The Minimalist's simple layout and design make it suitable for a wide range of positions. Moreover, its lack of visual complexity makes it easy to format. Use this design if you don't have the time or desire to customize and rearrange your resume's sections.",
          formatAndStylingDetails: {
            majorFeatures: [
              "Colored name header, contact icons, and skill meters",
              "Left-hand column with sections for contact info, education, skills, and awards",
            ],
            textDetails: [
              "Name/Header Font: Raleway",
              "Content Font:&nbsp;Calibri",
              "Name Font Size: 35pt",
              "Header Font Size: 12pt",
              "Job Description Font Size: 11pt",
            ],
          },
        },
        {
          color: "#2ca482",
          path: "/resume-builder/app/how-to-start/resume-02",
          image: ResumeTemplateTwo,
          name: "Cosmopolitan",
          linkToThisTemplate:
            "/resume-templates/professional-templates#cosmopolitan",
          description:
            "The “Cosmopolitan” resume template features a sophisticated header with pastel color options. Stylish and clean.",
          linkToDocs:
            "https://docs.google.com/document/d/18zVdyg0VImIdneFw2GFekxLHY0bO4YVF/copy",
          whyIsItCalled:
            "The Cosmopolitan's stately design has a simple but refined layout. Instead of overwhelming readers, its subdued coloring makes the template easy to read and pleasant to look at. It also draws subtle attention to the candidate's name -- the only completely uppercase header in the resume.",
          whyShouldYouUseIt:
            "Professional and sleek, this template can be adapted to suit positions in all kinds of industries, from art to education to sales.",
          formatAndStylingDetails: {
            majorFeatures: [
              "Two-column layout",
              "White space balanced between neat color blocks",
            ],
            textDetails: [
              "Name/Header Font: Raleway",
              "Content Font:&nbsp;Calibri",
              "Name Font Size: 35pt",
              "Header Font Size: 12pt",
              "Job Description Font Size: 11pt",
            ],
          },
        },
        {
          color: "#2ca482",
          path: "/resume-builder/app/how-to-start/resume-03",
          image: ResumeTemplateThree,
          name: "Executive",
          linkToThisTemplate:
            "/resume-templates/professional-templates#executive",
          description:
            "Perfect for managers, the “Executive” template’s timeline graphic highlights your experience section above all.",
          linkToDocs:
            "https://docs.google.com/document/d/1PjUVkj-uGQKSr_oU5uU-rmflaQGIlHs3/copy",
          whyIsItCalled:
            "The Executive template is the Bentley of the professional resumes. No other resume comes close to the refined and stylish format of the executive. Other templates can’t stand up to the exclusive feel that the Executive template gives off. The sophistication of the alignments and the use of vertical and horizontal line breaks have no equal in the resume world.",
          whyShouldYouUseIt:
            "The Executive is for anyone who wants to impress their potential employers with a crisp and well-laid out format. This is a favorite of veteran professionals who are looking to upgrade their resume. The Executive works best with applicants who are looking for the ultimate consolidation of their extensive experience.",
          formatAndStylingDetails: {
            majorFeatures: [
              "Contact details imprinted in white into a black bar",
              "Headings featured on the left side of the resume with a vertical double bar for separation",
            ],
            textDetails: [
              "Name/Header Font: Raleway",
              "Content Font:&nbsp;Calibri",
              "Name Font Size: 35pt",
              "Header Font Size: 12pt",
              "Job Description Font Size: 11pt",
            ],
          },
        },
      ],
    },
    {
      theMatchingCoverLetterLink: "/cover-letter-templates/simple-templates",
      linkToTemplate: "/resume-templates/simple-templates",
      id: "simple",
      color: "#f892bc",
      background: "#fdedf5",
      icon: Smile,
      name: "Simple Templates",
      description:
        "Love the clean, no-frills look of a traditional resume? Our simple and basic resume templates are easy to modify and compatible with any Word processor.",
      templates: [
        {
          color: "#f892bc",
          path: "/resume-builder/app/how-to-start/resume-01",
          image: ResumeTemplateOne,
          name: "Minimalist",
          linkToThisTemplate:
            "/resume-templates/professional-templates#minimalist",
          description:
            "Our “Minimalist” resume template is easy for readers to digest with its clean font and subtle color accents.",
          linkToDocs:
            "https://docs.google.com/document/d/1Z-69p-Awwqk7f3LG8yEzCqHUVKFdKdP5/copy",
          whyIsItCalled:
            "True to its name, the Minimalist has a no-nonsense and straightforward design. Its subtle color accent gives it a slight pop of personality but avoids detracting from the meat of the resume — the resume objective and professional experience section.",
          whyShouldYouUseIt:
            "The Minimalist's simple layout and design make it suitable for a wide range of positions. Moreover, its lack of visual complexity makes it easy to format. Use this design if you don't have the time or desire to customize and rearrange your resume's sections.",
          formatAndStylingDetails: {
            majorFeatures: [
              "Colored name header, contact icons, and skill meters",
              "Left-hand column with sections for contact info, education, skills, and awards",
            ],
            textDetails: [
              "Name/Header Font: Raleway",
              "Content Font:&nbsp;Calibri",
              "Name Font Size: 35pt",
              "Header Font Size: 12pt",
              "Job Description Font Size: 11pt",
            ],
          },
        },
        {
          color: "#f892bc",
          path: "/resume-builder/app/how-to-start/resume-02",
          image: ResumeTemplateTwo,
          name: "Cosmopolitan",
          linkToThisTemplate:
            "/resume-templates/professional-templates#cosmopolitan",
          description:
            "The “Cosmopolitan” resume template features a sophisticated header with pastel color options. Stylish and clean.",
          linkToDocs:
            "https://docs.google.com/document/d/18zVdyg0VImIdneFw2GFekxLHY0bO4YVF/copy",
          whyIsItCalled:
            "The Cosmopolitan's stately design has a simple but refined layout. Instead of overwhelming readers, its subdued coloring makes the template easy to read and pleasant to look at. It also draws subtle attention to the candidate's name -- the only completely uppercase header in the resume.",
          whyShouldYouUseIt:
            "Professional and sleek, this template can be adapted to suit positions in all kinds of industries, from art to education to sales.",
          formatAndStylingDetails: {
            majorFeatures: [
              "Two-column layout",
              "White space balanced between neat color blocks",
            ],
            textDetails: [
              "Name/Header Font: Raleway",
              "Content Font:&nbsp;Calibri",
              "Name Font Size: 35pt",
              "Header Font Size: 12pt",
              "Job Description Font Size: 11pt",
            ],
          },
        },
        {
          color: "#f892bc",
          path: "/resume-builder/app/how-to-start/resume-03",
          image: ResumeTemplateThree,
          name: "Executive",
          linkToThisTemplate:
            "/resume-templates/professional-templates#executive",
          description:
            "Perfect for managers, the “Executive” template’s timeline graphic highlights your experience section above all.",
          linkToDocs:
            "https://docs.google.com/document/d/1PjUVkj-uGQKSr_oU5uU-rmflaQGIlHs3/copy",
          whyIsItCalled:
            "The Executive template is the Bentley of the professional resumes. No other resume comes close to the refined and stylish format of the executive. Other templates can’t stand up to the exclusive feel that the Executive template gives off. The sophistication of the alignments and the use of vertical and horizontal line breaks have no equal in the resume world.",
          whyShouldYouUseIt:
            "The Executive is for anyone who wants to impress their potential employers with a crisp and well-laid out format. This is a favorite of veteran professionals who are looking to upgrade their resume. The Executive works best with applicants who are looking for the ultimate consolidation of their extensive experience.",
          formatAndStylingDetails: {
            majorFeatures: [
              "Contact details imprinted in white into a black bar",
              "Headings featured on the left side of the resume with a vertical double bar for separation",
            ],
            textDetails: [
              "Name/Header Font: Raleway",
              "Content Font:&nbsp;Calibri",
              "Name Font Size: 35pt",
              "Header Font Size: 12pt",
              "Job Description Font Size: 11pt",
            ],
          },
        },
      ],
    },
  ];

  useEffect(() => {
    if (dataToView) {
      setModal(true);
    }
  }, [dataToView]);

  return (
    <>
      {modal && (
        <ViewTemplateModal
          builder="Resume"
          data={dataToView}
          closeModal={() => {
            setModal(false);
            setDataToView(null);
          }}
        />
      )}
      <section className="w-full h-max relative">
        <nav className="sticky top-0 w-full bg-white h-max py-4 z-60 px-5 overflow-x-auto">
          <div className="flex gap-4 w-max">
            {links.map((data) => {
              return (
                <Link
                  key={crypto.randomUUID()}
                  style={{ border: `1px solid ${data.color}` }}
                  href={data.path}
                  className="py-2.5 hover:scale-105 duration-300 w-max px-5 rounded-full text-sm font-semibold text-black/80"
                >
                  {data.text}
                </Link>
              );
            })}
          </div>
        </nav>
        <div className="w-full pt-6 flex flex-col pb-[100px] gap-[100px]">
          {ResumeTemplates.map((data) => {
            return (
              <section
                key={crypto.randomUUID()}
                className="w-full"
                id={data.id}
              >
                <div
                  style={{ backgroundColor: data.background }}
                  className="w-full h-max px-10 pt-10 pb-[120px] flex flex-col"
                >
                  <p
                    style={{ color: data.color }}
                    className="text-sm font-medium"
                  >
                    RESUME TEMPLATE
                  </p>
                  <div className="flex py-3.5 gap-3.5 items-center">
                    <div className="w-14 h-14 rounded-lg bg-white shadow-xl flex justify-center items-center">
                      <Image
                        src={data.icon}
                        alt="Icon"
                        className="w-[50%] h-[50%]"
                      />
                    </div>
                    <p className=" text-[2.5rem] max-[900px]:text-xl font-bold text-black/80">
                      {data.name}
                    </p>
                  </div>
                  <p className="text-black/60 font-medium text-sm w-[900px] max-w-full">
                    {data.description}
                  </p>
                </div>
                <div className="w-full px-10 max-[800px]:px-5 flex flex-wrap gap-x-4 gap-y-4 translate-y-[-90px]">
                  {data.templates.map((template) => {
                    return (
                      <div
                        key={crypto.randomUUID()}
                        className="h-max w-[calc(33.3%-16px)] max-[1150px]:w-[calc(50%-16px)] max-[650px]:w-full rounded-lg resume-template-link resume-template-link2"
                      >
                        <div className="w-full h-[500px] max-[900px]:h-max relative template-img-box">
                          <Image
                            src={template.image}
                            alt="Template Image"
                            className="w-full h-full max-[900px]:h-max rounded-lg"
                          />
                          <div className="absolute  opacity-0 translate-y-2 duration-300 bottom-4 left-4 w-[calc(100%-32px)] flex flex-col gap-3 button-row">
                            <button className="w-full py-3 hover:bg-AnalogueShiftsTextColor/80 flex justify-center rounded-lg bg-AnalogueShiftsTextColor text-sm font-medium text-black/80">
                              Build My Resume
                            </button>
                            <button
                              onClick={() => setDataToView(template)}
                              style={{ borderColor: data.color }}
                              className="w-full border hover:bg-white/80 py-3 flex justify-center rounded-lg bg-white text-sm font-medium text-black/80"
                            >
                              View Template
                            </button>
                          </div>
                        </div>
                        <div className="w-full pl-2 h-[120px]">
                          <p className="pt-6 text-base text-black/90 font-medium pb-2">
                            {template.name}
                          </p>
                          <p className="text-black/60 font-medium text-sm">
                            {template.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="px-10 max-[800px]:px-5 w-full pt-2">
                  <div className="w-full flex justify-between items-center p-3.5 rounded-lg border flex-wrap gap-x-5 gap-y-5">
                    <Link
                      className="text-black/70 font-semibold text-sm flex items-center gap-2"
                      href={data.theMatchingCoverLetterLink}
                    >
                      Get The Matching Cover Letter
                      <Image
                        src={RightArrow}
                        alt="Icon"
                        className="w-4 h-4 opacity-70"
                      />
                    </Link>
                    <Link
                      style={{ backgroundColor: data.color }}
                      className="text-white font-semibold text-sm px-6 py-2.5 rounded-lg"
                      href={data.linkToTemplate}
                    >
                      View More Templates
                    </Link>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </section>
    </>
  );
}
