import React from "react";
import { Box, Typography } from "@mui/material";

const Compare = () => {
  return (
    <Box width="90%" mx="auto">
      <Typography
        fontSize="50px"
        fontWeight={700}
        textTransform="uppercase"
        textAlign="center"
        color="text.primary"
      >
        compare specifications
      </Typography>
      <Typography fontSize="24px" textAlign="center" color="text.primary">
        Add model to compare
      </Typography>
      <Box my="30px"></Box>
    </Box>
  );
};

export default Compare;
