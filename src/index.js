// React App

import React from "react";
import ReactDOM from "react-dom/client";

//Components
// import { GetUsers } from "./GetUsers";
const root = ReactDOM.createRoot(document.getElementById("root"));

const Contador = () => {
  let counter = 0;
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => (counter = counter + 10)}>Incrementar</button>
    </div>
  );
};

root.render(
  <>
    <Contador />
  </>
);
