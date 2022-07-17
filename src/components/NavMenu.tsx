import React, { useState } from "react";
import NavItem from "components/NavItem";
import { FaBars } from "react-icons/fa";
import MobileMenu from "components/MobileMenu";

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggle = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className="md:w-[45%] lg:w-1/3 m-20:w-1/4">
      <nav className="hidden md:block">
        <ul className="flex justify-around text-white">
          <NavItem url="#about" text="About" />
          <NavItem url="#technologies" text="Technologies" />
          <NavItem url="#" text="Portfolio" />
          <NavItem url="#contact" text="Contact" />
        </ul>
      </nav>
      <FaBars
        className={`z-50 w-8 h-8 text-white cursor-pointer md:hidden`}
        onClick={toggle}
      />
      <MobileMenu isOpen={isOpen} />
    </div>
  );
};

export default NavMenu;
