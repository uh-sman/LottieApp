import React, { useEffect, useRef, useState } from "react";
import card from "../assets/card.json";
// import "hero.style.css";
// import lottie from "lottie-web";
import Lottie from "react-lottie";
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
  return <div>{/* <div className="container" ref={container}></div> */}</div>;
};
