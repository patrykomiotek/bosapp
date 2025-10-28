import { type ComponentProps, useId } from "react";

type Props = {
  label?: string;
} & ComponentProps<"input">;

export const Input = ({ label, id, ...rest }: Props) => {
  const reactId = useId();
  const elemId = id ? id : reactId;
  return (
    <div>
      <label htmlFor={elemId}>{label}</label>
      <input id={elemId} {...rest} />
    </div>
  );
};
