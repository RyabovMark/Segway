import React from "react";
import {
  Box,
  ClickAwayListener,
  Divider,
  List,
  ListItem,
  ListItemButton,
  Paper,
} from "@mui/material";
import { headerItems } from "../data/data";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { setActiveMenu } from "../features/projectSlice";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  textAlign: "center",
  textTransform: "uppercase",
  color: theme.palette.text.secondary,
  boxShadow: "none",
}));

const Sidebar = () => {
  const dispatch = useDispatch();

  const handlerClick = () => {
    dispatch(setActiveMenu(false));
  };

  return (
    <ClickAwayListener onClickAway={handlerClick}>
      <Box
        position="absolute"
        bgcolor="secondary.main"
        zIndex={999}
        top="0px"
        left="0px"
        sx={{ textAlign: "center" }}
      >
        <List>
          <ListItem>
            <ListItemButton
              onClick={() => handlerClick()}
              sx={{ textAlign: "center", fontSize: "22px" }}
            >
              <Link to="/">
                <Item>SegWay</Item>
              </Link>
            </ListItemButton>
          </ListItem>
          <Divider />
          {headerItems.map((item) => (
            <ListItem key={item.id}>
              <ListItemButton
                onClick={() => handlerClick()}
                sx={{ textAlign: "center", mr: "30px" }}
              >
                <Link to={item.link}>
                  <Item>{item.title}</Item>
                </Link>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </ClickAwayListener>
  );
};

export default Sidebar;
