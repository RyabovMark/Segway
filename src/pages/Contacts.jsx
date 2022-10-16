import React from "react";
import { Box, Typography } from "@mui/material";
import Map from "../data/images/Map.PNG";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const Contacts = () => {
  return (
    <Box width="90%" mx="auto" sx={{ flex: "1 0 auto" }}>
      <Typography
        textTransform="uppercase"
        textAlign="center"
        fontSize="50px"
        fontWeight={700}
        color="text.primary"
        my="30px"
      >
        Contact us
      </Typography>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mb="30px"
        sx={{ flexDirection: { xs: "column-reverse", md: "row" } }}
      >
        <Box>
          <Typography color="text.secondary" sx={{ pb: "15px" }}>
            <LocalPhoneOutlinedIcon /> +1 (888) 888-88-88
          </Typography>
          <Typography color="text.secondary" sx={{ pb: "15px" }}>
            <LocationOnOutlinedIcon /> 2637 Fairfax Ave, Culver City, CA 90232,
            USA
          </Typography>
          <Typography color="text.secondary">
            <EmailOutlinedIcon /> segway.contacts@example.com
          </Typography>
        </Box>
        <Box my="30px" sx={{ width: { xs: "100%", md: "55%" } }}>
          <img src={Map} alt="map" />
        </Box>
      </Box>
    </Box>
  );
};

export default Contacts;
