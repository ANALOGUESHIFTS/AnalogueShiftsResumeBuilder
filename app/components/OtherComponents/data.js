import BriefCaseIcon from "@/public/briefcase-icon.svg";
import PickAResumeTemplate from "@/public/pick-a-resume-template.svg";
import CustomizeEachSection from "@/public/generate-bullet-point.svg";
import EmphasizeYourSkills from "@/public/emphasize-your-skill.svg";
import AttachACoverLetter from "@/public/attach-cover-letter.svg";
import AdvancedResumeTemplate from "../templates/resume/Advanced";
import ProfessionalResumeTemplate from "../templates/resume/Professional";

export const dummyUserData = {
  contactData: {
    "First Name": "Promise",
    "Last Name": "Onuoha",
    "Desired Job Title": "Frontend Engineer",
    Phone: "+2349075868706",
    Country: "Nigeria",
    City: "Aba",
    "State / Province": "Abia",
    "LinkedIn Url": "https://www.linkedin.com/in/promise-onuoha",
    Email: "pebuka351@gmail.com",
  },
  experienceData: [
    {
      title: "Experience 2",
      jobTitle: "Frontend Engineer",
      companyName: "AnalogueShifts",
      country: "Nigeria",
      state: "",
      city: "",
      description:
        "Highly skilled and motivated Frontend Engineer with a proven track record at Analogueshifts, adept at translating design concepts into seamless and responsive user interfaces. Proficient in a range of modern web technologies, including HTML, CSS, and JavaScript frameworks such as React. Demonstrated expertise in optimizing website performance and user experience. Strong collaborative and communication skills, with a keen eye for detail and a passion for staying abreast of emerging frontend development trends. Committed to delivering high-quality code and innovative solutions to enhance Analogueshifts' digital presence and user engagement.",
      startMonth: "October",
      endMonth: "",
      startYear: "2023",
      endYear: "",
      currentlyWorkHere: true,
    },
  ],
  educationData: [
    {
      title: "Education 1",
      schoolName: "St micheal's comprehensive college",
      schoolLocation: "Aba, Abia, Nigeria",
      degreeOfProgram: "High school",
      fieldOfStudy: "Art",
      graduationMonth: "August",
      graduationYear: "2023",
      additionalInfo:
        "I acquired my academic foundation at this esteemed institution, contributing to my professional growth and expertise.",
    },
  ],
  certificationData: [
    {
      id: "certification-24af741c-5e04-4982-8f53-932cbc580851",
      certification: "Javascript Algorithmns and data structures",
    },
    {
      id: "certification-32a2bc17-eee5-4cbb-bff0-e3d9b11bea8e",
      certification: "Advanced CSS Animations",
    },
  ],
  skillsData: [
    {
      id: "skill-de71adbd-596e-440c-b3cd-a73b0486af1f",
      skill: "Javascript",
    },
    {
      id: "skill-aac37ca9-dc81-4adc-9ae3-39d22f886a5c",
      certification: "",
      skill: "Typescript",
    },
    {
      id: "skill-b9bba46b-4ee6-4b6a-a9b3-7700bbe1389f",
      certification: "",
      skill: "React",
    },
    {
      id: "skill-de647520-e6ad-4676-8542-7a40489cd445",
      certification: "",
      skill: "Next",
    },
  ],
  summaryData:
    "<p>I am a Frontend Developer currently expanding my skillset by delving into backend development, with a focus on MERN Stack</p>",
  referencesData: [
    {
      title: "Reference 1",
      firstName: "Kenneth",
      lastName: "Malaka",
      positionTitle: "CEO",
      email: "hello@analogueshifts.com",
      phone: "+2349075868706",
      relationshipToYou: "Employer",
      companyName: "AnalogueShifts",
    },
  ],
  finalizeData: {
    awards: [
      {
        id: "award-c6a4ccf4-298f-40ca-929b-e4cd85d3b2c8",
        award: "Innovative Frontend Solution Award",
      },
    ],
    publications: [
      {
        id: "publication-f8df2022-7cf1-4a59-bd7c-bbb29b703535",
        publication: "CSS-Tricks",
      },
    ],
    customDatas: [
      {
        id: "customData-7fc66f74-bbb1-4de7-9013-454f1978e98b",
        name: "Frontend Developer at AnalogueShifts",
        description:
          "As a skilled Frontend Developer contributing to the dynamic team at AnalogueShifts, I bring a passion for crafting engaging user interfaces. With a solid foundation in HTML, CSS, and JavaScript, I specialize in leveraging React.js to create responsive and visually appealing web applications. Committed to staying updated on the latest frontend trends, I actively contribute to the seamless user experience of AnalogueShifts' digital platforms. Collaborative by nature, I thrive in a team environment and am dedicated to delivering high-quality frontend solutions that elevate the company's online presence.",
      },
    ],
  },
};

export const resumeLinks = [
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

export const coverLetterLinks = [
  {
    title: "General Cover Letter",
    color: "#79b2f0",
    path: "/cover-letter-examples#general-cover-letter-example",
  },
  {
    title: "Entry-level cover letter example",
    color: "#ee7856",
    path: "/cover-letter-examples#entry-level-cover-letter-example",
  },
];

export const coverLetterTemplates = [];

export const coverLetterNavLinks = [];

export const ResumeTemplates = [
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
    text: "Advanced",
    color: "#4b94ea",
    path: "/resume-templates#advanced",
  },
  {
    text: "Professional",
    color: "#4b94ea",
    path: "/resume-templates#professional",
  },
];

export const cvTemplates = [
  {
    id: "advanced",
    template: <AdvancedResumeTemplate data={dummyUserData} />,
    name: "Advanced",
    whyShouldYouUseThisTemplate: (
      <p className="text-sm font-medium text-black/60">
        The Advanced CV template is simple yet formal, making it the ideal CV
        design for anyone writing academic CVs, like an adjunct professor CV ,
        or a college professor CV .
      </p>
    ),
  },
  {
    id: "professional",
    template: <ProfessionalResumeTemplate data={dummyUserData} />,
    name: "Professional",
    whyShouldYouUseThisTemplate: (
      <p className="text-sm font-medium text-black/60">
        The Professional CV template is simple yet formal, making it the ideal
        CV design for anyone writing academic CVs, like an adjunct professor CV
        , or a college professor CV .
      </p>
    ),
  },
];

export const cvNavLinks = [
  {
    text: "Advanced",
    path: "/cv-templates#advanced",
  },
  {
    text: "Professional",
    path: "/cv-templates#professional",
  },
];
export const levelUpLinks = [
  {
    path: "/resume-templates#advanced",
    number: "01",
    color: "#4b94ea",
    icon: PickAResumeTemplate,
    title: "Pick A Resume Template",
    description:
      "With a good resume template, you don't need to worry about details like formatting.",
    linkText: "Get a professional template",
  },
  {
    path: "/blog",
    number: "02",
    color: "#ea723c",
    icon: CustomizeEachSection,
    title: "Customize Each Section",
    description:
      "Fill in your personal information and write about your work experience.",
    linkText: "Learn how to write a resume",
  },
  {
    path: "/blog",
    number: "03",
    color: "#2ca482",
    icon: EmphasizeYourSkills,
    title: "Emphasize Your Skills",
    description:
      "Take skills from the job advertisement, then tie them into your resume.",
    linkText: "Pick skills for your resume",
  },
  {
    path: "/blog",
    number: "04",
    color: "#f892bc",
    icon: AttachACoverLetter,
    title: "Attach A Cover Letter",
    description:
      "A resume will get you the job, but a cover letter will get your foot in the door.",
    linkText: "Write a winning cover letter",
  },
];
