import React, { useState } from "react";

function App() {

  const [handingText, sethandingText] = useState("Hello")
  const [mouseOver, setMouseOver] = useState(false)

  function handleClick() {
    sethandingText("Submitted")
  }

  function handleMouseOver() {
    setMouseOver(true)
  }

  function handleMouseOut() {
    setMouseOver(false)
  }

  return (
    <div className="container">
      <h1>{handingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button style={{ backgroundColor: mouseOver ? "black" : "white" }}
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >Submit</button>
    </div>
  );
}

export default App;
