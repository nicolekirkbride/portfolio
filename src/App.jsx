import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import SkillItems from "./Components/SkillItems";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header></Header>
      <SkillItems></SkillItems>
    </>
  );
}

export default App;
