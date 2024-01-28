"use client";
import { useEffect } from "react";

function replaceAllOccurrences(inputString, oldValue, newValue, data) {
  var modifiedString = inputString
    .replace(new RegExp(oldValue, "g"), newValue)
    .replace('{data.contactData["Email"] && (', "")
    .replace('${data.contactData["Phone"]}', data.contactData["Phone"])
    .replace('${data.contactData["Email"]}', data.contactData["Email"])
    .replace('{data.contactData["First Name"]}', data.contactData["First Name"])
    .replace('{data.contactData["Last Name"]}', data.contactData["Last Name"])
    .replace('{data.contactData["Email"]', data.contactData["Email"])
    .replace('{data.contactData["Phone"] &&', "")
    .replace('{data.contactData["LinkedIn Url"] &&', "")
    .replace('{data.contactData["State / Province"] &&', "")
    .replace('{data.contactData["Country"] &&', "")
    .replace('{data.contactData["City"] &&', "")
    .replace('{data.summaryData.split(">")[1][0] !== "<" &&', "")
    .replace("{data.experienceData[0] &&", "")
    .replace("{data.educationData[0] &&", "")
    .replace("{data.referencesData[0] &&", "")
    .replace("{data.skillsData[0] &&", "")
    .replace("{data.certificationData[0] &&", "")
    .replace("{data.finalizeData.customDatas[0] &&", "")
    .replace("{data.finalizeData.awards[0] &&", "")
    .replace(
      '{data.contactData["Desired Job Title"]',
      data.contactData["Desired Job Title"]
    )
    .replace("data.summaryData")
    .replace(
      '{data.contactData["First Name"].toUpperCase()}',
      data.contactData["First Name"].toUpperCase()
    )
    .replace(
      '{data.contactData["Last Name"].toUpperCase()}',
      data.contactData["Last Name"].toUpperCase()
    )
    .replace(
      '{data.contactData["First Name"][0]}',
      data.contactData["First Name"][0]
    )
    .replace('{data.contactData["Phone"]', data.contactData["Phone"])
    .replace(
      '{data.contactData["LinkedIn Url"]',
      data.contactData["LinkedIn Url"]
    )
    .replace('data.contactData["City"] + ", "', data.contactData["City"] + ", ")
    .replace(
      'data.contactData["State / Province"] + ", "',
      data.contactData["State / Province"] + ", "
    )
    .replace('data.contactData["Country"]', data.contactData["Country"])
    .replace(
      '{data.contactData["Last Name"][0]}',
      data.contactData["Last Name"][0]
    )
    .replace(new RegExp('{" "}', "g"), "")
    .replace('{data.contactData["Last Name"] && (', "")
    .replace("{/* Contact Section */}", "")
    .replace("{/* Summary Section */}", "")
    .replace("{/* Experience Section */}", "")
    .replace("{/* Education Section */}", "")
    .replace("{/* Skills Section */}", "")
    .replace("{/* Reference Section */}", "")
    .replace("{/* Certification Section */}", "")
    .replace("{/* Publication Section */}", "")
    .replace("{/* Custom Info Section */}", "")
    .replace("{/* Awards Section */}", "")
    .replace(/\)\}/g, "")
    .replace(/\}/g, "")
    .replace(/\)\;/g, "")
    .replace(/\(/g, "")
    .replace(/\<>/g, "")
    .replace('{data.contactData["Last Name"]}', data.contactData["Last Name"]);

  return modifiedString;
}

export default function TemplateComponent({ resume, data }) {
  let content = replaceAllOccurrences(
    resume.template,
    "className",
    "class",
    data
  );

  return (
    <>
      {content && (
        <div
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        />
      )}
    </>
  );
}
