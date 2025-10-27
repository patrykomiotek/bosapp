import { memo } from "react";

type Props = {
  children: string; // string / number / boolean
  // children: React.ReactNode;
};

const Text = memo(({ children }: Props) => {
  // [], undefined, null, 0, 1
  // const { children } = props; // { parsed_text }
  // const parsed_text = props.parsed_text;
  return <p>{children}</p>;
});

Text.displayName = "memo(Text)";

// export default Text;
export { Text };
