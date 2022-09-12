import React, { useEffect, useRef, useState } from "react";
import card from "../assets/card.json";
import "./hero.style.css";
// import lottie from "lottie-web";
import Lottie from "react-lottie";
import { Piggybank } from "./Piggybank";
import { Card } from "./Card";
import { Link } from "react-router-dom";
export const Hero = () => {
  //   const container = useRef(null);
  //   useEffect(() => {
  //     lottie.loadAnimation({
  //       container: container.current,
  //       renderer: "svg",
  //       loop: true,
  //       animationData: require("../assets/card.json"),
  //     });
  //   }, []);
  const [state, setState] = useState(false);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: card,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      <div className="">
        <div className="lottie-container">
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
            <span className="left text-gray-700">payment</span>
          </h1>
          <div>
            <p className="text">
              Allows you to pay online at all <br /> applications and websites
              that
              <br />
              accept MasterCard cards.
            </p>
          </div>
          {/* <Piggybank /> */}
          {/* <Card /> */}
        </div>
        {/* <div className="dot_container">
          <li className="empty"></li>
          <li className="full"></li>
          <li className="round"></li>
        </div> */}
        {/* <Link
          className="absolute left-[1000px] bg-black text-white py-2 px-6 rounded shadow-lg top-[83%]"
          to="/Piggy"
        >
          Next
        </Link> */}
      </div>
      {/* <div className="container" ref={container}></div> */}
    </div>
  );
};
