import React from "react";
import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import { scooters } from "../data/data";
import { Link } from "react-router-dom";

const OtherScooters = ({ displayedElementId }) => {
  const otherScootersArray = [];
  const brandName = "Ninebot KickScooter ";

  const nameWithoutBrand = (str, subStr) => {
    const position = str.toLowerCase().indexOf(subStr.toLowerCase());
    return str.includes(subStr)
      ? str.substring(position + subStr.length, str.length)
      : str;
  };

  const newArray = () => {
    const otherScootersSet = new Set();

    while (true) {
      let randomNumber = Math.floor(Math.random() * scooters.length);
      let randomElement = scooters[randomNumber];

      if (displayedElementId != randomNumber)
        otherScootersSet.add(randomElement);

      if (otherScootersSet.size === 6) break;
    }

    otherScootersSet.forEach((item) => {
      otherScootersArray.push(item);
    });
  };

  newArray();

  const handlerScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box>
      <Divider />
      <Typography
        textAlign="center"
        color="text.primary"
        fontWeight={600}
        textTransform="uppercase"
        fontSize="27px"
      >
        Other models
      </Typography>
      <Typography
        textAlign="center"
        color="text.primary"
        textTransform="capitalize"
        fontSize="18px"
      >
        Check out the entire line of Segway scooters
      </Typography>
      <Box sx={{ width: "100%" }}>
        <Grid container sx={{ margin: "0px" }}>
          {otherScootersArray.map((item) => (
            <Grid item key={item.id} xs={4}>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                bgcolor=""
                py="20px"
              >
                <Box borderColor="secondary.grey" borderRadius="50%">
                  <img className="h-24" src={item.imageURL} alt={item.name} />
                </Box>
                <Typography
                  fontSize="16px"
                  lineHeight={2}
                  color="text.primary"
                  textTransform="uppercase"
                  fontWeight={600}
                >
                  {nameWithoutBrand(item.name, brandName)}
                </Typography>
                <Typography
                  fontSize="13px"
                  fontWeight={600}
                  color="text.primary"
                >
                  ${item.cost}
                </Typography>
                <Link to={`/catalog/${item.id}`}>
                  <Button
                    onClick={() => handlerScrollToTop()}
                    variant="outlined"
                    size="small"
                    sx={{
                      color: "text.secondary",
                      borderColor: "text.secondary",
                      ":hover": {
                        bgcolor: "primary.main",
                        borderColor: "primary.main",
                        color: "text.white",
                      },
                    }}
                  >
                    See More
                  </Button>
                </Link>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default OtherScooters;
