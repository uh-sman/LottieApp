import React, { useState } from "react";
import "./hero.style.css";
import { Card } from "./Card";
import { Hero } from "./Hero";
import { Piggybank } from "./Piggybank";
import SwipeableViews from "react-swipeable-views";

export const Maincontainer = () => {
  const [state, setState] = useState(false);
  const [slider, setSlider] = useState([{}]);
  const [text, setText] = useState(false);
  const [hero, setHero] = useState(true);
  const [show, setShow] = useState(false);
  const [sho, setSho] = useState(false);
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
    <SwipeableViews>
      <div style={Object.assign({}, styles.slide, styles.slide1)}>
        slide n°1
      </div>
      <div style={Object.assign({}, styles.slide, styles.slide2)}>
        slide n°2
      </div>
      <div style={Object.assign({}, styles.slide, styles.slide3)}>
        slide n°3
      </div>
    </SwipeableViews>
  );
};
//  <div>
//       <Hero />
//       {/* {hero.map(() => (
//         <Hero />
//       ))} */}
//       {state && <Piggybank />}
//       {/* {state && <Card />} */}
//       <button
//         className="custom"
//         onClick={() => {
//           setState((prev) => !prev);
//         }}
//       >
//         {state ? "< Prev" : "Next >"}
//       </button>
//       {/* <button onClick={() => setSho((prev) => !prev)}>Click</button>
//       {sho && <h1>This is your component</h1>} */}
//     </div>
