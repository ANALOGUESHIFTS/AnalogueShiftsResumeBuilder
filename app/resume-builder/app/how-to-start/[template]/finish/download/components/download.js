"use client";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import resumeTemplates from "@/resources/resume-builder/resume-templates.json";

export default function DownloadResume() {
  const [data, setData] = useState(null);
  const [TemplateComponent, setTemplateComponent] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const storedData = Cookies.get("analogueshifts");
    if (!storedData) {
      router.push("https://auth.analogueshifts.app?app=resume");
    } else {
      const resumeData = localStorage.getItem("resumeInfo");
      if (resumeData) {
        setData(JSON.parse(resumeData));
      }
    }
  }, [router]);

  useEffect(() => {
    if (data) {
      const templateEntry = resumeTemplates.find(
        (template) => template.id === data.template
      );
      if (templateEntry && templateEntry.linkToTemplate) {
        import(`@/components/application/templates/resume/${data.template}`)
          .then((module) => {
            const TemplateComponent = module.default;
            setTemplateComponent(() => TemplateComponent);
          })
          .catch((error) => {
            console.error("Error importing template:", error);
          });
      } else {
        console.error("Template path not found for:", data.template);
      }
    }
  }, [data]);

  useEffect(() => {
    if (TemplateComponent) {
      window.print();
    }
  }, [TemplateComponent]);

  return (
    <>
      {TemplateComponent ? (
        <div className="print-container w-full max-w-full overflow-x-hidden p-5 h-max flex lg:justify-center items-center bg-gray-300">
          <TemplateComponent data={data} />
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}

// Add the following CSS to handle page breaks
const style = document.createElement("style");
style.innerHTML = `
@media print {
  .print-container {
    page-break-inside: avoid;
    overflow: hidden;
  }
  
  .print-container > * {
    page-break-inside: avoid;
    break-inside: avoid;
  }
  
  .print-container > *:not(:last-child) {
    margin-bottom: 1rem;
  }
}
`;
document.head.appendChild(style);
