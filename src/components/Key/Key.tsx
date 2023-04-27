interface KeyProps {
  text: string;
  isDisabled: boolean;
  isBig: boolean;
  actionOnclick: () => void;
}

const Key = ({
  text,
  isDisabled,
  actionOnclick,
  isBig,
}: KeyProps): JSX.Element => {
  return (
    <button
      onClick={actionOnclick}
      disabled={isDisabled}
      className={`key ${isBig ? "big" : ""}`}
    >
      {text}
    </button>
  );
};

export default Key;
