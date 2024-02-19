// Template Components
import AdvancedResumeTemplate from "../../templates/resume/Advanced";
import SimpleTemplate from "../../templates/resume/Simple";
import ProfessionalResumeTemplate from "../../templates/resume/Professional";

// Template Images
import SimpleResumeTemplateImage from "@/public/resume-images/simple-resume.jpg";
import AdvanceResumeTemplateImage from "@/public/resume-images/advanced-resume.png";

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
    linkToTemplate: "/resume-templates#simple",
    id: "simple",
    name: "Simple Template",
    description:
      "Elevate your job application with the Professional Elegance Resume Template, a sleek and modern design crafted to showcase your qualifications in a clear and professional manner. This template combines simplicity with a touch of sophistication, ensuring that your resume stands out while maintaining a professional look.",
    templates: [
      {
        templateImage: SimpleResumeTemplateImage,
        path: "/resume-builder/app/how-to-start/simple",
        component: (data) => <SimpleTemplate data={data} />,
        name: "Simple",
        linkToThisTemplate: "#",
        description:
          "Elevate your job application with the Professional Elegance Resume Template, a sleek and modern design crafted to showcase your qualifications in a clear and professional manner. This template combines simplicity with a touch of sophistication, ensuring that your resume stands out while maintaining a professional look.",
      },
    ],
  },

  {
    linkToTemplate: "/resume-templates#advanced",
    id: "advanced",
    name: "Advanced Template",
    description:
      "Our advanced resume templates are perfect for any job seeker. They’re easy to read, organized neatly, and have just enough color to capture the attention of busy hiring managers.",
    templates: [
      {
        templateImage: AdvanceResumeTemplateImage,
        path: "/resume-builder/app/how-to-start/advanced",
        component: (data) => <AdvancedResumeTemplate data={data} />,
        name: "Advanced",
        linkToThisTemplate: "#",
        description:
          "Our “Advanced” resume template is easy for readers to digest with its clean font and subtle color accents.",
      },
    ],
  },
];

export const resumeNavLinks = [
  {
    name: "Simple",
    subTitle: "AnalogueShifts Simple Resume Template",
    color: "#4b94ea",
    path: "/resume-templates#simple",
  },
  {
    name: "Advanced",
    subTitle: "AnalogueShifts Advanced Resume Template",
    color: "#4b94ea",
    path: "/resume-templates#advanced",
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
        template: SimpleResumeTemplateImage,
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
        template: SimpleResumeTemplateImage,
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
