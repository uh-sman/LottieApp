import React, { useEffect, useRef, useState } from "react";
import piggy from "../assets/piggybank.json";
import "./hero.style.css";
import Lottie from "react-lottie";

export const Card = () => {
  const [state, setState] = useState(false);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: piggy,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      <div>
        <div className="lottie-container2">
          <Lottie options={defaultOptions} height={400} width={400} />
          {/* <button
          className="button"
          onClick={() => {
            setState(!state);
          }}
        >
          {state ? "Hide Animation" : "Show Animation"}
        </button> */}
          {/* {state && <Lottie options={defaultOptions} height={400} width={400} />} */}
        </div>
        <div className="channel">
          <h1>
            Multi-channel
            <br />
            <span className="left">payment</span>
          </h1>
          <div>
            <p className="text">
              Allows you to pay online at all <br /> applications and websites
              that
              <br />
              accept MasterCard cards.
            </p>
          </div>
        </div>
      </div>
      <div className="dot_container">
        <li className="piggyround"></li>
        <li className="piggyfull"></li>
        <li className="piggyempty"></li>
      </div>
    </div>
  );
};
