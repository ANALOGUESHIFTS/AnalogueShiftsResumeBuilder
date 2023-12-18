import ResumeTemplateOne from "@/public/template-two.webp";
import ResumeTemplateTwo from "@/public/resume-template-one.webp";
import ResumeTemplateThree from "@/public/resume-template-two.webp";
import ResumeTemplateFour from "@/public/resume-template-three.webp";

import SampleOne from "@/public/sample-one.svg";
import SampleTwo from "@/public/sample-two.svg";
import SampleThree from "@/public/sample-three.svg";
import SampleFour from "@/public/sample-four.svg";
import SampleFive from "@/public/sample-five.svg";
import SampleSix from "@/public/sample-six.svg";
import SampleSeven from "@/public/sample-seven.svg";
import SampleEight from "@/public/sample-eight.svg";

export const resumeTemplates = [
  {
    image: ResumeTemplateOne,
    path: "/resume-builder/app/how-to-start/resume-01",
  },
  {
    image: ResumeTemplateTwo,
    path: "/resume-builder/app/how-to-start/resume-02",
  },
  {
    image: ResumeTemplateThree,
    path: "/resume-builder/app/how-to-start/resume-03",
  },
  {
    image: ResumeTemplateFour,
    path: "/resume-builder/app/how-to-start/resume-04",
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
  /*{
    name: "Business",
    path: "/resume-samples#business",
  },
  {
    name: "Education & Childcare",
    path: "/resume-samples#education-childcare",
  },
  {
    name: "HealthCare",
    path: "/resume-samples#healthcare",
  },
  {
    name: "Home & Maintenance",
    path: "/resume-samples#home-maintenance",
  },
  {
    name: "Infrastructure & Engineering",
    path: "/resume-samples#infastructure-engineer",
  },
  {
    name: "Life Situation",
    path: "/resume-samples#life-situation",
  },
  {
    name: "Physical Health & Wellness",
    path: "/resume-samples#physical-health-wellness",
  },
  {
    name: "Public Sector & Services",
    path: "/resume-samples#public-sector-services",
  },
  {
    name: "Sales, Support & Marketing",
    path: "/resume-samples#sales-support-marketing",
  },
  {
    name: "Science & Research",
    path: "/resume-samples#science-research",
  },
  {
    name: "Service Industry",
    path: "/resume-samples#service-industry",
  },
  {
    name: "Student",
    path: "/resume-samples#student",
  },
  {
    name: "Technology",
    path: "/resume-samples#technology",
  },
  {
    name: "Transportation & Logistics",
    path: "/resume-samples#transportation-logistics",
  },*/
];

export const samplesData = [
  {
    name: "Arts, Culture & Media",
    id: "arts-culture-media",
    description:
      "As a creative, your resume may be secondary to your portfolio and artistic accomplishments, but it’s still important for showcasing your experience and professional skills. Learn from our sample resumes to best create your own.",
    color: "#4b94ea",
    background: "#e4f0fe",
    samples: [
      {
        name: "Fine Arts & Aesthetics",
        image: ResumeTemplateOne,
        relatedLinks: [
          {
            name: "Acting Resume",
            path: "/resume-samples/acting-resume-example",
          },
          {
            name: "Artist Resume",
            path: "/resume-samples/artist-resume-example",
          },
          {
            name: "Dance Resume",
            path: "/resume-samples/dance-resume",
          },
          {
            name: "Model Resume",
            path: "/resume-samples/model-resume",
          },
        ],
      },
      {
        name: "Production & Management",
        image: ResumeTemplateTwo,
        relatedLinks: [
          {
            name: "Producer Resume",
            path: "/resume-samples/producer-resume",
          },
          {
            name: "Event Planner Resume",
            path: "/resume-samples/event-planner-resume-example",
          },
        ],
      },
      {
        name: "Visual Arts & Music",
        image: ResumeTemplateThree,
        relatedLinks: [
          {
            name: "Film Resume",
            path: "/resume-samples/film-resume",
          },
          {
            name: "DJ Resume",
            path: "/resume-samples/dj-resume",
          },
        ],
      },
      {
        name: "Writing & Media",
        image: ResumeTemplateFour,
        relatedLinks: [
          {
            name: "Translator Resume",
            path: "/resume-samples/translator-resume",
          },
        ],
      },
    ],
  },
  {
    name: "Banking & Finance",
    id: "banking-finance",
    description:
      "Jobs in finance are competitive because they pay well and have great benefits. Learn how to make a resume that gets you one of those jobs by showcasing your finance-related skills and experience.",
    color: "#ea723c",
    background: "#fdf1eb",
    samples: [
      {
        name: "Accounting",
        image: ResumeTemplateOne,
        relatedLinks: [
          {
            name: "Account Manager Resume",
            path: "/resume-samples/account-manager-resume-example",
          },
          {
            name: "Accounts Receivable Resume",
            path: "/resume-samples/accounts-receivable-resume",
          },
          {
            name: "Tax Intern Resume",
            path: "/resume-samples/tax-intern-resume",
          },
          {
            name: "Debt Collector Resume",
            path: "/resume-samples/debt-collector-resume",
          },
        ],
      },
      {
        name: "Finance",
        image: ResumeTemplateTwo,
        relatedLinks: [
          {
            name: "BookKeeper Resume",
            path: "/resume-samples/bookkeeper-resume-example",
          },
          {
            name: "Finance Resume",
            path: "/resume-samples/finance-resume",
          },
        ],
      },
      {
        name: "Banking & Insurance",
        image: ResumeTemplateThree,
        relatedLinks: [
          {
            name: "Loan Processor",
            path: "/resume-samples/loan-processor-resume",
          },
          {
            name: "Bank Teller Resume",
            path: "/resume-samples/bank-teller-resume-example",
          },
        ],
      },
    ],
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
