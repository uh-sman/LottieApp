import React from "react";
import "./hero.style.css";
export const Piggybank = () => {
  return (
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
  );
};
