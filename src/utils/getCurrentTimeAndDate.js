export const getCurrentTimeAndDate = (str) => {
  const today = new Date();
  const date = today.toLocaleString().split(",")[0];
  return `${date} | ${today.getHours()}:${today.getMinutes()}`;
};
