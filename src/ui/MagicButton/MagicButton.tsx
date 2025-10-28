import { type ComponentProps, useEffect, useRef } from "react";

const palette = {
  emerald: "#2ecc71",
  midnightBlue: "#2c3e50",
  clouds: "#ecf0f1",
  carrot: "#e67e22",
  peterRiver: "#3498db",
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
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // logic here
    console.log("mounting");
    if (buttonRef.current) {
      buttonRef.current.style.backgroundColor = "#0000ff";
    }

    return () => {
      console.log("unmounting");
    };
  }, []);

  const handleMouseEnter = () => {
    if (buttonRef.current) {
      buttonRef.current.style.backgroundColor = "#ff0000";
    }
  };
  const handleMouseLeave = () => {
    if (buttonRef.current) {
      buttonRef.current.style.backgroundColor = "#00ff00";
    }
  };

  return (
    <button
      ref={buttonRef}
      style={{
        color: palette[color],
        backgroundColor: palette[bgColor],
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...rest}
    >
      {children}
    </button>
  );
};

export { MagicButton };
