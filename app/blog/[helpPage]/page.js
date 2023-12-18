import BlogHelpPageDetails from "@/app/components/blog/HelpPage/PageDetails";

export default function Page({ params }) {
  return <BlogHelpPageDetails helpPage={params.helpPage} />;
}
