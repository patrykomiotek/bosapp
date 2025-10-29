import { useContext } from "react";
import { LevelContext } from "./LevelContext";

export const LevelComponent = () => {
  const context = useContext(LevelContext);

  return <p>Level: {context.value}</p>;
};
