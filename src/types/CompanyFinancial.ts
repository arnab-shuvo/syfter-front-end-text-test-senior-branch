export type CompanyFinancial = {
  name: string;
  profit: number;
  revenue: number;
  amt: number;
  source: string;
};

export type PreferredFinancialData = Pick<
  CompanyFinancial,
  "name" | "revenue" | "profit" | "amt"
>;

export type SortedByYearAndSource = {
  [key: string]: {
    [key: string]: PreferredFinancialData;
  };
};

export type ColumnName = (keyof PreferredFinancialData)[];
