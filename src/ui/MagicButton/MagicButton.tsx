import {
  type ComponentProps,
  type ForwardedRef,
  forwardRef,
  useEffect,
} from "react";

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
  onMount: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
} & ComponentProps<"button">;

const MagicButton = forwardRef(
  (
    {
      children,
      onMount,
      onMouseEnter,
      onMouseLeave,
      color = "clouds",
      bgColor = "emerald",
      ...rest
    }: Props,
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    useEffect(() => {
      // logic here
      console.log("mounting");
      onMount();

      return () => {
        console.log("unmounting");
      };
    }, []);

    const handleMouseEnter = () => {
      onMouseEnter();
    };
    const handleMouseLeave = () => {
      onMouseLeave();
    };

    return (
      <button
        ref={ref}
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
  }
);

MagicButton.displayName = "forwardRef(MagicButton)";

export { MagicButton };
