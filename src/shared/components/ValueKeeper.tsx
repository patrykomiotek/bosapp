import { useRef, useState } from "react";
import { Button } from "@/ui";

export const ValueKeeper = () => {
  const [stateValue, setStateValue] = useState(0);
  const refValue = useRef(0);
  let letValue = 0;

  return (
    <div>
      <p>State value: {stateValue}</p>
      <p>Ref value: {refValue.current}</p>
      <p>Let value: {letValue}</p>
      <div>
        <Button onClick={() => setStateValue(stateValue + 1)}>+ state</Button>
        <Button onClick={() => (refValue.current = refValue.current + 1)}>
          + ref
        </Button>
        <Button onClick={() => letValue++}>+ let</Button>
      </div>
    </div>
  );
};
