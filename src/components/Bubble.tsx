import React from "react";
import BubbleSVG from "assets/bubble.svg";

const Bubble = () => (
  <img
    className="
    float-right 
    h-[200px]
    m-20:mt-[-100px] m-20:mr-[-50px] 
    m-18:mt-[-100px] m-18:mr-[-100px] 
    2xl:mt-[-100px] 2xl:mr-[-200px] 
    xl:mt-[-100px] xl:mr-[-300px] 
    md:mt-[-100px] md:mr-[-300px]
    sm:mt-[-100px] sm:mr-[-400px]
    mt-[-100px] mr-[-150px]
    "
    src={BubbleSVG}
    alt="Bubble"
  />
);

export default Bubble;
