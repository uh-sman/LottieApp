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
      {hero && <Hero />}
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
      <button onClick={() => setShow((prev) => !prev)}>Click</button>
      {show && <Box>This is your component</Box>}
    </div>
  );
};
