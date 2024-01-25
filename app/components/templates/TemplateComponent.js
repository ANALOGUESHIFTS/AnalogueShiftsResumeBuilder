"use client";
import { useEffect } from "react";

export default function TemplateComponent({ resume, data }) {
  const content = <div dangerouslySetInnerHTML={{ __html: resume.template }} />;

  return <>{content}</>;
}
