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

type CustomReadonly<T> = {
  // readonly [key in keyof T]-?: T[key];
  readonly [key in keyof T]: T[key];
};

type Props = CustomReadonly<{
  children: string;
  color?: Color;
  bgColor?: Color;
}>;

function Button({ children, color = "clouds", bgColor = "emerald" }: Props) {
  return (
    <button
      style={{
        color: palette[color],
        backgroundColor: palette[bgColor],
      }}
    >
      {children}
    </button>
  );
}

export { Button };
