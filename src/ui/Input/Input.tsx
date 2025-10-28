import {
  type ComponentProps,
  useId,
  forwardRef,
  type ForwardedRef,
} from "react";

type Props = {
  label?: string;
} & ComponentProps<"input">;

// Works in React 19
// Doesn't work in React < 19
export const Input = forwardRef(
  ({ label, id, ...rest }: Props, ref: ForwardedRef<HTMLInputElement>) => {
    const reactId = useId();
    const elemId = id ? id : reactId;
    return (
      <div>
        <label htmlFor={elemId}>{label}</label>
        <input ref={ref} id={elemId} {...rest} />
      </div>
    );
  }
);
