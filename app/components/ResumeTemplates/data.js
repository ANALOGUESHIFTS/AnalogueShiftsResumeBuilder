import ResumeFormat from "@/public/resume-format.webp";
import ResumeSummary from "@/public/resume-summary-hero.webp";
import CvVsResume from "@/public/resume-vs-cv.webp";
import UserOne from "@/public/corissa-peterson.jpg";
import UserTwo from "@/public/conrad-benz.jpg";
import AdvancedResumeTemplate from "../templates/resume/Advanced";
import { dummyUserData } from "../OtherComponents/data";
import ProfessionalResumeTemplate from "../templates/resume/Professional";

export const resumeTemplates = [
  {
    template: <AdvancedResumeTemplate data={dummyUserData} />,
    name: "Advanced Template",
    description:
      "Color helps highlights your contact information and skills sections on the “Advanced” resume template.",
    path: "/resume-builder/app/how-to-start/advanced-resume",
  },
  {
    template: <ProfessionalResumeTemplate data={dummyUserData} />,
    name: "Professional Template",
    description:
      "Color helps highlights your contact information and skills sections on the “Professional” resume template.",
    path: "/resume-builder/app/how-to-start/professional-resume",
  },
];

export const blogData = [
  {
    path: "/blog",
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
    path: "/blog",
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
    path: "/blog",
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
