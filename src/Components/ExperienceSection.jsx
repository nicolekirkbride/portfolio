import { useState } from "react";
import React from "react";

function ExperienceSection() {
  const [hoveredExperience, setHoveredExperience] = useState("");

  const experienceList = [
    {
      title: "QA Level 4 Software Developer Apprenticeship",
      company: "Hargreaves Services plc",
      duration: "1.5 yrs",
      description: [
        "-   Developed full-stack applications using React and Node.js",
        "-   Worked on API integration and database management",
        "-   Collaborated with cross-functional teams to deliver projects",
      ],
    },
    {
      title: "Future Talent Programme",
      company: "Tesla",
      duration: "6 mo",
      description: [
        "-   Developed full-stack applications using React and Node.js",
        "-   Worked on API integration and database management",
        "-   Collaborated with cross-functional teams to deliver projects",
      ],
    },
    {
      title: "First Class BSc (Hons) in Physics",
      company: "Newcastle University",
      duration: "3 yrs",
      description: [
        "-   Developed full-stack applications using React and Node.js",
        "-   Worked on API integration and database management",
        "-   Collaborated with cross-functional teams to deliver projects",
      ],
    },
  ];
  return (
    <div>
      {experienceList.map((item) => (
        <div
          className=" text-white bg-midnight-light pl-10 pr-10 pt-3 pb-3 rounded-4xl mb-10 transition-all duration-300 ease-in-out"
          onMouseEnter={() => {
            setHoveredExperience(item.title);
          }}
          onMouseLeave={() => {
            setHoveredExperience("");
          }}
          key={item.title}
        >
          <div className="flex flex-row justify-between items-end mb-5">
            <div className="flex flex-row gap-5">
              <h2 className="text-2xl font-semibold">{item.title}</h2>
              <h3 className="text-xl opacity-60">{item.company}</h3>
            </div>

            <div className="rounded-4xl bg-midnight mt-4 p-2 min-w-[70px] text-center">
              <p className="text-lg opactity-60">{item.duration}</p>
            </div>
          </div>

          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              hoveredExperience === item.title
                ? "max-h-40 opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <ul className=" list-inside text-md mt-2 mb-10">
              {item.description.map((point, i) => (
                <li className="p-1" key={i}>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ExperienceSection;
