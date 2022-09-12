import React, { useEffect, useRef, useState } from "react";
import piggy from "../assets/piggybank.json";
import "./hero.style.css";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";

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
    <div className="fade-in">
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
          <h1>Security</h1>
          <div>
            <p className="text">
              Two-factor Authentication: OTP authentication code and MSC
              security code.
            </p>
          </div>
        </div>
      </div>
      {/* <div className="dot_container">
        <li className="cardround"></li>
        <li className="cardempty"></li>
        <li className="cardfull"></li> */}
        {/* <Link
          className="absolute left-[1000px]  bg-black text-white py-2 px-6 rounded shadow-lg top-[83%]"
          to="/Success"
        >
          {"Next >"}
        </Link>
        <Link
          className="absolute left-[750px]  bg-black text-white py-2 px-6 rounded shadow-lg top-[83%]"
          to="/Piggy"
        >
          {"< Prev"}
        </Link> */}
      </div>
    </div>
  );
};
