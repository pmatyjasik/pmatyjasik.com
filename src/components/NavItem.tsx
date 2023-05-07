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
    }hover:opacity-50 `}
  >
    <a href={url}>{text}</a>
  </li>
);

export default NavItem;
