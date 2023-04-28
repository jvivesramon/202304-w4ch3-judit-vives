import { useState, PropsWithChildren } from "react";
import { TelephoneContextStructure } from "./types";
import TelephoneContext from "./TelephoneContext";

const TelephoneContextProvider = ({
  children,
}: PropsWithChildren): JSX.Element => {
  const [phoneNumber, setPhoneNumber] = useState<string[]>([]);
  const [isCalling, setIsCalling] = useState<boolean>(false);

  const toggleIsCalling = (): void => {
    isCalling ? setIsCalling(false) : setIsCalling(true);
  };

  const addDigit = (digit: string): void => {
    if (phoneNumber.length >= 9) {
      return;
    }

    setPhoneNumber(phoneNumber.concat(digit));
  };

  const emptyPhoneNumber = (): void => {
    setPhoneNumber([]);
  };

  const TelephoneContextStore: TelephoneContextStructure = {
    phoneNumber,
    isCalling,
    addDigit,
    emptyPhoneNumber,
    toggleIsCalling,
  };

  return (
    <TelephoneContext.Provider value={TelephoneContextStore}>
      {children}
    </TelephoneContext.Provider>
  );
};

export default TelephoneContextProvider;
