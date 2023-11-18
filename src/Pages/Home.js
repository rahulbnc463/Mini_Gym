import React, { useState } from "react";
import { Box } from "@mui/material";
import SearchExercises from "../Component/SearchExercises";
import Exercises from "../Component/Exercises";
import HeroBanner from "../Component/HeroBanner";
const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SearchExercises />
      <Exercises />
    </Box>
  );
};

export default Home;
