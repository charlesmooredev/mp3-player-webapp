import { useEffect } from 'react';

export const useOutsideClickFN = (ref, clickFn) => {
  useEffect(() => {
    const listener = event => {
      if (ref.current && !ref.current.contains(event.target)) {
        clickFn(event);
      }
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, clickFn]);
};
