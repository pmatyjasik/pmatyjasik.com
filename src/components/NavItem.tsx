import React from "react";

interface Props {
  url: string;
  text: string;
  isOpen?: boolean;
}

const NavItem = ({ url, text, isOpen = false }: Props) => (
  <li
    className={`text-white font-medium ${
      isOpen ? "mb-10" : ""
    } transition-all hover:-translate-y-1`}
  >
    <a href={url}>{text}</a>
  </li>
);

export default NavItem;
