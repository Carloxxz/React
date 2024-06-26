import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia"

function emojiPedia(emojipedia) {
  return (
    <Entry
      key={emojipedia.id}
      id={emojipedia.id}
      emoji={emojipedia.emoji}
      name={emojipedia.name}
      meaning={emojipedia.meaning}
    />
  )
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(emojiPedia)}
      </dl>
    </div>
  );
}

export default App;
