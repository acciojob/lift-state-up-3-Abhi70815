import React, { useState } from "react";
import './../styles/App.css';
import ChildComponent1 from "./ChildComponent1";
import ChildComponent2 from "./ChildComponent2";

const App = () => {
  const [selectedOption, setSelectedOption] = useState("");

  function handleOption(option) {
    setSelectedOption(option);
  }

  return (
    <div className="parent" style={{width:"500px", height:"600px",backgroundColor:"greenyellow"}}>
      {/* Do not remove the main div */}
      <h1>Parent Component</h1>
      <ChildComponent1 option={handleOption} />
      <ChildComponent2 option={handleOption} />
      <p>Selected Option:{selectedOption}</p>
    </div>
  )
}

export default App;