import React from "react";

interface Props {
  url: string;
  text: string;
  navMobile?: boolean;
}

const NavItem = ({ url, text, navMobile = false }: Props) => (
  <li
    className={`text-white font-medium ${
      navMobile ? "mb-10" : ""
    } transition-all hover:-translate-y-1`}
  >
    <a href={url}>{text}</a>
  </li>
);

export default NavItem;
