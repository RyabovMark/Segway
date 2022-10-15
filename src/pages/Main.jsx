import React from "react";
import { Box } from "@mui/material";
import NewCollectionSlider from "../components/NewCollectionSlider";
import OrderSection from "../components/OrderSection";
import DescriptionSection from "../components/DescriptionSection";
import ScootersGrid from "../components/ScootersGrid";
import MainHeader from "../components/MainHeader";
import BlueLine from "../components/BlueLine";
import SnackBar from "../components/SnackBar";

const Main = () => {
  return (
    <Box
      width="100%"
      justifyContent="center"
      display="flex"
      flexWrap="wrap"
      bgcolor="text.white"
    >
      <SnackBar />
      <MainHeader />
      <ScootersGrid />
      <BlueLine />
      <Box display="flex" flexDirection="column" width="80%">
        <Box display="flex" sx={{ flexDirection: { xs: "column", md: "row" } }}>
          <OrderSection />
          <NewCollectionSlider />
        </Box>
        <DescriptionSection />
      </Box>
    </Box>
  );
};

export default Main;
