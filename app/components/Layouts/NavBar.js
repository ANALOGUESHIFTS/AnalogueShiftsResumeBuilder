"use client";
import React, { useState, useEffect, Fragment, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ApplicationLogo from "./ApplicationLogo";
import { Menu, Transition, Dialog } from "@headlessui/react";

//Submenu Components
import BuildersSubMenu from "./BuildersSubmenu";
import ResumesSubMenu from "./ResumesSubmenu";
import CoverLetterSubMenu from "./coverLetterSubmenu";
import CVSubMenu from "./cvsSubmenu";
import ResourcesSubMenu from "./ResourcesSubmenu";
import LeftArrowImage from "@/public/left-arrow.png";
import Image from "next/image";
import FileImage from "@/public/file-icon.png";
import GridImage from "@/public/grid-icon.png";
import LeafImage from "@/public/leaf.png";
import QuestionIcon from "@/public/question-icon.png";
import PhoneIcon from "@/public/phone-icon.png";

//Datas
import { buildersLink } from "../resources/data";
import { resumeNavLinks } from "../resources/resume/data";
import { coverLetterNavLinks } from "../resources/cover-letter/data";
import { cvNavLinks } from "../resources/cv/data";
import { faqsData } from "../resources/data";
import ProfileDropDown from "./ProfileDropdown";
import MobileProfileDropdown from "./MobileProfileDropdown";

//Use Auth
import { useAuth } from "../contexts/AuthContext";
import LoadingComponent from "../LoadingComponent";

export default function NavBar() {
  const pathname = usePathname();
  const [opacity, setOpacity] = useState(1);
  const [transformOne, setTransformOne] = useState(0);
  const [transformTwo, setTransformTwo] = useState(0);
  const [bodyRotate, setBodyRotate] = useState(0);
  const [position, setPosition] = useState(-1200);
  const [selectedMenu, setSelectedMenu] = useState("");
  const [selectedMobileMenu, setSelectedMobileMenu] = useState("");
  const [subMenuComponent, setSubMenuComponent] = useState("");
  const { user, login, logout } = useAuth();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);

  const toggleMenu = () => {
    if (position !== 0) {
      setPosition(0);
      setOpacity(0);
      setTransformOne(-90);
      setTransformTwo(-10);
      setBodyRotate(45);
    } else {
      setPosition(-1200);
      setOpacity(1);
      setTransformOne(0);
      setTransformTwo(0);
      setBodyRotate(0);
    }
  };

  const updateSelectedMenu = (value) => {
    if (selectedMenu === value) {
      setSelectedMenu("");
    } else {
      setSelectedMenu(value);
    }
  };

  function handleLogout() {
    localStorage.removeItem("analogueshifts");
    window.location.href = "/";
  }

  const navLinks = ["Builders", "Resumes", "Cover Letters", "CVs", "Resources"];

  useEffect(() => {
    switch (selectedMenu) {
      case "":
        setSubMenuComponent("");
        break;
      case "Builders":
        setSubMenuComponent(<BuildersSubMenu />);
        break;
      case "Resumes":
        setSubMenuComponent(<ResumesSubMenu />);
        break;
      case "Cover Letters":
        setSubMenuComponent(<CoverLetterSubMenu />);
        break;
      case "CVs":
        setSubMenuComponent(<CVSubMenu />);
        break;
      case "Resources":
        setSubMenuComponent(<ResourcesSubMenu />);
        break;
      default:
        setSubMenuComponent("");
        break;
    }
  }, [selectedMenu]);

  useEffect(() => {
    setSelectedMenu("");
    if (opacity === 0) {
      toggleMenu();
    }
  }, [pathname]);

  useEffect(() => {
    let storedData = JSON.parse(localStorage.getItem("analogueshifts"));
    if (storedData) {
      login(storedData[0].user);
    }
  }, []);

  return (
    <>
      {loading && <LoadingComponent />}
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                        <i
                          className=" text-red-600 fas fa-triangle-exclamation"
                          aria-hidden="true"
                        ></i>
                      </div>
                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <Dialog.Title
                          as="h3"
                          className="text-base font-semibold leading-6 text-gray-900"
                        >
                          Log Out
                        </Dialog.Title>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">
                            Are you sure you want to Sign out of your account?
                            You can always sign in anytime tou want
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                      onClick={() => {
                        setOpen(false);
                        handleLogout();
                      }}
                    >
                      Log Out
                    </button>
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                      onClick={() => setOpen(false)}
                      ref={cancelButtonRef}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      <nav className="w-full z-70">
        <div
          style={{ boxShadow: "1px 1px 50px rgba(0,0,0,0.1)" }}
          className="w-[calc(100%-12px)] z-80 h-16 backdrop-filter backdrop-blur-sm top-1.5 left-1.5 fixed rounded-full px-7 flex justify-between items-center"
        >
          <div className="flex items-center">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="https://analogueshifts.com" target="_blank">
                <ApplicationLogo className="block h-10 w-auto fill-current text-gray-600" />
              </Link>
            </div>
          </div>
          <div className="flex gap-6 max-[850px]:hidden">
            {navLinks.map((menu) => {
              return (
                <button
                  onClick={() => updateSelectedMenu(menu)}
                  key={crypto.randomUUID()}
                  className="border-none relative menu-link"
                >
                  <p
                    className={`text-base ${
                      selectedMenu === menu
                        ? "text-AnalogueShiftsTextColor"
                        : "text-black/70"
                    }  ${
                      selectedMenu !== menu && "hover:text-black"
                    } font-medium`}
                  >
                    {menu}
                  </p>
                  <div
                    className={`w-1 h-1 rounded-full bg-AnalogueShiftsTextColor absolute left-[50%] -bottom-2.5 ${
                      selectedMenu === menu ? "opacity-100" : "opacity-0"
                    } `}
                  ></div>
                </button>
              );
            })}
            {!user ? (
              <Link
                className="border-black/70 border duration-300 hover:-translate-y-1 text-black/80 font-medium text-sm py-2 px-12 rounded-lg"
                href="/login"
              >
                Login
              </Link>
            ) : (
              <ProfileDropDown logout={() => setOpen(true)} user={user} />
            )}
          </div>
          <div
            style={{ transform: `rotate(${bodyRotate}deg)` }}
            onClick={toggleMenu}
            className="hidden max-[850px]:flex duration-300 origin-left flex-col w-5 h-3 cursor-pointer justify-between"
          >
            <div
              style={{ transform: `rotate(${transformOne}deg)` }}
              className="w-full duration-300 h-0.5 bg-black/80 rounded"
            ></div>
            <div
              style={{ opacity: opacity }}
              className="w-full h-0.5 duration-300 bg-black/80 rounded"
            ></div>
            <div
              style={{ transform: `translateY(${transformTwo}px)` }}
              className="w-full h-0.5 bg-black/80 duration-300 rounded"
            ></div>
          </div>
        </div>
        <div className="z-70 w-[calc(100%-12px)] fixed left-1.5 top-1.5">
          {subMenuComponent}
        </div>
        <div
          style={{ left: `${position}px` }}
          className="w-[80%] h-screen static hidden duration-300 max-[850px]:fixed z-50 bg-white py-6 px-3.5 max-[850px]:flex flex-col gap-5"
        >
          {navLinks.map((data) => {
            if (selectedMobileMenu === "" || selectedMobileMenu === data) {
              return (
                <div
                  onClick={() => {
                    if (selectedMobileMenu === data) {
                      setSelectedMobileMenu("");
                    } else {
                      setSelectedMobileMenu(data);
                    }
                  }}
                  key={crypto.randomUUID()}
                  className="cursor-pointer w-full py-2 border-b flex items-center gap-2"
                >
                  {selectedMobileMenu === data && (
                    <Image
                      src={LeftArrowImage}
                      alt="Back arrow"
                      className=" w-3 h-3"
                    />
                  )}
                  <p
                    className={`font-medium text-base ${
                      selectedMobileMenu === data
                        ? "text-AnalogueShiftsTextColor"
                        : "text-black/80"
                    }`}
                  >
                    {data}
                  </p>
                </div>
              );
            }
          })}
          {selectedMobileMenu === "Builders" && (
            <div className="w-full h-[280px] overflow-y-auto pt-2 flex flex-col gap-3">
              {buildersLink.map((link) => {
                return (
                  <Link
                    key={crypto.randomUUID()}
                    href={link.path}
                    className="flex gap-3 items-center"
                  >
                    <div className="w-7 h-7 rounded-lg bg-gray-200/70 flex justify-center items-center">
                      <Image
                        src={FileImage}
                        alt="File Icon"
                        className="w-3.5 h-4 opacity-60"
                      />
                    </div>
                    <p className="text-black/80 font-medium text-sm">
                      {link.name}
                    </p>
                  </Link>
                );
              })}
            </div>
          )}
          {selectedMobileMenu === "Resumes" && (
            <div className="w-full h-[300px] overflow-y-auto pt-2 flex flex-col gap-5">
              <div className="flex flex-col gap-3">
                <Link
                  href="/resume-templates"
                  className="flex gap-3 items-center"
                >
                  <div className="w-7 h-7 rounded-lg bg-gray-200/70 flex justify-center items-center">
                    <Image
                      src={GridImage}
                      alt="File Icon"
                      className="w-3.5 h-4 opacity-60"
                    />
                  </div>
                  <p className="text-black/80 font-medium text-sm">
                    RESUME TEMPLATES
                  </p>
                </Link>
                <div className="w-full flex flex-col">
                  {resumeNavLinks.map((data) => {
                    return (
                      <Link
                        key={crypto.randomUUID()}
                        href={data.path}
                        className="py-2 pr-2 pl-10 rounded-lg hover:bg-gray-200/70 text-black/70 font-medium text-sm"
                      >
                        {data.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <Link href="/blog" className="flex gap-3 items-center">
                  <div className="w-7 h-7 rounded-lg bg-gray-200/70 flex justify-center items-center">
                    <Image
                      src={LeafImage}
                      alt="File Icon"
                      className="w-3.5 h-4 opacity-80"
                    />
                  </div>
                  <p className="text-black/80 font-medium text-sm">
                    RESUME HELP
                  </p>
                </Link>
              </div>
              <div className="flex flex-col gap-3">
                <Link
                  href="/resume-samples"
                  className="flex gap-3 items-center"
                >
                  <div className="w-7 h-7 rounded-lg bg-gray-200/70 flex justify-center items-center">
                    <Image
                      src={FileImage}
                      alt="File Icon"
                      className="w-3.5 h-4 opacity-80"
                    />
                  </div>
                  <p className="text-black/80 font-medium text-sm">
                    RESUME EXAMPLES
                  </p>
                </Link>
              </div>
            </div>
          )}
          {selectedMobileMenu === "Cover Letters" && (
            <div className="w-full h-[300px] overflow-y-auto pt-2 flex flex-col gap-5">
              <div className="flex flex-col gap-3">
                <Link
                  href="/cover-letter-templates"
                  className="flex gap-3 items-center"
                >
                  <div className="w-7 h-7 rounded-lg bg-gray-200/70 flex justify-center items-center">
                    <Image
                      src={GridImage}
                      alt="File Icon"
                      className="w-3.5 h-4 opacity-60"
                    />
                  </div>
                  <p className="text-black/80 font-medium text-sm">
                    COVER LETTER TEMPLATES
                  </p>
                </Link>
                <div className="w-full flex flex-col">
                  {coverLetterNavLinks.map((data) => {
                    return (
                      <Link
                        key={crypto.randomUUID()}
                        href={data.path}
                        className="py-2 pr-2 pl-10 rounded-lg hover:bg-gray-200/70 text-black/70 font-medium text-sm"
                      >
                        {data.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <Link href="/blog" className="flex gap-3 items-center">
                  <div className="w-7 h-7 rounded-lg bg-gray-200/70 flex justify-center items-center">
                    <Image
                      src={LeafImage}
                      alt="File Icon"
                      className="w-3.5 h-4 opacity-80"
                    />
                  </div>
                  <p className="text-black/80 font-medium text-sm">
                    COVER LETTER HELP
                  </p>
                </Link>
              </div>
              <div className="flex flex-col gap-3">
                <Link
                  href="/cover-letter-examples"
                  className="flex gap-3 items-center"
                >
                  <div className="w-7 h-7 rounded-lg bg-gray-200/70 flex justify-center items-center">
                    <Image
                      src={FileImage}
                      alt="File Icon"
                      className="w-3.5 h-4 opacity-80"
                    />
                  </div>
                  <p className="text-black/80 font-medium text-sm">
                    COVER LETTER EXAMPLES
                  </p>
                </Link>
              </div>
            </div>
          )}
          {selectedMobileMenu === "CVs" && (
            <div className="w-full h-[300px] overflow-y-auto pt-2 flex flex-col gap-5">
              <div className="flex flex-col gap-3">
                <Link href="/cv-template" className="flex gap-3 items-center">
                  <div className="w-7 h-7 rounded-lg bg-gray-200/70 flex justify-center items-center">
                    <Image
                      src={GridImage}
                      alt="File Icon"
                      className="w-3.5 h-4 opacity-60"
                    />
                  </div>
                  <p className="text-black/80 font-medium text-sm">
                    CV TEMPLATES
                  </p>
                </Link>
                <div className="w-full flex flex-col">
                  {cvNavLinks.map((data) => {
                    return (
                      <Link
                        key={crypto.randomUUID()}
                        href={data.path}
                        className="py-2 pr-2 pl-10 rounded-lg hover:bg-gray-200/70 text-black/70 font-medium text-sm"
                      >
                        {data.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <Link href="/blog" className="flex gap-3 items-center">
                  <div className="w-7 h-7 rounded-lg bg-gray-200/70 flex justify-center items-center">
                    <Image
                      src={LeafImage}
                      alt="File Icon"
                      className="w-3.5 h-4 opacity-80"
                    />
                  </div>
                  <p className="text-black/80 font-medium text-sm">CV HELP</p>
                </Link>
              </div>
              <div className="flex flex-col gap-3">
                <Link href="/cv-examples" className="flex gap-3 items-center">
                  <div className="w-7 h-7 rounded-lg bg-gray-200/70 flex justify-center items-center">
                    <Image
                      src={FileImage}
                      alt="File Icon"
                      className="w-3.5 h-4 opacity-80"
                    />
                  </div>
                  <p className="text-black/80 font-medium text-sm">
                    CV EXAMPLES
                  </p>
                </Link>
              </div>
            </div>
          )}
          {selectedMobileMenu === "Resources" && (
            <div className="w-full h-[300px] overflow-y-auto pt-2 flex flex-col gap-5">
              <div className="flex flex-col gap-3">
                <Link href="/faq" className="flex gap-3 items-center">
                  <div className="w-7 h-7 rounded-lg bg-gray-200/70 flex justify-center items-center">
                    <Image
                      src={QuestionIcon}
                      alt="File Icon"
                      className="w-4 h-4 opacity-80"
                    />
                  </div>
                  <p className="text-black/80 font-medium text-sm">FAQS</p>
                </Link>
                <div className="w-full flex flex-col">
                  {faqsData.map((data) => {
                    return (
                      <Link
                        key={crypto.randomUUID()}
                        href={data.path}
                        className="py-2 pr-2 pl-10 rounded-lg hover:bg-gray-200/70 text-black/70 font-medium text-sm"
                      >
                        {data.title}
                      </Link>
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <Link href="/blog" className="flex gap-3 items-center">
                  <div className="w-7 h-7 rounded-lg bg-gray-200/70 flex justify-center items-center">
                    <Image
                      src={FileImage}
                      alt="File Icon"
                      className="w-3.5 h-4 opacity-80"
                    />
                  </div>
                  <p className="text-black/80 font-medium text-sm">BLOG</p>
                </Link>
              </div>
            </div>
          )}
          <div className="w-full flex flex-col gap-4 pt-8">
            {!user ? (
              <Link
                className="border-black/70 w-full flex justify-center items-center border duration-300 hover:-translate-y-1 text-black/80 font-medium text-sm py-2.5 rounded-lg"
                href="/login"
              >
                Login
              </Link>
            ) : (
              <MobileProfileDropdown
                user={user}
                logout={() => {
                  toggleMenu();
                  setOpen(true);
                }}
              />
            )}
            <Link
              className="bg-AnalogueShiftsTextColor w-full flex justify-center items-center duration-300 hover:-translate-y-1 text-black/80 font-medium text-sm py-2.5 rounded-lg"
              href="/resume-builder/app/how-to-start"
            >
              Build My Resume
            </Link>
          </div>
          <div className="py-2 border-t absolute bottom-0 w-full flex justify-center items-center gap-2">
            <Image
              src={PhoneIcon}
              alt="Phone Icon"
              className="w-4 h-4 opacity-70"
            />
            <p className=" text-[13px] font-normal text-black/60 tracking-normal">
              Monday to Friday, 8AM – 12AM (Midnight) and Saturdays and Sundays,
              10AM – 6PM EDT +234806708343
            </p>
          </div>
        </div>
      </nav>
    </>
  );
}
