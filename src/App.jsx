import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import SkillItems from "./Components/SkillItems";
import ExperienceSection from "./Components/ExperienceSection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-col gap-30">
        <Header></Header>
        <SkillItems></SkillItems>
        <ExperienceSection></ExperienceSection>
        {/* <WiderLearning></WiderLearning> */}
      </div>
    </>
  );
}

export default App;
