import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { Text } from "../ui/Text";

function Generator() {
  const [uuid, setUuid] = useState(uuidv4()); // [0 - value, 1 - fn setter]

  const handleClick = () => {
    setUuid(uuidv4());
  };

  return (
    <>
      <Text>{uuid}</Text>
      <button onClick={handleClick}>Regenerate</button>
      {/* <Button onClick></Button> -> <button onClick={onClick}> */}
    </>
  );
}

export { Generator };
