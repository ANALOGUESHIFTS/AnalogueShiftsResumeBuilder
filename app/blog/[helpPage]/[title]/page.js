import BlogTitlePageDetails from "@/app/components/blog/HelpPage/Title/PageDetails";

export default function Page({ params }) {
  return <BlogTitlePageDetails title={params.title} />;
}
