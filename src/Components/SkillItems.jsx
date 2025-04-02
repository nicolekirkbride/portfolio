import React, { useState } from "react";
import htmlIcon from "./../assets/Images/htmlIcon.png";
import cssIcon from "./../assets/Images/cssIcon.png";
import javascriptIcon from "./../assets/Images/javascriptIcon.png";
import sqlIcon from "./../assets/Images/sqlIcon.png";
import reactIcon from "./../assets/Images/reactIcon.png";
import tailwindIcon from "./../assets/Images/tailwindIcon.png";
import powerappsIcon from "./../assets/Images/powerappsIcon.png";

function SkillItems() {
  const [hoveredSkill, setHoveredSkill] = useState("");
  const [hoverDescription, setHoverDescription] = useState("");

  const skillsList = [
    {
      id: 1,
      name: "HTML",
      image: htmlIcon,
      colour: "orange",
      description:
        "This site was developed using semantic HTML to write clean, accessible code.",
    },
    {
      id: 2,
      name: "CSS",
      image: cssIcon,
      colour: "cornflowerblue",
      description:
        "Mastering flexbox was one of my first wins as a learning developer. I use css styling alone, or in combination with tailwind depending on the size and scope of the project",
    },
    {
      id: 3,
      name: "JavaScript",
      image: javascriptIcon,
      colour: "yellow",
      description:
        "To enhance the usability, interactivity and responsiveness of my projects",
    },
    {
      id: 4,
      name: "React",
      image: reactIcon,
      colour: "deepskyblue",
      description:
        "With Vite as a bundler, I use React For component-based architecture, great for scalability and efficiency",
    },
    {
      id: 5,
      name: "Tailwind",
      image: tailwindIcon,
      colour: "aqua",
      description:
        "Tailwind has been a great addition to my stack, and one I'm quite grateful for. I use Tailwind for both its efficiency and handy in-built animations",
    },
    {
      id: 6,
      name: "SQL",
      image: sqlIcon,
      colour: "dodgerblue",
      description:
        "I'm accustomed to the design and management of relational databases, and am able to efficiently query the data for use in reporting and data analysis",
    },
    {
      id: 7,
      name: "PowerApps",
      image: powerappsIcon,
      colour: "magenta",
      description:
        "An option for seamless integration with microsoft services, PowerApps has allowed me to develop tailored solutions to business requirements. With enough customisation, I've been able to produce multiple group wide, user-friendly interfaces ",
    },
  ];
  return (
    <div className=" flex gap-30 justify-around p-10 w-full pt-30">
      <div className="grid grid-cols-3 gap-15 md:grid-cols-3 sm:grid-cols-1 place-items-center min-w-[35vw]">
        {skillsList.map((item) => (
          <div
            key={item.id}
            className=" w-30 h-30 justify-center items-center flex rotate-45 hover:scale-110 transition-all duration-400 ease-in-out rounded-xl"
            style={{
              boxShadow: `2px 2px 12px 6px ${item.colour}`,
            }}
            onMouseEnter={() => {
              if (hoveredSkill !== "") {
                setHoveredSkill("");
                setTimeout(() => {
                  setHoveredSkill(item.name);
                  setHoverDescription(item.description);
                }, 300);
              } else {
                setHoveredSkill(item.name);
                setHoverDescription(item.description);
              }
            }}
            onMouseLeave={() => {
              setHoveredSkill("");
              setHoverDescription("");
            }}
          >
            <img src={item.image} alt="icon" className="-rotate-45 w-20 h-20" />
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-end bottom-0 max-w-[40vw] min-w-[40vw] pb-20">
        <h3
          className={`text-white text-5xl max-w-full transition-all duration-500 ease-in-out text-left pb-6
        ${
          hoveredSkill
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-[-50px]"
        }`}
        >
          {" "}
          {hoveredSkill || ""}
        </h3>
        <h3
          className={`text-white text-xl transition-all duration-500 ease-in-out max-w-full text-left
        ${
          hoverDescription
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-[-50px]"
        }`}
        >
          {" "}
          {hoverDescription || ""}
        </h3>
      </div>
    </div>
  );
}

export default SkillItems;
