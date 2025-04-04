import React from "react";

function WiderLearning() {
  const learningList = [
    {
      title: "Start the UX Design Process: Empathise, Define, and Ideate",
      company: "Google",
      category: "UX/ UI",
      description: "",
    },
    {
      title: "Win Sales with Relationship Selling",
      company: "Dale Carnegie",
      category: "Sales",
      description:
        "I was honoured to be awarded the Most Inspirational Sales Person prize",
    },
    { title: "Foundations of UX Design", company: "Google", description: "" },
    { title: "Design Fundamentals", company: "Adobe", description: "" },
    { title: "Image Editing", company: "Adobe", description: "" },
    { title: "", company: "", description: "" },
  ];

  return (
    <div className="">
      <div className="flex flew-row gap-2 roboto-mono-regular justify-center items-center text-white text-2xl text-center mb-10">
        <h1 className="font-medium">03 </h1>
        <h1 className="font-medium">Courses/ Wider Learning </h1>
      </div>

      <div>
        {learningList.map((item) => (
          <div
            key={item.title}
            className="flex flex-col items-center justify-center mb-4"
          >
            <h2 className="text-xl font-medium text-gray-300">{item.title}</h2>
            <h3 className="text-lg text-gray-400">{item.company}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WiderLearning;
