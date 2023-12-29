// React App

import React from "react";
import { useState, useEffect } from "react";

import ReactDOM from "react-dom/client";

//Components

const root = ReactDOM.createRoot(document.getElementById("root"));

const Counter = () => {
  const [message, setMessage] = useState("");
  useEffect(() => console.log("render"), []);

  return (
    <div>
      <input onChange={(e) => setMessage(e.target.value)} />
      <button
        onClick={() => {
          alert(`El mensaje es: ${message}`);
        }}
      >
        Save
      </button>
    </div>
  );
};

root.render(
  <>
    <Counter />
  </>
);
