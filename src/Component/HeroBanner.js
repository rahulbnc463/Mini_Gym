import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
    >
      <Typography color="red" fontWeight="600" fontSize="30px">
        Fitness Club
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "42px", xs: "38px" } }}
      >
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography>Check out the most effective exercises</Typography>
    </Box>
  );
};

export default HeroBanner;
