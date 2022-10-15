import React from "react";
import { useDispatch } from "react-redux";
import {
  Box,
  Card,
  CardContent,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import PlaylistRemoveIcon from "@mui/icons-material/PlaylistRemove";
import {
  setMinusItem,
  setPlusItem,
  setRemoveItem,
} from "../features/projectSlice";

const ShopCartCart = ({ props }) => {
  const dispatch = useDispatch();

  const handlerRemove = (id) => {
    dispatch(setMinusItem(id));
  };

  const handlerAdd = (id) => {
    dispatch(setPlusItem(id));
  };

  const handlerRemoveItem = (id) => {
    dispatch(setRemoveItem(id));
  };

  return (
    <>
      <Card
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          my: "10px",
          p: "10px",
        }}
      >
        <Box display="flex" alignItems="center">
          <Box width="100px" display="flex" justifyContent="center">
            <img src={props.imageURL} alt={props.name} />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", ml: "20px" }}>
            <CardContent>
              <Typography
                sx={{ fontSize: { md: "17px", lg: "19px" } }}
                color="text.primary"
                lineHeight="2"
                fontWeight={700}
              >
                {props.name}
              </Typography>
              <Typography
                sx={{ fontSize: { md: "15px", lg: "18px" } }}
                color="text.primary"
              >
                {`${
                  props.warrantyPeriod
                    ? `Warranty period: ${props.warrantyPeriod} ${
                        props.warrantyPeriod === 1 ? "Year" : "Years"
                      }`
                    : ""
                }`}
              </Typography>
              <Typography
                sx={{ fontSize: { md: "15px", lg: "18px" } }}
                color="text.primary"
              >
                {`${
                  props.warrantyCost
                    ? `Warranty cost: $${props.warrantyCost}`
                    : ""
                }`}
              </Typography>
              <Typography
                sx={{ fontSize: { md: "15px", lg: "18px" } }}
                color="text.primary"
              >{`Price: ${props.cost}`}</Typography>
              {!props.accessories && (
                <>
                  <Divider />
                  <Typography
                    sx={{ fontSize: { md: "15px", lg: "18px" } }}
                    color="text.primary"
                  >{`Total price: $${
                    props.warrantyCost
                      ? (props.cost + props.warrantyCost) * props.count
                      : props.cost * props.count
                  }`}</Typography>
                </>
              )}
            </CardContent>
          </Box>
        </Box>
        <Box display="flex" flexDirection="row" alignItems="center">
          <IconButton size="large" onClick={() => handlerRemove(props.id)}>
            <RemoveIcon />
          </IconButton>
          <Typography
            sx={{ fontSize: { md: "17px", lg: "19px" } }}
            color="text.primary"
          >
            {props.count}
          </Typography>
          <IconButton size="large" onClick={() => handlerAdd(props.id)}>
            <AddIcon />
          </IconButton>
        </Box>
        <IconButton
          sx={{ mr: "30px" }}
          size="large"
          onClick={() => handlerRemoveItem(props.id)}
        >
          <PlaylistRemoveIcon />
        </IconButton>
      </Card>
    </>
  );
};

export default ShopCartCart;
