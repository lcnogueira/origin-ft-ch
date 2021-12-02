export const maskValue = (value: string) => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d)(\d{2})$/, '$1.$2')
    .replace(/(?=(\d{3})+(\D))\B/g, ',');
};

export const unMaskValue = (value: string) => {
  if (!value) {
    return 0;
  }
  return parseFloat(value.replace(/,/g, ''));
};

export const toCents = (dollars: number) => {
  return dollars * 100;
};

export const toDollars = (cents: number) => {
  return cents / 100;
};
