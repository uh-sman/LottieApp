import React, { useState } from "react";
import { Card } from "./Card";
import { Hero } from "./Hero";
import { Piggybank } from "./Piggybank";

export const Maincontainer = () => {
  return (
    <div>
      <Hero />
      <Piggybank />
      <Card />
    </div>
  );
};
