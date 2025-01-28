export type Code =
  | `${BinaryDigit}${BinaryDigit}${BinaryDigit}-${BinaryDigit}${BinaryDigit}${BinaryDigit}-${BinaryDigit}${BinaryDigit}${BinaryDigit}`
  | `${BinaryDigit}+`;

type BinaryDigit = '0' | '1';

export function codeToDecimal(code: Code) {
  if (code.includes('-')) {
    const groups = code.split('-');
    return groups
      .map((group, index) => {
        const decimal = parseInt(group, 2);
        return decimal.toString();
      })
      .join('');
  }

  // Handle single binary number case
  const decimal = parseInt(code, 2);
  return decimal.toString();
}
