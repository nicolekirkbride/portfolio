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
        "-   Front-end development of responsive web applications",
        "-   Automated Software testing & software quality",
        "-   Wire-framing, user stories & software craft",
        "-   Agile methodologies & DevOps practices",
        "-   CI/CD pipelines & version control",
        "-   Database management & SQL",
      ],
    },
    {
      title: "Future Talent Programme",
      company: "Tesla",
      duration: "6 mo",
      description: [
        "-   Hands-on experience with cutting-edge technologies and tools in the energy and automotive industries.",
        "-   Presentation of my ideas to homogenise and streamline processes between multiple disciplines.",
        "-   Great communication and interpersonal skills that helped me raise customer satisfaction scores.",
        "-   Lead sales meetings to discuss the progress towards KPIs.",
      ],
    },
    {
      title: "First Class BSc (Hons) in Physics",
      company: "Newcastle University",
      duration: "3 yrs",
      description: [
        "-   Technical discipline, Python programming using libraries such as numpy, matplotlib, and pandas.",
        "-   Strong analytical and problem solving skills from coding and interpretation of experimental data.",
        "-   Public speaking and presentation skills, with a grade of 81 awarded for my speech at a scientific conference.",
        "-   Final scientific research project: Modelling the distribution of gyrotactic swimmers in laminar pipeflow",
        "-   Final group project: Interpreting data to extract the M-Sigma relation in blackholes.",
      ],
    },
  ];
  return (
    <div>
      <div className="flex flew-row gap-5 justify-center items-center text-white text-2xl text-center mb-10">
        <h1 className="font-medium">02 </h1>
        <h1 className="font-medium">Experience </h1>
      </div>

      <div>
        {experienceList.map((item) => (
          <div
            className=" text-white bg-midnight-light pl-10 pr-10 pt-3 pb-6 rounded-4xl mb-5 transition-all duration-300 ease-in-out"
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

              <div className="rounded-4xl mt-4 p-2 min-w-[70px] text-center">
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
    </div>
  );
}

export default ExperienceSection;
