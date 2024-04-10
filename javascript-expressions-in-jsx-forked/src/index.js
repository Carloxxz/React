import React from "react";
import ReactDOM from "react-dom";

const fname = 'Carlos'
const lname = 'Martinez'
const number = Math.floor(Math.random() * 10)
const is = 'is'

ReactDOM.render(
    <div>
        <h1>My name {is} {fname + ' ' + lname}</h1>
        <p>Your lucky number is {`${number + 1}` + '!'}</p>
    </div>,
    document.getElementById("root"));
