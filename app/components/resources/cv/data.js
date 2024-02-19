// Templates Images
import SimpleTemplate from "@/public/resume-images/simple-resume.jpg";
import AdvancedTemplate from "@/public/resume-images/advanced-resume.png";

export const cvTemplates = [
  {
    id: "simple",
    template: SimpleTemplate,
    name: "Simple",
    whyShouldYouUseThisTemplate: (
      <p className="text-sm font-medium text-black/60">
        Elevate your job application with the Professional Elegance Resume
        Template, a sleek and modern design crafted to showcase your
        qualifications in a clear and professional manner. This template
        combines simplicity with a touch of sophistication, ensuring that your
        resume stands out while maintaining a professional look.
      </p>
    ),
  },
  {
    id: "advanced",
    template: AdvancedTemplate,
    name: "Advanced",
    whyShouldYouUseThisTemplate: (
      <p className="text-sm font-medium text-black/60">
        The Advanced CV template is simple yet formal, making it the ideal CV
        design for anyone writing academic CVs, like an adjunct professor CV ,
        or a college professor CV .
      </p>
    ),
  },
];

export const cvNavLinks = [
  {
    name: "Advanced",
    subTitle: "AnalogueShifts Advanced CV Template",
    path: "/cv-templates#advanced",
  },
  {
    name: "Professional",
    subTitle: "AnalogueShifts Professional CV Template",
    path: "/cv-templates#professional",
  },
];

export const cvHelpLinks = [
  {
    name: "What is a cv?",
    path: "/blog",
  },
  {
    name: "How to write a cv for a job",
    path: "/blog",
  },
  {
    name: "Cv vs Resume: what's the difference?",
    path: "/blog",
  },
  {
    name: "How to write an academic cv",
    path: "/blog",
  },
  {
    name: "Cv examples for students",
    path: "/blog",
  },
];

export const cvSamplesLinks = [
  {
    name: "Academic CV",
    path: "/cv-examples#academic-cv",
  },
  {
    name: "Nurse CV",
    path: "/cv-examples#nurse-cv",
  },
];

export const cvSamplesData = [
  {
    template: SimpleTemplate,
    name: "Academic CV",
    id: "academic-cv",
    description:
      "If you’re applying for a teaching position at a university (for instance, as a professor or lecturer), this academic CV example should provide some ideas for writing your own CV. An academic CV includes a detailed education section, publications, research projects, grants awarded, professional memberships, and teaching qualifications.",
    color: "#4b94ea",
    background: "#e4f0fe",
  },
  {
    template: SimpleTemplate,
    name: "Nurse CV",
    id: "nurse-cv",
    description:
      "If you’re applying for a role in nursing, you’ll need a CV that showcases your medical experience, the type of nursing you’re qualified to perform, and your licensure. Here’s an example of a nurse practitioner CV that clearly presents all the candidate’s key qualifications as a nurse:",
    color: "#ea723c",
    background: "#fdf1eb",
  },
];
