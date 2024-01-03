import CoverLetterOne from "@/public/cover-letter-one.webp";
import CoverLetterTwo from "@/public/cover-letter-two.webp";
import CoverLetterThree from "@/public/cover-letter-three.webp";
import BriefCaseIcon from "@/public/briefcase-icon.svg";
import Cube from "@/public/cube.svg";
import ResumeTemplateOne from "@/public/template-two.webp";
import ResumeTemplateTwo from "@/public/resume-template-one.webp";
import ResumeTemplateThree from "@/public/resume-template-two.webp";
import Bulb from "@/public/bulb.svg";
import Smile from "@/public/smile.svg";
import Link from "next/link";
import TemplateOne from "@/public/cv-template-one.jpg";
import TemplateTwo from "@/public/cv-template-two.webp";
import TemplateThree from "@/public/cv-template-three.jpg";
import PickAResumeTemplate from "@/public/pick-a-resume-template.svg";
import CustomizeEachSection from "@/public/generate-bullet-point.svg";
import EmphasizeYourSkills from "@/public/emphasize-your-skill.svg";
import AttachACoverLetter from "@/public/attach-cover-letter.svg";

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

export const coverLetterTemplates = [
  {
    theMatchingResumeLink: "/resume-templates#professional-templates",
    linkToTemplate: "/cover-letter-templates#professional-templates",
    id: "professional",
    color: "#4b94ea",
    background: "#e4f0fe",
    icon: BriefCaseIcon,
    name: "Professional Templates",
    description:
      "A professional cover letter template suits experienced candidates applying to large companies. If you’re an executive or seeking a senior position, use one of these templates to write a confident and authoritative cover letter.",
    templates: [
      {
        color: "#4b94ea",
        path: "/cover-letter-builder/app/",
        image: CoverLetterOne,
        name: "Minimalist",
        linkToThisTemplate: "#",
        description:
          "As the name suggests, the Minimalist cover letter features a simple design aesthetic that doesn’t distract from its content. At the same time, a bit of color is added to allow you to express your individuality—do you suit an ambitious red or an industrious blue?",
        linkToDocs:
          "https://docs.google.com/document/d/1p8NshhrOebOnIpC4_rXPPOxa78hgUV5P/copy",
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
        path: "/cover-letter-builder/app/",
        image: CoverLetterTwo,
        name: "Cosmopolitan",
        linkToThisTemplate: "#",
        description:
          "The “Cosmopolitan” resume template features a sophisticated header with pastel color options. Stylish and clean.",
        linkToDocs:
          "https://docs.google.com/document/d/1mnRTY_Z3TiN-SjqpBWB12WRss61K_FZ6/copy",
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
        path: "/cover-letter-builder/app/",
        image: CoverLetterThree,
        name: "Executive",
        linkToThisTemplate: "#",
        description:
          "Perfect for managers, the “Executive” template’s timeline graphic highlights your experience section above all.",
        linkToDocs:
          "https://docs.google.com/document/d/1mgx5SWHDO_Bv-hhsBLSOx2Np8_U6EjYR/copy",
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
    theMatchingResumeLink: "/resume-templates#modern-templates",
    linkToTemplate: "/cover-letter-templates#modern-templates",
    id: "modern",
    color: "#ea723c",
    background: "#fdf1eb",
    icon: Cube,
    name: "Modern Templates",
    description:
      "Pair a modern cover letter template with your resume to show some personality in your job application. This style of cover letter template is ideal for job seekers applying to work in tech, at startups, or in industries like marketing and design.",
    templates: [
      {
        color: "#ea723c",
        path: "/cover-letter-builder/app/",
        image: CoverLetterOne,
        name: "Minimalist",
        linkToThisTemplate: "#",
        description:
          "As the name suggests, the Minimalist cover letter features a simple design aesthetic that doesn’t distract from its content. At the same time, a bit of color is added to allow you to express your individuality—do you suit an ambitious red or an industrious blue?",
        linkToDocs:
          "https://docs.google.com/document/d/1p8NshhrOebOnIpC4_rXPPOxa78hgUV5P/copy",
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
        path: "/cover-letter-builder/app/",
        image: CoverLetterTwo,
        name: "Cosmopolitan",
        linkToThisTemplate: "#",
        description:
          "The “Cosmopolitan” resume template features a sophisticated header with pastel color options. Stylish and clean.",
        linkToDocs:
          "https://docs.google.com/document/d/1mnRTY_Z3TiN-SjqpBWB12WRss61K_FZ6/copy",
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
        path: "/cover-letter-builder/app/",
        image: CoverLetterThree,
        name: "Executive",
        linkToThisTemplate: "#",
        description:
          "Perfect for managers, the “Executive” template’s timeline graphic highlights your experience section above all.",
        linkToDocs:
          "https://docs.google.com/document/d/1mgx5SWHDO_Bv-hhsBLSOx2Np8_U6EjYR/copy",
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
    theMatchingResumeLink: "/resume-templates#creative-templates",
    linkToTemplate: "/cover-letter-templates#creative-templates",
    id: "creative",
    color: "#2ca482",
    background: "#f0faf5",
    icon: Bulb,
    name: "Creative Templates",
    description:
      "Our creative cover letters perfectly balance professionalism and personality. Use one of these unique cover letter templates if you’re applying for work in a contemporary field like design or marketing.",
    templates: [
      {
        color: "#2ca482",
        path: "/cover-letter-builder/app/",
        image: CoverLetterOne,
        name: "Minimalist",
        linkToThisTemplate: "#",
        description:
          "As the name suggests, the Minimalist cover letter features a simple design aesthetic that doesn’t distract from its content. At the same time, a bit of color is added to allow you to express your individuality—do you suit an ambitious red or an industrious blue?",
        linkToDocs:
          "https://docs.google.com/document/d/1p8NshhrOebOnIpC4_rXPPOxa78hgUV5P/copy",
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
        path: "/cover-letter-builder/app/",
        image: CoverLetterTwo,
        name: "Cosmopolitan",
        linkToThisTemplate: "#",
        description:
          "The “Cosmopolitan” resume template features a sophisticated header with pastel color options. Stylish and clean.",
        linkToDocs:
          "https://docs.google.com/document/d/1mnRTY_Z3TiN-SjqpBWB12WRss61K_FZ6/copy",
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
        path: "/cover-letter-builder/app/",
        image: CoverLetterThree,
        name: "Executive",
        linkToThisTemplate: "#",
        description:
          "Perfect for managers, the “Executive” template’s timeline graphic highlights your experience section above all.",
        linkToDocs:
          "https://docs.google.com/document/d/1mgx5SWHDO_Bv-hhsBLSOx2Np8_U6EjYR/copy",
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
    theMatchingResumeLink: "/resume-templates#simple-templates",
    linkToTemplate: "/cover-letter-templates#simple-templates",
    id: "simple",
    color: "#f892bc",
    background: "#fdedf5",
    icon: Smile,
    name: "Simple Templates",
    description:
      "Write a clear and organized cover letter using a simple cover letter template. Each basic template is free to download (compatible with Microsoft Word and Google Docs), and will help you create the perfect cover letter for whatever job you apply for.",
    templates: [
      {
        color: "#f892bc",
        path: "/cover-letter-builder/app/",
        image: CoverLetterOne,
        name: "Minimalist",
        linkToThisTemplate: "#",
        description:
          "As the name suggests, the Minimalist cover letter features a simple design aesthetic that doesn’t distract from its content. At the same time, a bit of color is added to allow you to express your individuality—do you suit an ambitious red or an industrious blue?",
        linkToDocs:
          "https://docs.google.com/document/d/1p8NshhrOebOnIpC4_rXPPOxa78hgUV5P/copy",
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
        path: "/cover-letter-builder/app/",
        image: CoverLetterTwo,
        name: "Cosmopolitan",
        linkToThisTemplate: "#",
        description:
          "The “Cosmopolitan” resume template features a sophisticated header with pastel color options. Stylish and clean.",
        linkToDocs:
          "https://docs.google.com/document/d/1mnRTY_Z3TiN-SjqpBWB12WRss61K_FZ6/copy",
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
        path: "/cover-letter-builder/app/",
        image: CoverLetterThree,
        name: "Executive",
        linkToThisTemplate: "#",
        description:
          "Perfect for managers, the “Executive” template’s timeline graphic highlights your experience section above all.",
        linkToDocs:
          "https://docs.google.com/document/d/1mgx5SWHDO_Bv-hhsBLSOx2Np8_U6EjYR/copy",
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

export const coverLetterNavLinks = [
  {
    text: "Professional",
    color: "#4b94ea",
    path: "/cover-letter-templates#professional",
  },
  {
    text: "Modern",
    color: "#ea723c",
    path: "/cover-letter-templates#modern",
  },
  {
    text: "Creative",
    color: "#2ca482",
    path: "/cover-letter-templates#creative",
  },
  {
    text: "Simple",
    color: "#f892bc",
    path: "/cover-letter-templates#simple",
  },
];

export const ResumeTemplates = [
  {
    theMatchingCoverLetterLink:
      "/cover-letter-templates#professional-templates",
    linkToTemplate: "/resume-templates#professional-templates",
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
        linkToThisTemplate: "#",
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
        linkToThisTemplate: "#",
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
        linkToThisTemplate: "#",
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
    theMatchingCoverLetterLink: "/cover-letter-templates#modern-templates",
    linkToTemplate: "/resume-templates#modern-templates",
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
        linkToThisTemplate: "#",
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
        linkToThisTemplate: "#",
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
        linkToThisTemplate: "#",
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
    theMatchingCoverLetterLink: "/cover-letter-templates#creative-templates",
    linkToTemplate: "/resume-templates#creative-templates",
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
        linkToThisTemplate: "#",
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
        linkToThisTemplate: "#",
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
        linkToThisTemplate: "#",
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
    theMatchingCoverLetterLink: "/cover-letter-templates#simple-templates",
    linkToTemplate: "/resume-templates#simple-templates",
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
        linkToThisTemplate: "#",
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
        linkToThisTemplate: "#",
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
        linkToThisTemplate: "#",
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

export const resumeNavLinks = [
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
];

export const cvTemplates = [
  {
    id: "pro",
    image: TemplateOne,
    name: "Pro",
    whyShouldYouUseThisTemplate: (
      <p className="text-sm font-medium text-black/60">
        The Pro CV template is simple yet formal, making it the ideal CV design
        for anyone writing academic CVs, like an{" "}
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
        for students, academics, scientists, or medical professionals. Use this
        CV template if you’re writing a{" "}
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

export const cvNavLinks = [
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
export const levelUpLinks = [
  {
    path: "/resume-templates/professional-templates",
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
    path: "/blog/cover-letter-help/how-to-write-a-cover-letter",
    number: "04",
    color: "#f892bc",
    icon: AttachACoverLetter,
    title: "Attach A Cover Letter",
    description:
      "A resume will get you the job, but a cover letter will get your foot in the door.",
    linkText: "Write a winning cover letter",
  },
];
