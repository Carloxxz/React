import React, { useState } from "react";

function App() {

  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  })

  function handleChange(event) {
    const { name, value } = event.target

    setContact((prevValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName,
          email: preveValue.email
        }
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value,
          email: preveValue.email
        }
      } else if (name === "email") {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: value
        }
      }
    })
  }

  return (
    <div className="container">
      <h1>Hello</h1>
      <form>
        <input onChange={handleChange} value={contact.fname} name="fName" placeholder="First Name" />
        <input onChange={handleChange} value={contact.lname} name="lName" placeholder="Last Name" />
        <input onChange={handleChange} value={contact.email} name="email" placeholder="email" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
