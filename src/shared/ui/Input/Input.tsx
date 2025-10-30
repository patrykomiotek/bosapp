import {
  type ComponentProps,
  useId,
  forwardRef,
  type ForwardedRef,
} from "react";
import type { FieldError } from "react-hook-form";

type Props = {
  label?: string;
  error?: FieldError;
} & ComponentProps<"input">;

// Works in React 19
// Doesn't work in React < 19
export const Input = forwardRef(
  (
    { label, id, error, ...rest }: Props,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const reactId = useId();
    const elemId = id ? id : reactId;
    return (
      <>
        <div className="flex gap-2 mt-2 mb-2">
          <label htmlFor={elemId}>{label}</label>
          <input
            ref={ref}
            id={elemId}
            className="outline rounded-sm"
            {...rest}
          />
        </div>
        {error && <p style={{ color: "red" }}>{error.message}</p>}
      </>
    );
  }
);
