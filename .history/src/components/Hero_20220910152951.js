import React, { useEffect, useRef } from "react";
// import "hero.style.css";
import lottie from "lottie-web";
export const Hero = () => {
  const container = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: false,
      animationData: require("../assets/card.json"),
    });
  }, []);
  return (
    <div>
      <div className="container" ref={container}></div>
    </div>
  );
};
