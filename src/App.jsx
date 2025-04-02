import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import SkillItems from "./Components/SkillItems";
import ExperienceSection from "./Components/ExperienceSection";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header></Header>
      <SkillItems></SkillItems>
      <ExperienceSection></ExperienceSection>
      {/* <WiderLearning></WiderLearning> */}
    </>
  );
}

export default App;
