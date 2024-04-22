// Template Images
import SimpleResumeTemplateImage from "@/public/images/resume-images/simple-resume.jpg";
import CareerChangeTemplateImage from "@/public/images/resume-images/career-change-template.webp";
import CombinationTemplateImage from "@/public/images/resume-images/combination-resume.webp";
import CorporateTemplateImage from "@/public/images/resume-images/corporate-resume.webp";
import ConsultingTemplateImage from "@/public/images/resume-images/consulting-resume.webp";
import FederalTemplateImage from "@/public/images/resume-images/federal-resume.webp";
import FreelanceTemplateImage from "@/public/images/resume-images/freelance-resume.webp";
import InternationalTemplateImage from "@/public/images/resume-images/international-resume.webp";
import InternshipTemplateImage from "@/public/images/resume-images/internship-resume.webp";
import RemoteTemplateImage from "@/public/images/resume-images/remote-resume.webp";
import ResearchTemplateImage from "@/public/images/resume-images/research-resume.webp";
import SalesTemplateImage from "@/public/images/resume-images/sales-resume.webp";
import TargetedTemplateImage from "@/public/images/resume-images/targeted-resume.webp";
import VolunteerTemplateImage from "@/public/images/resume-images/volunteer-resume.webp";

// Template Components
import AdvancedResumeTemplate from "@/app/components/templates/resume/Advanced";
import SimpleTemplate from "@/app/components/templates/resume/Simple";
import CareerChangeResume from "@/app/components/templates/resume/Career";
import CombinationResume from "@/app/components/templates/resume/Combination";
import ConsultingResume from "@/app/components/templates/resume/Consulting";
import CorporateResume from "@/app/components/templates/resume/Corporate";
import FederalResume from "@/app/components/templates/resume/Federal";
import FreelanceResume from "@/app/components/templates/resume/Freelance";
import InternationalResume from "@/app/components/templates/resume/International";
import RemoteResume from "@/app/components/templates/resume/Remote";
import ResearchResume from "@/app/components/templates/resume/Research";
import SalesResume from "@/app/components/templates/resume/Sales";
import TargetedResume from "@/app/components/templates/resume/Targeted";
import VolunteerResume from "@/app/components/templates/resume/Volunteer";
import InternshipResume from "@/app/components/templates/resume/Internship";

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
    templateImage: SimpleResumeTemplateImage,
    path: "/resume-builder/app/how-to-start/simple",
    component: (data) => <SimpleTemplate data={data} />,
    description:
      "Features a clean, straightforward layout with minimal design elements, suitable for traditional industries or those seeking a classic and professional appearance.",
  },

  {
    linkToTemplate: "/resume-templates#career-change",
    id: "career-change",
    name: "Career Change Template",
    description:
      "Highlights transferable skills and showcases relevant experiences for those changing industries or career paths.",
    templateImage: CareerChangeTemplateImage,
    path: "/resume-builder/app/how-to-start/career-change",
    component: (data) => <CareerChangeResume data={data} />,
  },
  {
    linkToTemplate: "/resume-templates#combination",
    id: "combination",
    name: "Combination Template",
    description:
      "Combines elements of chronological and functional resumes, showcasing both skills and work history.",
    templateImage: CombinationTemplateImage,
    path: "/resume-builder/app/how-to-start/combination",
    component: (data) => <CombinationResume data={data} />,
  },
  {
    linkToTemplate: "/resume-templates#consulting",
    id: "consulting",
    name: "Consulting Template",
    description:
      "Tailored for consulting roles, focuses on problem-solving, client management, and relevant industry expertise.",
    templateImage: ConsultingTemplateImage,
    path: "/resume-builder/app/how-to-start/consulting",
    component: (data) => <ConsultingResume data={data} />,
  },
  {
    linkToTemplate: "/resume-templates#corporate",
    id: "corporate",
    name: "Corporate Template",
    description:
      "Tailored for corporate roles, emphasizes leadership, project management, and accomplishments in a corporate setting. It often highlights experience in large-scale projects, team management, and contributions to the overall success of the organization.",
    templateImage: CorporateTemplateImage,
    path: "/resume-builder/app/how-to-start/corporate",
    component: (data) => <CorporateResume data={data} />,
  },
  {
    linkToTemplate: "/resume-templates#federal",
    id: "federal",
    name: "Federal Template",
    description:
      "Specific to applying for jobs in the U.S. federal government, includes detailed information on skills, experiences, and accomplishments.",
    templateImage: FederalTemplateImage,
    path: "/resume-builder/app/how-to-start/federal",
    component: (data) => <FederalResume data={data} />,
  },
  {
    linkToTemplate: "/resume-templates#freelance",
    id: "freelance",
    name: "Freelance Template",
    description:
      "Highlights project-based work, emphasizes skills, and includes a portfolio section for freelancers to showcase their diverse projects and clients.",
    templateImage: FreelanceTemplateImage,
    path: "/resume-builder/app/how-to-start/freelance",
    component: (data) => <FreelanceResume data={data} />,
  },
  {
    linkToTemplate: "/resume-templates#international",
    id: "international",
    name: "International Template",
    description:
      "Adheres to global standards, considering cultural differences in resume expectations, and may include additional sections such as language proficiency and international experience.",
    templateImage: InternationalTemplateImage,
    path: "/resume-builder/app/how-to-start/international",
    component: (data) => <InternationalResume data={data} />,
  },
  {
    linkToTemplate: "/resume-templates#internship",
    id: "internship",
    name: "Internship Template",
    description:
      "Emphasizes academic achievements, skills, and relevant coursework for students applying for internships.",
    templateImage: InternshipTemplateImage,
    path: "/resume-builder/app/how-to-start/internship",
    component: (data) => <InternshipResume data={data} />,
  },
  {
    linkToTemplate: "/resume-templates#remote",
    id: "remote",
    name: "Remote Template",
    description:
      "Emphasizes remote work skills, including proficiency with virtual collaboration tools and a track record of successful remote contributions.",
    templateImage: RemoteTemplateImage,
    path: "/resume-builder/app/how-to-start/remote",
    component: (data) => <RemoteResume data={data} />,
  },
  {
    linkToTemplate: "/resume-templates#research",
    id: "research",
    name: "Research Template",
    description:
      " Emphasizes research skills, publications, and academic achievements, suitable for those in scientific or academic fields.",
    templateImage: ResearchTemplateImage,
    path: "/resume-builder/app/how-to-start/research",
    component: (data) => <ResearchResume data={data} />,
  },
  {
    linkToTemplate: "/resume-templates#sales",
    id: "sales",
    name: "Sales Template",
    description:
      "Focuses on achievements in sales, including revenue growth, client acquisition, and relationship-building skills.",
    templateImage: SalesTemplateImage,
    path: "/resume-builder/app/how-to-start/sales",
    component: (data) => <SalesResume data={data} />,
  },
  {
    linkToTemplate: "/resume-templates#targeted",
    id: "targeted",
    name: "Targeted Template",
    description:
      "Tailored for a specific job, highlights skills and experiences most relevant to the targeted position.",
    templateImage: TargetedTemplateImage,
    path: "/resume-builder/app/how-to-start/targeted",
    component: (data) => <TargetedResume data={data} />,
  },
  {
    linkToTemplate: "/resume-templates#volunteer",
    id: "volunteer",
    name: "Volunteer Template",
    description:
      " Emphasizes volunteer work and community involvement, showcasing skills gained through unpaid experiences.",
    templateImage: VolunteerTemplateImage,
    path: "/resume-builder/app/how-to-start/volunteer",
    component: (data) => <VolunteerResume data={data} />,
  },
];

export const resumeNavLinks = [
  {
    name: "Simple",
    subTitle: "AnalogueShifts Simple Resume Template",
    color: "#4b94ea",
    path: "/resume-templates#simple",
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
