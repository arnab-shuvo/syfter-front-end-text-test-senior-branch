import { CompanyFinancial } from "../types/CompanyFinancial";

export const getFinancialData = async (): Promise<
  CompanyFinancial | unknown
> => {
  try {
    const response = await fetch(
      "https://mocki.io/v1/56597659-8f61-4ffc-8ace-daa52f138c52",
      { method: "get" }
    );
    const data = await response.json();
    return data as unknown as CompanyFinancial;
  } catch (error) {
    return error;
  }
};
