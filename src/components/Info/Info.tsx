import { useContext } from "react";
import TelephoneContext from "../../store/context/Telephone/TelephoneContext";

const Info = (): JSX.Element => {
  const { isCalling } = useContext(TelephoneContext);

  return (
    <span className={`message ${isCalling ? "" : "off"}`}>Calling...</span>
  );
};

export default Info;
