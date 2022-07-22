import React from "react";
import coderAnimation from "assets/animation.json";
import Lottie from "lottie-react";

const About = () => {
  return (
    <section id="about" className="h-[75vh]">
      <div className="flex flex-col items-center justify-center md:flex-row">
        <div className="md:flex md:flex-col">
          <h3 className="mb-2 text-xl text-secondary opacity-70">
            Piotr Matyjasik
          </h3>
          <span className="text-4xl font-semibold sm:text-5xl text-heading">
            Front-end Developer
          </span>
          <p className="mt-5 leading-relaxed sm:leading-loose text-content md:w-5/6 lg:w-4/5 xl:w-3/4">
            Hello, I am Piotr Matyjasik I am from Poland 🇵🇱.
            <br />I am a student of Computer Science at the West Pomeranian
            University of Technology.
          </p>
        </div>
        <div className="justify-center hidden mt-10 md:mt-0 md:flex md:justify-center">
          <Lottie
            animationData={coderAnimation}
            loop={true}
            className="md:h-96 lg:h-[30rem]"
          />
        </div>
      </div>
    </section>
  );
};
export default About;
