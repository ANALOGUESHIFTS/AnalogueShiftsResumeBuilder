import PickAResumeTemplate from "@/public/images/pick-a-resume-template.svg";
import CustomizeEachSection from "@/public/images/generate-bullet-point.svg";
import EmphasizeYourSkills from "@/public/images/emphasize-your-skill.svg";
import AttachACoverLetter from "@/public/images/attach-cover-letter.svg";
import ResumeBuilder from "@/public/images/resume-builder-nav-image-one.webp";
import CoverLetterImage from "@/public/images/cover-letter-nav-image.webp";
import CVMakerImage from "@/public/images/cv-maker-image.webp";
import SettingsIcon from "@/public/images/settings-icon.svg";
import CoverLetterFaqNavIcon from "@/public/images/cover-letter-faqs-nav-icon.svg";
import ResumeFaqNavIcon from "@/public/images/resume-faqs-nav-icon.svg";

export const dummyUserData = {
  contactData: {
    "First Name": "Promise",
    "Last Name": "Onuoha",
    "Desired Job Title": "Frontend Engineer",
    Phone: "+2349075868706",
    Country: "Nigeria",
    City: "Aba",
    "State / Province": "Abia",
    "LinkedIn Url": "https://www.linkedin.com/in/promise-onuoha",
    Email: "pebuka351@gmail.com",
  },
  experienceData: [
    {
      title: "Experience 2",
      jobTitle: "Frontend Engineer",
      companyName: "AnalogueShifts",
      country: "Nigeria",
      state: "",
      city: "",
      description:
        "Highly skilled and motivated Frontend Engineer with a proven track record at Analogueshifts, adept at translating design concepts into seamless and responsive user interfaces. Proficient in a range of modern web technologies, including HTML, CSS, and JavaScript frameworks such as React. Demonstrated expertise in optimizing website performance and user experience. Strong collaborative and communication skills, with a keen eye for detail and a passion for staying abreast of emerging frontend development trends. Committed to delivering high-quality code and innovative solutions to enhance Analogueshifts' digital presence and user engagement.",
      startMonth: "October",
      endMonth: "",
      startYear: "2023",
      endYear: "",
      currentlyWorkHere: true,
    },
  ],
  educationData: [
    {
      title: "Education 1",
      schoolName: "St micheal's comprehensive college",
      schoolLocation: "Aba, Abia, Nigeria",
      degreeOfProgram: "High school",
      fieldOfStudy: "Art",
      graduationMonth: "August",
      graduationYear: "2023",
      additionalInfo:
        "I acquired my academic foundation at this esteemed institution, contributing to my professional growth and expertise.",
    },
  ],
  certificationData: [
    {
      id: "certification-24af741c-5e04-4982-8f53-932cbc580851",
      certification: "Javascript Algorithmns and data structures",
    },
    {
      id: "certification-32a2bc17-eee5-4cbb-bff0-e3d9b11bea8e",
      certification: "Advanced CSS Animations",
    },
  ],
  skillsData: [
    {
      id: "skill-de71adbd-596e-440c-b3cd-a73b0486af1f",
      skill: "Javascript",
    },
    {
      id: "skill-aac37ca9-dc81-4adc-9ae3-39d22f886a5c",
      certification: "",
      skill: "Typescript",
    },
    {
      id: "skill-b9bba46b-4ee6-4b6a-a9b3-7700bbe1389f",
      certification: "",
      skill: "React",
    },
    {
      id: "skill-de647520-e6ad-4676-8542-7a40489cd445",
      certification: "",
      skill: "Next",
    },
  ],
  summaryData:
    "<p>I am a Frontend Developer currently expanding my skillset by delving into backend development, with a focus on MERN Stack</p>",
  referencesData: [
    {
      title: "Reference 1",
      firstName: "Kenneth",
      lastName: "Malaka",
      positionTitle: "CEO",
      email: "hello@analogueshifts.com",
      phone: "+2349075868706",
      relationshipToYou: "Employer",
      companyName: "AnalogueShifts",
    },
  ],
  finalizeData: {
    awards: [
      {
        id: "award-c6a4ccf4-298f-40ca-929b-e4cd85d3b2c8",
        award: "Innovative Frontend Solution Award",
      },
    ],
    publications: [
      {
        id: "publication-f8df2022-7cf1-4a59-bd7c-bbb29b703535",
        publication: "CSS-Tricks",
      },
    ],
    customDatas: [
      {
        id: "customData-7fc66f74-bbb1-4de7-9013-454f1978e98b",
        name: "Frontend Developer at AnalogueShifts",
        description:
          "As a skilled Frontend Developer contributing to the dynamic team at AnalogueShifts, I bring a passion for crafting engaging user interfaces. With a solid foundation in HTML, CSS, and JavaScript, I specialize in leveraging React.js to create responsive and visually appealing web applications. Committed to staying updated on the latest frontend trends, I actively contribute to the seamless user experience of AnalogueShifts' digital platforms. Collaborative by nature, I thrive in a team environment and am dedicated to delivering high-quality frontend solutions that elevate the company's online presence.",
      },
    ],
  },
};

export const levelUpLinks = [
  {
    path: "/resume-templates#advanced",
    number: "01",
    color: "#4b94ea",
    icon: PickAResumeTemplate,
    title: "Pick A Resume Template",
    description:
      "With a good resume template, you don't need to worry about details like formatting.",
    linkText: "Get a professional template",
  },
  {
    path: "/blog",
    number: "02",
    color: "#ea723c",
    icon: CustomizeEachSection,
    title: "Customize Each Section",
    description:
      "Fill in your personal information and write about your work experience.",
    linkText: "Learn how to write a resume",
  },
  {
    path: "/blog",
    number: "03",
    color: "#2ca482",
    icon: EmphasizeYourSkills,
    title: "Emphasize Your Skills",
    description:
      "Take skills from the job advertisement, then tie them into your resume.",
    linkText: "Pick skills for your resume",
  },
  {
    path: "/blog",
    number: "04",
    color: "#f892bc",
    icon: AttachACoverLetter,
    title: "Attach A Cover Letter",
    description:
      "A resume will get you the job, but a cover letter will get your foot in the door.",
    linkText: "Write a winning cover letter",
  },
];

export const faqsData = [
  {
    image: SettingsIcon,
    title: "Technical Assistance",
    path: "/faq#technical-assistance",
  },
  {
    image: CoverLetterFaqNavIcon,
    title: "Payment Information",
    path: "/faq#payment-information",
  },
  {
    image: ResumeFaqNavIcon,
    title: "Delete or request data",
    path: "/faq#delete-or-request-data",
  },
];
export const blogData = [
  {
    title: "Job Hunting",
    path: "/blog",
  },
  {
    title: "Interview Help",
    path: "/blog",
  },
  {
    title: "Career Advice",
    path: "/blog",
  },
];
export const buildersLink = [
  {
    name: "RESUME BUILDER",
    path: "/",
    image: ResumeBuilder,
    subTitle:
      "Making a resume is easy with the right tool. Our professional builder will do the hard work for you.",
  },
  {
    name: "COVER LETTER GENERATOR",
    path: "/cover-letter-builder",
    image: CoverLetterImage,
    subTitle:
      "Short on time or simply don't like writing? Try our cover letter generator and make a cover letter fast.",
  },
  {
    name: "CV MAKER",
    path: "/cv-maker",
    image: CVMakerImage,
    subTitle:
      "CVs are often longer than resumes. But with our CV maker, you can create a CV in the same amount of time.",
  },
];

export const faqNavLinks = [
  {
    title: "Technical Assistance",
    path: "/faq#technical-assistance",
  },
  {
    title: "Payment Information",
    path: "/faq#payment-information",
  },
  {
    title: "Delete Or Request Data",
    path: "/faq#delete-or-request-data",
  },
];

export const faqAndAnswers = [
  {
    name: "Technical Assistance",
    id: "technical-assistance",
    faqs: [
      {
        question: "Why can’t I log into my account?",
        answer: (
          <div className="w-full border-t border-AnalogueShiftsTextColor pt-5">
            <p className="text-black/80 pb-5 text-sm">
              If you are having difficulties logging into your account or the
              page is freezing, it might be due to too much data stored in your
              web browser. Try these steps before logging into your account:
            </p>
            <p className="text-black/80 pb-5 text-sm">
              1. Clear your browser’s cache.
            </p>
            <p className="text-black/80 text-sm font-semibold pb-5">
              On Google Chrome:
            </p>
            <ul className="w-full flex list-inside list-disc flex-col gap-3">
              <li className="text-black/80 text-sm">
                On Safari’s drop-down menu, select &quot;Preferences&quot; .
              </li>
              <li className="text-black/80 text-sm">
                Go to the Advanced option.
              </li>
              <li className="text-black/80 text-sm">
                At the bottom, select &quot;Show Develop Menu&quot; click
                &quot;Develop&quot; and then select &quot;Empty cache.&quot;
              </li>
            </ul>
            <p className="text-black/80 text-sm font-semibold py-5">
              On Microsoft Edge:
            </p>
            <ul className="w-full flex list-inside list-disc flex-col gap-3">
              <li className="text-black/80 text-sm">
                At the same time, press the Control, Shift and Delete keys on
                your keyboard.
              </li>
              <li className="text-black/80 text-sm">
                A new tab will appear with the options to clear browsing data.
              </li>
              <li className="text-black/80 text-sm">
                Select your &quot;All time&quot; on the &quot;Time Range&quot;
                drop-down menu. Make sure to select the box marked &quot;Cached
                images and files,&quot; and then click the blue button marked
                &quot;Clear Now.&quot;
              </li>
            </ul>
            <p className="text-black/80 py-5 text-sm">
              2. Refresh the page before logging in.
            </p>
            <p className="text-black/80 text-sm pb-6">
              3. Try to log into Analogue Shifts from a private or incognito
              browser window. If following these steps did not work, please
              contact one of our customer service representatives through our
              phone or chat options for further assistance.
            </p>
          </div>
        ),
      },
      {
        question: "How do I reset my password?",
        answer: (
          <div className="w-full border-t border-AnalogueShiftsTextColor pt-5">
            <p className="text-black/80 pb-6 text-sm">
              If you can’t remember your password or wish to change it, simply
              click here and follow the steps on the page.
            </p>
          </div>
        ),
      },
      {
        question:
          "The password reset is not working and redirects me to the same page. What can I do?",
        answer: (
          <div className="w-full border-t border-AnalogueShiftsTextColor pt-5">
            <p className="text-black/80 pb-5 text-sm">
              If the password reset is not working, try these steps:
            </p>

            <ul className="w-full flex list-inside list-disc flex-col gap-3">
              <li className="text-black/80 text-sm">
                Analogue Shifts is optimized for use in Google Chrome, try
                opening a new browser window there.
              </li>
              <li className="text-black/80 text-sm">
                Refresh the Forgot Password page.
              </li>
              <li className="text-black/80 text-sm">
                Clear your Google Chrome browsing data:
              </li>
              <ul className="w-full flex list-inside list-disc flex-col gap-3 pl-5">
                <li className="text-black/80 text-sm">
                  Select the three dots at the right side of the browser’s
                  search bar.
                </li>
                <li className="text-black/80 text-sm">
                  Select &quot;More Tools,&quot; then choose the option marked
                  as &quot;Clear Browsing Data.&quot;
                </li>
                <li className="text-black/80 text-sm">
                  Choose the desired time range and make sure to select the
                  boxes marked &quot;Cookies and other site data&quot; and
                  &quot;Cached images and files.&quot;
                </li>
                <li className="text-black/80 text-sm pb-2">
                  Select &quot;Clear data.&quot;
                </li>
              </ul>
              <li className="text-black/80 text-sm pb-6">
                Once these steps have been completed, try to reset your password
                once again. If you are still having difficulties, please reach
                out to one of our customer service representatives through phone
                or chat.
              </li>
            </ul>
          </div>
        ),
      },
      {
        question: "Why can’t I print my resume?",
        answer: (
          <div className="w-full border-t border-AnalogueShiftsTextColor pt-5">
            <p className="text-black/80 pb-5 text-sm">
              If you’re having difficulties printing the documents you created,
              try following these troubleshooting steps:
            </p>

            <ul className="w-full flex list-inside list-disc flex-col gap-3">
              <li className="text-black/80 text-sm">
                Download your document and save it on your computer as a PDF or
                Microsoft Word Document.
              </li>
              <li className="text-black/80 text-sm">
                Make sure your printer is turned on and connected to your
                computer.
              </li>
              <li className="text-black/80 text-sm">Restart your printer.</li>
              <li className="text-black/80 text-sm">
                Restart your computer and try to print it again.
              </li>
              <li className="text-black/80 text-sm pb-6">
                If the issue persists, contact one of our Customer Service
                Representative through phone or chat for further assistance.
              </li>
            </ul>
          </div>
        ),
      },
    ],
  },
  {
    name: "Payment Information",
    id: "payment-information",
    faqs: [
      {
        question: "What payment methods can I use?",
        answer: (
          <div className="w-full border-t border-AnalogueShiftsTextColor pt-5">
            <p className="text-black/80 pb-6 text-sm">
              Analogue Shifts can only accept credit cards as a payment method.
              Unfortunately, we are unable to process payments through Paypal,
              Venmo, prepaid cards, or debit cards. If you are unable to pay
              with your credit card, you may need to reach out to your banking
              institution for authorization on the transaction.
            </p>
          </div>
        ),
      },
      {
        question:
          "I have received charges from Analogue Shifts and I do not remember subscribing. Do I have an account with you?",
        answer: (
          <div className="w-full border-t border-AnalogueShiftsTextColor pt-5">
            <p className="text-black/80 pb-5 text-sm">
              Here are some methods to confirm if you have an existing account:
            </p>

            <ul className="w-full flex list-inside list-disc flex-col gap-3">
              <li className="text-black/80 text-sm">
                Search your email for any confirmation emails from Resume
                Genius, including your spam/junk folder.
              </li>
              <li className="text-black/80 text-sm">
                Try to log into Analogue Shifts. If you do not know the
                credentials, enter your email address on the &quot;Forgot
                Password&quot; page. If an account exists under that email, you
                will receive a password reset message which will allow you to
                choose a new password and grant access for account verification.
                If you’ve tried all of your emails and did not receive the
                password reset email, most likely you do not have an account
                with us.
              </li>
              <li className="text-black/80 text-sm pb-6">
                If you tried the previous steps and you are still unsure if you
                have an account, contact one of our Customer Service
                Representatives through phone or chat for assistance.
              </li>
            </ul>
          </div>
        ),
      },
    ],
  },
  {
    name: "Delete or request data",
    id: "delete-or-request-data",
    faqs: [
      {
        question: "How can I delete or retrieve all of my data?",
        answer: (
          <div className="w-full border-t border-AnalogueShiftsTextColor pt-5">
            <p className="text-black/80 pb-6 text-sm">
              If you wish to permanently delete or retrieve your AnalogueShifts
              Resume Builder data, click here and follow the steps on our
              CCPA/GDPR page.
            </p>
          </div>
        ),
      },
    ],
  },
];
