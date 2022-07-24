import React, { useEffect, useState } from 'react';

export function useCloseComponent(
  ref: React.RefObject<HTMLElement>
){
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleCloseMenu = () => {
    setIsOpen((prev) => !prev);
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node) && isOpen) {
        handleCloseMenu();
      }
    }

    function handleOnScroll(event: Event) {
        if (ref.current && isOpen) {
          handleCloseMenu();
        }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('scroll', handleOnScroll);

    return () => {
    document.removeEventListener('mousedown', handleClickOutside);
    document.removeEventListener('scroll', handleOnScroll);
    };
  }, [isOpen, ref]);
  return {isOpen, setIsOpen}
}