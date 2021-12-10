import {
  addAMonth,
  removeAMonth,
  getMonthName,
  getMonthYear,
  getYear,
  updateMonth,
  getMonthYearDescription,
  monthsDifference,
} from '.';

describe('date.ts', () => {
  describe('addAMonth', () => {
    it('should add only a month', () => {
      const onlyMonth = addAMonth(new Date(2022, 0));
      expect(onlyMonth.getMonth()).toBe(1);
      expect(onlyMonth.getFullYear()).toBe(2022);
    });

    it('should add month and year case reach the end of the year', () => {
      const monthAndYear = addAMonth(new Date(2022, 11));
      expect(monthAndYear.getMonth()).toBe(0);
      expect(monthAndYear.getFullYear()).toBe(2023);
    });
  });

  describe('removeAMonth', () => {
    it('should remove only a month', () => {
      const onlyMonth = removeAMonth(new Date(2022, 5));
      expect(onlyMonth.getMonth()).toBe(4);
      expect(onlyMonth.getFullYear()).toBe(2022);
    });

    it('should remove month and year case reach the beginning of the year', () => {
      const monthAndYear = removeAMonth(new Date(2022, 0));
      expect(monthAndYear.getMonth()).toBe(11);
      expect(monthAndYear.getFullYear()).toBe(2021);
    });
  });

  describe('getMonthName', () => {
    it('should return the month name', () => {
      expect(getMonthName(new Date(2021, 0))).toBe('January');
      expect(getMonthName(new Date(2021, 11))).toBe('December');
    });
  });

  describe('getMonthYearDescription', () => {
    it('should return the month and year description', () => {
      expect(getMonthYearDescription(new Date(2021, 0))).toBe('January 2021');
      expect(getMonthYearDescription(new Date(2022, 11))).toBe('December 2022');
    });
  });

  describe('getMonthYear', () => {
    it('should create a date with only month and year', () => {
      const date = 5;
      const hours = 10;
      const minutes = 20;
      const seconds = 30;
      const ms = 35;

      const monthYearDate = getMonthYear(
        new Date(2021, 0, date, hours, minutes, seconds, ms)
      );

      expect(monthYearDate.getFullYear()).toBe(2021);
      expect(monthYearDate.getMonth()).toBe(0);
      expect(monthYearDate.getDate()).toBe(1);
      expect(monthYearDate.getHours()).toBe(0);
      expect(monthYearDate.getMinutes()).toBe(0);
      expect(monthYearDate.getSeconds()).toBe(0);
      expect(monthYearDate.getMilliseconds()).toBe(0);
    });

    it('should default to current year and month if no param is provided', () => {
      const currentDate = new Date();
      const monthYearDate = getMonthYear();

      expect(monthYearDate.getFullYear()).toBe(currentDate.getFullYear());
      expect(monthYearDate.getMonth()).toBe(currentDate.getMonth());
      expect(monthYearDate.getDate()).toBe(1);
      expect(monthYearDate.getHours()).toBe(0);
      expect(monthYearDate.getMinutes()).toBe(0);
      expect(monthYearDate.getSeconds()).toBe(0);
      expect(monthYearDate.getMilliseconds()).toBe(0);
    });
  });

  describe('getYear', () => {
    it('should return the full year', () => {
      expect(getYear(new Date(2022, 11))).toBe(2022);
    });
  });

  describe('updateMonth', () => {
    it('should add months', () => {
      const onlyMonths = updateMonth(new Date(2022, 5), 4);
      expect(onlyMonths.getMonth()).toBe(9);
      expect(onlyMonths.getFullYear()).toBe(2022);
    });

    it('should add months and year(s) case reach the end of the year(s)', () => {
      const monthsAndYears = updateMonth(new Date(2022, 11), 13);
      expect(monthsAndYears.getMonth()).toBe(0);
      expect(monthsAndYears.getFullYear()).toBe(2024);
    });
  });

  describe('monthsDifference', () => {
    it('should return the difference between 2 months', () => {
      expect(monthsDifference(new Date(2022, 1), new Date(2022, 2))).toBe(1);
      expect(monthsDifference(new Date(2021, 2), new Date(2022, 2))).toBe(12);
      expect(monthsDifference(new Date(2021, 11), new Date(2022, 0))).toBe(1);
    });
  });
});
