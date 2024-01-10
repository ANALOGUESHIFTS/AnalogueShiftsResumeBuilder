import ResumeTemplateOne from "@/public/template-two.webp";
import ResumeTemplateTwo from "@/public/resume-template-one.webp";
import AdvancedResumeTemplate from "../templates/resume/Advanced";
import { dummyUserData } from "../OtherComponents/data";

export const resumeTemplates = [
  {
    template: <AdvancedResumeTemplate data={dummyUserData} />,
    name: "Advanced Template",
    description:
      "Color helps highlights your contact information and skills sections on the “Advanced” resume template.",
    path: "/resume-builder/app/how-to-start/advanced-resume",
  },
];
export const categories = [
  {
    name: "Arts, Culture & Media",
    path: "/resume-samples#arts-culture-media",
  },
  {
    name: "Banking & Finance",
    path: "/resume-samples#banking-finance",
  },
];

export const samplesData = [
  {
    name: "Arts, Culture & Media",
    id: "arts-culture-media",
    description:
      "For creative professionals, while your portfolio and artistic accomplishments take precedence, your resume remains vital for showcasing experience and professional skills. Gain insights from our sample resumes to effectively create your own.",
    color: "#4b94ea",
    background: "#e4f0fe",
    samples: [
      {
        name: "Fine Arts & Aesthetics",
        template: <AdvancedResumeTemplate data={dummyUserData} />,
        relatedLinks: [],
      },
    ],
  },
  {
    name: "Banking & Finance",
    id: "banking-finance",
    description:
      "Finance jobs are competitive due to attractive pay and benefits. Learn how to create a resume that positions you for success in these roles by highlighting your finance-related skills and experience.",
    color: "#ea723c",
    background: "#fdf1eb",
    samples: [
      {
        name: "Accounting",
        template: <AdvancedResumeTemplate data={dummyUserData} />,
        relatedLinks: [],
      },
    ],
  },
];
