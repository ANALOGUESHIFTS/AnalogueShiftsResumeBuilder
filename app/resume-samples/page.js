"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import HomeIcon from "@/public/house-icon.png";
import RightBracket from "@/public/right-bracket.png";
import ResumeTemplateOne from "@/public/template-two.webp";
import ResumeTemplateTwo from "@/public/resume-template-one.webp";
import ResumeTemplateThree from "@/public/resume-template-two.webp";
import ResumeTemplateFour from "@/public/resume-template-three.webp";
import SearchIcon from "@/public/search-icon.png";
import RightArrow from "@/public/right-arrow-icon.png";
import SideBarImage from "@/public/sidebar-image.svg";
import TipMan from "@/public/tip-man.svg";
import SampleOne from "@/public/sample-one.svg";
import SampleTwo from "@/public/sample-two.svg";
import SampleThree from "@/public/sample-three.svg";
import SampleFour from "@/public/sample-four.svg";
import SampleFive from "@/public/sample-five.svg";
import SampleSix from "@/public/sample-six.svg";
import SampleSeven from "@/public/sample-seven.svg";
import SampleEight from "@/public/sample-eight.svg";
import Faqs from "../components/Faqs";
import ResumeSampleSearch from "../components/ResumeSampleSearch";

export default function Page() {
  const [searchModal, setSearchModal] = useState(false);
  const resumeTemplates = [
    {
      image: ResumeTemplateOne,
      path: "/resume-builder/app/how-to-start/resume-01",
    },
    {
      image: ResumeTemplateTwo,
      path: "/resume-builder/app/how-to-start/resume-02",
    },
    {
      image: ResumeTemplateThree,
      path: "/resume-builder/app/how-to-start/resume-03",
    },
    {
      image: ResumeTemplateFour,
      path: "/resume-builder/app/how-to-start/resume-04",
    },
  ];
  const categories = [
    {
      name: "Arts, Culture & Media",
      path: "/resume-samples#arts-culture-media",
    },
    {
      name: "Banking & Finance",
      path: "/resume-samples#banking-finance",
    },
    {
      name: "Business",
      path: "/resume-samples#business",
    },
    {
      name: "Education & Childcare",
      path: "/resume-samples#education-childcare",
    },
    {
      name: "HealthCare",
      path: "/resume-samples#healthcare",
    },
    {
      name: "Home & Maintenance",
      path: "/resume-samples#home-maintenance",
    },
    {
      name: "Infrastructure & Engineering",
      path: "/resume-samples#infastructure-engineer",
    },
    {
      name: "Life Situation",
      path: "/resume-samples#life-situation",
    },
    {
      name: "Physical Health & Wellness",
      path: "/resume-samples#physical-health-wellness",
    },
    {
      name: "Public Sector & Services",
      path: "/resume-samples#public-sector-services",
    },
    {
      name: "Sales, Support & Marketing",
      path: "/resume-samples#sales-support-marketing",
    },
    {
      name: "Science & Research",
      path: "/resume-samples#science-research",
    },
    {
      name: "Service Industry",
      path: "/resume-samples#service-industry",
    },
    {
      name: "Student",
      path: "/resume-samples#student",
    },
    {
      name: "Technology",
      path: "/resume-samples#technology",
    },
    {
      name: "Transportation & Logistics",
      path: "/resume-samples#transportation-logistics",
    },
  ];

  const samplesData = [
    {
      name: "Arts, Culture & Media",
      id: "arts-culture-media",
      description:
        "As a creative, your resume may be secondary to your portfolio and artistic accomplishments, but it’s still important for showcasing your experience and professional skills. Learn from our sample resumes to best create your own.",
      color: "#4b94ea",
      background: "#e4f0fe",
      samples: [
        {
          name: "Fine Arts & Aesthetics",
          image: ResumeTemplateOne,
          relatedLinks: [
            {
              name: "Acting Resume",
              path: "/resume-samples/acting-resume-example",
            },
            {
              name: "Artist Resume",
              path: "/resume-samples/artist-resume-example",
            },
            {
              name: "Dance Resume",
              path: "/resume-samples/dance-resume",
            },
            {
              name: "Model Resume",
              path: "/resume-samples/model-resume",
            },
          ],
        },
        {
          name: "Production & Management",
          image: ResumeTemplateTwo,
          relatedLinks: [
            {
              name: "Producer Resume",
              path: "/resume-samples/producer-resume",
            },
            {
              name: "Event Planner Resume",
              path: "/resume-samples/event-planner-resume-example",
            },
          ],
        },
        {
          name: "Visual Arts & Music",
          image: ResumeTemplateThree,
          relatedLinks: [
            {
              name: "Film Resume",
              path: "/resume-samples/film-resume",
            },
            {
              name: "DJ Resume",
              path: "/resume-samples/dj-resume",
            },
          ],
        },
        {
          name: "Writing & Media",
          image: ResumeTemplateFour,
          relatedLinks: [
            {
              name: "Translator Resume",
              path: "/resume-samples/translator-resume",
            },
          ],
        },
      ],
    },
    {
      name: "Banking & Finance",
      id: "banking-finance",
      description:
        "Jobs in finance are competitive because they pay well and have great benefits. Learn how to make a resume that gets you one of those jobs by showcasing your finance-related skills and experience.",
      color: "#ea723c",
      background: "#fdf1eb",
      samples: [
        {
          name: "Accounting",
          image: ResumeTemplateOne,
          relatedLinks: [
            {
              name: "Account Manager Resume",
              path: "/resume-samples/account-manager-resume-example",
            },
            {
              name: "Accounts Receivable Resume",
              path: "/resume-samples/accounts-receivable-resume",
            },
            {
              name: "Tax Intern Resume",
              path: "/resume-samples/tax-intern-resume",
            },
            {
              name: "Debt Collector Resume",
              path: "/resume-samples/debt-collector-resume",
            },
          ],
        },
        {
          name: "Finance",
          image: ResumeTemplateTwo,
          relatedLinks: [
            {
              name: "BookKeeper Resume",
              path: "/resume-samples/bookkeeper-resume-example",
            },
            {
              name: "Finance Resume",
              path: "/resume-samples/finance-resume",
            },
          ],
        },
        {
          name: "Banking & Insurance",
          image: ResumeTemplateThree,
          relatedLinks: [
            {
              name: "Loan Processor",
              path: "/resume-samples/loan-processor-resume",
            },
            {
              name: "Bank Teller Resume",
              path: "/resume-samples/bank-teller-resume-example",
            },
          ],
        },
      ],
    },
  ];

  const differentResumeFormat = [
    {
      image: SampleOne,
      path: "/blog/resume-help/chronological-resume",
      name: "Chronological resume",
      description:
        "A chronological resume organizes a candidate’s work history with examples of their most recent jobs at the top.",
    },
    {
      image: SampleTwo,
      path: "/blog/resume-help/combination-resume",
      name: "Combination resume",
      description:
        "A combination resume example features a full experience section with an equally long skills section.",
    },
    {
      image: SampleThree,
      path: "/blog/resume-help/functional-resume",
      name: "Functional resume",
      description:
        "Functional resume samples focus on skills rather than work history, making them best if you’re changing careers.",
    },
    {
      image: SampleFour,
      path: "/blog/resume-help/infographic-resume",
      name: "Infographic resume",
      description:
        "An infographic resume example uses visual elements to highlight a candidate’s creative qualifications.",
    },
    {
      image: SampleFive,
      path: "/blog/resume-help/one-page-resume",
      name: "One Page resume",
      description:
        "Most qualified jobseekers have one-page resumes. Do you know how to fit all of your details onto one page?",
    },
    {
      image: SampleSix,
      path: "/blog/resume-help/two-page-resume",
      name: "Two Page resume",
      description:
        "A two-page resume is long by necessity, and only includes relevant examples of skills and work experience.",
    },
    {
      image: SampleSeven,
      path: "/blog/resume-help/tiktok-resume",
      name: "TikTok resume",
      description:
        "Presenting your qualifications on TikTok is a great way to grab attention and show off your social media prowess.",
    },
    {
      image: SampleEight,
      path: "/blog/resume-help/video-resume",
      name: "Video resume",
      description:
        "Video resumes can make your job application more memorable, and also let you highlight your software skills.",
    },
  ];

  return (
    <>
      {searchModal && (
        <ResumeSampleSearch cancel={() => setSearchModal(false)} />
      )}
      <main className="w-full h-auto">
        <main className="w-full items-center h-max py-[100px] px-10 max-[800px]:px-5  bg-white">
          <div className="flex w-full gap-4 items-center pb-8">
            <Link href="/" className="flex gap-1.5 items-center">
              <Image src={HomeIcon} alt="Home Icon" className="w-7 h-7" />
              <p className="text-black/80 font-medium text-sm hover:underline">
                Home
              </p>
            </Link>
            <Image src={RightBracket} alt="Divider Icon" className="w-5 h-4" />
            <p className="text-black/50 font-medium text-sm">Resume Examples</p>
          </div>
          <div className="w-full flex flex-col items-center">
            <p className="pb-5 text-[2.6rem] w-[700px] max-[900px]:w-[90%] text-center max-[900px]:text-xl font-extrabold text-black/80">
              Resume Examples for Any Job or Experience Level
            </p>
            <p className="text-black/60 w-[800px] max-[900px]:w-[90%] max-[1050px]:text-center font-normal pb-10 tracking-normal text-base text-center">
              If you’re looking for good resume examples, you’ve come to the
              right place. Each sample resume on this page was approved by a
              professional resume writer, is free to download, and comes with
              job-specific writing tips.
            </p>
            <div className="w-full flex max-[500px]:flex-col justify-center">
              <Link
                className="w-max max-[500px]:w-full px-8  flex justify-center bg-AnalogueShiftsTextColor/80 items-center hover:-translate-y-1 text-black/80 duration-300 hover:scale-105 font-medium text-sm py-3 rounded-lg"
                href="/resume-builder/app/how-to-start"
              >
                Build My Resume
              </Link>
            </div>
          </div>
        </main>
        <section className="mt-10 w-full px-10 max-[800px]:px-5 h-max flex flex-col  bg-no-repeat">
          <p className="pb-6 text-[2.6rem] w-full text-center max-[900px]:text-xl font-extrabold text-black/80">
            Our Most Used Resume Samples
          </p>
          <div className="w-full flex flex-wrap gap-x-4 gap-y-4">
            {resumeTemplates.map((data) => {
              return (
                <Link
                  key={() => Math.random() * Math.random()}
                  href={data.path}
                  className="h-max w-[calc(25%-16px)] max-[1150px]:w-[calc(50%-16px)] max-[650px]:w-full resume-template-link"
                >
                  <div className="w-full h-max  relative template-img-box">
                    <Image
                      src={data.image}
                      alt="Template Image"
                      className="w-full h-max shadow-2xl rounded-lg hover:shadow-inner"
                    />
                    <button className="absolute  opacity-0 translate-y-10 duration-300 bottom-20 left-4 w-[calc(100%-32px)] py-3 hover:bg-AnalogueShiftsTextColor/80 flex justify-center rounded-lg bg-AnalogueShiftsTextColor text-sm font-medium text-black/80">
                      Use This Template
                    </button>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
        <section className="py-[100px] bg-[#fafbfc] h-max w-full  flex flex-col items-center">
          <p className="text-black/50 px-5 pb-1 text-center max-[1050px]:text-center font-bold tracking-wide text-[13px]">
            JOB-SPECIFIC RESUMES
          </p>
          <p className="pb-6 text-[2.6rem] px-5 w-full text-center max-[900px]:text-xl font-extrabold text-black/80">
            Sample Resumes by Industry
          </p>
          <p className="text-black/60 px-5 w-[800px] max-[900px]:w-[90%] max-[1050px]:text-center font-normal pb-10 tracking-normal text-base text-center">
            Writing a resume for a specific job? We have one of the largest
            collections of industry-specific resume examples on the internet.
          </p>
          <div className="w-full px-10 max-[800px]:px-5 z-60 py-5 sticky top-0 left-0 bg-[#fafbfc]">
            <div
              onClick={() => setSearchModal(true)}
              className="w-full h-max overflow-hidden bg-white rounded-lg border flex items-center pl-3"
            >
              <Image
                className="cursor-pointer w-5 h-5 mr-3 opacity-70"
                src={SearchIcon}
                alt="Search Icon"
              />
              <input
                placeholder="Search job title (e.g. 'Engineer')"
                className="text font-normal w-[calc(100%-28px)] py-3.5 outline-none border-none text-black/40 text-[15px]"
              />
            </div>
          </div>
          <div className="w-full pt-10 relative flex justify-between px-10 max-[800px]:px-5 max-[974px]:flex-col max-[974px]:gap-8">
            <div className="w-[30%] max-[974px]:w-full flex flex-col gap-5">
              <div
                id="Categories"
                className="w-full h-max bg-white rounded-lg shadow-2xl p-3"
              >
                <p className="py-2 text-[1.3rem] px-3 w-full max-[900px]:text-2xl font-bold text-black/80">
                  Categories
                </p>
                <div className="w-full max-[974px]:flex-row max-[540px]:flex-col max-[974px]:flex-wrap max-[974px]:gap-y-1.5 max-[974px]:gap-x-0 flex flex-col gap-1.5">
                  {categories.map((data) => {
                    return (
                      <Link
                        key={() => Math.random() * Math.random()}
                        href={data.path}
                        className="w-full max-[974px]:w-6/12 max-[540px]:w-full px-3 py-2 text-base font-medium text-black/60 hover:bg-black/10 rounded-lg"
                      >
                        {data.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
              <Link
                href="#Categories"
                className="w-full max-[974px]:hidden rounded-lg border border-black/70 bg-white flex justify-center py-3 duration-300 hover:bg-transparent hover:-translate-y-1 text-base font-medium text-black/60 items-center gap-3"
              >
                Back to Categories
                <Image
                  src={RightArrow}
                  alt="Right Arrow"
                  className="w-4 h-4 rotate-[-90deg] opacity-70"
                />
              </Link>
              <div className="w-full max-[974px]:hidden h-max sticky top-[130px] bg-white rounded-lg shadow-2xl p-5 gap-4 flex flex-col justify-center">
                <Image src={SideBarImage} alt="Side Bar Image" />
                <p className="text-center font-medium text-base text-black/60 leading-7">
                  Make a job-winning resume in 12 minutes with our{" "}
                  <b>AI-powered resume builder</b>. Simply pick a resume
                  template, fill in your information, and let our software do
                  the rest.
                </p>
                <Link
                  href="/resume-builder/app/how-to-start"
                  className="w-full rounded-lg bg-AnalogueShiftsTextColor flex justify-center py-3 duration-300 hover:-translate-y-1 text-base font-medium text-black/60"
                >
                  Build My Resume Now
                </Link>
              </div>
            </div>
            <div className="w-[65%] max-[974px]:w-full h-max flex flex-col gap-8">
              {samplesData.map((data) => {
                return (
                  <div
                    key={() => Math.random() * Math.random()}
                    id={data.id}
                    className="w-full h-max rounded-xl overflow-hidden border"
                  >
                    <div
                      style={{ backgroundColor: data.background }}
                      className="w-full h-max p-5 flex flex-col"
                    >
                      <p className="text-black/70 text-xl font-bold pb-5">
                        {data.name}
                      </p>
                      <p className="text-black/60 text-base font-[500]">
                        {data.description}
                      </p>
                    </div>
                    <div className="w-full py-6 px-3 bg-white flex flex-col gap-8">
                      {data.samples.map((child) => {
                        return (
                          <div
                            key={() => Math.random() * Math.random()}
                            className="w-full"
                          >
                            <p className="w-full pb-2 mb-3.5 border-b text-base font-medium text-black/70">
                              {child.name}
                            </p>
                            <div className="w-full flex justify-between max-[540px]:flex-col max-[540px]:gap-5">
                              <Image
                                src={child.image}
                                alt="Resume"
                                className="w-1/5 max-[540px]:w-full h-max rounded-lg shadow-xl"
                              />
                              <div className="w-[74%] max-[540px]:w-full max-[540px]:pt-0 max-[540px]:flex-col pt-6 h-max flex flex-wrap gap-y-2.5">
                                {child.relatedLinks.map((link) => {
                                  return (
                                    <Link
                                      key={() => Math.random() * Math.random()}
                                      href={link.path}
                                      className="w-6/12 flex max-[540px]:pl-2 max-[540px]:w-full items-center gap-2"
                                    >
                                      <div
                                        style={{ backgroundColor: data.color }}
                                        className="w-1.5 h-1.5 rounded-full"
                                      ></div>
                                      <p className="text-sm font-medium text-black/50 hover:text-black/60">
                                        {link.name}
                                      </p>
                                    </Link>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section className="w-full bg-white h-max py-[100px] flex flex-col items-center px-10 max-[800px]:px-5">
          <p className="text-black/50 px-5 pb-1 text-center max-[1050px]:text-center font-bold tracking-wide text-[13px]">
            EXAMPLES FOR EVERY SITUATION
          </p>
          <p className="pb-6 text-[2.6rem] px-5 w-full text-center max-[900px]:text-xl font-extrabold text-black/80">
            No work experience or changing careers?
          </p>
          <p className="text-black/60 px-5 w-[800px] max-[900px]:w-[90%] max-[1050px]:text-center font-normal pb-10 tracking-normal text-base text-center">
            No matter where you’re at in life, we have resume examples and
            writing guides to help you make a resume that shows employers why
            you’d be a great hire.
          </p>
          <p className="text-black/60 px-5 w-[800px] max-[900px]:w-[90%] max-[1050px]:text-center font-normal tracking-normal text-base text-center">
            Looking for more ideas beyond just resume samples? Our{" "}
            <Link
              href="/blog/resume-help"
              className="text-AnalogueShiftsTextColor/90 hover:underline"
            >
              Resume Help Blog
            </Link>{" "}
            covers every aspect of resume writing, formatting, and detail
            related to making a resume — many details you may not realize even
            exist.
          </p>
        </section>
        <section className="w-full bg-white flex justify-center px-10 max-[800px]:px-5">
          <div className="w-full h-max bg-[#fafbfc] rounded-xl max-[775px]:items-center px-12 pt-12 max-[775px]:pb-5 flex gap-12 max-[775px]:px-7 max-[775px]:flex-col">
            <Image
              className="w-[200px] max-[775px]:w-[70%]"
              src={TipMan}
              alt=""
            />
            <div className="flex max-[775px]:w-full flex-col">
              <p className="text-black/70 pb-3  font-semibold tracking-wide text-sm">
                EXPERT ADVICE TO GET STARTED
              </p>
              <p className="text-black/60   font-normal tracking-normal text-base">
                After you’ve pulled ideas from our professional resume examples
                and learned{" "}
                <Link
                  href="/blog/resume-help/how-to-write-a-resume"
                  className="text-AnalogueShiftsTextColor/90 hover:underline"
                >
                  how to make a resume
                </Link>
                , download a{" "}
                <Link
                  href="/resume-templates"
                  className="text-AnalogueShiftsTextColor/90 hover:underline"
                >
                  free resume template
                </Link>{" "}
                to save time on formatting.
              </p>
            </div>
          </div>
        </section>
        <section className="w-full bg-white h-max py-[100px] flex flex-col items-center px-10 max-[800px]:px-5">
          <p className="text-black/50 px-5 pb-1 text-center max-[1050px]:text-center font-bold tracking-wide text-[13px]">
            ARTICLES & DOWNLOADABLE TEMPLATES
          </p>
          <p className="pb-6 text-[2.6rem] px-5 w-full text-center max-[900px]:text-xl font-extrabold text-black/80">
            Examples of Different Resume Formats
          </p>
          <div className="w-full flex justify-between flex-wrap gap-y-6">
            {differentResumeFormat.map((data) => {
              return (
                <Link
                  key={() => Math.random() * Math.random()}
                  href={data.path}
                  className="w-[calc(25%-20px)] max-[1064px]:w-[calc(33.3%-20px)] max-[500px]:w-full max-[720px]:w-[calc(50%-20px)] h-max flex flex-col gap-3 hover:opacity-80 resume-format-link"
                >
                  <Image
                    src={data.image}
                    alt=""
                    className="mb-1 w-full h-max rounded-xl shadow-xl"
                  />
                  <p className="text-black/70 font-bold text-xl resume-format-text">
                    {data.name}
                  </p>
                  <p className="text-base font-medium text-black/50">
                    {data.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </section>
        <Faqs />
        <div className="w-full h-[500px] px-10 max-[500px]:px-4 pb-[50px]">
          <div className="w-full h-[450px] rounded-3xl bg-white shadow-2xl p-7 flex justify-center flex-col items-center">
            <p className="py-3 text-[2.6rem] w-[700px] max-[900px]:w-[90%] text-center max-[900px]:text-xl font-extrabold text-black/80">
              Ready to start making your new resume?
            </p>
            <p className="text-black/60 w-[800px] max-[900px]:w-[90%] max-[1050px]:text-center font-normal pb-10 tracking-normal text-base text-center">
              Creating a resume takes time and energy, and even with a lot of
              effort still might not get you the job you want. Our resume
              builder software can help you quickly make a resume that best
              highlights your qualifications and earns you more interviews.
            </p>
            <div className="w-full flex max-[500px]:flex-col justify-center pb-6">
              <Link
                className="w-max max-[500px]:w-full px-8  flex justify-center bg-AnalogueShiftsTextColor/80 items-center hover:-translate-y-1 text-black/80 duration-300 hover:scale-105 font-medium text-sm py-3 rounded-lg"
                href="/resume-builder/app/how-to-start"
              >
                Build My Resume Now
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
