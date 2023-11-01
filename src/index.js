// React App

import React from "react";
import ReactDOM from "react-dom/client";

//Components
import { Greeting, UserCard } from "./Greeting";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <UserCard
      name="Deury"
      amount={5000}
      married={true}
      points={[10.5, 45.8, 33.23]}
      address={{
        street: "Juegos Panamericanos #26",
        city: "Bonao",
        country: "Dominican Republic",
      }}
    />

    <UserCard
      name="Manuel"
      amount={8000}
      married={false}
      points={[45, 20.8, 94.61]}
      address={{
        street: "Simon Bolivar #355",
        city: "San Juan",
        country: "Puerto Rico",
      }}
    />
  </>
);
