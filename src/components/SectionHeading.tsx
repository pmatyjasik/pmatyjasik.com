import { motion } from "framer-motion";
import React from "react";

interface Props {
  subheading: string;
  heading: string;
  inverted?: boolean;
}

const SectionHeading = ({ subheading, heading, inverted = false }: Props) => {
  return (
    <div>
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
    </div>
  );
};

export default SectionHeading;
