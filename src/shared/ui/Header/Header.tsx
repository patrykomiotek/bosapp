type Props = {
  // children: string;
  children: React.ReactNode;
};

export const Header = ({ children }: Props) => {
  return <h1 className="text-3xl font-medium">{children}</h1>;
};
