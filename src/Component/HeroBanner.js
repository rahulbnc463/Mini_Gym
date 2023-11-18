import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import BannerImg from "../assets/images/banner.png";
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
      <Typography fontSize="19px" lineHeight="35px" mb={3}>
        Check out the most effective exercises
      </Typography>
      <Button
        variant="contained"
        color="error"
        href="#exercises"
        sx={{ backgroundColor: "red", padding: "10px" }}
      >
        Explore Exercises
      </Button>
      <Typography
        fontWeight={600}
        color="red"
        sx={{ opacity: 0.1, display: { lg: "block", xs: "none" } }}
        fontSize="200px"
      >
        Exercise
      </Typography>
      {/* //img part here  */}
      <img src={BannerImg} className="hero-banner-img" alt="HeroBanner" />
    </Box>
  );
};

export default HeroBanner;
