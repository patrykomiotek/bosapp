import { useSelector } from "react-redux";
import type { KeyboardEventHandler } from "react";
import {
  increment,
  decrement,
  incrementByAmount,
} from "@/features/counter/counterSlice";
import { Button, Input, Text } from "@/ui";
import { useAppDispatch } from "@/hooks/index";
import type { RootState } from "../../store";

export const StepperRedux = () => {
  const count = useSelector((store: RootState) => store.counter.value);
  const dispatch = useAppDispatch();

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === "Enter") {
      console.log("handleKeyDown");
      dispatch(incrementByAmount(parseInt(event.currentTarget.value)));
    }
  };

  return (
    <div className="space-y-2">
      <div className="flex gap-2 items-center">
        <Button onClick={() => dispatch(decrement())}>-</Button>
        <Text>{count}</Text>
        <Button onClick={() => dispatch(increment())}>+</Button>
      </div>
      <div>
        <Input onKeyDown={handleKeyDown} type="number" />
      </div>
    </div>
  );
};
