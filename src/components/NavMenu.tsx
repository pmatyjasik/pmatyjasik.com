import React from "react";
import NavItem from "components/NavItem";
import MobileMenu from "components/MobileMenu";

const NavMenu = () => {
  return (
    <div className="md:w-[45%] lg:w-1/3 m-20:w-1/4">
      <nav className="hidden md:block">
        <ul className="flex justify-around text-white">
          <NavItem url="#about" text="About" />
          <NavItem url="#technologies" text="Technologies" />
          <NavItem url="#portfolio" text="Portfolio" />
          <NavItem url="#contact" text="Contact" />
        </ul>
      </nav>
      <MobileMenu />
    </div>
  );
};

export default NavMenu;
