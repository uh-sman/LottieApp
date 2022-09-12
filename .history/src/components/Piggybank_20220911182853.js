import React, { useEffect, useRef, useState } from "react";
import piggy from "../assets/piggy.json";
import "./hero.style.css";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";
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
      <Link
        className="absolute left-[768px]  bg-black text-white py-2 px-6 rounded shadow-lg top-[83%]"
        to="/"
      >
        {"< Prev"}
      </Link>
      <Link
        className="absolute left-[1000px]  bg-black text-white py-2 px-6 rounded shadow-lg top-[83%]"
        to="/Card"
      >
        {state ? "< Prev" : "Next >"}
      </Link>
      <div className="dot_container">
        <li className="piggyempty"></li>
        <li className="piggyround"></li>
        <li className="piggyfull"></li>
      </div>
    </div>
  );
};
