import React, { useState } from "react";
import NavItem from 'components/NavItem';
import { FaBars } from "react-icons/fa";
import MobileMenu from "components/MobileMenu";

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="md:w-[45%] lg:w-1/3">
      <nav className="hidden md:block">
        <ul className="flex justify-around text-white">
          <NavItem url='#about' text='O mnie'/>
          <NavItem url='#' text='Technologie'/>
          <NavItem url='#' text='Portfolio'/>
          <NavItem url='#' text='Kontakty'/>
        </ul>
      </nav>
      <FaBars
      className={`z-50 w-8 h-8 text-white cursor-pointer md:hidden`}
      onClick={() => setIsOpen(prev => !prev)}
      />
      <MobileMenu isOpen={isOpen} />
    </div>
  );
}


export default NavMenu;