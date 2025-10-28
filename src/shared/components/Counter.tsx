import { useEffect, useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      console.log("mounted/updating");
      // setCount(count + 1);
      setCount((value) => value + 1);
    }, 1000);

    return () => {
      console.log("unmounted");
      clearInterval(id);
    };
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
};
