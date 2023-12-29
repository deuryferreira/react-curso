import { useState } from "react";

export const Counter = () => {
    const [counter, setCounter] = useState(1000);
  
    return (
      <div>
        <h1>Counter: {counter}</h1>
        <button
          onClick={() => {
            setCounter(counter + 10);
          }}
        >
          Incrementar
        </button>
        <button
          onClick={() => {
            setCounter(1000);
          }}
        >
          Reiniciar
        </button>
        <button
          onClick={() => {
            setCounter(counter - 10);
          }}
        >
          Reducir
        </button>
      </div>
    );
  };