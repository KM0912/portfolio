export const calcAge = (birthday: Date) => {
  const ageDiffMs = Date.now() - birthday.getTime();
  const ageDate = new Date(ageDiffMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};
