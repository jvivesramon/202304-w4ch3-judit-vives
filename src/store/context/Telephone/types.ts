export interface TelephoneContextStructure {
  phoneNumber: string[];
  isCalling: boolean;
  addDigit: (digit: string) => void;
  emptyPhoneNumber: () => void;
  toggleIsCalling: () => void;
}
