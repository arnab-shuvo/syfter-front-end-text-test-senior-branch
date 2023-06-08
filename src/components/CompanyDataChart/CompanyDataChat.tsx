import React from "react";
import { Grid, Card, Typography } from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import useFinancialData from "../../hooks/useFinancialData";

const CompanyDataChart: React.FC = () => {
  const { financialData, isLoading, isError } = useFinancialData();

  return (
    <Grid item xs={8}>
      <Card sx={{ padding: 2 }}>
        <Typography variant="h6">Financials</Typography>
        {isLoading && <Typography variant="h6">Loading....</Typography>}
        {isError && (
          <Typography variant="h6">
            Something Went Wrong. Please Try Again.
          </Typography>
        )}
        {!isLoading && !isError && (
          <ResponsiveContainer width={"99%"} height={500}>
            <LineChart
              width={500}
              height={300}
              data={financialData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="profit"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
                name="Profit"
              />
              <Line
                name="Revenue"
                type="monotone"
                dataKey="revenue"
                stroke="#82ca9d"
              />
            </LineChart>
          </ResponsiveContainer>
        )}
      </Card>
    </Grid>
  );
};

export default CompanyDataChart;
