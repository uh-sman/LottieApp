import React from "react";
import "./hero.style.css";
// import Swipeable from "swipeable-react";
import SwipeableViews from "react-swipeable-views";
import { Hero } from "./Hero";
import { Piggybank } from "./Piggybank";
import { Card } from "@material-ui/core";

export const Sample = () => {
  const styles = {
    slide: {
      padding: 15,
      height: "100vh",
      color: "#fff",
    },
    slide1: {
      background: "#FEA900",
    },
    slide2: {
      background: "#B3DC4A",
    },
    slide3: {
      background: "#6AC0FF",
    },
  };
  return (
    <SwipeableViews enableMouseEvents>
      <div className="slide slide1">
        <Hero />
      </div>
      <div className="slide slide2">
        <Piggybank />
      </div>
      <div className="slide slide3">
        <Card />
      </div>
    </SwipeableViews>
  );
};
