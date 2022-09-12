import React, { useState } from "react";
import "./hero.style.css";
import { Card } from "./Card";
import { Hero } from "./Hero";
import { Piggybank } from "./Piggybank";

export const Maincontainer = () => {
  const [state, setState] = useState(false);
  const [text, setText] = useState(false);
  const [hero, setHero] = useState(true);
  return (
    <div>
      {state && <Hero />}
      {state && <Piggybank />}
      {/* {state && <Card />} */}
      <button
        className="custom"
        onClick={() => {
          setState(!state);
        }}
      >
        {state ? "Prev" : "Next"}
      </button>
    </div>
  );
};
