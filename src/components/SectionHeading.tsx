import { motion } from "framer-motion";
import React from "react";

interface Props {
  subheading: string;
  heading: string;
  inverted?: boolean;
}

const SectionHeading = ({ subheading, heading, inverted = false }: Props) => {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
    >
      <span
        className={`block text-sm font-semibold text-center ${
          inverted ? "text-[#000000]" : "text-white"
        } opacity-70`}
      >
        {subheading}
      </span>
      <span
        className={`block text-3xl font-semibold text-center ${
          inverted ? "text-secondary" : "text-white"
        }`}
      >
        {heading}
      </span>
    </motion.div>
  );
};

export default SectionHeading;
