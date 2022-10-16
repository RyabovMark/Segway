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
      display="flex"
      alignItems="center"
      flexDirection="column"
      bgcolor="text.white"
      sx={{ flex: "1 0 auto" }}
    >
      <SnackBar />
      <MainHeader />
      <ScootersGrid />
      <BlueLine />
      <Box width="80%" display="flex" flexDirection="column">
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
