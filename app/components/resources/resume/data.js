import BriefCaseIcon from "@/public/briefcase-icon.svg";
import AdvancedResumeTemplate from "../../templates/resume/Advanced";
import ProfessionalResumeTemplate from "../../templates/resume/Professional";
import { dummyUserData } from "../data";

export const resumeSampleLinks = [
  {
    title: "Arts, Culture & Media",
    color: "#79b2f0",
    path: "/resume-samples#arts-culture-media",
  },
  {
    title: "Banking & Finance",
    color: "#ee7856",
    path: "/resume-samples#banking-finance",
  },
];

export const resumeTemplates = [
  {
    theMatchingCoverLetterLink: "/cover-letter-templates#advanced",
    linkToTemplate: "/resume-templates#advanced",
    id: "advanced",
    color: "#4b94ea",
    background: "#e4f0fe",
    icon: BriefCaseIcon,
    name: "Advanced Template",
    description:
      "Our advanced resume templates are perfect for any job seeker. They’re easy to read, organized neatly, and have just enough color to capture the attention of busy hiring managers.",
    templates: [
      {
        color: "#4b94ea",
        path: "/resume-builder/app/how-to-start/advanced-resume",
        template: <AdvancedResumeTemplate data={dummyUserData} />,
        name: "Advanced",
        linkToThisTemplate: "#",
        description:
          "Our “Advanced” resume template is easy for readers to digest with its clean font and subtle color accents.",

        whyIsItCalled:
          "True to its name, the Advanced has a no-nonsense and straightforward design. Its subtle color accent gives it a slight pop of personality but avoids detracting from the meat of the resume — the resume objective and professional experience section.",
        whyShouldYouUseIt:
          "The Advanced's simple layout and design make it suitable for a wide range of positions. Moreover, its lack of visual complexity makes it easy to format. Use this design if you don't have the time or desire to customize and rearrange your resume's sections.",
      },
    ],
  },
  {
    theMatchingCoverLetterLink: "/cover-letter-templates#professional",
    linkToTemplate: "/resume-templates#professional",
    id: "professional",
    color: "#4b94ea",
    background: "#e4f0fe",
    icon: BriefCaseIcon,
    name: "Professional Template",
    description:
      "Our professional resume templates are perfect for any job seeker. They’re easy to read, organized neatly, and have just enough color to capture the attention of busy hiring managers.",
    templates: [
      {
        color: "#4b94ea",
        path: "/resume-builder/app/how-to-start/professional-resume",
        template: <ProfessionalResumeTemplate data={dummyUserData} />,
        name: "Professional",
        linkToThisTemplate: "#",
        description:
          "Our “Professional” resume template is easy for readers to digest with its clean font and subtle color accents.",

        whyIsItCalled:
          "True to its name, the Professional has a no-nonsense and straightforward design. Its subtle color accent gives it a slight pop of personality but avoids detracting from the meat of the resume — the resume objective and professional experience section.",
        whyShouldYouUseIt:
          "The Professional's simple layout and design make it suitable for a wide range of positions. Moreover, its lack of visual complexity makes it easy to format. Use this design if you don't have the time or desire to customize and rearrange your resume's sections.",
      },
    ],
  },
];

export const resumeNavLinks = [
  {
    name: "Advanced",
    subTitle: "AnalogueShifts Advanced Resume Template",
    color: "#4b94ea",
    path: "/resume-templates#advanced",
  },
  {
    name: "Professional",
    subTitle: "AnalogueShifts Professional Resume Template",
    color: "#4b94ea",
    path: "/resume-templates#professional",
  },
];

export const resumeSampleData = [
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

export const resumeHelpLinks = [
  { name: "What is a resume?", path: "/blog" },
  {
    name: "How to make a resume",
    path: "/blog",
  },
  { name: "The best resume format", path: "/blogt" },
  {
    name: "Skills for your resume",
    path: "/blog",
  },
  {
    name: "Resume summary examples",
    path: "/blog",
  },
];
