export const getMonthYear = (date = new Date()) => {
  const currentMonthYear = date;
  currentMonthYear.setDate(1);
  currentMonthYear.setHours(0, 0, 0, 0);
  return currentMonthYear;
};

export const updateMonth = (date: Date, months: number) => {
  const updatedDate = new Date(date.getFullYear(), date.getMonth());
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
