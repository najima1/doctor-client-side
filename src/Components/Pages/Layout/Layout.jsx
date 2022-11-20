import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = () => {
  return (
    <div>
      {/* header */}
      <Header />
      <Outlet />
      {/* footer */}
      <Footer />
    </div>
  );
};

export default Layout;
