import { memo, type ComponentProps } from "react";

// enum Colors {
//   emerald = "#2ecc71",
//   midnightBlue = "#2c3e50",
//   clouds = "#ecf0f1",
//   carrot = "#e67e22",
// }
// Colors.emerald
// type Color = "emerald" | "midnightBlue" | "clouds" | "carrot";

const palette = {
  emerald: "#2ecc71",
  midnightBlue: "#2c3e50",
  clouds: "#ecf0f1",
  carrot: "#e67e22",
};

type Color = keyof typeof palette;

// type CustomReadonly<T> = {
//   // readonly [key in keyof T]-?: T[key];
//   readonly [key in keyof T]: T[key];
// };

// type Props = {
//   // children: string;
//   color?: Color;
//   bgColor?: Color;
//   // onClick?: () => void;
// } & ComponentProps<"button">;

interface Props extends ComponentProps<"button"> {
  color?: Color;
  bgColor?: Color;
}

// type PropsWithoutColor = Omit<Props, "color">;

const Button = memo(
  ({ children, color = "clouds", bgColor = "emerald", ...rest }: Props) => {
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
  }
);

Button.displayName = "memo(Button)";

export { Button };
