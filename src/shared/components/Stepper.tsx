import { Button, Input, Text } from "@/ui";
import { useReducer, type KeyboardEventHandler } from "react";

interface State {
  value: number;
}

enum ActionType {
  DECREMENT = "action/decrement", // 0
  INCREMENT = "action/increment", // 1
  SET = "action/set", // 2
}

interface Action {
  type: ActionType;
  payload?: number;
}

const initialState: State = {
  value: 0,
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case ActionType.DECREMENT: {
      return {
        value: state.value - 1,
      };
    }
    case ActionType.INCREMENT: {
      return {
        value: state.value + 1,
      };
    }
    case ActionType.SET: {
      if (action.payload) {
        return {
          value: action.payload,
        };
      }
    }
  }
  return state;
};

export const Stepper = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === "Enter") {
      console.log("handleKeyDown");
      dispatch({
        type: ActionType.SET,
        payload: parseInt(event.currentTarget.value),
      });
    }
  };

  return (
    <div className="space-y-2">
      <div className="flex gap-2 items-center">
        <Button onClick={() => dispatch({ type: ActionType.DECREMENT })}>
          -
        </Button>
        <Text>{state.value}</Text>
        <Button onClick={() => dispatch({ type: ActionType.INCREMENT })}>
          +
        </Button>
      </div>
      <div>
        <Input onKeyDown={handleKeyDown} type="number" />
      </div>
    </div>
  );
};
