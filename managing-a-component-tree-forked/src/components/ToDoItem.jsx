import React, { useState } from "react";

function ToDoItem(props) {
    return (
        <div onClick={() => {
            props.onChancked(props.id)
        }}>
            <li>
                {props.text}
            </li>
        </div>
    )
}

export default ToDoItem