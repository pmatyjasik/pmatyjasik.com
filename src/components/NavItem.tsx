import React from "react";

interface Props {
  url: string;
  text: string;
  isOpen?: boolean;
}

const NavItem = ({ url, text, isOpen = false }: Props) => (
  <li className={`text-white ${isOpen ? "mb-10" : ""}`}>
    <a href={url}>{text}</a>
  </li>
);

export default NavItem;
