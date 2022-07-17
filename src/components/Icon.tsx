import React from "react";
import { IconType } from "react-icons";

interface Props {
  Icon: React.ReactElement<IconType & { className: string }>;
  className?: string;
}

const Icon = ({ Icon, className }: Props) => {
  return React.cloneElement(Icon, {
    className: `w-20 h-20 text-white ${className}`,
  });
};

export default Icon;
