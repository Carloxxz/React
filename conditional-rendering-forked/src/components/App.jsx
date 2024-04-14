import React from "react";
import Login from "./Login";

var isloggedIn = false
const currentTime = new Date().getHours()

// function renderConditionally() {
//   if (isloggedIn === true) {
//     return <h1>Hello</h1>
//   } else {
//     return <Login />
//   }
// }

function App() {
  return (
    <div className="container">
      {// isloggedIn ? <h1>Hello</h1> : <Login />
        currentTime > 12 && <h1>Why ar eyou still working</h1>
      }</div>
  );
}

export default App;
