import React, { useState } from "react";
import { Card } from "./Card";
import { Hero } from "./Hero";
import { Piggybank } from "./Piggybank";

export const Maincontainer = () => {
  const [state, setState] = useState(false);
  const [text, setText] = useState(false);
  return (
    <div>
      <Hero />
      {state && <Piggybank />}
      {state && <Card />}
      <button>{text ? "Next" : "Prev"}</button>
    </div>
  );
};
