import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import "../../styles/global.scss";

const Layout: React.FC = () => {
  return (
    <>
      <main className="container">
      <Header />
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
