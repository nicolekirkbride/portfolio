import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import SkillItems from "./Components/SkillItems";
import ExperienceSection from "./Components/ExperienceSection";
import IntroSection from "./Components/IntroSection";
import WiderLearning from "./Components/WiderLearning";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-col gap-30">
        <Header></Header>
        <IntroSection></IntroSection>
        <SkillItems></SkillItems>
        <ExperienceSection></ExperienceSection>
        <WiderLearning></WiderLearning>
      </div>
    </>
  );
}

export default App;
