type Props = {
  children: string; // string / number / boolean
};

function Text(props: Props) {
  // [], undefined, null, 0, 1
  const { children } = props; // { parsed_text }
  // const parsed_text = props.parsed_text;
  return <p>{children}</p>;
}

// export default Text;
export { Text };
