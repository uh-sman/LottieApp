import React, { useEffect } from "react";
import "hero.style.css";
import lottie from "lottie-web";
export const Hero = () => {
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      animationData: require("../assets/card.json"),
    });
  }, []);
  return <div>Hero</div>;
};
