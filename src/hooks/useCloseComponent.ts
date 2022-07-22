import React, { useEffect } from 'react';

export function useCloseComponent(
  ref: React.RefObject<HTMLElement>,
  cb: () => void
) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        cb();
      }
    }

    function handleOnScroll(event: Event) {
        if (ref.current) {
            cb();
        }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('scroll', handleOnScroll);

    return () => {
    document.removeEventListener('mousedown', handleClickOutside);
    document.removeEventListener('scroll', handleOnScroll);
    };
  }, [ref, cb]);
}