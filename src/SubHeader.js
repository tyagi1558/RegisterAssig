import React from "react";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaInfoCircle,
  FaExclamationCircle,
} from "react-icons/fa";

function IconHeadings() {
  const headings = [
    {
      text: "Fill up Application Form",
      icon: <FaCheckCircle />,
      color: "#eb5757",
    },
    {
      text: "Make Online Payment",
      icon: <FaTimesCircle />,
      color: "#27ae60",
    },
    {
      text: "Executive will Process Application",
      icon: <FaInfoCircle />,
      color: "#f2994a",
    },
    {
      text: "Get Confirm Mail",
      icon: <FaExclamationCircle />,
      color: "#828282",
    },
  ];

  return (
    <div className="flex flex-col sm:flex-row items-center w-full p-8 bg-secondary sm:justify-around space-y-6 sm:space-y-0">
      {headings.map((heading, index) => (
        <div
          key={index}
          className="flex items-center sm:mx-4 w-full sm:w-auto justify-start sm:justify-center"
        >
          <div
            className="rounded-full p-3 flex items-center justify-center text-white mr-2"
            style={{ backgroundColor: heading.color }}
          >
            {heading.icon}
          </div>
          <h2 className="text-base font-semibold pl-3 text-center sm:text-left">
            {heading.text}
          </h2>
        </div>
      ))}
    </div>
  );
}

export default IconHeadings;
