import Link from "next/link";
import LeverageThePowerOfAi from "@/public/leverage-the-power-of-ai.svg";
import SaveOursOfTime from "@/public/save-hours-of-time.svg";
import MakeACohesiveApplication from "@/public/make-a-cohesive-application.svg";
import TryOutDifferentTemplate from "@/public/try-out-different-template.svg";
import GetPastApplicant from "@/public/get-past-applicant.svg";
import AskForExpertSuggestion from "@/public/ask-for-expert-suggestion.svg";
import TemplateOne from "@/public/template-one.webp";
import CoverLetterOne from "@/public/cover-letter-one.webp";
import CoverLetterTwo from "@/public/cover-letter-two.webp";
import CoverLetterThree from "@/public/cover-letter-three.webp";

export const serviceData = [
  {
    title: "Save hours of time",
    subTitle: (
      <p className="text-black/60 max-[1050px]:text-center font-normal tracking-normal text-base pl-2">
        Take the busy work out of writing your cover letter. Fill in some
        information, choose a template, and download the letter from your
        dashboard.
      </p>
    ),
    image: SaveOursOfTime,
  },
  {
    title: "Make a cohesive application",
    subTitle: (
      <p className="text-black/60 max-[1050px]:text-center font-normal tracking-normal text-base pl-2">
        Pair your cover letter template with a{" "}
        <Link className="text-AnalogueShiftsTextColor" href="/resume-templates">
          matching resume template
        </Link>{" "}
        to make your application stand out to hiring managers & employers.
      </p>
    ),
    image: MakeACohesiveApplication,
  },
  {
    title: "Leverage AI technology",
    subTitle: (
      <p className="text-black/60 max-[1050px]:text-center font-normal tracking-normal text-base pl-2">
        Our software pulls information from real job advertisements, then parses
        & rewrites it to create compelling sentences for your personalized
        letter.
      </p>
    ),
    image: LeverageThePowerOfAi,
  },
  {
    title: "Try out different templates",
    subTitle: (
      <p className="text-black/60 max-[1050px]:text-center font-normal tracking-normal text-base pl-2">
        From your dashboard, save your cover letter and save it using other
        templates. The right{" "}
        <Link
          className="text-AnalogueShiftsTextColor"
          href="/cover-letter-templates"
        >
          cover letter template
        </Link>{" "}
        can make all the difference in your application.
      </p>
    ),
    image: TryOutDifferentTemplate,
  },
  {
    title: "Get past applicant tracking software",
    subTitle: (
      <p className="text-black/60 max-[1050px]:text-center font-normal tracking-normal text-base pl-2">
        Every part of our builder (from the templates to the content generator)
        was developed to bypass software companies use to filter out candidates.
      </p>
    ),
    image: GetPastApplicant,
  },
  {
    title: "Ask for expert suggestions",
    subTitle: (
      <p className="text-black/60 max-[1050px]:text-center font-normal tracking-normal text-base pl-2">
        &quot;Ask the Experts&quot; feature provides advice from certified
        career coaches on your completed letter. Learn how to perfect each
        section to get more interviews.
      </p>
    ),
    image: AskForExpertSuggestion,
  },
];

export const coverLetterTemplates = [
  {
    id: "cover-letter-01",
    img: TemplateOne,
    name: "Clean",
  },
  {
    id: "cover-letter-02",
    img: CoverLetterOne,
    name: "Clean",
  },
  {
    id: "cover-letter-03",
    img: CoverLetterTwo,
    name: "Clean",
  },
  {
    id: "cover-letter-04",
    img: CoverLetterThree,
    name: "Clean",
  },
  {
    id: "cover-letter-05",
    img: TemplateOne,
    name: "Clean",
  },
  {
    id: "cover-letter-06",
    img: CoverLetterOne,
    name: "Clean",
  },
  {
    id: "cover-letter-07",
    img: CoverLetterThree,
    name: "Clean",
  },
];
