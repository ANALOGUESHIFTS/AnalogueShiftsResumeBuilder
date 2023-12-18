import ResumeTemplateFour from "@/public/resume-template-three.webp";

import SampleOne from "@/public/sample-one.svg";
import SampleTwo from "@/public/sample-two.svg";
import SampleThree from "@/public/sample-three.svg";
import SampleFour from "@/public/sample-four.svg";
import SampleFive from "@/public/sample-five.svg";
import SampleSix from "@/public/sample-six.svg";
import SampleSeven from "@/public/sample-seven.svg";
import SampleEight from "@/public/sample-eight.svg";

import CoverLetterOne from "@/public/academic-cv.webp";
import CoverLetterTwo from "@/public/nurse-cv.webp";
import CoverLetterThree from "@/public/cover-letter-three.webp";

export const resumeTemplates = [
  {
    image: CoverLetterOne,
    path: "/cover-letter-builder/app",
  },
  {
    image: CoverLetterTwo,
    path: "/cover-letter-builder/app",
  },
  {
    image: CoverLetterThree,
    path: "/cover-letter-builder/app",
  },
  {
    image: ResumeTemplateFour,
    path: "/cover-letter-builder/app",
  },
];
export const categories = [
  {
    name: "Academic CV",
    path: "/cv-examples#academic-cv",
  },
  {
    name: "Nurse CV",
    path: "/cv-examples#nurse-cv",
  },
];

export const samplesData = [
  {
    image: CoverLetterOne,
    name: "Academic CV",
    id: "academic-cv",
    description:
      "If you’re applying for a teaching position at a university (for instance, as a professor or lecturer), this academic CV example should provide some ideas for writing your own CV. An academic CV includes a detailed education section, publications, research projects, grants awarded, professional memberships, and teaching qualifications.",
    color: "#4b94ea",
    background: "#e4f0fe",
  },
  {
    image: CoverLetterTwo,
    name: "Nurse CV",
    id: "nurse-cv",
    description:
      "If you’re applying for a role in nursing, you’ll need a CV that showcases your medical experience, the type of nursing you’re qualified to perform, and your licensure. Here’s an example of a nurse practitioner CV that clearly presents all the candidate’s key qualifications as a nurse:",
    color: "#ea723c",
    background: "#fdf1eb",
  },
];

export const differentResumeFormat = [
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
