import React, { useState } from "react";
import "./hero.style.css";
import { Card } from "./Card";
import { Hero } from "./Hero";
import { Piggybank } from "./Piggybank";
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
  const [show, setShow] = useState(false);
  const [sho, setSho] = useState(false);
  //   const styles = {
  //     slide: {
  //       padding: 15,
  //       minHeight: 100,
  //       color: "#fff",
  //     },
  //     slide1: {
  //       background: "#FEA900",
  //     },
  //     slide2: {
  //       background: "#B3DC4A",
  //     },
  //     slide3: {
  //       background: "#6AC0FF",
  //     },
  //   };
  const styles = {
    tabs: {
      background: "#fff",
    },
    slide: {
      padding: 15,
      minHeight: 100,
      color: "#fff",
    },
    slide1: {
      backgroundColor: "#FEA900",
    },
    slide2: {
      backgroundColor: "#B3DC4A",
    },
    slide3: {
      backgroundColor: "#6AC0FF",
    },
  };

  const handleChange = (event, value) => {
    this.setState({
      index: value,
    });
  };

  handleChangeIndex = (index) => {
    this.setState({
      index,
    });
  };

  const { index } = this.state;

  return (
    // <SwipeableViews>
    //   <div style={Object.assign({}, styles.slide, styles.slide1)}>
    //     slide n°1
    //   </div>
    //   <div style={Object.assign({}, styles.slide, styles.slide2)}>
    //     slide n°2
    //   </div>
    //   <div style={Object.assign({}, styles.slide, styles.slide3)}>
    //     slide n°3
    //   </div>
    // </SwipeableViews>
    <div>
      <Tabs
        value={index}
        fullWidth
        onChange={this.handleChange}
        style={styles.tabs}
      >
        <Tab label="tab n°1" />
        <Tab label="tab n°2" />
        <Tab label="tab n°3" />
      </Tabs>
      <SwipeableViews index={index} onChangeIndex={this.handleChangeIndex}>
        <div style={Object.assign({}, styles.slide, styles.slide1)}>
          slide n°1
        </div>
        <div style={Object.assign({}, styles.slide, styles.slide2)}>
          slide n°2
          <Select value={10} autoWidth={false}>
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
          </Select>
        </div>
        <div style={Object.assign({}, styles.slide, styles.slide3)}>
          slide n°3
        </div>
      </SwipeableViews>
    </div>
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
