export interface Skip {
  id: number;
  size: number;
  hirePeriodDays: number;
  transportCost: number | null;
  perTonneCost: number | null;
  priceBeforeVat: number;
  vat: number;
  postcode: string;
  area: string;
  forbidden: boolean;
  allowedOnRoad: boolean;
  allowsHeavyWaste: boolean;
  imageUrl: string;
}