import ResumeTemplateOne from "@/public/template-two.webp";
import ResumeTemplateTwo from "@/public/resume-template-one.webp";
import ResumeTemplateThree from "@/public/resume-template-two.webp";
import UserOne from "@/public/corissa-peterson.jpg";
import UserTwo from "@/public/conrad-benz.jpg";
import ResumeFormat from "@/public/resume-format.webp";
import ResumeSummary from "@/public/resume-summary-hero.webp";
import CvVsResume from "@/public/resume-vs-cv.webp";

export const resumeTemplates = [
  {
    image: ResumeTemplateOne,
    name: "Advanced",
    description:
      "Color helps highlights your contact information and skills sections on the “Advanced” resume template.",
    path: "/resume-builder/app/how-to-start/resume-01",
  },
  {
    image: ResumeTemplateTwo,
    name: "Clean",
    description:
      'The "Clean" resume template features a color bar on the left that still leaves room for your experience to take center stage.',
    path: "/resume-builder/app/how-to-start/resume-02",
  },
  {
    image: ResumeTemplateThree,
    name: "Corporate",
    description:
      "With its simple, bold design, the “Corporate” resume template is ideal for confident business professionals.",
    path: "/resume-builder/app/how-to-start/resume-03",
  },
];
export const blogData = [
  {
    path: "/blog/resume-help/resume-format",
    image: ResumeFormat,
    title: "The Best Resume Format for 2023",
    description:
      "From the gold-standard format to variations that help you highlight your top qualifications, we’ll teach you how to format your resume like a pro.",
    userImage: UserOne,
    userName: "Corissa Peterson",
    date: "November 18 2023",
    color: "#4b94ea",
  },
  {
    path: "/blog/resume-help/resume-summary",
    image: ResumeSummary,
    title: "Professional Resume Summary Examples",
    description:
      "Your professional resume summary quickly shows employers you have the experience needed to do the job. Learn how to write one with our examples and tips.",
    userImage: UserTwo,
    userName: "Conrad Benz",
    date: "November 19 2023",
    color: "#ea723c",
  },
  {
    path: "/blog/resume-help/cv-vs-resume",
    image: CvVsResume,
    title: "CV vs Resume: What’s the Difference?",
    description:
      "The difference between a CV and a resume depends on the country and context. We explain further, and provide clear definitions of both.",
    userImage: UserTwo,
    userName: "Conrad Benz",
    date: "November 19 2023",
    color: "#2ca482",
  },
];
