import React, { useEffect, useRef, useState } from "react";
import piggy from "../assets/piggy.json";
import "./hero.style.css";
import Lottie from "react-lottie";
import { Link } from "@material-ui/core";
export const Piggybank = () => {
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
    <div className="fade-in">
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
      <Link className="absolute left-[600px]" to="/">
        {"< Prev"}
      </Link>
      <Link className="absolute left-[1000px]" to="/Card">
        {state ? "< Prev" : "Next >"}
      </Link>
      <li></li>
      <li></li>
      <li></li>
    </div>
  );
};
