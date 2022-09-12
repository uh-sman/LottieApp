import React, { useState } from "react";
import "./hero.style.css";
import { Card } from "./Card";
import { Hero } from "./Hero";
import { Piggybank } from "./Piggybank";

export const Maincontainer = () => {
  const [state, setState] = useState(false);
  const [text, setText] = useState(false);
  const [hero, setHero] = useState(true);
  const [show, setShow] = useState(false);
  const [sho, setSho] = useState(false);

  return (
    <div>
      <Hero />
      {/* {hero.map(() => (
        <Hero />
      ))} */}
      {state && <Piggybank />}
      {/* {state && <Card />} */}
      <button
        className="custom"
        onClick={() => {
          setState((prev) => !prev);
        }}
      >
        {state ? "Prev" : "Next"}
      </button>
      <button onClick={() => setSho((prev) => !prev)}>Click</button>
      {sho && <h1>This is your component</h1>}
    </div>
  );
};
