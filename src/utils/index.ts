export const getPriceWithVat = (
  priceBeforeVat: number,
  vat: number
): number => {
  return Math.round(priceBeforeVat * (1 + vat / 100));
};
