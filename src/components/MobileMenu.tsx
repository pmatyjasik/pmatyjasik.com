import { motion } from 'framer-motion';
import NavItem from 'components/NavItem';

interface Props{
    isOpen: boolean;
}

const MobileMenu = ({ isOpen }:Props) => {
  const variants = {
    open: { x: 0, transition: { type: 'linear' } },
    closed: { x: '100%', transition: { type: 'linear' } },
  };
  return (
    <motion.div
      animate={isOpen ? 'open' : 'closed'}
      initial='closed'
      variants={variants}
      id='burger_menu'
      className='fixed right-0 z-10 flex flex-col items-center w-2/5 rounded-bl-[200px] rounded-tl-[50px] bg-primary top-15 md:hidden'
    >
        <ul className='py-10'>
        <NavItem url='#' text='O mnie'/>
        <NavItem url='#' text='Technologie'/>
        <NavItem url='#' text='Portfolio'/>
        <NavItem url='#' text='Kontakty'/>

        </ul>
    </motion.div>
  );
};
export default MobileMenu;