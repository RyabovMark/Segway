import React from "react";
import { Box, Card, CardActionArea, Grid, Typography } from "@mui/material";
import { sliderScooters } from "../data/data";
import { Link } from "react-router-dom";
const brandName = "Ninebot KickScooter ";

const ScootersGrid = () => {
  const nameWithoutBrand = (str, subStr) => {
    const position = str.toLowerCase().indexOf(subStr.toLowerCase());
    return str.includes(subStr)
      ? str.substring(position + subStr.length, str.length)
      : str;
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Grid container sx={{ margin: "0px" }}>
        {sliderScooters.map((item) => (
          <Grid item xs={3} md={2} lg={1} key={item.id}>
            <Card sx={{ borderRadius: "0px", bgcolor: "secondary.main" }}>
              <CardActionArea
                sx={{
                  display: "flex",
                  p: "8px",
                  flexDirection: "column",
                  bgcolor: "secondary.main",
                  transition: "1s",
                  color: "text.secondary",
                  ":hover": { bgcolor: "primary.main", color: "text.white" },
                }}
              >
                <Link to={`/catalog/${item.id}`}>
                  <img className="h-24" src={item.imageURL} alt={item.name} />
                  <Typography
                    fontSize="12px"
                    textAlign="center"
                    textTransform="capitalize"
                  >
                    {nameWithoutBrand(item.name, brandName)}
                  </Typography>
                </Link>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ScootersGrid;
