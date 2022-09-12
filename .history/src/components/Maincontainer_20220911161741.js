import React, { useState } from "react";
import "./hero.style.css";
import { Card } from "./Card";
import { Hero } from "./Hero";
import { Piggybank } from "./Piggybank";
import { Link } from "react-router-dom";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import SwipeableViews from "react-swipeable-views";

export const Maincontainer = () => {
  const [state, setState] = useState(false);
  const [slider, setSlider] = useState([{}]);
  const [text, setText] = useState(false);
  const [hero, setHero] = useState(true);
  //   const [show, setShow] = useState(false);
  //   const [sho, setSho] = useState(false);
  const styles = {
    slide: {
      padding: 15,
      minHeight: 100,
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
    <div>
      <Hero />
      {/* {hero.map(() => (
        <Hero />
      ))} */}
      {/* {state && <Piggybank />} */}
      {/* {state && <Card />} */}
      {/* <button
        className="custom"
        onClick={() => {
          setState((prev) => !prev);
        }}
      >
        {state ? "< Prev" : "Next >"}
      </button> */}
      <Link className="absolute" to="/Piggybank">
        {state ? "< Prev" : "Next >"}
      </Link>
      {/* <button onClick={() => setSho((prev) => !prev)}>Click</button>
      {sho && <h1>This is your component</h1>} */}
    </div>
  );
};
