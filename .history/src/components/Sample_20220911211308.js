import React from "react";
// import Swipeable from "swipeable-react";
import SwipeableViews from "react-swipeable-views";

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
      <div className="slide slide1">slide n°1</div>
      <div className="slide slide2">slide n°2</div>
      <div className="slide slide3">slide n°3</div>
    </SwipeableViews>
  );
};
