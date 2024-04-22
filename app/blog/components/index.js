"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import HomeIcon from "@/public/images/house-icon.png";
import RightBracket from "@/public/images/right-bracket.png";
import SearchIcon from "@/public/images/search-icon.png";
import { axiosBlog } from "@/app/lib/axios";
import MasonryGrid from "@/app/components/MansoryGrid";
import LoadingComponent from "../../components/LoadingComponent";
import GuestLayout from "@/app/layouts/GuestLayout";
export default function BlogPageDetails() {
  const [blogData, setBlogData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axiosBlog
      .get("/posts")
      .then((res) => {
        const data = res.data;
        setBlogData(data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, []);

  return (
    <GuestLayout>
      {loading && <LoadingComponent />}
      <main className="w-full h-auto">
        <main className="w-full items-center h-max pt-[100px] px-10 max-[800px]:px-5  bg-white">
          <div className="flex w-full gap-4 items-center pb-8">
            <Link href="/" className="flex gap-1.5 items-center">
              <Image src={HomeIcon} alt="Home Icon" className="w-7 h-7" />
              <p className="text-black/80 font-medium text-sm hover:underline">
                Home
              </p>
            </Link>
            <Image src={RightBracket} alt="Divider Icon" className="w-5 h-4" />
            <p className="text-black/50 font-medium text-sm">
              AnalogueShifts Career Blog
            </p>
          </div>
          <div className="w-full flex flex-col items-center">
            <p className="pb-5 text-[2.6rem] w-[700px] max-[900px]:w-[90%] text-center max-[900px]:text-xl font-extrabold text-black/80">
              AnalogueShifts Career Blog
            </p>
            <p className="text-black/60 w-[800px] max-[900px]:w-[90%] max-[1050px]:text-center font-normal pb-10 tracking-normal text-base text-center">
              Irrespective of where you are in your job hunt, we provide guides
              and downloadable resources to assist you. Learn how to create an
              application that secures interviews and lands you the job.
            </p>
          </div>
        </main>
        <div className="w-full px-10 max-[800px]:px-5 py-10">
          <div className="w-full overflow-x-auto"></div>
          <div className="w-full py-10">
            <div className="w-full h-max overflow-hidden bg-white rounded-lg border flex items-center pl-3">
              <Image
                className="cursor-pointer w-5 h-5 mr-3 opacity-70"
                src={SearchIcon}
                alt="Search Icon"
              />
              <input
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search Blog"
                className="text font-normal w-[calc(100%-28px)] py-3.5 outline-none border-none text-black/40 text-[15px]"
              />
            </div>
          </div>
          <div className="w-full h-max flex flex-col items-center bg-white justify-center p-5 ">
            <p className=" pb-8 text-[2.6rem] w-[700px] max-[900px]:w-[90%] text-center max-[900px]:text-xl font-extrabold text-black/80">
              Related Articles
            </p>
            <div className="w-full flex justify-between flex-wrap gap-y-5">
              <MasonryGrid
                posts={blogData.filter((data) =>
                  data.title.rendered
                    .toLowerCase()
                    .includes(searchValue.toLowerCase())
                )}
              />
            </div>
          </div>
        </div>
      </main>
    </GuestLayout>
  );
}
