/*  eslint-disable react-hooks/exhaustive-deps */

import { useEffect } from "react";

const useOnClickOutside = (ref, callback) => {
  const handleClick = e => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
};

// export default useOutsideClick;


export default useOnClickOutside;