import { useRef } from "react";
import { MagicButton } from "./MagicButton";

export const MagicButtonWrapper = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleOnMount = () => {
    if (buttonRef.current) {
      buttonRef.current.style.backgroundColor = "#0000ff";
    }
  };

  const handleOnMouseEnter = () => {
    if (buttonRef.current) {
      buttonRef.current.style.backgroundColor = "#ff0000";
    }
  };

  const handleOnMouseLeave = () => {
    if (buttonRef.current) {
      buttonRef.current.style.backgroundColor = "#00ff00";
    }
  };

  return (
    <>
      <MagicButton
        ref={buttonRef}
        onMount={handleOnMount}
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
      >
        Test me!
      </MagicButton>
    </>
  );
};
