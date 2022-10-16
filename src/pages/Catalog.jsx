import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Grid,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import { scooters } from "../data/data";
import EscalatorWarningOutlinedIcon from "@mui/icons-material/EscalatorWarningOutlined";
import BalanceOutlinedIcon from "@mui/icons-material/BalanceOutlined";
import SpeedOutlinedIcon from "@mui/icons-material/SpeedOutlined";
import SignalCellular0BarOutlinedIcon from "@mui/icons-material/SignalCellular0BarOutlined";
import RouteOutlinedIcon from "@mui/icons-material/RouteOutlined";
import BatteryChargingFullOutlinedIcon from "@mui/icons-material/BatteryChargingFullOutlined";
import ElectricScooterOutlinedIcon from "@mui/icons-material/ElectricScooterOutlined";
const scootersPerPage = 4;

const Catalog = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastScooter = currentPage * scootersPerPage;
  const indexOfFirstScooter = indexOfLastScooter - scootersPerPage;
  const currentScooter = scooters.slice(
    indexOfFirstScooter,
    indexOfLastScooter
  );

  const paginate = (e, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box width="90%" mx="auto" py="30px" sx={{ flex: "1 0 auto" }}>
      <Grid container spacing={2}>
        {currentScooter.map((item) => (
          <Grid item key={item.id} xs={12} md={6}>
            <Box display="flex" alignItems="center" flexDirection="row">
              <Box width="50%" p="20px">
                <img
                  className="max-h-[250px] mx-auto"
                  src={item.imageURL}
                  alt="img"
                />
              </Box>
              <Box width="50%" display="flex" flexDirection="column">
                <Box>
                  <Typography variant="h4" color="text.primary">
                    {item.name}
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  color="text.secondary"
                  mt="15px"
                >
                  <Typography fontSize="18px">
                    <EscalatorWarningOutlinedIcon /> Age, years:
                  </Typography>
                  <Box
                    width="20px"
                    flex="0.9"
                    mb="8px"
                    borderBottom="1px dashed #999999"
                  ></Box>
                  <Typography fontSize="18px">14-60</Typography>
                </Box>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  color="text.secondary"
                >
                  <Typography fontSize="18px">
                    <BalanceOutlinedIcon /> Max weight, kg:{" "}
                  </Typography>
                  <Box
                    width="20px"
                    flex="0.9"
                    mb="8px"
                    borderBottom="1px dashed #999999"
                  ></Box>
                  <Typography fontSize="18px">{item.loadCapacity}</Typography>
                </Box>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  color="text.secondary"
                >
                  <Typography fontSize="18px">
                    <SpeedOutlinedIcon /> Max speed, mph:{" "}
                  </Typography>
                  <Box
                    width="20px"
                    flex="0.9"
                    mb="8px"
                    borderBottom="1px dashed #999999"
                  ></Box>
                  <Typography fontSize="18px">{item.speed}</Typography>
                </Box>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  color="text.secondary"
                >
                  <Typography fontSize="18px">
                    <SignalCellular0BarOutlinedIcon /> Max corner, dec:{" "}
                  </Typography>
                  <Box
                    width="20px"
                    flex="0.9"
                    mb="8px"
                    borderBottom="1px dashed #999999"
                  ></Box>
                  <Typography fontSize="18px">{item.maxCorner}</Typography>
                </Box>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  color="text.secondary"
                >
                  <Typography fontSize="18px">
                    <RouteOutlinedIcon /> Range, m:
                  </Typography>
                  <Box
                    width="20px"
                    flex="0.9"
                    mb="8px"
                    borderBottom="1px dashed #999999"
                  ></Box>
                  <Typography fontSize="18px">{item.range}</Typography>
                </Box>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  color="text.secondary"
                >
                  <Typography fontSize="18px">
                    <BatteryChargingFullOutlinedIcon /> Battery , mAh:{" "}
                  </Typography>
                  <Box
                    width="20px"
                    flex="0.9"
                    mb="8px"
                    borderBottom="1px dashed #999999"
                  ></Box>
                  <Typography fontSize="18px">{item.battery}</Typography>
                </Box>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  color="text.secondary"
                >
                  <Typography fontSize="18px">
                    <ElectricScooterOutlinedIcon /> Power, W:
                  </Typography>
                  <Box
                    width="20px"
                    flex="0.9"
                    mb="8px"
                    borderBottom="1px dashed #999999"
                  ></Box>
                  <Typography fontSize="18px">{item.watt}</Typography>
                </Box>
                <Button
                  variant="outlined"
                  size="small"
                  sx={{
                    margin: "10px auto",
                    color: "text.secondary",
                    borderColor: "text.secondary",
                    ":hover": {
                      bgcolor: "primary.main",
                      borderColor: "primary.main",
                      color: "text.white",
                    },
                  }}
                >
                  <Link to={`/catalog/${item.id}`}>learn more</Link>
                </Button>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Stack alignItems="center" mt="30px">
        <Pagination
          defaultPage={1}
          count={Math.ceil(scooters.length / scootersPerPage)}
          variant="outlined"
          page={currentPage}
          onChange={paginate}
          size="large"
        />
      </Stack>
    </Box>
  );
};

export default Catalog;
