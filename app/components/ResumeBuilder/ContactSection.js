"use client";
import Cookies from "js-cookie";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function ContactSection({ submit }) {
  const [image, setImage] = useState(null);
  const [formData, setFormData] = useState([
    {
      label: "First Name",
      required: true,
      value: "",
      type: "text",
      isRequired: true,
    },
    {
      label: "Last Name",
      value: "",
      type: "text",
      isRequired: false,
    },
    {
      label: "Desired Job Title",
      value: "",
      type: "text",
      isRequired: true,
    },
    {
      label: "Phone",
      value: "",
      type: "text",
      isRequired: false,
    },
    {
      label: "Country",
      value: "",
      type: "text",
      isRequired: true,
    },
    {
      label: "City",
      value: "",
      type: "text",
      isRequired: false,
    },
    {
      label: "State / Province",
      value: "",
      type: "text",
    },
    {
      label: "LinkedIn Url",
      value: "",
      type: "text",
    },
    {
      label: "Email",
      value: "",
      type: "email",
      isRequired: true,
    },
  ]);
  const imageRef = useRef();

  const handleImageChange = async (event) => {
    const selectedFile = event.target.files;
    setImage(selectedFile);
  };

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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const data = {};
    formData.forEach((item) => {
      data[item.label] = item.value;
    });
    //data.image = image;
    submit(data);
  };

  useEffect(() => {
    const storedData = JSON.parse(Cookies.get("userData"));
    if (storedData && storedData.contactData) {
      setFormData((previous) =>
        previous.map((form) => {
          return { ...form, value: storedData.contactData[form.label] };
        })
      );
    }
  }, []);

  return (
    <div className="w-full flex flex-col">
      <input
        onChange={handleImageChange}
        ref={imageRef}
        accept=".jpg, .png, .jpeg"
        type="file"
        className="-z-10 opacity-0 absolute"
      />
      <p className="font-extrabold text-3xl text-black/80 pb-5">Contact</p>
      <p className="text-base text-black/80 pb-6">
        Let's start with the basics. To ensure employers can reach you, input at
        least your name, email, and phone number.
      </p>
      {/*   <div className="w-full flex items-center gap-4 mb-6">
        <div className="w-24 h-24 rounded-lg bg-white border-gray-200 border-dashed border-2 flex justify-center items-center">
          {image === null && (
            <i className="fa-solid fa-circle-user text-3xl text-black/80"></i>
          )}
          {image && (
            <Image
              src={URL.createObjectURL(image[0])}
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
      </div> */}
      <form
        onSubmit={handleFormSubmit}
        method="post"
        className="w-full flex flex-wrap gap-x-5 gap-y-5"
      >
        {formData.map((data) => {
          return (
            <input
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
