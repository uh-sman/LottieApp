import React, { useState } from "react";
import { Card } from "./Card";
import { Hero } from "./Hero";
import { Piggybank } from "./Piggybank";

export const Maincontainer = () => {
  const [state, setState] = useState(false);
  return (
    <div>
      <Hero />
      <Piggybank />
      <Card />
    </div>
  );
};
