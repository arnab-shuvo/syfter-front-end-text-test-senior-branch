import React from "react";
import { createTheme, ThemeProvider, Container, Grid } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import CompanyHeaderBar from "./components/CompanyHeaderBar";
import CompanyPeopleCard from "./components/CompanyPeopleCard";
import "./index.css";

// @ts-ignore
import { mui_theme } from "./theme";
import CompanyDataChart from "./components/CompanyDataChart";

const App: React.FC = () => {
  const theme = createTheme({
    ...mui_theme,
  });

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Container maxWidth={false} sx={{ padding: "0 !important" }}>
          <CompanyHeaderBar />
          <Grid container spacing={2} padding="1rem">
            <CompanyDataChart />
            <CompanyPeopleCard />
          </Grid>
        </Container>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
