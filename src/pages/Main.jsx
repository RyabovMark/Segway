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
      height="100%"
      display="flex"
      alignItems="center"
      flexDirection="column"
      bgcolor="text.white"
    >
      <SnackBar />
      <MainHeader />
      <ScootersGrid />
      <BlueLine />
      <Box
        display="flex"
        flexDirection="column"
        width="80%"
        sx={{ flex: "1 0 auto" }}
      >
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
