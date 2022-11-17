import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/router";

const Work = () => {
  const router = useRouter();

  const handleScroll = () => {
    console.log("Hello World");
    // Change the route here
    router.push("/about");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div style={{ height: "101vh", overflow: "scroll" }}>
        <h1>Work</h1>
      </div>
    </>
  );
};

export default Work;
