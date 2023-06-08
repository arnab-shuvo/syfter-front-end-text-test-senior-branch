import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getFinancialData } from "../services";
import {
  CompanyFinancial,
  PreferredFinancialData,
} from "../types/CompanyFinancial";
import { getPreferredFinancialData } from "../utils/getPreferredFinancialData";

type IFinancialDataHook = {
  financialData: PreferredFinancialData[] | [];
  isLoading: Boolean | null;
  isError: Boolean | null;
};

const useFinancialData = (): IFinancialDataHook => {
  const [financialData, setFinancialData] = useState<
    PreferredFinancialData[] | []
  >([]);
  const [isLoading, setIsLoading] = useState<boolean | null>(null);
  const [isError, setIsError] = useState<boolean | null>(null);
  const queryResult = useQuery(["products"], getFinancialData);
  const PreferredFinancialData = getPreferredFinancialData(
    queryResult.data as CompanyFinancial[]
  );
  useEffect(() => {
    if (!queryResult.isLoading) {
      setFinancialData(PreferredFinancialData as PreferredFinancialData[]);
      setIsLoading(queryResult.isLoading);
      setIsError(queryResult.isError);
    }
  }, [queryResult.data]);
  return { financialData, isLoading, isError };
};

export default useFinancialData;
