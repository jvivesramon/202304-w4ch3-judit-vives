import { createContext } from "react";
import { TelephoneContextStructure } from "./types";

const TelephoneContext = createContext<TelephoneContextStructure>(
  {} as TelephoneContextStructure
);

export default TelephoneContext;
