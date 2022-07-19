import React from "react";

interface Props {
  url: string;
  text: string;
  isOpen?: boolean;
}

const NavItem = ({ url, text, isOpen = false }: Props) => (
  <li className={`text-white font-medium ${isOpen ? "mb-10" : ""}`}>
    <a className="hover:duration-300 hover:opacity-70" href={url}>
      {text}
    </a>
  </li>
);

export default NavItem;
