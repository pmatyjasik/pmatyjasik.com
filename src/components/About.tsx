import React from "react";
import coderAnimation from "assets/animation.json";
import Lottie from "lottie-react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="h-[75vh]">
      <div className="flex flex-col items-center justify-center md:flex-row">
        <div className="md:flex md:flex-col">
          <motion.h3
            className="mb-2 text-xl text-secondary opacity-70"
            initial={{ opacity: 0.1, scale: 0.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Piotr Matyjasik
          </motion.h3>
          <motion.span
            className="text-4xl font-semibold sm:text-5xl text-heading"
            initial={{ y: -200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Front-end Developer
          </motion.span>
          <motion.p
            className="mt-5 leading-relaxed sm:leading-loose text-content md:w-5/6 lg:w-4/5 xl:w-3/4"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Hello, I am Piotr Matyjasik I am from Poland 🇵🇱.
            <br />I am a student of Computer Science at the West Pomeranian
            University of Technology.
          </motion.p>
        </div>
        <motion.div
          className="justify-center hidden mt-10 md:mt-0 md:flex md:justify-center"
          initial={{ opacity: 0.1, scale: 0.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Lottie
            animationData={coderAnimation}
            loop={true}
            className="md:h-96 lg:h-[30rem]"
          />
        </motion.div>
      </div>
    </section>
  );
};
export default About;
