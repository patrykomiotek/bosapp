import { v4 as uuidv4 } from "uuid";
import { useState, useCallback } from "react";
import { Text } from "../ui/Text";
import { Button } from "../ui";

function Generator() {
  const [uuid, setUuid] = useState(uuidv4()); // [0 - value, 1 - fn setter]

  const handleClick = useCallback(() => {
    setUuid(uuidv4());
  }, []);

  return (
    <>
      <Text>{uuid}</Text>
      <Text>Hello World!</Text>
      {/* <button onClick={handleClick}>Regenerate</button> */}
      <Button onClick={handleClick}>Regenerate</Button>
      {/* <Button onClick></Button> -> <button onClick={onClick}> */}
    </>
  );
}

export { Generator };
