"use client";
import { createContext, useContext, useState, useEffect } from "react";
import LoadingComponent from "../components/LoadingComponent";
import { axiosResume } from "@/app/lib/axios";

const ResumeTemplatesContext = createContext();

export const ResumeTemplatesProvider = ({ children }) => {
  const [resumeTemplates, setTemplates] = useState(null);
  const [loading, setLoading] = useState(false);

  const updateResumeTemplates = (data) => {
    setTemplates(data);
  };

  useEffect(() => {
    setLoading(true);
    axiosResume
      .get("/resume")
      .then((res) => {
        const data = res.data;
        setTemplates(data.events);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, []);

  return (
    <ResumeTemplatesContext.Provider
      value={{ resumeTemplates, updateResumeTemplates }}
    >
      {" "}
      {loading && <LoadingComponent />}
      {children}
    </ResumeTemplatesContext.Provider>
  );
};

export const useResumeTemplates = () => {
  return useContext(ResumeTemplatesContext);
};
