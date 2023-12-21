import BuilderPageDetails from "@/app/components/ResumeBuilder/BuilderPageDetails";

export const metadata = {
  title: "AnalogueShifts Resume Builder",
  description: "The Best Resume Builder",
};

export default function Page({ params }) {
  return <BuilderPageDetails templateID={params.template} />;
}
