export const getMonthYear = (date = new Date()) => {
  return new Date(date.getFullYear(), date.getMonth(), 1, 0, 0, 0, 0);
};

export const updateMonth = (date: Date, months: number) => {
  const updatedDate = getMonthYear(date);
  updatedDate.setMonth(updatedDate.getMonth() + months);
  return updatedDate;
};

export const addAMonth = (date: Date) => {
  return updateMonth(date, 1);
};

export const removeAMonth = (date: Date) => {
  return updateMonth(date, -1);
};

export const getMonthName = (date: Date) => {
  return date.toLocaleString('en-US', { month: 'long' });
};

export const getYear = (date: Date) => {
  return date.getFullYear();
};

export const getMonthYearDescription = (date: Date) => {
  return `${getMonthName(date)} ${getYear(date)}`;
};

export const monthsDifference = (dateFrom: Date, dateTo: Date) => {
  return (
    12 * (dateTo.getFullYear() - dateFrom.getFullYear()) +
    dateTo.getMonth() -
    dateFrom.getMonth()
  );
};
