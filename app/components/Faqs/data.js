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
                On Safari’s drop-down menu, select "Preferences" .
              </li>
              <li className="text-black/80 text-sm">
                Go to the Advanced option.
              </li>
              <li className="text-black/80 text-sm">
                At the bottom, select "Show Develop Menu" click "Develop" and
                then select "Empty cache."
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
                Select your "All time" on the "Time Range" drop-down menu. Make
                sure to select the box marked "Cached images and files," and
                then click the blue button marked "Clear Now."
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
                  Select "More Tools," then choose the option marked as "Clear
                  Browsing Data."
                </li>
                <li className="text-black/80 text-sm">
                  Choose the desired time range and make sure to select the
                  boxes marked "Cookies and other site data" and "Cached images
                  and files."
                </li>
                <li className="text-black/80 text-sm pb-2">
                  Select "Clear data."
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
                credentials, enter your email address on the "Forgot Password"
                page. If an account exists under that email, you will receive a
                password reset message which will allow you to choose a new
                password and grant access for account verification. If you’ve
                tried all of your emails and did not receive the password reset
                email, most likely you do not have an account with us.
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
