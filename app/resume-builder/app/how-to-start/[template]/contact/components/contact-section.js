"use client";
import { useState, useRef, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { inputs } from "@/utils/resume-builder/builder/contact";
import { errorToast } from "@/utils/error-toast";

export default function ContactSection() {
  const router = useRouter();
  const pathname = usePathname();
  const [imageUrl, setImageUrl] = useState(null);
  const chosenTemplate = pathname.split("/")[4];
  const [formData, setFormData] = useState(inputs);
  const imageRef = useRef();

  // Handling Image Upload
  const handleImageChange = async (event) => {
    const maxFileSize = 5 * 1024 * 1024;
    const selectedFile = event.target.files[0];
    if (selectedFile && selectedFile.size > maxFileSize) {
      errorToast(
        "File size exceeds the limit (5 MB)",
        "File Size Must not exceed the Limit"
      );
      return;
    }
    if (selectedFile) {
      uploadFile(selectedFile);
    }
  };

  // Handling Form Input Change
  const handleInputChange = (label, value) => {
    setFormData((previous) =>
      previous.map((data) => {
        if (data.label !== label) {
          return data;
        } else {
          return { ...data, value: value };
        }
      })
    );
  };

  // Handling Form Submit
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Create The Contact Information Object
    const data = { imageUrl: imageUrl };

    // Iterate Over The FormData Array and Add Each input to the Contact Object
    formData.forEach((item) => {
      data[item.label] = item.value;
    });

    // Get The Stored Resume Data and update it with the Contact Object
    let storedData = localStorage.getItem("resumeInfo");
    if (storedData) {
      localStorage.setItem(
        "resumeInfo",
        JSON.stringify({
          ...JSON.parse(storedData),
          contactData: data,
        })
      );
    } else {
      localStorage.setItem(
        "resumeInfo",
        JSON.stringify({
          contactData: data,
        })
      );
    }
    router.push(
      `/resume-builder/app/how-to-start/${chosenTemplate}/experience`
    );
  };

  // Upload File To DataBase
  const uploadFile = async (file) => {
    const url = process.env.NEXT_PUBLIC_BACKEND_URL + "/upload";
    const axios = require("axios");
    const formData = new FormData();
    formData.append("upload", file);
    formData.append("type", "image");

    let config = {
      method: "POST",
      url: url,
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
      },
      data: formData,
    };

    try {
      const data = await axios.request(config);
    } catch (error) {
      errorToast(
        "Error Uploading File",
        error?.response?.data?.message ||
          error.message ||
          "Failed To Upload File"
      );
    }
  };

  // Checking For Stored Resume data
  useEffect(() => {
    const storedData = localStorage.getItem("resumeInfo");
    if (storedData) {
      if (JSON.parse(storedData).contactData) {
        setFormData((previous) =>
          previous.map((form) => {
            return {
              ...form,
              value: JSON.parse(storedData).contactData[form.label],
            };
          })
        );
      }
    }
  }, []);

  return (
    <div className="w-full flex flex-col ">
      <input
        onChange={handleImageChange}
        ref={imageRef}
        accept=".jpg, .png, .jpeg"
        type="file"
        className="-z-10 opacity-0 absolute"
      />
      <p className="font-extrabold text-3xl text-black/80 pb-5">Contact</p>
      <p className="text-base text-black/80 pb-6">
        Let&apos;s start with the basics. To ensure employers can reach you,
        input at least your name, email, and phone number.
      </p>
      <div className="w-full flex items-center gap-4 mb-6">
        <div className="w-24 h-24 rounded-lg bg-white border-gray-200 border-dashed border-2 flex justify-center items-center">
          {!imageUrl && (
            <i className="fa-solid fa-circle-user text-3xl text-black/80"></i>
          )}
          {imageUrl && (
            <img
              src={imageUrl}
              alt="profile"
              className="rounded-lg"
              width={96}
              height={96}
            />
          )}
        </div>
        <div className="flex flex-col justify-center gap-2.5">
          <p className="text-sm text-black/80">
            Add a Photo to Your Resume (Optional)
          </p>
          <button
            onClick={() => imageRef.current.click()}
            className="text-sm text-black/80 font-medium px-10 py-2 rounded-lg border w-max duration-300 hover:border-black/80 hover:-translate-y-1"
          >
            Add Photo
          </button>
        </div>
      </div>
      <form
        onSubmit={handleFormSubmit}
        method="post"
        className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5"
      >
        {formData.map((data) => {
          return (
            <input
              key={data.label}
              type={data.type}
              onChange={(e) => handleInputChange(data.label, e.target.value)}
              className="px-4 py-3.5 max-[613px]:w-full rounded-xl border outline-AnalogueShiftsTextColor text-base text-black/70"
              value={data.value}
              placeholder={data.label}
              required={data.isRequired}
            />
          );
        })}
        <div className="pt-2">
          <button
            type="submit"
            className="px-12 bg-black/90 max-[613px]:w-full duration-300 hover:-translate-y-1 text-white font-semibold py-3.5 rounded-xl"
          >
            Save And Continue
          </button>
        </div>
      </form>
    </div>
  );
}
