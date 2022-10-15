import React from "react";
import { Badge, Box, IconButton, Link, Typography } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useSelector } from "react-redux";

const ContactsList = () => {
  const location = useLocation();
  const cart = useSelector((state) => state.project.cart);
  const totalQuantity = cart.reduce((sum, item) => sum + item.count, 0);

  return (
    <Box
      display="flex"
      justifyContent="center"
      flexShrink={0}
      flexDirection="row"
      alignItems="center"
      mx="20px"
      color="text.secondary"
    >
      {location.pathname !== "/shop-cart" && (
        <>
          <NavLink to="/shop-cart">
            <IconButton
              sx={{
                color: "text.secondary",
                mr: "5px",
              }}
            >
              <Badge badgeContent={totalQuantity} color="primary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </NavLink>
        </>
      )}
      <Link href="https://instagram.com/segwayninebotau?igshid=YmMyMTA2M2Y=">
        <IconButton
          sx={{
            color: "text.secondary",
            mr: "5px",
          }}
        >
          <InstagramIcon />
        </IconButton>
      </Link>
      <Typography sx={{ fontSize: "14px" }}>+1 (888) 888-88-88</Typography>
    </Box>
  );
};

export default ContactsList;
