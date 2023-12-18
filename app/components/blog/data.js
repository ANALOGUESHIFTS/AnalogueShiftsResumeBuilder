import ResumeTemplate from "@/public/ico-resume-template.svg";
import ResumeExample from "@/public/ico-resume-examples.svg";
import ResumeBuilder from "@/public/ico-resume-builder.svg";
import CoverLetterExamples from "@/public/ico-cover-letter-examples.svg";
import ResumeFormat from "@/public/resume-format.webp";
import ResumeSummary from "@/public/resume-summary-hero.webp";
import CvVsResume from "@/public/resume-vs-cv.webp";
import UserOne from "@/public/corissa-peterson.jpg";
import UserTwo from "@/public/conrad-benz.jpg";
export const blogData = [
  {
    slug: "resume-format",
    path: "/blog/resume-help/resume-format",
    image: ResumeFormat,
    title: "The Best Resume Format for 2023",
    description:
      "From the gold-standard format to variations that help you highlight your top qualifications, we’ll teach you how to format your resume like a pro.",
    userImage: UserOne,
    userName: "Corissa Peterson",
    date: "November 18 2023",
    color: "#4b94ea",
    category: ["resume-help"],
  },
  {
    slug: "resume-summary",
    path: "/blog/resume-help/resume-summary",
    image: ResumeSummary,
    title: "Professional Resume Summary Examples",
    description:
      "Your professional resume summary quickly shows employers you have the experience needed to do the job. Learn how to write one with our examples and tips.",
    userImage: UserTwo,
    userName: "Conrad Benz",
    date: "November 19 2023",
    color: "#ea723c",
    category: ["resume-help"],
  },
  {
    slug: "cv-vs-resume",
    path: "/blog/resume-help/cv-vs-resume",
    image: CvVsResume,
    title: "CV vs Resume: What’s the Difference?",
    description:
      "The difference between a CV and a resume depends on the country and context. We explain further, and provide clear definitions of both.",
    userImage: UserTwo,
    userName: "Conrad Benz",
    date: "November 19 2023",
    color: "#2ca482",
    category: ["resume-help", "cv-help"],
  },
];

export const icoLinks = [
  {
    title: "Resume Templates",
    image: ResumeTemplate,
    description: "Free Downloadable resume templates, HR – Approved.",
    path: "/resume-templates",
  },
  {
    title: "Resume Examples",
    image: ResumeExample,
    description: "Resume samples and guides, written by our experts. ",
    path: "/resume-samples",
  },
  {
    title: "Resume Builder",
    image: ResumeBuilder,
    description: "Avoid headaches and save time with our software.",
    path: "/",
  },
  {
    title: "Cover Letters",
    image: CoverLetterExamples,
    description: "Browse through our cover letter examples library. ",
    path: "/cover-letter-examples",
  },
];

export const navLinks = [
  {
    name: "All",
    path: "/blog",
  },
  {
    name: "Career Advice",
    path: "/blog/career-advice",
  },
  {
    name: "Cover Letter Help",
    path: "/blog/cover-letter-help",
  },
  {
    name: "CV Help",
    path: "/blog/cv-help",
  },
  {
    name: "Interview",
    path: "/blog/interview",
  },
  {
    name: "Job Hunting",
    path: "/blog/job-hunting",
  },
  {
    name: "Resume Help",
    path: "/blog/resume-help",
  },
];
