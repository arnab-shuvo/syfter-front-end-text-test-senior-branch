import React from "react";
import { Grid, Card, Typography, Stack } from "@mui/material";

import Person from "./Person";

const CompanyPeopleCard: React.FC = () => {
  return (
    <Grid item xs={4}>
      <Card sx={{ padding: 2 }}>
        <Typography variant="h6">People</Typography>
        <Stack mt="1rem" gap={1}>
          <Person initials="SD" name="Susan Doe" jobTitle="CEO" />
          <Person initials="JD" name="John Denver" jobTitle="CFO" />
          <Person
            initials="AE"
            name="Albert Einstein"
            jobTitle="Catering Manager"
          />
        </Stack>
      </Card>
    </Grid>
  );
};

export default CompanyPeopleCard;
