import { motion as m } from "framer-motion";
import Image from "next/image";

import tony from "../assets/img/tony.jpg";

const Home = () => {
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
        <div className="wrapper py-5 flex items-center">
          <div className="left-wrapper">
            <h1 className="text-9xl">
              Hi, its <span className="personal-name">Viktor</span>
            </h1>
            <h3 className="text-4xl">and I will make all work just for you.</h3>
            <div className="paragraphs flex flex-col gap-5 py-10">
              <p>
                I’a help ambitious business like your generate more profits by
                building awerness, driwing web trafic, connectig with customers
                and growing overall sales.
              </p>
              <p>
                I’a help ambitious business like your generate more profits by
                building awerness, driwing web trafic, connectig with customers
                and growing overall sales.
              </p>
              <p>
                I’a help ambitious business like your generate more profits by
                building awerness, driwing web trafic, connectig with customers
                and growing overall sales.
              </p>
            </div>
            <button className="hire">Hire me</button>
          </div>
          <div className="tony">
            <Image className="tony" src={tony} alt="Soldier" />
          </div>
        </div>
      </m.div>
    </>
  );
};

export default Home;
