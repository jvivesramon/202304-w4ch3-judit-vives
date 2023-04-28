import { useContext } from "react";
import TelephoneContext from "../../store/context/Telephone/TelephoneContext";
import Key from "../Key/Key";

const Keyboard = (): JSX.Element => {
  const { isCalling, addDigit, emptyPhoneNumber } =
    useContext(TelephoneContext);

  return (
    <div className="keyboard-container">
      <ol className="keyboard">
        {["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].map((digit) => (
          <li key={digit}>
            <Key
              text={digit}
              isDisabled={isCalling}
              isBig={false}
              actionOnclick={() => addDigit(digit)}
            />
          </li>
        ))}
        <li>
          <Key
            text={"Delete"}
            isDisabled={isCalling}
            isBig={true}
            actionOnclick={emptyPhoneNumber}
          />
        </li>
      </ol>
    </div>
  );
};

export default Keyboard;
