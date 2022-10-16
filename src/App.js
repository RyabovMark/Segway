import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveMenu, setWindowWidth } from "./features/projectSlice";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Layout from "./components/Layout";
import KickScooterDetails from "./pages/KickScooterDetails";
import Cart from "./pages/Cart";
import Accessories from "./pages/Accessories";
import Contacts from "./pages/Contacts";
import Catalog from "./pages/Catalog";
import About from "./pages/About";

function App() {
  const dispatch = useDispatch();
  const { windowWidth } = useSelector((state) => state.project);

  useEffect(() => {
    const handleResize = () => {
      dispatch(setWindowWidth(window.innerWidth));
    };
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [dispatch]);

  useEffect(() => {
    if (windowWidth >= 1030) dispatch(setActiveMenu(false));
  }, [dispatch, windowWidth]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="Segway" element={<Main />} />
          <Route path="shop-cart" element={<Cart />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="catalog/:id" element={<KickScooterDetails />} />
          <Route path="accessories" element={<Accessories />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
