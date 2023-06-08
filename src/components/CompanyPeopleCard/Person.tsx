import React from "react";
import { Box, Stack, Avatar, Typography } from "@mui/material";

interface PersonProps {
  initials: string;
  name: string;
  jobTitle: string;
}

const Person: React.FC<PersonProps> = ({ initials, name, jobTitle }) => {
  return (
    <Box display="flex" alignItems="center" gap={2}>
      <Avatar>{initials}</Avatar>
      <Stack>
        <Typography>{name}</Typography>
        <Typography variant="caption">{jobTitle}</Typography>
      </Stack>
    </Box>
  );
};

export default Person;
