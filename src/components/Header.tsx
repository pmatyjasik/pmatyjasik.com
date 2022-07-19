import React from "react";
import NavMenu from "components/NavMenu";
import Bubble from "components/Bubble";

const Header = () => (
  <header className="top-0 w-full px-4 py-5 overflow-hidden">
    <div className="container flex items-center justify-between mx-auto">
      <a href="/" className="mt-3">
        <span className="text-xl font-semibold cursor-pointer md:text-2xl text-primary">
          Piotr Matyjasik
        </span>
      </a>
      <NavMenu />
    </div>
    <Bubble />
  </header>
);

export default Header;
