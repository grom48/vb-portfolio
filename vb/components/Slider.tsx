import data from "../pages/api/work";
import Image from "next/image";
import { useEffect, useRef } from "react";

const Test = () => {
  const ref = useRef(true);

  let slider: any;
  useEffect(() => {
    // Tiny slider only can be loaded once and can only be loaded clint side
    if (typeof window !== "undefined" && ref.current) {
      ref.current = false;
      // Lazy load the slider code client side
      import("tiny-slider").then((x: any) => {
        slider = x.tns({
          container: ".slider",
          items: 1,
          slideBy: "page",
          autoplay: false,
          autoHeight: true,
          swipeAngle: false,
          speed: 400,
          dots: true,
          arrows: false,
          controls: false,
        });
      });
    }
    // Destory the slider when it is unmouted
    return slider?.destroy();
  }, []);
  // Make custom arrows
  const next = () => {
    slider.goTo("next");
  };

  const prev = () => {
    slider.goTo("prev");
  };
  return (
    <>
      <div className="slider">
        {data.map((item, index) => (
          <div key={index}>
            <div className="slider-wrapper">
              <div className="left-projects">
                <h1>{item.title}</h1>
                <p>{item.body}</p>
              </div>
              <div className="right-projects">
                <Image
                  className="rounded-xl slika"
                  src={item.image.src}
                  alt={item.image.alt}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <button onClick={prev}>Prev</button>
      <button onClick={next}>Next</button>
    </>
  );
};

export default Test;
