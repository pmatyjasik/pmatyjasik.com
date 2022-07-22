import { useRef, useState } from "react";
import { motion } from "framer-motion";
import NavItem from "components/NavItem";
import { FaBars } from "react-icons/fa";
import { useCloseComponent } from "hooks/useCloseComponent";

const variants = {
  open: { x: 0, transition: { type: "linear" } },
  closed: { x: "100%", transition: { type: "linear" } },
};
const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggle = () => {
    setIsOpen((prev) => !prev);
  };
  const wrapperRef = useRef<HTMLDivElement>(null);
  useCloseComponent(wrapperRef, () => setIsOpen(false));
  return (
    <div ref={wrapperRef}>
      <FaBars
        className={`z-50 w-8 h-8 text-white cursor-pointer md:hidden`}
        onClick={toggle}
      />
      <motion.div
        animate={isOpen ? "open" : "closed"}
        initial="closed"
        variants={variants}
        id="burger_menu"
        className="fixed right-0 z-10 flex flex-col items-center w-2/5 rounded-bl-[200px] rounded-tl-[50px] bg-primary top-15 md:hidden"
      >
        <ul className="py-10" onClick={toggle}>
          <NavItem navMobile={true} url="#about" text="About" />
          <NavItem navMobile={true} url="#technologies" text="Technologies" />
          <NavItem navMobile={true} url="#portfolio" text="Portfolio" />
          <NavItem navMobile={true} url="#contact" text="Contact" />
        </ul>
      </motion.div>
    </div>
  );
};
export default MobileMenu;
