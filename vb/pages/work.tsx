import { motion as m, useMotionValue } from "framer-motion";
import Image from "next/image";
//import ProjectSlider from "../components/Slider";
import Slider from "../components/Slider";

const Work = () => {
  const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };

  return (
    <>
      <m.div
        variants={variants} // Pass the variant object into Framer Motion
        initial="hidden" // Set the initial state to variants.hidden
        animate="enter" // Animated state to variants.enter
        exit="exit" // Exit state (used later) to variants.exit
        transition={{ type: "linear" }} // Set the transition to linear
        className=""
      >
        <h1 className="text-9xl py-3">
          <span className="personal-name">Work</span>
        </h1>
        <div className="wrappers flex items-center">
          <div className="left-wrapper">
            <Slider />
          </div>
        </div>
      </m.div>
    </>
  );
};

export default Work;
