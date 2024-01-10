import Link from "next/link";

export default function ProfessionalResumeTemplate({ data }) {
  return (
    <main className="main min-h-full font-normal text-[#333] text-base leading-[24px] pb-10 m-0 p-0 box-border h-full">
      <div
        style={{ margin: "20px auto 0" }}
        className="max-w-[800px] bg-gray-100 rounded-[5px] p-8 shadow-md"
      >
        <div className="mb-6">
          <div className="text-[30px] font-bold mb-2">
            {data.contactData["First Name"]} {data.contactData["Last Name"]}
          </div>
          <div className="mb-4">
            <span className="text-[#555] font-light">Email: </span>
            <span className="email-val">{data.contactData["Email"]}</span>
            <span className="h-2.5 inline-block mx-2.5 border-l-2 border-solid border-[#555]"></span>
            {data.contactData["Phone"] && (
              <>
                <span className="text-[#555] font-light">Phone: </span>
                <span className="phone-val">{data.contactData["Phone"]}</span>
                <span className="h-2.5 inline-block mx-2.5 border-l-2 border-solid border-[#555]"></span>
              </>
            )}
            {data.contactData["LinkedIn Url"] && (
              <>
                <span className="text-[#555] font-light">LinkedIn: </span>
                <Link
                  className="underline"
                  href={data.contactData["LinkedIn Url"]}
                >
                  {" "}
                  <span className="phone-val">Click Here</span>
                  <span className="h-2.5 inline-block mx-2.5 border-l-2 border-solid border-[#555]"></span>
                </Link>
              </>
            )}
            <>
              <span className="text-[#555] font-light">Location: </span>
              <span className="email-val">
                {data.contactData["City"] && data.contactData["City"] + ", "}
                {data.contactData["State / Province"] &&
                  data.contactData["State / Province"] + ", "}
                {data.contactData["Country"] && data.contactData["Country"]}
              </span>
            </>
          </div>

          <div className="about">
            <span className="font-bold inline-block mr-2.5 underline">
              {data.contactData["Desired Job Title"]}{" "}
            </span>
            <span
              className="desc text-[#444]"
              dangerouslySetInnerHTML={{ __html: data.summaryData }}
            ></span>
          </div>
        </div>
        <div className="leading-6">{/* Rest of your resume sections */}</div>
      </div>
    </main>
  );
}
