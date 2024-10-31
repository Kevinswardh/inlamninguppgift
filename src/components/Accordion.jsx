import { useState } from "react";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const qaItems = [
    {
      question: "Is any of my personal information stored in the App?",
      answer:
        "No, your personal information is not stored in the App. We prioritize user privacy and do not retain any personal data.",
    },
    {
      question: "What formats can I download my transaction history in?",
      answer:
        "You can download your transaction history in CSV, PDF, and Excel formats.",
    },
    {
      question: "Can I schedule future transfers?",
      answer:
        "Yes, you can schedule future transfers for specific dates directly through the App.",
    },
    {
      question: "When can I use Banking App services?",
      answer: "You can use Banking App services 24/7, anytime you need.",
    },
    {
      question: "Can I create my own password that is easy for me to remember?",
      answer:
        "Yes, you can create your own password, but we recommend using a mix of letters, numbers, and symbols for security.",
    },
    {
      question: "What happens if I forget or lose my password?",
      answer:
        "If you forget or lose your password, you can reset it using the 'Forgot Password' option on the login page.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      {qaItems.map((item, index) => (
        <div
          key={index}
          className={` ${activeIndex === index ? "accordionActive" : ""}`}
        >
          <div
            className={`qa-header-box`}
            onClick={() => toggleAccordion(index)}
          >
            <h3>{item.question}</h3>
            <div className="qa-btn-box">
              {activeIndex === index ? (
                <svg
                  width="12"
                  height="8"
                  viewBox="0 0 11 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.77915 6.4397L5.59998 2.61888L9.4208 6.4397L10.6 5.26056L5.59998 0.260556L0.599976 5.26056L1.77915 6.4397Z"
                    fill="#6366f1"
                  />
                </svg>
              ) : (
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 11 11"
                  fill={
                    document.documentElement.classList.contains("dark")
                      ? "white" // White in dark mode
                      : "your-default-color" // Default color in light mode
                  }
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_20005128_12900)">
                    <path d="M9.42092 2.7605L5.6001 6.58132L1.77928 2.7605L0.600098 3.93964L5.6001 8.93964L10.6001 3.93964L9.42092 2.7605Z" />
                  </g>
                  <defs>
                    <clipPath id="clip0_20005128_12900">
                      <rect
                        width="10"
                        height="10"
                        fill="none"
                        transform="translate(0.600098 0.850098)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              )}
            </div>
          </div>
          {activeIndex === index && (
            <div className="qa-content-box">
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
