import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveMenu } from "../features/projectSlice";
import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import { headerItems } from "../data/data";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "@mui/icons-material";
import Sidebar from "./Sidebar";
import ContactsList from "./ContactsList";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

const Header = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { windowWidth, activeMenu } = useSelector((state) => state.project);

  const handleSideMenu = () => {
    dispatch(setActiveMenu(!activeMenu));
  };

  return (
    <Box
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgcolor="secondary.main"
      height="90px"
    >
      {windowWidth < 1050 ? (
        <Box flexGrow={1} py="10px">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            flexDirection="row"
          >
            <IconButton
              sx={{ color: "text.secondary", ml: "20px" }}
              component="button"
              onClick={() => handleSideMenu()}
            >
              <Menu />
            </IconButton>
            <ContactsList />
          </Box>
          <Box component="nav" position="relative">
            {activeMenu ? <Sidebar /> : null}
          </Box>
        </Box>
      ) : (
        <>
          <Box
            width="100%"
            bgcolor="secondary.main"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <List direction="row" spacing={2}>
              <ListItem>
                {location.pathname !== "/" && (
                  <>
                    <Link to="Segway">
                      <IconButton
                        sx={{
                          color: "text.secondary",
                          mr: "5px",
                        }}
                      >
                        <HomeOutlinedIcon />
                      </IconButton>
                    </Link>
                  </>
                )}
                {headerItems.map((item) => (
                  <ListItemButton key={item.id}>
                    <Link to={item.link}>
                      <Typography
                        sx={{
                          textTransform: "uppercase",
                          fontSize: "14px",
                          color: "text.secondary",
                        }}
                      >
                        {item.title}
                      </Typography>
                    </Link>
                  </ListItemButton>
                ))}
              </ListItem>
            </List>
          </Box>
          <ContactsList />
        </>
      )}
    </Box>
  );
};

export default Header;
