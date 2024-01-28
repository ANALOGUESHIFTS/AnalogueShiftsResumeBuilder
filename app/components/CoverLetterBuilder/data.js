import LeverageThePowerOfAi from "@/public/leverage-the-power-of-ai.svg";
import SaveOursOfTime from "@/public/save-hours-of-time.svg";
import MakeACohesiveApplication from "@/public/make-a-cohesive-application.svg";
import TryOutDifferentTemplate from "@/public/try-out-different-template.svg";
import GetPastApplicant from "@/public/get-past-applicant.svg";
import AskForExpertSuggestion from "@/public/ask-for-expert-suggestion.svg";

export const serviceData = [
  {
    title: "Save hours of time",
    subTitle: (
      <p className="text-black/60 max-[1050px]:text-center font-normal tracking-normal text-base pl-2">
        Eliminate the hassle of writing your cover letter. Simply input your
        information, select a template, and download the letter directly from
        your dashboard.
      </p>
    ),
    image: SaveOursOfTime,
  },
  {
    title: "Create a cohesive application.",
    subTitle: (
      <p className="text-black/60 max-[1050px]:text-center font-normal tracking-normal text-base pl-2">
        Enhance your application by pairing your cover letter template with a
        matching resume template, making it stand out to hiring managers and
        employers.
      </p>
    ),
    image: MakeACohesiveApplication,
  },
  {
    title: "Harness the power of AI technology.",
    subTitle: (
      <p className="text-black/60 max-[1050px]:text-center font-normal tracking-normal text-base pl-2">
        Our software extracts information from authentic job advertisements,
        then analyzes and rewrites it to generate compelling sentences for your
        personalized letter.
      </p>
    ),
    image: LeverageThePowerOfAi,
  },
  {
    title: "Experiment with various templates.",
    subTitle: (
      <p className="text-black/60 max-[1050px]:text-center font-normal tracking-normal text-base pl-2">
        Save your cover letter from the dashboard and try it with different
        templates. The appropriate cover letter template can significantly
        impact your application.
      </p>
    ),
    image: TryOutDifferentTemplate,
  },
  {
    title: "Navigate past applicant tracking software.",
    subTitle: (
      <p className="text-black/60 max-[1050px]:text-center font-normal tracking-normal text-base pl-2">
        Every aspect of our builder, from the templates to the content
        generator, was designed to circumvent the software that companies use to
        filter out candidates.
      </p>
    ),
    image: GetPastApplicant,
  },
  {
    title: "Seek expert recommendations.",
    subTitle: (
      <p className="text-black/60 max-[1050px]:text-center font-normal tracking-normal text-base pl-2">
        The &quot;Ask the Experts&quot; feature offers insights from certified
        career coaches on your completed letter. Gain valuable advice on
        perfecting each section to increase your chances of securing more
        interviews.
      </p>
    ),
    image: AskForExpertSuggestion,
  },
];
