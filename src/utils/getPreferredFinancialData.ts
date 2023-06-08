import {
  companyPreferences,
  priorities,
} from "../constants/datasourcePreferences";
import {
  ColumnName,
  CompanyFinancial,
  PreferredFinancialData,
  SortedByYearAndSource,
} from "../types/CompanyFinancial";

const DATA_TYPE = "company_financials";

export const getPreferredFinancialData = (
  companyFinancials: CompanyFinancial[] | undefined
): PreferredFinancialData[] => {
  let prioritiesByPref: any = {};

  const prioritySourceByScore = calculatePrioritiesByScore(priorities);

  const { sortedByYearAndSource, columnNames } = sortByYearAndSource(
    companyFinancials ?? []
  );

  const yearList: string[] = Object.keys(sortedByYearAndSource);

  companyPreferences.forEach((element) => {
    if (element.table_name === DATA_TYPE) {
      const index = element.column_name === "*" ? "all" : element.column_name;
      prioritiesByPref[index] = element;
    }
  });

  let priorityColumnByPref = Object.keys(prioritiesByPref);

  let result: CompanyFinancial[] = [];

  yearList.forEach((year) => {
    let tempData: any = sortedByYearAndSource[year][prioritySourceByScore];

    if (priorityColumnByPref.length) {
      if (prioritiesByPref["all"]) {
        tempData = sortedByYearAndSource[year][prioritiesByPref["all"].source];
      }

      columnNames.forEach((column: keyof PreferredFinancialData) => {
        if (prioritiesByPref[column]) {
          const dataSourceByColumn = prioritiesByPref[column].source;
          tempData[column] =
            sortedByYearAndSource[year][dataSourceByColumn][column];
        }
      });
    }
    result.push(tempData);
  });

  return result;
};

const calculatePrioritiesByScore = (
  priority: {
    table_name: string;
    column_name: string;
    source: string;
    priority: number;
  }[]
): string => {
  let prioritiesByScore: { [key: number]: string } = {};
  priorities.forEach((element) => {
    if (element.table_name === DATA_TYPE) {
      const index = element.priority;
      prioritiesByScore[index] = element.source;
    }
  });
  const highestPriorityScore = Object.keys(prioritiesByScore).sort(
    (a, b) => +a - +b
  )[0];

  return prioritiesByScore[+highestPriorityScore];
};

const sortByYearAndSource = (
  companyFinancials: CompanyFinancial[]
): {
  sortedByYearAndSource: SortedByYearAndSource;
  columnNames: ColumnName;
} => {
  const sortedByYearAndSource: SortedByYearAndSource = {};
  let columnNames: ColumnName = [];

  companyFinancials?.forEach((data: CompanyFinancial) => {
    columnNames = Object.keys(companyFinancials[0]) as ColumnName;
    sortedByYearAndSource[data.name] = {
      ...sortedByYearAndSource[data.name],
      ...{
        [data.source]: {
          name: data.name,
          revenue: data.revenue,
          profit: data.profit,
          amt: 0,
        },
      },
    };
  });
  return { sortedByYearAndSource, columnNames };
};
