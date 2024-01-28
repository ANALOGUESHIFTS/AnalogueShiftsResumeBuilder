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
