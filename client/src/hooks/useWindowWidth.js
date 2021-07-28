import { useEffect, useState } from "react";

// FIXME: width state is out of sync with actual browser window width e.g. browser window width = 1000px, width = 1005px

// hook that returns the browser window's current width -- useful for responsive design.
const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const getWidth = () => setWidth(window.innerWidth);

    // debounce to prevent get/setWidth calls on every single pixel change - drastically reduces number of rerenders.
    setTimeout(() => {
      window.addEventListener("resize", getWidth);
    }, 200);

    //remove listener when component unmounts
    return () => window.removeEventListener("resize", getWidth);
  }, [width]);

  return width;
};

export default useWindowWidth;
