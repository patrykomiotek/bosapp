import { useEffect, useState } from "react";

const getSize = () => {
  return {
    x: window.innerWidth,
    y: window.innerHeight,
  };
};

export const useViewport = () => {
  const [size, setSize] = useState(getSize());

  const handleResize = () => {
    console.log("Hello!");
    setSize(getSize());
  };

  useEffect(() => {
    // socket, listener, server-sent events
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return size;
};
