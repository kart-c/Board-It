export const getCapitalisedFirstName = (str) => {
  str = str.trim();
  let result = str[0].toUpperCase();
  for (let i = 1; i < str.length; i++) {
    if (str[i] === " ") break;
    result += str[i];
  }
  return result;
};
