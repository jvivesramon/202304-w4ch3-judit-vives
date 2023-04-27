export interface TelephoneContextStructure {
  numbers: [];
  addNumber: (number: number) => void;
  deleteNumber: () => void;
  call: () => void;
  hangUp: () => void;
}
