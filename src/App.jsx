import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import SkillItems from "./Components/SkillItems";
import ExperienceSection from "./Components/ExperienceSection";
import IntroSection from "./Components/IntroSection";
import WiderLearning from "./Components/WiderLearning";
import SnakeGame from "./Components/SnakeGame";

function App() {
  const [pageSelection, setPageSelection] = useState("For Work");

  return (
    <>
      <div className="flex flex-col gap-30">
        <Header setPageSelection={setPageSelection}></Header>
        {pageSelection == "For Work" && <IntroSection></IntroSection>}
        {pageSelection == "For Work" && <SkillItems></SkillItems>}
        {pageSelection == "For Work" && <ExperienceSection></ExperienceSection>}
        {pageSelection == "For Work" && <WiderLearning></WiderLearning>}
        {pageSelection == "For Fun" && <SnakeGame></SnakeGame>}
      </div>
    </>
  );
}

export default App;
