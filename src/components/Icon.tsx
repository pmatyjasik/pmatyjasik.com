import React from "react";
import { IconType } from "react-icons";

interface Props {
  Icon: React.ReactElement<IconType & { className: string }>;
  className?: string;
  contact?: boolean;
}

const Icon = ({ Icon, className, contact = false }: Props) => {
  return React.cloneElement(Icon, {
    className: `${
      contact ? "w-14 h-14 md:w-20 md:h-20" : "w-20 h-20"
    } text-white ${className}`,
  });
};

export default Icon;
