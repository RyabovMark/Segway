import React from "react";
import { Box, Typography } from "@mui/material";

const BlueLine = () => {
  return (
    <Box bgcolor="primary.main" width="100%" mb="11px">
      <Typography
        py="5px"
        textAlign="center"
        color="text.white"
        textTransform="uppercase"
        sx={{ fontSize: { xs: "12px", lg: "18px" } }}
      >
        Free 1 day shipping within California.
      </Typography>
    </Box>
  );
};

export default BlueLine;
