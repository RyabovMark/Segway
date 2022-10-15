import React from "react";
import { Container } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Container
      sx={{
        maxWidth: "1600px",
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <Header />
      <Outlet />
      <Footer />
    </Container>
  );
};

export default Layout;
