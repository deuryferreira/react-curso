// React App

import React from "react";
import ReactDOM from "react-dom/client";

//Components
// import { Greeting, UserCard } from "./Greeting";
import { GetPosts } from "./GetPosts";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    {/* <Greeting name="Deury"></Greeting> */}
    <GetPosts />
  </>
);
