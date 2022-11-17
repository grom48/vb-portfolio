import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";

// See if person scrolls down
// https://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs
interface Args extends IntersectionObserverInit {
  freezeOnceVisible?: boolean;
}

const Work = () => {
  // Create function that change route to about
  const handleScrollDown = () => {
    // Change route to about
    // https://stackoverflow.com/questions/42701129/how-to-programmatically-navigate-using-next-js
    console.log("Scroll down");
  };

  return (
    <>
      <div onMouseDown={handleScrollDown}>Work</div>
    </>
  );
};

export default Work;
