export interface CategoryType {
  id: string;
  slug: string;
  nameBn: string;
  icon: string;
}

export type MarketType = {
  market: string;
  division: string;
  min: number;
  max: number;
};

export type PriceChangeType = {
  dir: "up" | "down";
  pct: number;
};

export type ProductType = {
  category: string;
  categoryIcon: string;
  categoryNameBn: string;
  change: PriceChangeType;
  id: number;
  image: string;
  lastMonth: number;
  lastWeek: number;
  markets: MarketType[];
  nameBn: string;
  slug: string;
  today: number;
  unit: 'kg' | 'litre' | 'dozen' | 'piece';
  yesterday: number;
};

export function toBanglaNumber(value: number | string): string {
  return String(value).replace(/\d/g, (digit) =>
    "০১২৩৪৫৬৭৮৯"[Number(digit)]
  );
}