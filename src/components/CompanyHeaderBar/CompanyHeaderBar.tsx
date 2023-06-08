import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const CompanyHeaderBar: React.FC = () => {
  return (
    <Box display="flex" padding="1rem" gap={1}>
      <Box
        height="140px"
        width="140px"
        minWidth="140px"
        borderRadius=".5rem"
        sx={{
          backgroundColor: "white"
        }}
      >
        <img
          src="https://logo.clearbit.com/filament.ai"
          alt="Company logo"
          style={{ height: "100%", width: "100%" }}
        />
      </Box>
      <Stack>
        <Typography variant="h5" fontWeight={600}>
          Filament AI
        </Typography>
        <Typography>
          We help our clients bring the power of AI and Machine Learning
          technologies to their businesses through consultancy, our proprietary
          tooling and solutions.
        </Typography>
        <Typography color="primary" fontWeight={600}>
          https://www.filament.ai
        </Typography>
        <Box display="flex" gap={2} mt=".5rem">
          <Stack>
            <Typography color="textSecondary" variant="caption">
              Legal name
            </Typography>
            <Typography variant="caption">
              Filament Consultancy Group
            </Typography>
          </Stack>
          <Stack>
            <Typography color="textSecondary" variant="caption">
              Trading status
            </Typography>
            <Typography variant="caption">Unknown</Typography>
          </Stack>
          <Stack>
            <Typography color="textSecondary" variant="caption">
              Company type
            </Typography>
            <Typography variant="caption">Private</Typography>
          </Stack>
          <Stack>
            <Typography color="textSecondary" variant="caption">
              Headquarters
            </Typography>
            <Typography variant="caption">United Kingdom</Typography>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default CompanyHeaderBar;
