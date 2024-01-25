"use client";
import { useEffect } from "react";

export default function TemplateComponent({ resume, data }) {
  useEffect(() => console.log(typeof template), []);

  return <div dangerouslySetInnerHTML={{ __html: resume.template }} />;
}
