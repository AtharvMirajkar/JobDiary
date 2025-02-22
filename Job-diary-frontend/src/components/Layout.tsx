import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow bg-gray-100 p-6 ml-64">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
