import { motion } from "framer-motion";
import React from "react";
import { IconType } from "react-icons";

interface Props {
  Icon: React.ReactElement<IconType & { className: string }>;
  className?: string;
  contact?: boolean;
}

const Icon = ({ Icon, className, contact = false }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      {...(!contact
        ? {
            drag: true,
            dragConstraints: {
              top: -30,
              left: -30,
              right: 30,
              bottom: 30,
            },
          }
        : {})}
    >
      {React.cloneElement(Icon, {
        className: `${
          contact ? "w-14 h-14 md:w-20 md:h-20" : "w-20 h-20 cursor-move"
        } text-white ${className}`,
      })}
    </motion.div>
  );
};

export default Icon;
