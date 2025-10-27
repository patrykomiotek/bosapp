type Props = {
  parsed_text: string; // string / number / boolean
};

function Text(props: Props) {
  // [], undefined, null, 0, 1
  const { parsed_text } = props; // { parsed_text }
  // const parsed_text = props.parsed_text;
  return <p>{parsed_text}</p>;
}

// export default Text;
export { Text };
