import LeverageThePowerOfAi from "@/public/leverage-the-power-of-ai.svg";
import SaveOursOfTime from "@/public/save-hours-of-time.svg";
import MakeACohesiveApplication from "@/public/make-a-cohesive-application.svg";
import TryOutDifferentTemplate from "@/public/try-out-different-template.svg";
import GetPastApplicant from "@/public/get-past-applicant.svg";
import AskForExpertSuggestion from "@/public/ask-for-expert-suggestion.svg";
import StepOneIcon from "@/public/monitor-icon.svg";
import StepTwoIcon from "@/public/generate-bullet-point.svg";
import StepThreeIcon from "@/public/try-out-different-template.svg";
import StepFourIcon from "@/public/instantly-download-your-resume.svg";

export const serviceData = [
  {
    title: "Save hours of time",
    subTitle: (
      <p className="text-black/60 max-[1050px]:text-center font-normal tracking-normal text-base pl-2">
        Our CV maker is a major timesaver. Simply choose your favorite CV
        template, and the builder will help you fill out each section.
      </p>
    ),
    image: SaveOursOfTime,
  },
  {
    title: "Make a matching cover letter",
    subTitle: (
      <p className="text-black/60 max-[1050px]:text-center font-normal tracking-normal text-base pl-2">
        Pair your CV with a customized cover letter to target a specific
        position and boost your chance of landing an interview for the role.
      </p>
    ),
    image: MakeACohesiveApplication,
  },
  {
    title: "Autogenerate bullet points",
    subTitle: (
      <p className="text-black/60 max-[1050px]:text-center font-normal tracking-normal text-base pl-2">
        Our CV maker pulls information from job ads and academic listings, then
        applies AI to generate custom bullet points to add to your CV.
      </p>
    ),
    image: LeverageThePowerOfAi,
  },
  {
    title: "Make a CV summary in seconds",
    subTitle: (
      <p className="text-black/60 max-[1050px]:text-center font-normal tracking-normal text-base pl-2">
        Start your CV off strong with an introduction that showcases why you’re
        a qualified and capable great candidate.
      </p>
    ),
    image: TryOutDifferentTemplate,
  },
  {
    title: "Autoformat an easy-to-read CV",
    subTitle: (
      <p className="text-black/60 max-[1050px]:text-center font-normal tracking-normal text-base pl-2">
        Each CV template in our builder is easy to read for humans and the
        computer programs big companies use to vet candidates.
      </p>
    ),
    image: GetPastApplicant,
  },
  {
    title: "Get CV tips from experts",
    subTitle: (
      <p className="text-black/60 max-[1050px]:text-center font-normal tracking-normal text-base pl-2">
        After you’ve made your CV, our team of CV experts will gladly provide
        you with suggestions and tweaks to perfect your document.
      </p>
    ),
    image: AskForExpertSuggestion,
  },
];
export const cvBlogData = [
  {
    title: "What Is a CV and What Do You Include?",
    path: "/blog",
  },
  {
    title: "CV vs Resume: What's the difference?",
    path: "/blog",
  },
  {
    title: "CV vs Cover Letter: What are the differences?",
    path: "/blog",
  },
  {
    title: "Curriculum Vitae (CV) Format: CV Templates & Formatting Tips",
    path: "/blog",
  },
];
export const steps = [
  {
    step: "1ST STEP",
    color: "#4b94ea",
    title: "Open the Genius app",
    description:
      "Create a CV from top to bottom, or upload and edit your existing CV.",
    icon: StepOneIcon,
  },
  {
    step: "2ND STEP",
    color: "#ea723c",
    title: "Fill in your information",
    description:
      "Answer some basic questions about your background and experience.",
    icon: StepTwoIcon,
  },
  {
    step: "3RD STEP",
    color: "#2ca482",
    title: "Select your favorite template",
    description:
      "Choose from our modern, professional CV templates, and pick your favorite color.",
    icon: StepThreeIcon,
  },
  {
    step: "4TH STEP",
    color: "#ed5e9f",
    title: "Download your new CV",
    description:
      "Instantly download your completed CV in Microsoft Word or PDF format.",
    icon: StepFourIcon,
  },
];
