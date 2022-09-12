import React from "react";
import Swipeable from "swipeable-react";
export const Sample = () => {
  return (
    <Swipeable
      onSwipeLeft={() => {
        console.log("swiped left");
      }}
      onSwipeRight={() => {
        console.log("swiped right");
      }}
      onSwipeUp={() => {
        console.log("swiped up");
      }}
      onSwipeDown={() => {
        console.log("swiped down");
      }}
    >
      {(innerRef) => <div ref={innerRef}>I will detect swiping!</div>}
    </Swipeable>
  );
};
