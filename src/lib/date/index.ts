export const getMonthYear = (date = new Date()) => {
  return new Date(date.getFullYear(), date.getMonth(), 1, 0, 0, 0, 0);
};

export const updateMonth = (date: Date, months: number) => {
  const updatedDate = getMonthYear(date);
  updatedDate.setMonth(updatedDate.getMonth() + months);
  return updatedDate;
};

export const addMonth = (date: Date) => {
  return updateMonth(date, 1);
};

export const removeMonth = (date: Date) => {
  return updateMonth(date, -1);
};

export const monthsFromNow = (date: Date) => {
  return date;
};
