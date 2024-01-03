import ResumeTemplateFour from "@/public/resume-template-three.webp";

import SampleOne from "@/public/sample-one.svg";
import SampleTwo from "@/public/sample-two.svg";
import SampleThree from "@/public/sample-three.svg";
import SampleFour from "@/public/sample-four.svg";
import SampleFive from "@/public/sample-five.svg";
import SampleSix from "@/public/sample-six.svg";
import SampleSeven from "@/public/sample-seven.svg";
import SampleEight from "@/public/sample-eight.svg";

import CoverLetterOne from "@/public/general-cover-letter-example.webp";
import CoverLetterTwo from "@/public/entry-level-cover-letter-example.webp";
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
    name: "General Cover Letter",
    path: "/cover-letter-examples#general-cover-letter-example",
  },
  {
    name: "Entry-level cover letter example",
    path: "/cover-letter-examples#entry-level-cover-letter-example",
  },
];

export const samplesData = [
  {
    image: CoverLetterOne,
    name: "General cover letter example",
    id: "general-cover-letter-example",
    description:
      "This general cover letter was written by a candidate with two years of work experience. In the example, the candidate is applying for a mid-level digital marketing position.",
    color: "#4b94ea",
    background: "#e4f0fe",
    whyIsThisAGoodExample:
      " In the cover letter example below, the candidate is concise and direct. She conveys much of what a cover letter should say in the opening paragraph, like her amount and type of experience, plus where she found the job. Then the candidate lists specific responsibilities from the job description, and mentions her experience handling similar work. She even gives an example of how her efforts have benefited her current employer. At this point, the candidate’s cover letter has already helped the hiring manager better understand her value as a hire. But she’s not done yet. Finally, the candidate signs off by mentioning how she’ll reach out if she doesn’t hear back from the hiring manager. This call to action is a key part of a general cover letter, because it highlights the writer’s interest in the job, and willingness to go further than other candidates for the opportunity.",
  },
  {
    image: CoverLetterTwo,
    name: "Entry-level cover letter example",
    id: "entry-level-cover-letter-example",
    description:
      "This entry-level cover letter was written by a recent graduate who only has a little part-time work experience. In our example, the candidate is applying for an entry-level IT technician position. She quickly establishes her enthusiasm about the opportunity, and then highlights her relevant skills to show she can do the job:",
    color: "#ea723c",
    background: "#fdf1eb",
    whyIsThisAGoodExample:
      "This killer cover letter sample stands out because the applicant emphasizes her enthusiasm about the opportunity from the very first sentence. Beyond her enthusiasm, the candidate also shows she’s qualified. She quickly (and convincingly) markets her professional strengths, including relevant hard skills (Linux, backend coding) and soft skills (precision, attention to detail).",
  },
];
