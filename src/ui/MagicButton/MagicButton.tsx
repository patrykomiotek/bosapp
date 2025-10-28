import { type ComponentProps, useEffect } from "react";

const palette = {
  emerald: "#2ecc71",
  midnightBlue: "#2c3e50",
  clouds: "#ecf0f1",
  carrot: "#e67e22",
};

type Color = keyof typeof palette;

type Props = {
  color?: Color;
  bgColor?: Color;
} & ComponentProps<"button">;

const MagicButton = ({
  children,
  color = "clouds",
  bgColor = "emerald",
  ...rest
}: Props) => {
  // const [state, setState] = useState();
  // const refFiled = useRef();

  useEffect(() => {
    // logic here
    console.log("mounting");

    return () => {
      console.log("unmounting");
    };
  }, []);

  return (
    <button
      style={{
        color: palette[color],
        backgroundColor: palette[bgColor],
      }}
      {...rest}
    >
      {children}
    </button>
  );
};

export { MagicButton };
