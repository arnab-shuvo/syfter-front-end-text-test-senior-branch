import { getPreferredFinancialData } from "./getPreferredFinancialData";
import { financialsData } from "../constants/financialsData";

const dataComparison = [
  {
    name: "2016",
    revenue: 1200,
    profit: 4000,
    amt: 0,
  },
  {
    name: "2017",
    revenue: 750,
    profit: 3000,
    amt: 0,
  },
  {
    name: "2018",
    revenue: 4900,
    profit: 2000,
    amt: 0,
  },
  {
    name: "2019",
    revenue: 1800,
    profit: 2780,
    amt: 0,
  },
  {
    name: "2020",
    revenue: 2400,
    profit: 1890,
    amt: 0,
  },
  {
    name: "2021",
    revenue: 1400,
    profit: 2390,
    amt: 0,
  },
  {
    name: "2022",
    revenue: 2150,
    profit: 3490,
    amt: 0,
  },
];

it("returns the right data", () => {
  const preferredData = getPreferredFinancialData(financialsData);
  expect(JSON.stringify(preferredData)).toBe(JSON.stringify(dataComparison));
});
