import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { Text } from "../ui/Text";

function Generator() {
  const state = useState(); // [0 - value, 1 - fn setter]
  let uuid = uuidv4();

  const handleClick = () => {
    uuid = uuidv4();
    state[1](uuid);
    console.log({ uuid });
  };

  return (
    <>
      <Text>{state[0]}</Text>
      <button onClick={handleClick}>Regenerate</button>
      {/* <Button onClick></Button> -> <button onClick={onClick}> */}
    </>
  );
}

export { Generator };
