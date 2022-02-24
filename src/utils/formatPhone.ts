export const FormatPhone = (phone: string) => {
  const phoneWithSpace =
    phone.substr(0, 2) + ' ' + phone.substr(2, phone.length);
  return (
    phoneWithSpace.substr(0, 2) +
    ' ' +
    '(' +
    phone.substr(2, 2) +
    ')' +
    ' ' +
    phone.substr(4, 4) +
    '-' +
    phone.substr(8, phone.length)
  );
};
