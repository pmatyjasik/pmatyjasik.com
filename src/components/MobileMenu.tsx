import { motion } from 'framer-motion';
import NavItem from 'components/NavItem';

interface Props{
    isOpen: boolean;
}

const variants = {
  open: { x: 0, transition: { type: 'linear' } },
  closed: { x: '100%', transition: { type: 'linear' } },
};
const MobileMenu = ({ isOpen }:Props) => {
  return (
    <motion.div
      animate={isOpen ? 'open' : 'closed'}
      initial='closed'
      variants={variants}
      id='burger_menu'
      className='fixed right-0 z-10 flex flex-col items-center w-2/5 rounded-bl-[200px] rounded-tl-[50px] bg-primary top-15 md:hidden'
    >
        <ul className='py-10'>
        <NavItem isOpen={true} url='#about' text='About'/>
        <NavItem isOpen={true} url='#technologies' text='Technologies'/>
        <NavItem isOpen={true} url='#' text='Portfolio'/>
        <NavItem isOpen={true} url='#contact' text='Contact'/>

        </ul>
    </motion.div>
  );
};
export default MobileMenu;