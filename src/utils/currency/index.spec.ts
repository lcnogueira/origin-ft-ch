import { maskValue, unMaskValue, toCents, toDollars, formatCurrency } from '.';

describe('currency.ts', () => {
  describe('maskValue', () => {
    it('should mask value without decimal separator', () => {
      expect(maskValue('3')).toBe('3');
      expect(maskValue('30')).toBe('30');
    });

    it('should mask value with decimal separator', () => {
      expect(maskValue('300')).toBe('3.00');
      expect(maskValue('3500')).toBe('35.00');
    });

    it('should mask value with decimal and thousands separators', () => {
      expect(maskValue('3500.45')).toBe('3,500.45');
    });
  });

  describe('unMaskValue', () => {
    it('should return 0 if an empty string is provided', () => {
      expect(unMaskValue('')).toBe(0);
    });

    it('should unMask value with decimal and thousands separators', () => {
      expect(unMaskValue('3,500.00')).toBe(3500);
      expect(unMaskValue('3,500.45')).toBe(3500.45);
    });

    it('should unMask value with decimal separator', () => {
      expect(unMaskValue('3.00')).toBe(3);
      expect(unMaskValue('35.00')).toBe(35);
    });
  });

  describe('toCents', () => {
    it('should convert dollars to cents', () => {
      expect(toCents(3)).toBe(300);
      expect(toCents(30)).toBe(3000);
      expect(toCents(30.0)).toBe(3000);
      expect(toCents(30.45)).toBe(3045);
    });
  });

  describe('toDollars', () => {
    it('should convert cents do dollars', () => {
      expect(toDollars(300)).toBe(3);
      expect(toDollars(3000)).toBe(30);
      expect(toDollars(3045)).toBe(30.45);
    });
  });

  describe('formatCurrency', () => {
    it('should format money in cents', () => {
      expect(formatCurrency(250)).toBe('$2.50');
      expect(formatCurrency(250000)).toBe('$2,500.00');
    });
  });
});
