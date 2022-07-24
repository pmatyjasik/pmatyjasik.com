import React, { useEffect, useState } from "react";

export function useCloseComponent(ref: React.RefObject<HTMLElement>) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        ref.current &&
        !ref.current.contains(event.target as Node) &&
        isOpen
      ) {
        setIsOpen((prev) => !prev);
      }
    }

    function handleOnScroll(event: Event) {
      if (ref.current && isOpen) {
        setIsOpen((prev) => !prev);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("scroll", handleOnScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("scroll", handleOnScroll);
    };
  }, [isOpen, ref]);
  return [isOpen, setIsOpen] as const;
}
