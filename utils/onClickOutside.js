import { useEffect } from 'react';

function onClickOutSide(onOuterClick, innerRef) {
  useEffect(
    () => {
      function handleClick(e) {
        if (innerRef.current && !innerRef.current.contains(e.target)) {
          onOuterClick(e);
        }
      }

      if (innerRef.current) {
        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);
      }

      return () => {};
    },
    [onOuterClick, innerRef], // invoke again, if deps have changed
  );
}

export default onClickOutSide;
